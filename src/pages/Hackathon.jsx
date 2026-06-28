import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Code2, Cpu, HelpCircle, Gift, ArrowLeft } from 'lucide-react';
import gsap from 'gsap';

export default function Hackathon() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gsap-hack-reveal', {
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
        <Link to="/events" className="gsap-hack-reveal inline-flex items-center gap-1 text-xs text-brand-indigo font-bold hover:underline mb-8">
          <ArrowLeft size={14} /> Back to Events
        </Link>

        <span className="gsap-hack-reveal px-3.5 py-1.5 bg-brand-indigo/10 border border-brand-indigo/25 text-brand-indigo text-xs font-semibold rounded-full uppercase tracking-wider">Dev Track</span>
        
        <h1 className="gsap-hack-reveal text-4xl sm:text-5xl font-heading font-extrabold text-white mt-4 mb-4 flex items-center gap-3">
          <Code2 className="text-brand-indigo animate-pulse" size={36} /> E-Summit Hackathon
        </h1>
        
        <p className="gsap-hack-reveal text-gray-300 text-sm leading-relaxed mb-8">
          The E-Summit Hackathon is an intensive 24-hour product engineering sprint. Developers, UI/UX designers, and business strategists collaborate under one roof to build functional software solutions solving critical ecosystem issues. Teams will have access to APIs, cloud platforms, and engineering mentors.
        </p>

        {/* Breakdown Blocks */}
        <div className="gsap-hack-reveal grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-brand-surface border border-white/5 rounded-xl">
            <Gift className="text-brand-pink mb-3" size={24} />
            <h4 className="text-white font-bold text-sm mb-1">Rewards</h4>
            <p className="text-[11px] text-gray-500">$5,000 cash pool, software subscriptions, API credit allowances.</p>
          </div>
          <div className="p-6 bg-brand-surface border border-white/5 rounded-xl">
            <Cpu className="text-brand-cyan mb-3" size={24} />
            <h4 className="text-white font-bold text-sm mb-1">Categories</h4>
            <p className="text-[11px] text-gray-500">Tracks in Artificial Intelligence, Decentralized Finance, and Climate Tech.</p>
          </div>
          <div className="p-6 bg-brand-surface border border-white/5 rounded-xl">
            <HelpCircle className="text-brand-indigo mb-3" size={24} />
            <h4 className="text-white font-bold text-sm mb-1">Team Size</h4>
            <p className="text-[11px] text-gray-500">Form teams of 2 to 4 members. Individuals can request team mapping.</p>
          </div>
        </div>

        {/* Timetable schedule */}
        <div className="gsap-hack-reveal bg-brand-surface border border-white/5 rounded-xl p-8 mb-12">
          <h3 className="text-lg font-heading font-extrabold text-white mb-6">Hackathon Schedule</h3>
          <ul className="space-y-4 text-xs text-gray-400">
            <li className="flex justify-between pb-3 border-b border-white/5">
              <span>Problem Statement Releases</span>
              <span className="text-white font-semibold">June 26, 2026 at 09:00 AM</span>
            </li>
            <li className="flex justify-between pb-3 border-b border-white/5">
              <span>Hacking Code Begins (24h clock)</span>
              <span className="text-white font-semibold">June 26, 2026 at 10:00 AM</span>
            </li>
            <li className="flex justify-between">
              <span>Final Presentations & Judging</span>
              <span className="text-brand-indigo font-bold">June 27, 2026 at 11:00 AM</span>
            </li>
          </ul>
        </div>

        <div className="gsap-hack-reveal">
          <Link to="/register" className="px-6 py-3 bg-gradient-to-r from-brand-indigo to-brand-cyan text-white text-sm font-bold rounded-lg hover:shadow-lg hover:shadow-brand-indigo/35 transition-all duration-300">
            Register Track Form
          </Link>
        </div>

      </div>
    </div>
  );
}
