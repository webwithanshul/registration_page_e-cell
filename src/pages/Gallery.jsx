import React, { useEffect } from 'react';
import gsap from 'gsap';

export default function Gallery() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gsap-gallery-reveal', {
        opacity: 0,
        scale: 0.9,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out'
      });
    });
    return () => ctx.revert();
  }, []);

  const photos = [
    { url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=500&q=80', caption: 'Keynote Panel Conclave - E-Summit 2025' },
    { url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=500&q=80', caption: 'Incubator Mentoring Roundtables - E-Summit 2025' },
    { url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=500&q=80', caption: 'Developer Sprint DevHack Sandbox - E-Summit 2025' },
    { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=80', caption: 'Finalist Pitch Arena Awards - E-Summit 2025' },
    { url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=500&q=80', caption: 'Auditorium Closing Ceremonies - E-Summit 2025' },
    { url: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=500&q=80', caption: 'E-Cell Incubator Launch - E-Summit 2025' }
  ];

  return (
    <div className="pt-24 min-h-screen bg-brand-dark px-6 py-20">
      <div className="max-w-7xl mx-auto text-left">
        <span className="gsap-gallery-reveal px-3.5 py-1.5 bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan text-xs font-semibold rounded-full uppercase tracking-wider">Showcase</span>
        
        <h1 className="gsap-gallery-reveal text-4xl font-heading font-extrabold text-white mt-4 mb-4">Past Editions</h1>
        <p className="gsap-gallery-reveal text-gray-400 text-sm max-w-xl mb-12">Take a visual stroll through the milestones and memorable moments of past E-Summits.</p>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((ph, idx) => (
            <div key={idx} className="gsap-gallery-reveal">
              <div className="h-full bg-brand-surface border border-white/5 hover:border-brand-cyan/20 rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-full h-48 overflow-hidden relative">
                  <img src={ph.url} alt={ph.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 text-left">
                  <p className="text-[11px] text-gray-300 font-semibold leading-relaxed">{ph.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
