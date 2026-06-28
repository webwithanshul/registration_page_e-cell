import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Award, Compass, Heart, Layers, ArrowLeft } from 'lucide-react';
import gsap from 'gsap';

export default function Workshops() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gsap-workshops-reveal', {
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
        <Link to="/events" className="gsap-workshops-reveal inline-flex items-center gap-1 text-xs text-yellow-400 font-bold hover:underline mb-8">
          <ArrowLeft size={14} /> Back to Events
        </Link>

        <span className="gsap-workshops-reveal px-3.5 py-1.5 bg-yellow-400/10 border border-yellow-400/25 text-yellow-400 text-xs font-semibold rounded-full uppercase tracking-wider">Skill Track</span>
        
        <h1 className="gsap-workshops-reveal text-4xl sm:text-5xl font-heading font-extrabold text-white mt-4 mb-4 flex items-center gap-3">
          <Layers className="text-yellow-400 animate-pulse" size={36} /> Practical Masterclasses
        </h1>
        
        <p className="gsap-workshops-reveal text-gray-300 text-sm leading-relaxed mb-8">
          Our Interactive Workshops provide hands-on training sessions with leading domain experts. Focused on hard skills, participants will work through case studies, sandbox setups, and architectural strategies.
        </p>

        {/* Breakdown Blocks */}
        <div className="gsap-workshops-reveal grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-brand-surface border border-white/5 rounded-xl">
            <Award className="text-brand-pink mb-3" size={24} />
            <h4 className="text-white font-bold text-sm mb-1">Certificates</h4>
            <p className="text-[11px] text-gray-500">Official conclave participation certificates awarded to all attendees.</p>
          </div>
          <div className="p-6 bg-brand-surface border border-white/5 rounded-xl">
            <Compass className="text-brand-cyan mb-3" size={24} />
            <h4 className="text-white font-bold text-sm mb-1">Skill Tracks</h4>
            <p className="text-[11px] text-gray-500">Growth marketing, finance projections, pitching templates, and tech stack setups.</p>
          </div>
          <div className="p-6 bg-brand-surface border border-white/5 rounded-xl">
            <Heart className="text-brand-indigo mb-3" size={24} />
            <h4 className="text-white font-bold text-sm mb-1">Resource Kits</h4>
            <p className="text-[11px] text-gray-500">Includes slide decks, spreadsheets, and developer API credits.</p>
          </div>
        </div>

        {/* Topics List */}
        <div className="gsap-workshops-reveal bg-brand-surface border border-white/5 rounded-xl p-8 mb-12">
          <h3 className="text-lg font-heading font-extrabold text-white mb-6">Masterclass Schedules</h3>
          <ul className="space-y-4 text-xs text-gray-400">
            <li className="flex flex-col sm:flex-row justify-between pb-3 border-b border-white/5 gap-1">
              <span className="text-white font-semibold">Growth Hacking: Acquiring Your First 10,000 Users</span>
              <span className="text-yellow-400">Day 3 &bull; 10:00 AM</span>
            </li>
            <li className="flex flex-col sm:flex-row justify-between pb-3 border-b border-white/5 gap-1">
              <span className="text-white font-semibold">Financial Modeling & Cap Table Management for Founders</span>
              <span className="text-yellow-400">Day 3 &bull; 01:30 PM</span>
            </li>
            <li className="flex flex-col sm:flex-row justify-between gap-1">
              <span className="text-white font-semibold">Building & Scaling SaaS Architectures on AWS Sandbox</span>
              <span className="text-yellow-400">Day 3 &bull; 04:00 PM</span>
            </li>
          </ul>
        </div>

        <div className="gsap-workshops-reveal">
          <Link to="/register" className="px-6 py-3 bg-gradient-to-r from-brand-indigo to-brand-cyan text-white text-sm font-bold rounded-lg hover:shadow-lg hover:shadow-brand-indigo/35 transition-all duration-300">
            Book Masterclass Seat
          </Link>
        </div>

      </div>
    </div>
  );
}
