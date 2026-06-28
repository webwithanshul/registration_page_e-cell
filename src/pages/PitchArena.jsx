import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Rocket, ShieldCheck, Landmark, Trophy, ArrowLeft } from 'lucide-react';
import gsap from 'gsap';

export default function PitchArena() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gsap-pitch-reveal', {
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
        <Link to="/events" className="gsap-pitch-reveal inline-flex items-center gap-1 text-xs text-brand-cyan font-bold hover:underline mb-8">
          <ArrowLeft size={14} /> Back to Events
        </Link>

        <span className="gsap-pitch-reveal px-3.5 py-1.5 bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan text-xs font-semibold rounded-full uppercase tracking-wider">Premium Track</span>
        
        <h1 className="gsap-pitch-reveal text-4xl sm:text-5xl font-heading font-extrabold text-white mt-4 mb-4 flex items-center gap-3">
          <Rocket className="text-brand-cyan animate-pulse" size={36} /> Pitch Arena 2026
        </h1>
        
        <p className="gsap-pitch-reveal text-gray-300 text-sm leading-relaxed mb-8">
          The Pitch Arena is the flagship competition of E-Summit 2026. Designed for early-stage startup founders, this competition provides direct exposure to global angel networks, venture capitalists, and incubation experts. Ten selected finalist teams will present live during the E-Summit Conclave.
        </p>

        {/* Breakdown Blocks */}
        <div className="gsap-pitch-reveal grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-brand-surface border border-white/5 rounded-xl">
            <Trophy className="text-brand-pink mb-3" size={24} />
            <h4 className="text-white font-bold text-sm mb-1">Prizes</h4>
            <p className="text-[11px] text-gray-500">Up to $10,000 seed investment equity and incubation incubation slots.</p>
          </div>
          <div className="p-6 bg-brand-surface border border-white/5 rounded-xl">
            <Landmark className="text-brand-cyan mb-3" size={24} />
            <h4 className="text-white font-bold text-sm mb-1">VC Panel</h4>
            <p className="text-[11px] text-gray-500">Judged by representatives from Blue Horizon Ventures, Tech Catalyst, and Titan VC.</p>
          </div>
          <div className="p-6 bg-brand-surface border border-white/5 rounded-xl">
            <ShieldCheck className="text-brand-indigo mb-3" size={24} />
            <h4 className="text-white font-bold text-sm mb-1">Eligibility</h4>
            <p className="text-[11px] text-gray-500">Open to bootstrapped or pre-seed startup teams with a working prototype.</p>
          </div>
        </div>

        {/* Timetable schedule */}
        <div className="gsap-pitch-reveal bg-brand-surface border border-white/5 rounded-xl p-8 mb-12">
          <h3 className="text-lg font-heading font-extrabold text-white mb-6">Track Timeline</h3>
          <ul className="space-y-4 text-xs text-gray-400">
            <li className="flex justify-between pb-3 border-b border-white/5">
              <span>Proposal Submissions Deadline</span>
              <span className="text-white font-semibold">June 20, 2026</span>
            </li>
            <li className="flex justify-between pb-3 border-b border-white/5">
              <span>Finalist Cohort Announcements</span>
              <span className="text-white font-semibold">June 24, 2026</span>
            </li>
            <li className="flex justify-between">
              <span>Live Finalist Pitch Arena Conclave</span>
              <span className="text-brand-cyan font-bold">June 27, 2026</span>
            </li>
          </ul>
        </div>

        <div className="gsap-pitch-reveal">
          <Link to="/register" className="px-6 py-3 bg-gradient-to-r from-brand-indigo to-brand-cyan text-white text-sm font-bold rounded-lg hover:shadow-lg hover:shadow-brand-indigo/35 transition-all duration-300">
            Register Track Form
          </Link>
        </div>

      </div>
    </div>
  );
}
