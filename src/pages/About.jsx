import React, { useEffect } from 'react';
import gsap from 'gsap';
import { Calendar, Shield, Users } from 'lucide-react';

export default function About() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gsap-about-reveal', {
        opacity: 0,
        y: 25,
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
        <span className="gsap-about-reveal px-3.5 py-1.5 bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan text-xs font-semibold rounded-full uppercase tracking-wider">About Us</span>
        
        <h1 className="gsap-about-reveal text-4xl sm:text-5xl font-heading font-extrabold text-white mt-4 mb-8">
          Fostering Innovation and <span className="bg-gradient-to-r from-brand-indigo to-brand-cyan bg-clip-text text-transparent">Entrepreneurship</span>
        </h1>
        
        <p className="gsap-about-reveal text-gray-300 text-sm leading-relaxed mb-6">
          E-Summit is the flagship entrepreneurship conclave organized by the Entrepreneurship Cell. We cultivate an interactive platform where ambitious student founders, leading tech leaders, incubation coaches, and early-stage VC networks intersect to seed the next generation of high-growth ventures.
        </p>

        <p className="gsap-about-reveal text-gray-400 text-sm leading-relaxed mb-12">
          Over the past decade, E-Summit has catalyzed dozens of campus startups, provided over $500,000 in early funding paths, and created mentor channels connecting student developers with silicon valley pioneers. E-Summit 2026 continues this legacy, introducing intensive deep-tech tracks, hackathons, and VC incubation pitch boards.
        </p>

        {/* Milestone blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/5">
          <div className="gsap-about-reveal p-6 bg-brand-surface border border-white/5 rounded-xl">
            <Users className="text-brand-indigo mb-4" size={24} />
            <h4 className="text-white font-bold text-sm mb-1">Ecosystem Builders</h4>
            <p className="text-[11px] text-gray-500">Connect with an active network of founders, software developers, and mentors.</p>
          </div>
          <div className="gsap-about-reveal p-6 bg-brand-surface border border-white/5 rounded-xl">
            <Shield className="text-brand-cyan mb-4" size={24} />
            <h4 className="text-white font-bold text-sm mb-1">Incubation Channels</h4>
            <p className="text-[11px] text-gray-500">Pitch events yield direct entry slots to incubator accelerators and angel funds.</p>
          </div>
          <div className="gsap-about-reveal p-6 bg-brand-surface border border-white/5 rounded-xl">
            <Calendar className="text-brand-pink mb-4" size={24} />
            <h4 className="text-white font-bold text-sm mb-1">Timetable Conclaves</h4>
            <p className="text-[11px] text-gray-500">Mentorship sessions, workshops, and panels spread over three intensive days.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
