import React, { useState, useEffect } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import gsap from 'gsap';

export default function Faq() {
  const [openIdx, setOpenIdx] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gsap-faq-reveal', {
        opacity: 0,
        y: 15,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out'
      });
    });
    return () => ctx.revert();
  }, []);

  const faqs = [
    { q: 'Who can register for E-Summit 2026?', a: 'E-Summit is open to student developers, startup founders, early employees, researchers, VCs, and working professionals interested in campus ecosystems.' },
    { q: 'Is there a registration fee for the competitions?', a: 'Most core tracks (Pitch Arena, Developer Hackathon) are free of charge, sponsored by E-Cell partners, but require registration form approval.' },
    { q: 'Can I register for multiple tracks at once?', a: 'Yes! You can register for general passes or apply for specific tracks. However, hackathon hacking hours run concurrently with specific panel sessions.' },
    { q: 'How does the offline check-in process work?', a: 'Upon successful form completion, you will generate a digital Summit Ticket Pass containing a unique ticket ID. Present this pass at the venue check-in desk.' },
    { q: 'Will I get certificates for workshops?', a: 'Yes. All interactive masterclass sessions provide official E-Summit 2026 certification upon concluding session audits.' }
  ];

  return (
    <div className="pt-24 min-h-screen bg-brand-dark px-6 py-20">
      <div className="max-w-3xl mx-auto text-left">
        <span className="gsap-faq-reveal px-3.5 py-1.5 bg-brand-indigo/10 border border-brand-indigo/25 text-brand-indigo text-xs font-semibold rounded-full uppercase tracking-wider">Help Desk</span>
        
        <h1 className="gsap-faq-reveal text-4xl font-heading font-extrabold text-white mt-4 mb-4">Frequently Asked Questions</h1>
        <p className="gsap-faq-reveal text-gray-400 text-sm mb-12">Find answers to common questions concerning tickets, accommodation, tracks, and timetables.</p>

        {/* Collapsible FAQ Panels */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="gsap-faq-reveal">
                <div className="bg-brand-surface border border-white/5 hover:border-brand-indigo/35 rounded-xl overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex justify-between items-center text-sm font-bold text-white hover:text-brand-cyan transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="text-brand-indigo shrink-0" size={18} />
                      {faq.q}
                    </span>
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-xs text-gray-400 leading-relaxed pl-11">
                      {faq.a}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
