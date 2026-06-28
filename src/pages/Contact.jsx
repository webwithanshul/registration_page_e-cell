import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import gsap from 'gsap';

export default function Contact() {
  const [inquiry, setInquiry] = useState({ name: '', email: '', message: '' });
  const [successMsg, setSuccessMsg] = useState('');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gsap-contact-reveal', {
        opacity: 0,
        y: 20,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power2.out'
      });
    });
    return () => ctx.revert();
  }, []);

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    if (!inquiry.name || !inquiry.email || !inquiry.message) {
      alert('Please fill out all fields.');
      return;
    }
    setSuccessMsg('Your message has been sent successfully! Our team will respond shortly.');
    setInquiry({ name: '', email: '', message: '' });
    setTimeout(() => setSuccessMsg(''), 5000);
  };

  return (
    <div className="pt-24 min-h-screen bg-brand-dark px-6 py-20">
      <div className="max-w-7xl mx-auto text-left">
        <span className="gsap-contact-reveal px-3.5 py-1.5 bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan text-xs font-semibold rounded-full uppercase tracking-wider">Reach Us</span>
        
        <h1 className="gsap-contact-reveal text-4xl font-heading font-extrabold text-white mt-4 mb-4">Contact Support</h1>
        <p className="gsap-contact-reveal text-gray-400 text-sm max-w-xl mb-12">Submit questions concerning registration details, ticketing, or partner sponsorships.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Contact details */}
          <div className="gsap-contact-reveal flex flex-col gap-6">
            <div className="p-6 bg-brand-surface border border-white/5 rounded-xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-brand-indigo/10 border border-brand-indigo/25 flex items-center justify-center text-brand-indigo shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-1">Email Address</h4>
                <p className="text-xs text-gray-400">esummit@ecell-2026.org</p>
              </div>
            </div>

            <div className="p-6 bg-brand-surface border border-white/5 rounded-xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/25 flex items-center justify-center text-brand-cyan shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-1">Contact Helpline</h4>
                <p className="text-xs text-gray-400">+91 98765 43210</p>
              </div>
            </div>

            <div className="p-6 bg-brand-surface border border-white/5 rounded-xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-brand-pink/10 border border-brand-pink/25 flex items-center justify-center text-brand-pink shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-1">Office Location</h4>
                <p className="text-xs text-gray-400">E-Cell Incubator, Innovation Block, Tech Campus</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="gsap-contact-reveal p-8 bg-brand-surface border border-white/5 rounded-2xl">
            <h3 className="text-base font-heading font-extrabold text-white mb-6">Send an Inquiry</h3>
            {successMsg && (
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs rounded-lg mb-6">
                {successMsg}
              </div>
            )}
            
            <form onSubmit={handleInquirySubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] uppercase font-bold text-gray-500 mb-1">Full Name</label>
                <input 
                  type="text" 
                  className="w-full p-3 bg-brand-dark/40 border border-white/5 focus:border-brand-cyan focus:outline-none rounded-lg text-xs text-white" 
                  placeholder="Your Name"
                  value={inquiry.name}
                  onChange={(e) => setInquiry(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase font-bold text-gray-500 mb-1">Email Address</label>
                <input 
                  type="email" 
                  className="w-full p-3 bg-brand-dark/40 border border-white/5 focus:border-brand-cyan focus:outline-none rounded-lg text-xs text-white" 
                  placeholder="you@example.com"
                  value={inquiry.email}
                  onChange={(e) => setInquiry(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase font-bold text-gray-500 mb-1">Message</label>
                <textarea 
                  rows="4"
                  className="w-full p-3 bg-brand-dark/40 border border-white/5 focus:border-brand-cyan focus:outline-none rounded-lg text-xs text-white" 
                  placeholder="How can we assist you?"
                  value={inquiry.message}
                  onChange={(e) => setInquiry(prev => ({ ...prev, message: e.target.value }))}
                />
              </div>
              <button 
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-brand-indigo to-brand-cyan text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                Send Message <Send size={14} />
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
