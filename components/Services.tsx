
import React from 'react';
import { SERVICES } from '../constants.tsx';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-burnt-orange/5 -skew-x-12 transform origin-top pointer-events-none"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-burnt-orange text-sm font-black tracking-[0.4em] uppercase mb-4 block">WHAT WE OFFER</span>
            <h2 className="text-5xl md:text-7xl font-athletic font-bold leading-none">
              FITNESS <br />
              <span className="text-transparent border-text-stroke">TRAINING</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-gray-500 mb-6">
              We cater to every fitness level. Guided by certified trainers and supported by modern equipment, each session is an experience.
            </p>
            <div className="flex items-center gap-4 group cursor-pointer">
              <span className="font-bold tracking-widest text-burnt-orange group-hover:translate-x-2 transition-transform">VIEW ALL SERVICES</span>
              <i className="fa-solid fa-arrow-right text-burnt-orange"></i>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group relative flex flex-col lg:flex-row items-center gap-12 p-12 bg-neutral-900/50 border border-white/5 hover:border-burnt-orange/50 transition-all overflow-hidden"
            >
              <div className="relative z-10 w-full lg:w-1/3">
                <span className="text-burnt-orange font-athletic text-lg font-bold mb-4 block">{service.number}</span>
                <h3 className="text-3xl font-athletic font-bold mb-4 group-hover:text-burnt-orange transition-colors">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>
                <button className="text-sm font-black tracking-widest flex items-center gap-2 group-hover:translate-x-2 transition-all">
                  EXPLORE <i className="fa-solid fa-chevron-right text-[10px]"></i>
                </button>
              </div>

              <div className="relative w-full lg:w-2/3 h-64 lg:h-96 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        .border-text-stroke {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </section>
  );
};

export default Services;
