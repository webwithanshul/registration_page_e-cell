import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, Code2, MessagesSquare, Award } from 'lucide-react';
import gsap from 'gsap';

export default function Events() {
  const tracks = useSelector((state) => state.events.tracks);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gsap-events-reveal', {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out'
      });
    });
    return () => ctx.revert();
  }, []);

  const getIcon = (iconName, colorClass) => {
    switch (iconName) {
      case 'Rocket':
        return <Rocket className={colorClass} size={24} />;
      case 'Code2':
        return <Code2 className={colorClass} size={24} />;
      case 'MessagesSquare':
        return <MessagesSquare className={colorClass} size={24} />;
      default:
        return <Award className={colorClass} size={24} />;
    }
  };

  const colors = [
    'text-brand-cyan bg-brand-cyan/10 border-brand-cyan/25',
    'text-brand-indigo bg-brand-indigo/10 border-brand-indigo/25',
    'text-brand-pink bg-brand-pink/10 border-brand-pink/25',
    'text-yellow-400 bg-yellow-400/10 border-yellow-400/25'
  ];

  return (
    <div className="pt-24 min-h-screen bg-brand-dark px-6 py-20">
      <div className="max-w-7xl mx-auto text-left">
        <span className="gsap-events-reveal px-3.5 py-1.5 bg-brand-indigo/10 border border-brand-indigo/25 text-brand-indigo text-xs font-semibold rounded-full uppercase tracking-wider">Summit Hub</span>
        
        <h1 className="gsap-events-reveal text-4xl font-heading font-extrabold text-white mt-4 mb-4">Competitions & Tracks</h1>
        <p className="gsap-events-reveal text-gray-400 text-sm max-w-2xl mb-12">Participate in specialized hackathons, pitch startups to VC executives, and earn rewards.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tracks.map((track, index) => {
            const iconBgColor = colors[index % colors.length];
            return (
              <div key={track.id} className="gsap-events-reveal">
                <div className="h-full p-8 bg-brand-surface border border-white/5 hover:border-brand-indigo/35 rounded-2xl flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 group">
                  <div>
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-6 ${iconBgColor}`}>
                      {getIcon(track.icon, iconBgColor.split(' ')[0])}
                    </div>
                    <h3 className="text-xl font-heading font-extrabold text-white mb-2">{track.title}</h3>
                    <span className="inline-block text-[10px] uppercase font-bold text-gray-500 mb-4">{track.date}</span>
                    <p className="text-xs text-gray-400 leading-relaxed mb-6">{track.desc}</p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-white/5">
                    <div>
                      <span className="block text-[9px] uppercase font-semibold text-gray-500">Prize Track</span>
                      <span className="text-xs font-bold text-white">{track.prize}</span>
                    </div>
                    <Link 
                      to={`/events/${track.id}`} 
                      className="px-4 py-2 bg-white/5 border border-white/10 text-white hover:border-brand-cyan hover:text-brand-cyan text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      View Details <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
