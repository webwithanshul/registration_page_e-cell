import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Linkedin, Twitter, ArrowLeft, Bookmark } from 'lucide-react';
import gsap from 'gsap';

export default function SpeakerDetail() {
  const { id } = useParams();
  const speakers = useSelector((state) => state.events.speakers);
  const speaker = speakers.find(s => s.id === id);

  useEffect(() => {
    if (speaker) {
      const ctx = gsap.context(() => {
        gsap.from('.gsap-speaker-detail-reveal', {
          opacity: 0,
          y: 20,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power2.out'
        });
      });
      return () => ctx.revert();
    }
  }, [speaker]);

  if (!speaker) {
    return (
      <div className="pt-24 min-h-screen bg-brand-dark flex flex-col justify-center items-center text-center p-6">
        <h2 className="text-2xl text-white font-bold mb-4 font-heading">Speaker Not Found</h2>
        <Link to="/speakers" className="text-xs text-brand-cyan hover:underline">Back to Speakers</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-brand-dark px-6 py-20">
      <div className="max-w-4xl mx-auto text-left">
        
        {/* Back Link */}
        <Link to="/speakers" className="gsap-speaker-detail-reveal inline-flex items-center gap-1 text-xs text-brand-cyan font-bold hover:underline mb-8">
          <ArrowLeft size={14} /> Back to Speakers List
        </Link>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          
          {/* Left Block */}
          <div className="gsap-speaker-detail-reveal w-full md:w-1/3 flex flex-col items-center">
            <div className="w-48 h-48 rounded-full p-1 bg-gradient-to-r from-brand-indigo to-brand-cyan mb-6 overflow-hidden">
              <img src={speaker.img} alt={speaker.name} className="w-full h-full object-cover rounded-full bg-brand-surface" />
            </div>
            <h2 className="text-xl font-heading font-extrabold text-white text-center mb-1">{speaker.name}</h2>
            <p className="text-xs text-brand-cyan uppercase tracking-wider font-semibold mb-1 text-center">{speaker.role}</p>
            <p className="text-xs text-gray-500 mb-6 text-center">{speaker.company}</p>
            
            <div className="flex gap-4 text-gray-500 border-t border-white/5 pt-4 w-full justify-center">
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={18} /></a>
            </div>
          </div>

          {/* Right Block */}
          <div className="gsap-speaker-detail-reveal flex-1 w-full bg-brand-surface border border-white/5 rounded-2xl p-8">
            <h3 className="text-lg font-heading font-extrabold text-white mb-4 border-b border-white/5 pb-2">Biography</h3>
            <p className="text-xs text-gray-300 leading-relaxed mb-8">{speaker.bio}</p>

            <h3 className="text-lg font-heading font-extrabold text-white mb-4 border-b border-white/5 pb-2">Summit Session</h3>
            <div className="p-4 bg-brand-dark/40 border border-brand-indigo/20 rounded-xl flex items-start gap-4">
              <Bookmark className="text-brand-indigo shrink-0" size={20} />
              <div>
                <h4 className="text-xs font-bold text-white mb-1">Keynote Title</h4>
                <p className="text-xs text-gray-400 font-semibold italic mb-3">"{speaker.talk}"</p>
                <div className="inline-block text-[9px] uppercase tracking-wider font-bold text-brand-cyan bg-brand-cyan/15 px-2.5 py-1 rounded">
                  Track Conclave Session
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
