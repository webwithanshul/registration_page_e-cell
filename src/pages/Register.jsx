import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, lookupTicket, clearCurrentPass, clearErrors } from '../store/slices/registrationSlice';
import PassCard from '../components/PassCard';
import ConfettiCanvas from '../components/ConfettiCanvas';
import { Zap, Ticket, CheckCircle2, Download, Search, Loader } from 'lucide-react';
import gsap from 'gsap';

export default function Register() {
  const dispatch = useDispatch();
  
  // Redux registration states
  const { currentPass, loading, error, lookupError, successActive } = useSelector(
    (state) => state.registration
  );

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    phone: '',
    event: ''
  });

  const [validationErrors, setValidationErrors] = useState({});
  const [lookupEmail, setLookupEmail] = useState('');
  const [lookupOpen, setLookupOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gsap-register-reveal', {
        opacity: 0,
        y: 20,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power2.out'
      });
    });
    return () => ctx.revert();
  }, []);

  const validate = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim().length >= 2 ? '' : 'Name must be at least 2 characters long.';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value.trim()) ? '' : 'Please enter a valid email address.';
      case 'college':
        return value.trim().length >= 3 ? '' : 'College name must be at least 3 characters long.';
      case 'phone':
        const phoneRegex = /^[0-9+\s-]{10,15}$/;
        return phoneRegex.test(value.trim()) ? '' : 'Please enter a valid 10-15 digit mobile number.';
      case 'event':
        return value !== '' ? '' : 'Please select an event option.';
      default:
        return '';
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    const err = validate(name, value);
    setValidationErrors(prev => ({ ...prev, [name]: err }));
    dispatch(clearErrors());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = {};
    Object.keys(formData).forEach(key => {
      const err = validate(key, formData[key]);
      if (err) errors[key] = err;
    });

    setValidationErrors(errors);

    if (Object.keys(errors).length === 0) {
      dispatch(registerUser(formData));
    } else {
      const formEl = document.querySelector('.form-wrapper');
      if (formEl) {
        formEl.style.animation = 'none';
        setTimeout(() => {
          formEl.style.animation = 'shake 0.4s ease';
        }, 10);
      }
    }
  };

  const handleLookupClick = () => {
    if (!lookupEmail.trim()) {
      alert('Please enter an email.');
      return;
    }
    dispatch(lookupTicket(lookupEmail));
  };

  const handleCloseSuccess = () => {
    dispatch(clearCurrentPass());
  };

  return (
    <div className="pt-24 min-h-screen bg-brand-dark flex justify-center items-center px-6 py-20 relative" style={{ backgroundImage: 'var(--gradient-radial)' }}>
      <ConfettiCanvas active={successActive} />

      <div className="form-wrapper w-full max-w-lg bg-brand-surface/60 border border-white/5 p-8 sm:p-10 rounded-2xl shadow-2xl backdrop-blur-md gsap-register-reveal">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan text-[10px] font-bold rounded-full uppercase tracking-wider mb-2">Registration</span>
          <h2 className="text-3xl font-heading font-extrabold text-white mb-2">Claim Your Summit Pass</h2>
          <p className="text-xs text-gray-400">Provide details to generate your customized E-Summit 2026 digital ticket.</p>
        </div>

        {error && (
          <div className="p-4 bg-brand-pink/10 border border-brand-pink/25 text-brand-pink text-xs rounded-lg mb-6 text-left">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 text-left" noValidate>
          
          {/* Name */}
          <div>
            <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1.5">Full Name</label>
            <input 
              type="text" 
              name="name"
              className={`w-full p-3.5 bg-brand-dark/40 border rounded-lg text-xs text-white focus:outline-none transition-colors ${
                validationErrors.name ? 'border-brand-pink' : formData.name ? 'border-brand-cyan/50' : 'border-white/5'
              }`} 
              placeholder="Enter your full name" 
              value={formData.name}
              onChange={handleInputChange}
            />
            {validationErrors.name && <span className="block text-[10px] text-brand-pink mt-1">{validationErrors.name}</span>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1.5">Email Address</label>
            <input 
              type="email" 
              name="email"
              className={`w-full p-3.5 bg-brand-dark/40 border rounded-lg text-xs text-white focus:outline-none transition-colors ${
                validationErrors.email ? 'border-brand-pink' : formData.email ? 'border-brand-cyan/50' : 'border-white/5'
              }`} 
              placeholder="you@example.com" 
              value={formData.email}
              onChange={handleInputChange}
            />
            {validationErrors.email && <span className="block text-[10px] text-brand-pink mt-1">{validationErrors.email}</span>}
          </div>

          {/* College */}
          <div>
            <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1.5">College / University Name</label>
            <input 
              type="text" 
              name="college"
              className={`w-full p-3.5 bg-brand-dark/40 border rounded-lg text-xs text-white focus:outline-none transition-colors ${
                validationErrors.college ? 'border-brand-pink' : formData.college ? 'border-brand-cyan/50' : 'border-white/5'
              }`} 
              placeholder="Enter college name" 
              value={formData.college}
              onChange={handleInputChange}
            />
            {validationErrors.college && <span className="block text-[10px] text-brand-pink mt-1">{validationErrors.college}</span>}
          </div>

          {/* Contact */}
          <div>
            <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1.5">Contact Number</label>
            <input 
              type="tel" 
              name="phone"
              className={`w-full p-3.5 bg-brand-dark/40 border rounded-lg text-xs text-white focus:outline-none transition-colors ${
                validationErrors.phone ? 'border-brand-pink' : formData.phone ? 'border-brand-cyan/50' : 'border-white/5'
              }`} 
              placeholder="10-digit mobile number" 
              value={formData.phone}
              onChange={handleInputChange}
            />
            {validationErrors.phone && <span className="block text-[10px] text-brand-pink mt-1">{validationErrors.phone}</span>}
          </div>

          {/* Event Dropdown */}
          <div>
            <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1.5">Choose Track / Event</label>
            <select 
              name="event"
              className={`w-full p-3.5 bg-brand-dark/40 border rounded-lg text-xs text-gray-300 focus:outline-none transition-colors appearance-none ${
                validationErrors.event ? 'border-brand-pink' : formData.event ? 'border-brand-cyan/50' : 'border-white/5'
              }`}
              value={formData.event}
              onChange={handleInputChange}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 1rem center',
                backgroundSize: '1rem'
              }}
            >
              <option value="" disabled>Select an Event</option>
              <option value="Pitch Arena">Pitch Arena (Startup Pitches)</option>
              <option value="Hackathon">E-Summit Hackathon (24h Build)</option>
              <option value="Panel Discussions">Panel Discussions & Keynotes</option>
              <option value="Workshops">Interactive Skill Workshops</option>
              <option value="General Pass">All-Access General Pass</option>
            </select>
            {validationErrors.event && <span className="block text-[10px] text-brand-pink mt-1">{validationErrors.event}</span>}
          </div>

          <button 
            type="submit" 
            className="w-full py-4 mt-4 bg-gradient-to-r from-brand-indigo to-brand-cyan text-white text-xs font-bold rounded-lg shadow-lg hover:shadow-brand-indigo/35 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-1.5"
            disabled={loading}
          >
            {loading ? <Loader className="animate-spin" size={16} /> : <Ticket size={16} />}
            {loading ? 'Processing...' : 'Generate My Summit Pass'}
          </button>

          <p className="text-center text-[10px] text-gray-500 mt-6 leading-relaxed">
            By registering, you agree to our E-Summit Code of Conduct. <br />
            Already registered? <button type="button" onClick={() => setLookupOpen(true)} className="text-brand-cyan font-bold hover:underline bg-transparent border-none outline-none cursor-pointer">Lookup Ticket</button>
          </p>

        </form>
      </div>

      {/* ==========================================
          SUCCESS PASSCARD MODAL OVERLAY
          ========================================== */}
      <div className={`fixed inset-0 bg-brand-dark/95 backdrop-blur-md z-50 flex items-center justify-center p-6 transition-all duration-500 ${
        successActive ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className={`flex flex-col items-center max-w-md w-full text-center transition-all duration-500 transform ${
          successActive ? 'scale-100' : 'scale-90'
        }`}>
          <div className="w-14 h-14 bg-brand-cyan/10 border border-brand-cyan/25 flex items-center justify-center text-brand-cyan rounded-full mb-4 shadow-lg shadow-brand-cyan/20">
            <CheckCircle2 size={26} />
          </div>
          <h2 className="text-2xl font-heading font-extrabold text-white mb-1">Registration Confirmed!</h2>
          <p className="text-xs text-gray-400 mb-6">Your pass has been generated. Present this ticket stub at check-in.</p>
          
          <PassCard pass={currentPass} />

          <div className="flex gap-4 w-full justify-center mt-6">
            <button onClick={window.print} className="px-5 py-2.5 bg-gradient-to-r from-brand-indigo to-brand-cyan text-white text-xs font-bold rounded-lg transition-all duration-300 flex items-center gap-1.5 shadow-md shadow-brand-indigo/25">
              <Download size={14} /> Download PDF
            </button>
            <button onClick={handleCloseSuccess} className="px-5 py-2.5 bg-white/5 border border-white/10 hover:border-white/20 text-white text-xs font-bold rounded-lg transition-colors">
              Done
            </button>
          </div>
        </div>
      </div>

      {/* ==========================================
          TICKET LOOKUP MODAL OVERLAY
          ========================================== */}
      <div className={`fixed inset-0 bg-brand-dark/95 backdrop-blur-md z-50 flex items-center justify-center p-6 transition-all duration-300 ${
        lookupOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="bg-brand-surface border border-white/5 p-8 max-w-sm w-full rounded-2xl shadow-2xl text-left">
          <h3 className="text-lg font-heading font-extrabold text-white mb-2 text-center">Ticket Pass Lookup</h3>
          <p className="text-xs text-gray-400 mb-6 text-center">Enter your registered email below to fetch your digital ticket stub.</p>
          
          {lookupError && (
            <div className="p-3 bg-brand-pink/10 border border-brand-pink/25 text-brand-pink text-[10px] rounded-lg mb-4">
              {lookupError}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-[9px] uppercase font-bold text-gray-500 mb-1">Registered Email</label>
              <input 
                type="email" 
                className="w-full p-3 bg-brand-dark/40 border border-white/5 focus:border-brand-cyan focus:outline-none rounded-lg text-xs text-white" 
                placeholder="you@example.com"
                value={lookupEmail}
                onChange={(e) => {
                  setLookupEmail(e.target.value);
                  dispatch(clearErrors());
                }}
              />
            </div>

            <div className="flex gap-3 pt-2">
              <button 
                type="button" 
                onClick={() => {
                  setLookupOpen(false);
                  setLookupEmail('');
                  dispatch(clearErrors());
                }} 
                className="flex-1 py-2.5 bg-white/5 border border-white/10 text-white hover:border-white/20 text-xs font-semibold rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button 
                type="button" 
                onClick={() => {
                  handleLookupClick();
                  setLookupOpen(false);
                  setLookupEmail('');
                }}
                className="flex-1 py-2.5 bg-gradient-to-r from-brand-indigo to-brand-cyan text-white text-xs font-bold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-1.5"
                disabled={loading}
              >
                {loading ? <Loader className="animate-spin" size={14} /> : <Search size={14} />}
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
