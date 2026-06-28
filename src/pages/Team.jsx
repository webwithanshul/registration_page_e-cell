import React, { useEffect } from 'react';

import gsap from 'gsap';

export default function Team() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gsap-team-reveal', {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out'
      });
    });
    return () => ctx.revert();
  }, []);

  const team = [
    { name: 'Aarav Mehta', role: 'Overall Coordinator', division: 'Core Committee', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80' },
    { name: 'Neha Sharma', role: 'Head of Operations', division: 'Logistics Team', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80' },
    { name: 'Rohit Verma', role: 'Head of Sponsorship', division: 'Finance Team', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80' },
    { name: 'Kavya Nair', role: 'Head of Marketing', division: 'Public Relations', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80' }
  ];

  return (
    <div className="pt-24 min-h-screen bg-brand-dark px-6 py-20">
      <div className="max-w-7xl mx-auto text-left">
        <span className="gsap-team-reveal px-3.5 py-1.5 bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan text-xs font-semibold rounded-full uppercase tracking-wider">Committee</span>
        
        <h1 className="gsap-team-reveal text-4xl font-heading font-extrabold text-white mt-4 mb-4">Meet E-Cell Organizing Team</h1>
        <p className="gsap-team-reveal text-gray-400 text-sm max-w-xl mb-12">The student organizing body behind the logistics, design, and sponsorship execution of E-Summit 2026.</p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((tm, idx) => (
            <div key={idx} className="gsap-team-reveal">
              <div className="h-full p-6 bg-brand-surface border border-white/5 hover:border-brand-indigo/25 rounded-2xl text-center hover:-translate-y-1 transition-all duration-300">
                <div className="w-28 h-28 rounded-full mx-auto relative p-1 bg-gradient-to-r from-brand-indigo to-brand-cyan mb-5 overflow-hidden">
                  <img src={tm.img} alt={tm.name} className="w-full h-full object-cover rounded-full bg-brand-surface" />
                </div>
                <h3 className="text-sm font-heading font-extrabold text-white mb-0.5">{tm.name}</h3>
                <div className="text-[10px] text-brand-cyan font-bold uppercase tracking-wider mb-0.5">{tm.role}</div>
                <div className="text-[9px] text-gray-500 mb-6">{tm.division}</div>

                <div className="flex justify-center gap-3 pt-4 border-t border-white/5 text-gray-500">
                  <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn"><i className="ri-linkedin-box-fill text-base"></i></a>
                  <a href="#" className="hover:text-white transition-colors" aria-label="Twitter"><i className="ri-twitter-x-fill text-base"></i></a>
                  <a href="#" className="hover:text-white transition-colors" aria-label="Mail"><i className="ri-mail-fill text-base"></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
