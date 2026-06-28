import React from 'react';
import { Link } from 'react-router-dom';
import ecellLogoSymbol from '../assets/ecell_logo_symbol.png';
import lnctLogoWhite from '../assets/lnct_logo_white.png';

export default function Footer() {
  return (
    <footer className="w-full bg-[#05080e] border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Summary */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img src={ecellLogoSymbol} className="h-9 w-auto" alt="JNCT E-Cell" />
            <img src={lnctLogoWhite} className="h-7 w-auto border-l border-white/25 pl-3" alt="LNCT Group" />
          </div>
          <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
            E-Summit is the flagship entrepreneurship conclave organized by the Entrepreneurship Cell of JNCT to nurture student innovation and connect founders with VC funds.
          </p>
          <div className="flex gap-3 mt-2">
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-indigo hover:text-white transition-all duration-300" aria-label="LinkedIn"><i className="ri-linkedin-box-fill text-base"></i></a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-indigo hover:text-white transition-all duration-300" aria-label="Twitter"><i className="ri-twitter-x-fill text-base"></i></a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-indigo hover:text-white transition-all duration-300" aria-label="Instagram"><i className="ri-instagram-line text-base"></i></a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-indigo hover:text-white transition-all duration-300" aria-label="YouTube"><i className="ri-youtube-fill text-base"></i></a>
          </div>
        </div>

        {/* Links Column 1 */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4 font-heading uppercase tracking-wider">Tracks & Events</h4>
          <ul className="flex flex-col gap-2.5 text-xs text-gray-400">
            <li><Link to="/events/pitch-arena" className="hover:text-white transition-colors">Pitch Arena</Link></li>
            <li><Link to="/events/hackathon" className="hover:text-white transition-colors">Developer Hackathon</Link></li>
            <li><Link to="/events/panel-discussions" className="hover:text-white transition-colors">Keynote Discussions</Link></li>
            <li><Link to="/events/workshops" className="hover:text-white transition-colors">Interactive Workshops</Link></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4 font-heading uppercase tracking-wider">Initiatives</h4>
          <ul className="flex flex-col gap-2.5 text-xs text-gray-400">
            <li><Link to="/initiatives/startup-expo" className="hover:text-white transition-colors">Startup Expo</Link></li>
            <li><Link to="/initiatives/intern-fair" className="hover:text-white transition-colors">Startup Intern Fair</Link></li>
            <li><Link to="/partners" className="hover:text-white transition-colors">Incubators & Sponsors</Link></li>
            <li><Link to="/gallery" className="hover:text-white transition-colors">E-Summit Gallery</Link></li>
          </ul>
        </div>

        {/* Links Column 3 */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4 font-heading uppercase tracking-wider">Support Desk</h4>
          <ul className="flex flex-col gap-2.5 text-xs text-gray-400">
            <li><Link to="/faq" className="hover:text-white transition-colors">FAQ & Details</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Helpline</Link></li>
            <li><Link to="/team" className="hover:text-white transition-colors">Meet the Team</Link></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4 text-center">
        <p>&copy; 2026 Entrepreneurship Cell. All rights reserved.</p>
        <p>E-Summit 2026 &bull; Fueling Future Ventures</p>
      </div>
    </footer>
  );
}
