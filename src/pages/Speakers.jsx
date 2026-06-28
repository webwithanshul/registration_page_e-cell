import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ArrowRight } from "lucide-react";
import gsap from 'gsap';

export default function Speakers() {
  const speakers = useSelector((state) => state.events.speakers);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gsap-speakers-reveal', {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out'
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-brand-dark px-6 py-20">
      <div className="max-w-7xl mx-auto text-left">
        <span className="gsap-speakers-reveal px-3.5 py-1.5 bg-brand-pink/10 border border-brand-pink/25 text-brand-pink text-xs font-semibold rounded-full uppercase tracking-wider">Leaders</span>
        
        <h1 className="gsap-speakers-reveal text-4xl font-heading font-extrabold text-white mt-4 mb-4">Speakers Conclave</h1>
        <p className="gsap-speakers-reveal text-gray-400 text-sm max-w-xl mb-12">Learn directly from unicorns founders, tech team heads, and early-stage angel venture capitalists.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {speakers.map((sp) => (
            <div key={sp.id} className="gsap-speakers-reveal">
              <div className="h-full p-6 bg-brand-surface border border-white/5 hover:border-brand-indigo/35 rounded-2xl text-center hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="w-32 h-32 rounded-full mx-auto relative p-1 bg-gradient-to-r from-brand-indigo to-brand-cyan mb-5 overflow-hidden">
                    <img src={sp.img} alt={sp.name} className="w-full h-full object-cover rounded-full bg-brand-surface" />
                  </div>
                  <h3 className="text-base font-heading font-extrabold text-white mb-0.5">{sp.name}</h3>
                  <div className="text-[10px] text-brand-cyan font-bold uppercase tracking-wider mb-0.5">{sp.role}</div>
                  <div className="text-[10px] text-gray-500 mb-4">{sp.company}</div>
                  <p className="text-[11px] text-gray-400 leading-relaxed mb-6 line-clamp-2">{sp.bio}</p>
                </div>

                <div className="flex flex-col gap-3 pt-4 border-t border-white/5">
                  <div className="flex justify-center gap-3 text-gray-500">
                    <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn"><i className="ri-linkedin-box-fill text-base"></i></a>
                    <a href="#" className="hover:text-white transition-colors" aria-label="Twitter"><i className="ri-twitter-x-fill text-base"></i></a>
                  </div>
                  <Link 
                    to={`/speakers/${sp.id}`} 
                    className="w-full py-2 bg-white/5 border border-white/10 hover:border-brand-cyan hover:text-brand-cyan text-[10px] font-bold text-white rounded-lg transition-colors flex items-center justify-center gap-1"
                  >
                    View Biography <ArrowRight size={10} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
