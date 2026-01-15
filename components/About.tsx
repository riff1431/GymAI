
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-burnt-orange/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1544033527-b192daee1f5b?auto=format&fit=crop&q=80&w=1000" 
                alt="Gym session" 
                className="w-full h-[600px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
              <div className="absolute bottom-10 left-10 p-8 bg-burnt-orange text-white max-w-sm">
                <p className="text-lg font-bold italic mb-4 leading-snug">
                  "STRENGTH DOES NOT COME FROM PHYSICAL CAPACITY. IT COMES FROM AN INDOMITABLE WILL."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-white/50"></div>
                  <span className="text-sm font-bold tracking-widest">MAHATMA GANDHI</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-burnt-orange/20 -z-10"></div>
          </div>

          <div>
            <span className="text-burnt-orange text-sm font-black tracking-[0.4em] uppercase mb-6 block">ABOUT OUR CENTER</span>
            <h2 className="text-4xl md:text-5xl font-athletic font-bold mb-8 leading-tight">
              WE BELIEVE HEALTH IS MORE THAN JUST STRENGTH
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Our mission is to create a motivating and inclusive space where everyone, from beginners to elite athletes, can achieve their goals. Equipped with modern training facilities, expert coaches, and a supportive community.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="p-6 bg-white/5 border border-white/10 hover:border-burnt-orange transition-colors">
                <div className="text-5xl font-athletic font-bold text-burnt-orange mb-2">18+</div>
                <p className="text-xs text-gray-500 tracking-[0.2em] uppercase">Years of legacy</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 hover:border-burnt-orange transition-colors">
                <div className="text-5xl font-athletic font-bold text-burnt-orange mb-2">500+</div>
                <p className="text-xs text-gray-500 tracking-[0.2em] uppercase">Expert Sessions</p>
              </div>
            </div>

            <button className="bg-transparent border-2 border-burnt-orange hover:bg-burnt-orange text-white px-8 py-4 font-bold tracking-widest transition-all">
              LEARN MORE ABOUT US
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
