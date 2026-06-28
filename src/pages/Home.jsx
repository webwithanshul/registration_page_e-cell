import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Rocket, MessagesSquare } from 'lucide-react';
import gsap from 'gsap';
import lnctLogoWhite from '../assets/lnct_logo_white.png';
import ecellLogo from '../assets/ecell_logo.png';

export default function Home() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // GSAP Page Load Reveal
      gsap.from('.gsap-hero-elem', {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out'
      });
      gsap.from('.gsap-stat-card', {
        opacity: 0,
        scale: 0.85,
        stagger: 0.1,
        duration: 0.8,
        delay: 0.4,
        ease: 'back.out(1.7)'
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-brand-dark overflow-hidden">
      
      {/* Hero section */}
      <section className="relative px-6 py-20 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 max-w-2xl text-left">
          
          {/* Presented By Logos */}
          <div className="gsap-hero-elem flex items-center gap-4 mb-8">
            <img src={lnctLogoWhite} className="h-8 w-auto opacity-90" alt="LNCT Group of Colleges" />
            <span className="h-6 w-[1px] bg-white/15"></span>
            <img src={ecellLogo} className="h-8 w-auto opacity-90" alt="JNCT E-Cell" />
          </div>

          <div className="gsap-hero-elem inline-flex items-center gap-2 px-4 py-1.5 bg-white/3 border border-white/5 rounded-full text-xs font-semibold text-gray-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-cyan shadow-lg shadow-brand-cyan animate-pulse"></span>
            E-Summit 2026: The Paradigm Shift
          </div>
          
          <h1 className="gsap-hero-elem text-4xl sm:text-6xl font-heading font-extrabold text-white leading-tight mb-6">
            Empowering the Next Generation of <span className="bg-gradient-to-r from-brand-indigo via-brand-cyan to-brand-pink bg-clip-text text-transparent">Pioneers</span>
          </h1>
          
          <p className="gsap-hero-elem text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
            Connect with 5,000+ innovators, pitch to top-tier venture capitalists, and construct the future. E-Summit 2026 is the ultimate launching pad for high-growth tech ventures.
          </p>

          <div className="gsap-hero-elem flex flex-wrap gap-4 mb-12">
            <Link to="/register" className="px-6 py-3 bg-gradient-to-r from-brand-indigo to-brand-cyan text-white text-sm font-bold rounded-lg shadow-lg shadow-brand-indigo/35 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2">
              Register Now <ArrowRight size={16} />
            </Link>
            <Link to="/about" className="px-6 py-3 bg-white/5 border border-white/10 hover:border-brand-cyan hover:shadow-md hover:shadow-brand-cyan/15 text-white text-sm font-bold rounded-lg hover:-translate-y-0.5 transition-all duration-300">
              Learn More
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
            <div className="gsap-stat-card">
              <h3 className="text-3xl font-heading font-extrabold text-white">5K+</h3>
              <p className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mt-1">Attendees</p>
            </div>
            <div className="gsap-stat-card">
              <h3 className="text-3xl font-heading font-extrabold text-white">$15K</h3>
              <p className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mt-1">Prize Pool</p>
            </div>
            <div className="gsap-stat-card">
              <h3 className="text-3xl font-heading font-extrabold text-white">40+</h3>
              <p className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mt-1">VC Firms</p>
            </div>
          </div>

        </div>

        {/* Visual sphere */}
        <div className="flex-1 relative flex justify-center items-center h-[400px]">
          <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-brand-indigo to-brand-cyan blur-3xl opacity-20 animate-pulse-glow" />
          <div className="absolute w-80 h-80 rounded-full border border-white/5 animate-spin duration-[30s]" style={{ animationTimingFunction: 'linear' }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-brand-cyan shadow-lg shadow-brand-cyan" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-brand-indigo shadow-lg shadow-brand-indigo" />
          </div>
          
          <div className="gsap-hero-elem w-64 h-64 rounded-full border border-dashed border-white/15 animate-spin duration-[20s]" style={{ animationTimingFunction: 'linear', animationDirection: 'reverse' }}>
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-brand-pink shadow-lg shadow-brand-pink" />
          </div>

          <div className="absolute p-4 w-52 bg-brand-surface/70 border border-white/10 rounded-xl backdrop-blur-md shadow-2xl -translate-x-20 -translate-y-16 animate-floating">
            <div className="flex items-center gap-2 text-white font-bold text-xs mb-1">
              <Rocket className="text-brand-cyan animate-pulse" size={14} />
              <span>Pitch Arena</span>
            </div>
            <p className="text-[10px] text-gray-400">Watch top 10 startups pitch live to leading VC partners.</p>
          </div>

          <div className="absolute p-4 w-52 bg-brand-surface/70 border border-white/10 rounded-xl backdrop-blur-md shadow-2xl translate-x-20 translate-y-16 animate-floating" style={{ animationDelay: '-3s' }}>
            <div className="flex items-center gap-2 text-white font-bold text-xs mb-1">
              <Code2 className="text-brand-pink animate-pulse" size={14} />
              <span>DevHack 24h</span>
            </div>
            <p className="text-[10px] text-gray-400">A fast-paced developer sprint to solve ecosystem problems.</p>
          </div>
        </div>
      </section>

      {/* Grid Track Highlight */}
      <section className="px-6 py-24 bg-brand-surface/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <span className="px-3.5 py-1.5 bg-brand-indigo/10 border border-brand-indigo/25 text-brand-indigo text-xs font-semibold rounded-full uppercase tracking-wider">Tracks</span>
          <h2 className="text-3xl font-heading font-extrabold text-white mt-4 mb-12">Core Conclave Highlights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-brand-surface border border-white/5 hover:border-brand-indigo/30 rounded-2xl text-left hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-brand-cyan/10 border border-brand-cyan/25 flex items-center justify-center text-brand-cyan rounded-xl mb-6"><Rocket size={20} /></div>
              <h3 className="text-lg font-heading font-extrabold text-white mb-3">Pitch Arena</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">The ultimate launching stage for student startup groups to showcase business designs to VC panels.</p>
              <Link to="/events/pitch-arena" className="text-xs text-brand-cyan font-bold inline-flex items-center gap-1 group-hover:text-white transition-colors">
                Explore Pitching <ArrowRight size={12} />
              </Link>
            </div>
            <div className="p-8 bg-brand-surface border border-white/5 hover:border-brand-indigo/30 rounded-2xl text-left hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-brand-indigo/10 border border-brand-indigo/25 flex items-center justify-center text-brand-indigo rounded-xl mb-6"><Code2 size={20} /></div>
              <h3 className="text-lg font-heading font-extrabold text-white mb-3">Hackathon</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">A fast-paced product engineering marathon to build technology models solving real-world demands.</p>
              <Link to="/events/hackathon" className="text-xs text-brand-indigo font-bold inline-flex items-center gap-1 group-hover:text-white transition-colors">
                Explore Sprint <ArrowRight size={12} />
              </Link>
            </div>
            <div className="p-8 bg-brand-surface border border-white/5 hover:border-brand-indigo/30 rounded-2xl text-left hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-brand-pink/10 border border-brand-pink/25 flex items-center justify-center text-brand-pink rounded-xl mb-6"><MessagesSquare size={20} /></div>
              <h3 className="text-lg font-heading font-extrabold text-white mb-3">Keynotes Conclave</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">Insightful conversations with unicorn founders, VC heads, and product innovators outlining scaling cycles.</p>
              <Link to="/events/panel-discussions" className="text-xs text-brand-pink font-bold inline-flex items-center gap-1 group-hover:text-white transition-colors">
                Explore Panels <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
