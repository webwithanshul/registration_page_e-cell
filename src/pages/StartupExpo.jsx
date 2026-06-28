import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Store, Compass, Award, Shield, ArrowLeft } from 'lucide-react';
import gsap from 'gsap';

export default function StartupExpo() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gsap-expo-reveal', {
        opacity: 0,
        y: 20,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power2.out'
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-brand-dark px-6 py-20">
      <div className="max-w-4xl mx-auto text-left">
        
        {/* Back Link */}
        <Link to="/initiatives" className="gsap-expo-reveal inline-flex items-center gap-1 text-xs text-brand-cyan font-bold hover:underline mb-8">
          <ArrowLeft size={14} /> Back to Initiatives
        </Link>

        <span className="gsap-expo-reveal px-3.5 py-1.5 bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan text-xs font-semibold rounded-full uppercase tracking-wider">Exhibitions</span>
        
        <h1 className="gsap-expo-reveal text-4xl sm:text-5xl font-heading font-extrabold text-white mt-4 mb-4 flex items-center gap-3">
          <Store className="text-brand-cyan animate-pulse" size={36} /> Startup Expo 2026
        </h1>
        
        <p className="gsap-expo-reveal text-gray-300 text-sm leading-relaxed mb-8">
          The Startup Expo is a high-visibility physical exhibition hall held concurrently with E-Summit. It gives early-stage teams a dedicated booth to exhibit products, gather user feedback, and network with incubation hubs, angel networks, and talent builders.
        </p>

        {/* Breakdown Blocks */}
        <div className="gsap-expo-reveal grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-brand-surface border border-white/5 rounded-xl">
            <Award className="text-brand-pink mb-3" size={24} />
            <h4 className="text-white font-bold text-sm mb-1">Exposure</h4>
            <p className="text-[11px] text-gray-500">Exhibit directly to over 5,000 attendees, VCs, and tech bloggers.</p>
          </div>
          <div className="p-6 bg-brand-surface border border-white/5 rounded-xl">
            <Compass className="text-brand-cyan mb-3" size={24} />
            <h4 className="text-white font-bold text-sm mb-1">Booths</h4>
            <p className="text-[11px] text-gray-500">Includes desk setup, Wi-Fi support, power rails, and branding displays.</p>
          </div>
          <div className="p-6 bg-brand-surface border border-white/5 rounded-xl">
            <Shield className="text-brand-indigo mb-3" size={24} />
            <h4 className="text-white font-bold text-sm mb-1">Mentorship</h4>
            <p className="text-[11px] text-gray-500">Includes direct entry to closed mentor roundtables with scaling partners.</p>
          </div>
        </div>

        {/* Timetable schedule */}
        <div className="gsap-expo-reveal bg-brand-surface border border-white/5 rounded-xl p-8 mb-12">
          <h3 className="text-lg font-heading font-extrabold text-white mb-6">Expo Scheduling</h3>
          <ul className="space-y-4 text-xs text-gray-400">
            <li className="flex justify-between pb-3 border-b border-white/5">
              <span>Booth Setup & Installations</span>
              <span className="text-white font-semibold">June 26, 2026 at 08:00 AM</span>
            </li>
            <li className="flex justify-between pb-3 border-b border-white/5">
              <span>Public Exhibition & VC Audits Open</span>
              <span className="text-white font-semibold">June 26 - June 27, 2026</span>
            </li>
            <li className="flex justify-between">
              <span>Pitch Arena Semifinals & Demos</span>
              <span className="text-brand-cyan font-bold">June 27, 2026 at 03:00 PM</span>
            </li>
          </ul>
        </div>

        <div className="gsap-expo-reveal">
          <Link to="/register" className="px-6 py-3 bg-gradient-to-r from-brand-indigo to-brand-cyan text-white text-sm font-bold rounded-lg hover:shadow-lg hover:shadow-brand-indigo/35 transition-all duration-300">
            Apply for Expo Booth
          </Link>
        </div>

      </div>
    </div>
  );
}
