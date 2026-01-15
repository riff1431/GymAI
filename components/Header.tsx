
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants.tsx';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-burnt-orange flex items-center justify-center rotate-45">
            <i className="fa-solid fa-bolt -rotate-45 text-white text-xl"></i>
          </div>
          <span className="font-athletic text-2xl font-bold tracking-tighter">OBTAIN<span className="text-burnt-orange">FIT</span></span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-sm font-semibold hover:text-burnt-orange transition-colors uppercase tracking-widest"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-bold border-2 border-white/20 hover:border-burnt-orange px-6 py-2 rounded-none transition-all">
            LOGIN
          </button>
          <button className="bg-burnt-orange hover:bg-orange-600 text-white px-6 py-2 text-sm font-bold transition-all shadow-[0_0_20px_rgba(255,68,0,0.3)]">
            JOIN US TODAY
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
