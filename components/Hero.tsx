
import React, { useState, useRef } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality } from '@google/genai';

interface BookingDetails {
  firstName: string;
  goal: string;
  experience: string;
  visitDay: string;
  timeOfDay: string;
}

const Hero: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [statusText, setStatusText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [bookingData, setBookingData] = useState<BookingDetails | null>(null);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const inputContextRef = useRef<AudioContext | null>(null);
  const nextStartTimeRef = useRef<number>(0);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());

  // Support multiple env variable names as requested
  const API_KEY = process.env.API_KEY || process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY || process.env.VITE_GOOGLE_API_KEY || process.env.VITE_GEMINI_API_KEY;

  const decode = (base64: string) => {
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  };

  const decodeAudioData = async (data: Uint8Array, ctx: AudioContext, sampleRate: number, numChannels: number): Promise<AudioBuffer> => {
    const dataInt16 = new Int16Array(data.buffer);
    const frameCount = dataInt16.length / numChannels;
    const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
    for (let channel = 0; channel < numChannels; channel++) {
      const channelData = buffer.getChannelData(channel);
      for (let i = 0; i < frameCount; i++) {
        channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
      }
    }
    return buffer;
  };

  const encode = (bytes: Uint8Array) => {
    let binary = '';
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  };

  const toggleVoiceAssistant = async () => {
    if (isListening) {
      window.location.reload(); 
      return;
    }

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setStatusText('Browser not supported');
      alert('Your browser does not support audio recording or it is blocked.');
      return;
    }

    try {
      setIsListening(true);
      setStatusText('Connecting...');
      
      const ai = new GoogleGenAI({ apiKey: API_KEY });
      
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true } 
      });
      
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      inputContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });

      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-12-2025',
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Puck' } },
          },
          tools: [
            {
              functionDeclarations: [
                {
                  name: 'showConfirmationModal',
                  description: 'Display a summary of the collected user details for their review on the screen.',
                  parameters: {
                    type: 'OBJECT' as any,
                    properties: {
                      firstName: { type: 'STRING' as any },
                      goal: { type: 'STRING' as any },
                      experience: { type: 'STRING' as any },
                      visitDay: { type: 'STRING' as any },
                      timeOfDay: { type: 'STRING' as any },
                    },
                    required: ['firstName', 'goal', 'experience', 'visitDay', 'timeOfDay'],
                  },
                },
              ],
            },
          ],
          systemInstruction: `You are IronCore Gym’s AI Voice Support Assistant. Use ONLY provided business info. Do not guess.

          BUSINESS INFO:
          - Name: IronCore Gym (A serious gym for real results).
          - Position: #1 Rated Gym 2026.
          - Address: 123 Fitness Blvd, Downtown District, City 90210.
          - Phone: (555) 123-4567.
          - Hours: Mon–Fri: 5 AM–11 PM; Sat–Sun: 7 AM–9 PM.
          - Programs: Personal Training, Group Fitness, Strength & Conditioning, Fat Loss, Beginner Foundations.
          - Pricing: Day Pass ($15), Monthly ($49), Personal Training ($240).

          LEAD COLLECTION PROCESS:
          When a visitor shows intent to join or book, ask these questions ONE AT A TIME:
          1. First name
          2. Main fitness goal
          3. Beginner or experienced
          4. Preferred visit day
          5. Morning or evening

          COMPLETION:
          Once all 5 details are collected:
          1. CALL the 'showConfirmationModal' function with all details.
          2. SAY EXACTLY: "Please review your details on the screen. If everything looks correct, click Confirm to submit your request."
          
          TONE: Friendly, Professional, Short answers, Conversion-focused.`,
        },
        callbacks: {
          onopen: () => {
            setStatusText('Assistant Ready');
            const source = inputContextRef.current!.createMediaStreamSource(stream);
            const scriptProcessor = inputContextRef.current!.createScriptProcessor(4096, 1, 1);
            
            scriptProcessor.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              const int16 = new Int16Array(inputData.length);
              for (let i = 0; i < inputData.length; i++) {
                int16[i] = inputData[i] * 32768;
              }
              const pcmBlob = {
                data: encode(new Uint8Array(int16.buffer)),
                mimeType: 'audio/pcm;rate=16000',
              };
              sessionPromise.then(session => session.sendRealtimeInput({ media: pcmBlob }));
            };
            
            source.connect(scriptProcessor);
            scriptProcessor.connect(inputContextRef.current!.destination);
          },
          onmessage: async (message: LiveServerMessage) => {
            if (message.toolCall) {
              for (const fc of message.toolCall.functionCalls) {
                if (fc.name === 'showConfirmationModal') {
                  setBookingData(fc.args as any);
                  setShowModal(true);
                  sessionPromise.then(session => 
                    session.sendToolResponse({
                      functionResponses: { id: fc.id, name: fc.name, response: { result: "Confirmation screen displayed." } }
                    })
                  );
                }
              }
            }

            const audioData = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
            if (audioData) {
              const ctx = audioContextRef.current!;
              nextStartTimeRef.current = Math.max(nextStartTimeRef.current, ctx.currentTime);
              const buffer = await decodeAudioData(decode(audioData), ctx, 24000, 1);
              const source = ctx.createBufferSource();
              source.buffer = buffer;
              source.connect(ctx.destination);
              source.start(nextStartTimeRef.current);
              nextStartTimeRef.current += buffer.duration;
              sourcesRef.current.add(source);
              source.onended = () => sourcesRef.current.delete(source);
            }
          },
          onclose: () => setIsListening(false),
          onerror: () => setIsListening(false),
        }
      });

    } catch (err: any) {
      console.error(err);
      setIsListening(false);
      setStatusText('Error');
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2adfcd?auto=format&fit=crop&q=80&w=2000" alt="IronCore" className="w-full h-full object-cover grayscale brightness-50" />
        <div className="absolute inset-0 bg-black/40 overlay-dark"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block px-4 py-1 bg-burnt-orange text-white text-xs font-black tracking-[0.3em] uppercase mb-8 animate-fade-in min-w-[200px]">
          {isListening ? statusText : '#1 RATED GYM 2026'}
        </div>
        
        <h1 className="font-athletic text-5xl md:text-8xl lg:text-9xl font-black leading-none mb-8 tracking-tighter uppercase">
          IRONCORE<br /><span className="text-burnt-orange orange-glow">FITNESS</span><br />ELITE
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg text-gray-400 font-light mb-12 uppercase tracking-[0.2em]">
          Serious results require serious commitment. Your elite journey starts here.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={toggleVoiceAssistant}
            className={`group relative px-10 py-5 font-bold tracking-widest transition-all duration-300 ${isListening ? 'bg-white text-burnt-orange animate-pulse shadow-[0_0_40px_white/40]' : 'bg-burnt-orange text-white shadow-[0_0_30px_rgba(255,68,0,0.6)]'}`}
          >
            <span className="relative z-10 flex items-center gap-3">
              <i className={`fa-solid ${isListening ? 'fa-stop-circle' : 'fa-microphone'}`}></i>
              {isListening ? 'STOP ASSISTANT' : 'AI VOICE SUPPORT'}
            </span>
          </button>
          
          <button className="group flex items-center gap-4 text-white font-bold tracking-widest hover:text-burnt-orange transition-colors uppercase">
            <div className="w-12 h-12 border-2 border-white/20 rounded-full flex items-center justify-center group-hover:bg-burnt-orange transition-all">
              <i className="fa-solid fa-play"></i>
            </div>
            View Programs
          </button>
        </div>
      </div>

      {showModal && bookingData && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/95 backdrop-blur-md">
          <div className="bg-neutral-900 border-2 border-burnt-orange p-10 max-w-md w-full shadow-[0_0_60px_rgba(255,68,0,0.4)]">
            <h2 className="font-athletic text-2xl font-bold mb-8 text-white text-center tracking-tighter">REVIEW BOOKING</h2>
            <div className="space-y-4 mb-10">
              {[
                { label: 'Name', value: bookingData.firstName },
                { label: 'Goal', value: bookingData.goal },
                { label: 'Level', value: bookingData.experience },
                { label: 'Day', value: bookingData.visitDay },
                { label: 'Time', value: bookingData.timeOfDay },
              ].map((item, i) => (
                <div key={i} className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-500 text-xs font-black uppercase tracking-widest">{item.label}</span>
                  <span className="text-white font-bold uppercase">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              <button 
                onClick={() => { setShowModal(false); alert("Request Submitted Successfully!"); }}
                className="w-full bg-burnt-orange text-white py-4 font-black tracking-widest hover:bg-orange-600 transition-all uppercase"
              >
                Confirm
              </button>
              <div className="grid grid-cols-2 gap-3">
                <button onClick={() => setShowModal(false)} className="bg-white/5 text-white py-3 font-bold text-xs tracking-widest hover:bg-white/10 transition-all uppercase">Edit</button>
                <button onClick={() => { setShowModal(false); setBookingData(null); }} className="bg-red-900/20 text-red-500 py-3 font-bold text-xs tracking-widest hover:bg-red-900/40 transition-all uppercase">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
