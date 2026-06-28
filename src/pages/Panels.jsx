import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessagesSquare, Flame, Lightbulb, Users, ArrowLeft } from 'lucide-react';
import gsap from 'gsap';

export default function Panels() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gsap-panels-reveal', {
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
        <Link to="/events" className="gsap-panels-reveal inline-flex items-center gap-1 text-xs text-brand-pink font-bold hover:underline mb-8">
          <ArrowLeft size={14} /> Back to Events
        </Link>

        <span className="gsap-panels-reveal px-3.5 py-1.5 bg-brand-pink/10 border border-brand-pink/25 text-brand-pink text-xs font-semibold rounded-full uppercase tracking-wider">Speaker Track</span>
        
        <h1 className="gsap-panels-reveal text-4xl sm:text-5xl font-heading font-extrabold text-white mt-4 mb-4 flex items-center gap-3">
          <MessagesSquare className="text-brand-pink animate-pulse" size={36} /> Panel Discussions
        </h1>
        
        <p className="gsap-panels-reveal text-gray-300 text-sm leading-relaxed mb-8">
          E-Summit Keynotes bring together top founders, angel networks, and finance policy leaders. Over several panels, speakers share raw details about business validation, funding cycles, scaling hurdles, and macro trends shaping the global startup space.
        </p>

        {/* Breakdown Blocks */}
        <div className="gsap-panels-reveal grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-brand-surface border border-white/5 rounded-xl">
            <Flame className="text-brand-pink mb-3" size={24} />
            <h4 className="text-white font-bold text-sm mb-1">Key Debates</h4>
            <p className="text-[11px] text-gray-500">VC models vs. Bootstrapping, AI scaling frameworks, and market cycles.</p>
          </div>
          <div className="p-6 bg-brand-surface border border-white/5 rounded-xl">
            <Lightbulb className="text-brand-cyan mb-3" size={24} />
            <h4 className="text-white font-bold text-sm mb-1">Q&A Audits</h4>
            <p className="text-[11px] text-gray-500">Live audience feedback segments to present questions to panels directly.</p>
          </div>
          <div className="p-6 bg-brand-surface border border-white/5 rounded-xl">
            <Users className="text-brand-indigo mb-3" size={24} />
            <h4 className="text-white font-bold text-sm mb-1">Networking</h4>
            <p className="text-[11px] text-gray-500">Meet-and-greet sessions following concluding panel summaries.</p>
          </div>
        </div>

        {/* Topics List */}
        <div className="gsap-panels-reveal bg-brand-surface border border-white/5 rounded-xl p-8 mb-12">
          <h3 className="text-lg font-heading font-extrabold text-white mb-6">Keynote Agendas</h3>
          <ul className="space-y-4 text-xs text-gray-400">
            <li className="flex flex-col sm:flex-row justify-between pb-3 border-b border-white/5 gap-1">
              <span className="text-white font-semibold">Scaling AI: From Prototype to Enterprise Grade</span>
              <span className="text-brand-cyan">Day 1 &bull; 02:00 PM</span>
            </li>
            <li className="flex flex-col sm:flex-row justify-between pb-3 border-b border-white/5 gap-1">
              <span className="text-white font-semibold">VC Funding Landscapes inside 2026: Trends & Valuations</span>
              <span className="text-brand-cyan">Day 2 &bull; 11:30 AM</span>
            </li>
            <li className="flex flex-col sm:flex-row justify-between gap-1">
              <span className="text-white font-semibold">Succeeding Globally: Bootstrapping in Remote Markets</span>
              <span className="text-brand-cyan">Day 2 &bull; 04:00 PM</span>
            </li>
          </ul>
        </div>

        <div className="gsap-panels-reveal">
          <Link to="/register" className="px-6 py-3 bg-gradient-to-r from-brand-indigo to-brand-cyan text-white text-sm font-bold rounded-lg hover:shadow-lg hover:shadow-brand-indigo/35 transition-all duration-300">
            Claim Summit Pass
          </Link>
        </div>

      </div>
    </div>
  );
}
