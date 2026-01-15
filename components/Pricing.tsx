
import React from 'react';
import { PRICING } from '../constants.tsx';

const Pricing: React.FC = () => {
  return (
    <section id="classes" className="py-24 bg-black relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-burnt-orange text-sm font-black tracking-[0.4em] uppercase mb-4 block">MEMBERSHIP PLANS</span>
          <h2 className="text-4xl md:text-6xl font-athletic font-bold leading-tight">INVEST IN YOURSELF</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING.map((plan) => (
            <div 
              key={plan.name} 
              className={`relative flex flex-col p-10 border transition-all duration-500 ${plan.isPopular ? 'bg-burnt-orange/10 border-burnt-orange scale-105 z-10' : 'bg-neutral-900 border-white/5 hover:border-burnt-orange/30'}`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-burnt-orange text-white text-[10px] font-black tracking-[0.3em] px-4 py-1 uppercase">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-athletic font-bold mb-4">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-athletic font-bold text-burnt-orange">${plan.price}</span>
                  <span className="text-gray-500 font-bold uppercase tracking-widest">/ Month</span>
                </div>
              </div>

              <ul className="flex-grow space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-400">
                    <i className="fa-solid fa-check text-burnt-orange text-xs"></i>
                    <span className="text-sm tracking-wide">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 font-black tracking-[0.2em] transition-all ${plan.isPopular ? 'bg-burnt-orange text-white hover:bg-orange-600' : 'bg-white/5 text-white border-2 border-white/20 hover:border-burnt-orange hover:text-burnt-orange'}`}>
                CHOOSE PLAN
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
