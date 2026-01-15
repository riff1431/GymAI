
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-neutral-950 pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-burnt-orange flex items-center justify-center rotate-45">
                <i className="fa-solid fa-bolt -rotate-45 text-white text-sm"></i>
              </div>
              <span className="font-athletic text-2xl font-bold tracking-tighter">OBTAIN<span className="text-burnt-orange">FIT</span></span>
            </div>
            <p className="text-gray-500 leading-relaxed mb-8">
              We are not just a gym. We are a community of dedicated individuals striving for greatness in every set, every rep, and every breath.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-burnt-orange hover:border-burnt-orange transition-all"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-burnt-orange hover:border-burnt-orange transition-all"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-burnt-orange hover:border-burnt-orange transition-all"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-burnt-orange hover:border-burnt-orange transition-all"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>

          <div>
            <h4 className="font-athletic text-lg font-bold mb-8 uppercase tracking-widest text-white">QUICK LINKS</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-burnt-orange transition-colors uppercase text-sm font-bold tracking-widest">About Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-burnt-orange transition-colors uppercase text-sm font-bold tracking-widest">Our Classes</a></li>
              <li><a href="#" className="text-gray-500 hover:text-burnt-orange transition-colors uppercase text-sm font-bold tracking-widest">Elite Trainers</a></li>
              <li><a href="#" className="text-gray-500 hover:text-burnt-orange transition-colors uppercase text-sm font-bold tracking-widest">Membership</a></li>
              <li><a href="#" className="text-gray-500 hover:text-burnt-orange transition-colors uppercase text-sm font-bold tracking-widest">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-athletic text-lg font-bold mb-8 uppercase tracking-widest text-white">SERVICES</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-burnt-orange transition-colors uppercase text-sm font-bold tracking-widest">Strength Training</a></li>
              <li><a href="#" className="text-gray-500 hover:text-burnt-orange transition-colors uppercase text-sm font-bold tracking-widest">Bodybuilding</a></li>
              <li><a href="#" className="text-gray-500 hover:text-burnt-orange transition-colors uppercase text-sm font-bold tracking-widest">HIIT & Cardio</a></li>
              <li><a href="#" className="text-gray-500 hover:text-burnt-orange transition-colors uppercase text-sm font-bold tracking-widest">Private PT</a></li>
              <li><a href="#" className="text-gray-500 hover:text-burnt-orange transition-colors uppercase text-sm font-bold tracking-widest">Yoga & Stretch</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-athletic text-lg font-bold mb-8 uppercase tracking-widest text-white">NEWSLETTER</h4>
            <p className="text-gray-500 text-sm mb-6 uppercase tracking-widest leading-loose">Get elite training tips and exclusive offers delivered to your inbox.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="YOUR EMAIL" 
                className="w-full bg-white/5 border border-white/10 px-6 py-4 text-xs font-bold tracking-widest focus:outline-none focus:border-burnt-orange transition-all"
              />
              <button className="mt-4 w-full bg-burnt-orange text-white py-4 text-xs font-black tracking-widest hover:bg-orange-600 transition-all uppercase">
                SUBSCRIBE NOW
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-[10px] font-bold tracking-[0.2em] uppercase">
            &copy; 2024 OBTAIN FITNESS. ALL LIMITS DEFIED.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] text-gray-500 hover:text-white uppercase font-bold tracking-widest">Privacy Policy</a>
            <a href="#" className="text-[10px] text-gray-500 hover:text-white uppercase font-bold tracking-widest">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
