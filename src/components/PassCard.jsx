import React from 'react';
import ecellLogoSymbol from '../assets/ecell_logo_symbol.png';
import lnctLogoWhite from '../assets/lnct_logo_white.png';

export default function PassCard({ pass }) {
  if (!pass) return null;

  return (
    <div 
      id="printable-pass" 
      className="relative w-full max-w-md bg-gradient-to-br from-brand-surface to-black border border-brand-indigo/40 rounded-2xl overflow-hidden shadow-2xl p-6 select-none"
    >
      {/* Dynamic Ticket Punch holes */}
      <div className="absolute left-[-10px] top-[74px] w-5 h-5 bg-brand-dark rounded-full border-r border-brand-indigo/40 z-10" />
      <div className="absolute right-[-10px] top-[74px] w-5 h-5 bg-brand-dark rounded-full border-l border-brand-indigo/40 z-10" />

      {/* Ticket top border indicator */}
      <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-brand-indigo to-brand-cyan" />

      {/* Pass Header */}
      <div className="flex justify-between items-center border-b border-dashed border-gray-800 pb-5 mb-5 mt-2">
        <div className="flex items-center gap-2.5 font-heading font-extrabold text-white text-base">
          <img src={ecellLogoSymbol} className="h-6 w-auto" alt="E-Cell" />
          <img src={lnctLogoWhite} className="h-5 w-auto border-l border-white/20 pl-2" alt="LNCT" />
          <span>E-Summit '26</span>
        </div>
        <span className="text-[10px] font-bold tracking-wider uppercase text-brand-indigo bg-brand-indigo/15 border border-brand-indigo/35 py-1 px-3 rounded-full">
          {pass.event}
        </span>
      </div>

      {/* Pass Content Fields */}
      <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-left mb-6">
        <div>
          <span className="block text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-0.5">Attendee</span>
          <span className="text-white text-sm font-bold truncate block">{pass.name}</span>
        </div>
        <div className="text-right">
          <span className="block text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-0.5">College / Inst.</span>
          <span className="text-white text-sm font-bold truncate block">{pass.college}</span>
        </div>
        <div>
          <span className="block text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-0.5">Helpline Contact</span>
          <span className="text-white text-sm font-bold block">{pass.phone}</span>
        </div>
        <div className="text-right">
          <span className="block text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-0.5">Access Date</span>
          <span className="text-brand-cyan text-sm font-bold block">June 27, 2026</span>
        </div>
      </div>

      {/* Barcode Mockup and Pass ID */}
      <div className="bg-white/2 border border-white/5 rounded-xl p-4 text-center">
        <span className="block text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-1">Registration Ticket ID</span>
        <span className="text-xl font-heading font-black tracking-widest bg-gradient-to-r from-brand-indigo to-brand-cyan bg-clip-text text-transparent block">
          {pass.id}
        </span>
        
        {/* Simple stylized SVG Barcode */}
        <div className="flex justify-center items-center gap-1.5 h-6 mt-3 opacity-60">
          <span className="w-[2px] h-full bg-white"></span>
          <span className="w-[1px] h-full bg-white"></span>
          <span className="w-[3px] h-full bg-white"></span>
          <span className="w-[1px] h-full bg-white"></span>
          <span className="w-[2px] h-full bg-white"></span>
          <span className="w-[4px] h-full bg-white"></span>
          <span className="w-[1px] h-full bg-white"></span>
          <span className="w-[2px] h-full bg-white"></span>
          <span className="w-[3px] h-full bg-white"></span>
          <span className="w-[1px] h-full bg-white"></span>
          <span className="w-[2px] h-full bg-white"></span>
        </div>
      </div>

    </div>
  );
}
