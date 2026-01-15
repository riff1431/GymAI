
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Trainers from './components/Trainers';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden selection:bg-burnt-orange selection:text-white">
      <Header />
      <main>
        <Hero />
        
        {/* Cinematic Gap */}
        <div className="h-24 md:h-48 lg:h-64 bg-black"></div>
        
        {/* Decorative Background Element */}
        <div className="relative">
           <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-black to-transparent z-10 pointer-events-none"></div>
           <About />
        </div>

        <Services />
        
        {/* Dynamic CTA Banner */}
        <section className="relative py-20 bg-burnt-orange overflow-hidden">
          <div className="absolute inset-0 opacity-20">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-athletic text-[300px] font-black leading-none pointer-events-none select-none">OBTAIN</div>
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-athletic font-bold mb-8">ARE YOU READY TO BREAK THE LIMITS?</h2>
            <button className="bg-black text-white hover:bg-white hover:text-black px-12 py-5 font-black tracking-[0.3em] transition-all transform hover:scale-110 active:scale-95 shadow-2xl">
              JOIN THE ELITE SQUAD
            </button>
          </div>
        </section>

        <Trainers />
        <Pricing />

        {/* Testimonial Section Mockup */}
        <section className="py-24 bg-neutral-900">
           <div className="container mx-auto px-6">
              <div className="flex flex-col lg:flex-row gap-16 items-center">
                 <div className="lg:w-1/2">
                    <span className="text-burnt-orange text-sm font-black tracking-[0.4em] uppercase mb-4 block">TRANSFORMATIONS</span>
                    <h2 className="text-4xl md:text-6xl font-athletic font-bold mb-8">REAL PEOPLE. <br/> REAL RESULTS.</h2>
                    <p className="text-gray-400 text-lg mb-12 italic leading-relaxed">
                      "Joining Obtain Fitness was the best decision of my life. The culture of intense training combined with cutting-edge methodology completely reshaped my body and mind in just 6 months."
                    </p>
                    <div className="flex items-center gap-4">
                       <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" className="w-16 h-16 rounded-full object-cover border-2 border-burnt-orange" />
                       <div>
                          <div className="font-athletic font-bold tracking-tighter">SARAH MITCHELL</div>
                          <div className="text-xs text-burnt-orange font-black uppercase tracking-widest">IFBB PRO ATHLETE</div>
                       </div>
                    </div>
                 </div>
                 <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                    <img src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=400" className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all rounded-sm" />
                    <img src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=400" className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all translate-y-8 rounded-sm" />
                 </div>
              </div>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
