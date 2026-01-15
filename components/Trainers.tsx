
import React from 'react';
import { TRAINERS } from '../constants.tsx';

const Trainers: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-burnt-orange text-sm font-black tracking-[0.4em] uppercase mb-4 block">EXPERT TEAM</span>
          <h2 className="text-4xl md:text-6xl font-athletic font-bold">THE CORE OF ELITE</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRAINERS.map((trainer) => (
            <div key={trainer.name} className="group relative overflow-hidden bg-black">
              <div className="relative h-[450px]">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                
                {/* Social Overlay */}
                <div className="absolute top-4 right-4 flex flex-col gap-4 translate-x-12 group-hover:translate-x-0 transition-transform duration-500">
                  <div className="w-10 h-10 bg-burnt-orange rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-burnt-orange transition-colors">
                    <i className="fa-brands fa-facebook-f"></i>
                  </div>
                  <div className="w-10 h-10 bg-burnt-orange rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-burnt-orange transition-colors">
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                  <div className="w-10 h-10 bg-burnt-orange rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-burnt-orange transition-colors">
                    <i className="fa-brands fa-x-twitter"></i>
                  </div>
                </div>
              </div>
              
              <div className="p-6 text-center">
                <h4 className="text-xl font-athletic font-bold mb-1 tracking-tighter">{trainer.name}</h4>
                <p className="text-burnt-orange text-xs font-black tracking-widest uppercase">{trainer.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
