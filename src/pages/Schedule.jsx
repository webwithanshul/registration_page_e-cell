import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import gsap from 'gsap';

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(1);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gsap-sched-reveal', {
        opacity: 0,
        x: -15,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out'
      });
    });
    return () => ctx.revert();
  }, [activeDay]);

  const scheduleData = {
    1: [
      { time: '09:00 AM - 10:30 AM', title: 'Inauguration & E-Summit Opening Ceremony', loc: 'Auditorium Block A' },
      { time: '11:00 AM - 01:00 PM', title: 'Incubator Panel: Raising Pre-Seed Funding in Tech Cycles', loc: 'Auditorium Block A' },
      { time: '02:00 PM - 04:30 PM', title: 'Pitch Arena Finalist Presentations (Part I)', loc: 'Innovation Stage' },
      { time: '05:00 PM - 06:30 PM', title: 'Networking Meet & VC Incubation Roundtable', loc: 'Garden Lounge' }
    ],
    2: [
      { time: '09:00 AM - 10:00 AM', title: 'Developer Hackathon Kickoff & Statement Release', loc: 'Sandbox Lab' },
      { time: '10:30 AM - 01:00 PM', title: 'Hacking Code Sprint Cycles (24h Clock)', loc: 'Sandbox Lab' },
      { time: '02:00 PM - 04:30 PM', title: 'Pitch Arena Finalist Presentations (Part II)', loc: 'Innovation Stage' },
      { time: '05:00 PM - 07:00 PM', title: 'Panel Debate: unicorn Foundations in Emerging Ecosystems', loc: 'Auditorium Block A' }
    ],
    3: [
      { time: '09:00 AM - 11:30 AM', title: 'Hackathon Presentations & Project Showcase', loc: 'Sandbox Lab' },
      { time: '11:45 AM - 01:00 PM', title: 'Hackathon Judging & Closing Valedictory Ceremony', loc: 'Auditorium Block A' },
      { time: '02:00 PM - 04:00 PM', title: 'Masterclass: Growth Hacking & SaaS scaling', loc: 'Seminar Room 102' },
      { time: '04:30 PM - 06:00 PM', title: 'E-Summit Awards & Closing Announcements', loc: 'Auditorium Block A' }
    ]
  };

  return (
    <div className="pt-24 min-h-screen bg-brand-dark px-6 py-20">
      <div className="max-w-4xl mx-auto text-left">
        <span className="gsap-sched-reveal px-3.5 py-1.5 bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan text-xs font-semibold rounded-full uppercase tracking-wider">Timetable</span>
        
        <h1 className="gsap-sched-reveal text-4xl font-heading font-extrabold text-white mt-4 mb-4">Event Calendar</h1>
        <p className="gsap-sched-reveal text-gray-400 text-sm mb-12">Plan your presence across the three intensive days of E-Summit 2026 conclaves.</p>

        {/* Day selection tabs */}
        <div className="gsap-sched-reveal flex gap-4 mb-10 border-b border-white/5 pb-6">
          {[1, 2, 3].map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-5 py-2.5 rounded-lg font-heading font-bold text-xs transition-all ${
                activeDay === day 
                  ? 'bg-gradient-to-r from-brand-indigo to-brand-cyan text-white shadow-md shadow-brand-indigo/25' 
                  : 'bg-brand-surface border border-white/5 text-gray-400 hover:text-white'
              }`}
            >
              Day 0{day} (June {26 + day - 1})
            </button>
          ))}
        </div>

        {/* Schedule List */}
        <div className="space-y-4">
          {scheduleData[activeDay].map((item, index) => (
            <div 
              key={index} 
              className="gsap-sched-reveal p-6 bg-brand-surface border border-white/5 hover:border-brand-cyan/20 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <Clock className="text-brand-cyan shrink-0" size={18} />
                <span className="text-xs font-heading font-extrabold text-white">{item.time}</span>
              </div>
              <div className="flex-1 text-left">
                <h4 className="text-sm font-bold text-gray-200">{item.title}</h4>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-[11px]">
                <MapPin size={14} />
                <span>{item.loc}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
