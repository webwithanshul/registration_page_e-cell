import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Store, UserPlus } from 'lucide-react';
import gsap from 'gsap';

export default function Initiatives() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gsap-init-reveal', {
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
      <div className="max-w-7xl mx-auto text-left">
        <span className="gsap-init-reveal px-3.5 py-1.5 bg-brand-indigo/10 border border-brand-indigo/25 text-brand-indigo text-xs font-semibold rounded-full uppercase tracking-wider">Programs</span>
        
        <h1 className="gsap-init-reveal text-4xl font-heading font-extrabold text-white mt-4 mb-4">E-Cell Initiatives</h1>
        <p className="gsap-init-reveal text-gray-400 text-sm max-w-xl mb-12">Beyond competitions, E-Summit hosts continuous channels facilitating product exhibitions and startup hirings.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1 */}
          <div className="gsap-init-reveal">
            <div className="h-full p-8 bg-brand-surface border border-white/5 hover:border-brand-indigo/35 rounded-2xl flex flex-col justify-between hover:-translate-y-0.5 transition-all duration-300 group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/25 flex items-center justify-center text-brand-cyan mb-6">
                  <Store size={20} />
                </div>
                <h3 className="text-xl font-heading font-extrabold text-white mb-2">Startup Expo</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-6">
                  A physical and digital exhibition hall mapping early-stage student startups directly with incubator mentors, angel networks, and early early users.
                </p>
              </div>
              <Link 
                to="/initiatives/startup-expo" 
                className="w-fit px-4 py-2 bg-white/5 border border-white/10 hover:border-brand-cyan hover:text-brand-cyan text-xs font-bold text-white rounded-lg transition-colors flex items-center gap-1.5"
              >
                Explore Expo <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="gsap-init-reveal">
            <div className="h-full p-8 bg-brand-surface border border-white/5 hover:border-brand-indigo/35 rounded-2xl flex flex-col justify-between hover:-translate-y-0.5 transition-all duration-300 group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-indigo/10 border border-brand-indigo/25 flex items-center justify-center text-brand-indigo mb-6">
                  <UserPlus size={20} />
                </div>
                <h3 className="text-xl font-heading font-extrabold text-white mb-2">Startup Intern Fair</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-6">
                  Connects student developers, marketing analysts, and product builders directly with high-growth startup groups for internship placements.
                </p>
              </div>
              <Link 
                to="/initiatives/intern-fair" 
                className="w-fit px-4 py-2 bg-white/5 border border-white/10 hover:border-brand-cyan hover:text-brand-cyan text-xs font-bold text-white rounded-lg transition-colors flex items-center gap-1.5"
              >
                Explore Fair <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
