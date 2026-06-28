import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, Gift, Send, Briefcase, ArrowLeft } from 'lucide-react';
import gsap from 'gsap';

export default function InternFair() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gsap-fair-reveal', {
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
        <Link to="/initiatives" className="gsap-fair-reveal inline-flex items-center gap-1 text-xs text-brand-indigo font-bold hover:underline mb-8">
          <ArrowLeft size={14} /> Back to Initiatives
        </Link>

        <span className="gsap-fair-reveal px-3.5 py-1.5 bg-brand-indigo/10 border border-brand-indigo/25 text-brand-indigo text-xs font-semibold rounded-full uppercase tracking-wider">Recruitment</span>
        
        <h1 className="gsap-fair-reveal text-4xl sm:text-5xl font-heading font-extrabold text-white mt-4 mb-4 flex items-center gap-3">
          <UserPlus className="text-brand-indigo animate-pulse" size={36} /> Startup Intern Fair
        </h1>
        
        <p className="gsap-fair-reveal text-gray-300 text-sm leading-relaxed mb-8">
          The Intern Fair is a premium recruitment drive held during E-Summit. Student programmers, marketing leaders, UI/UX designers, and business strategists sit for real-time interviews with high-growth startup groups and pre-seed companies.
        </p>

        {/* Breakdown Blocks */}
        <div className="gsap-fair-reveal grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-brand-surface border border-white/5 rounded-xl">
            <Briefcase className="text-brand-pink mb-3" size={24} />
            <h4 className="text-white font-bold text-sm mb-1">Roles</h4>
            <p className="text-[11px] text-gray-500">Internships in software development, growth marketing, sales, and UI/UX design.</p>
          </div>
          <div className="p-6 bg-brand-surface border border-white/5 rounded-xl">
            <Gift className="text-brand-cyan mb-3" size={24} />
            <h4 className="text-white font-bold text-sm mb-1">Stipend</h4>
            <p className="text-[11px] text-gray-500">All hiring startups are verified to offer competitive monthly stipends.</p>
          </div>
          <div className="p-6 bg-brand-surface border border-white/5 rounded-xl">
            <Send className="text-brand-indigo mb-3" size={24} />
            <h4 className="text-white font-bold text-sm mb-1">Resumes</h4>
            <p className="text-[11px] text-gray-500">Submit digital resumes ahead of interviews for candidate pre-screening.</p>
          </div>
        </div>

        {/* Timetable schedule */}
        <div className="gsap-fair-reveal bg-brand-surface border border-white/5 rounded-xl p-8 mb-12">
          <h3 className="text-lg font-heading font-extrabold text-white mb-6">Recruitment Timeline</h3>
          <ul className="space-y-4 text-xs text-gray-400">
            <li className="flex justify-between pb-3 border-b border-white/5">
              <span>Candidate Registrations & Resume Submissions</span>
              <span className="text-white font-semibold">June 25, 2026</span>
            </li>
            <li className="flex justify-between pb-3 border-b border-white/5">
              <span>Pre-Screening Shortlist Releases</span>
              <span className="text-white font-semibold">June 26, 2026</span>
            </li>
            <li className="flex justify-between">
              <span>Live Interviews Conclave (Day 3)</span>
              <span className="text-brand-indigo font-bold">June 27, 2026</span>
            </li>
          </ul>
        </div>

        <div className="gsap-fair-reveal">
          <Link to="/register" className="px-6 py-3 bg-gradient-to-r from-brand-indigo to-brand-cyan text-white text-sm font-bold rounded-lg hover:shadow-lg hover:shadow-brand-indigo/35 transition-all duration-300">
            Register for Intern Fair
          </Link>
        </div>

      </div>
    </div>
  );
}
