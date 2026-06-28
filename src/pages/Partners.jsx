import React, { useEffect } from 'react';
import gsap from 'gsap';
import { Shield, Sparkles, Network } from 'lucide-react';

export default function Partners() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gsap-partner-reveal', {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out'
      });
    });
    return () => ctx.revert();
  }, []);

  const partners = [
    { name: 'Blue Horizon Ventures', type: 'Venture Capital Partner', tier: 'Gold' },
    { name: 'Sandbox Cloud Systems', type: 'Technology Infrastructure', tier: 'Silver' },
    { name: 'Core AI Research Lab', type: 'Artificial Intelligence Sandbox', tier: 'Gold' },
    { name: 'Titan Seed Capital Group', type: 'Accelerator Incubator', tier: 'Gold' },
    { name: 'Incubate Campus Networks', type: 'Student Incubation Partner', tier: 'Silver' },
    { name: 'Growth Scale Media', type: 'Ecosystem Outreach Hub', tier: 'Bronze' }
  ];

  return (
    <div className="pt-24 min-h-screen bg-brand-dark px-6 py-20">
      <div className="max-w-7xl mx-auto text-left">
        <span className="gsap-partner-reveal px-3.5 py-1.5 bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan text-xs font-semibold rounded-full uppercase tracking-wider">Ecosystem</span>
        
        <h1 className="gsap-partner-reveal text-4xl font-heading font-extrabold text-white mt-4 mb-4">Sponsors & Partners</h1>
        <p className="gsap-partner-reveal text-gray-400 text-sm max-w-xl mb-12">Collaborating with global tech pioneers and incubation networks to fund the next paradigm of student software ventures.</p>

        {/* Sponsor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partners.map((pt, idx) => (
            <div 
              key={idx}
              className="gsap-partner-reveal p-6 bg-brand-surface border border-white/5 hover:border-brand-cyan/25 rounded-2xl flex flex-col justify-between hover:-translate-y-0.5 transition-all duration-300"
            >
              <div>
                <span className={`inline-block text-[9px] uppercase font-bold px-2 py-0.5 rounded mb-4 ${
                  pt.tier === 'Gold' 
                    ? 'text-yellow-400 bg-yellow-400/10 border border-yellow-400/20' 
                    : pt.tier === 'Silver' 
                      ? 'text-gray-300 bg-gray-300/10 border border-gray-300/20' 
                      : 'text-orange-400 bg-orange-400/10 border border-orange-400/20'
                }`}>
                  {pt.tier} Partner
                </span>
                
                {/* Mock Logo Graphic */}
                <div className="w-full h-24 bg-brand-dark/50 border border-white/5 rounded-xl flex items-center justify-center mb-6">
                  <div className="flex items-center gap-2 text-white font-heading font-extrabold text-sm opacity-60">
                    <Network className="text-brand-cyan shrink-0" size={16} />
                    <span>{pt.name}</span>
                  </div>
                </div>

                <h3 className="text-sm font-heading font-extrabold text-white mb-1">{pt.name}</h3>
                <p className="text-[11px] text-gray-500">{pt.type}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
