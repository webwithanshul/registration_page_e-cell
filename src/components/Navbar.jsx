import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const links = [
    { name: 'Home', path: '/', visibility: 'hidden min-[480px]:inline-block' },
    { name: 'About', path: '/about', visibility: 'hidden sm:inline-block' },
    { name: 'Events', path: '/events', visibility: 'hidden sm:inline-block' },
    { name: 'Speakers', path: '/speakers', visibility: 'hidden md:inline-block' },
    { name: 'Schedule', path: '/schedule', visibility: 'hidden lg:inline-block' },
    { name: 'Partners', path: '/partners', visibility: 'hidden lg:inline-block' },
    { name: 'Initiatives', path: '/initiatives', visibility: 'hidden min-[1100px]:inline-block' },
    { name: 'Gallery', path: '/gallery', visibility: 'hidden min-[1100px]:inline-block' },
    { name: 'Team', path: '/team', visibility: 'hidden min-[1200px]:inline-block' },
    { name: 'FAQ', path: '/faq', visibility: 'hidden min-[1200px]:inline-block' },
    { name: 'Contact', path: '/contact', visibility: 'hidden xl:inline-block' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-brand-dark/85 backdrop-blur-md border-b border-white/5 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-heading font-extrabold text-xl text-white shrink-0">
          <Zap className="text-brand-cyan" size={24} />
          <span>E-Cell <span className="bg-gradient-to-r from-brand-indigo to-brand-cyan bg-clip-text text-transparent">2026</span></span>
        </Link>

        {/* Responsive Navbar Links */}
        <nav className="flex items-center gap-4 xl:gap-6 ml-auto mr-4">
          <ul className="flex items-center gap-4 xl:gap-6 text-sm font-medium">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.name} className={link.visibility}>
                  <Link 
                    to={link.path} 
                    className={`relative py-1 transition-all ${
                      isActive 
                        ? 'text-brand-cyan font-semibold' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-indigo to-brand-cyan" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
          
          <Link 
            to="/register" 
            className="hidden min-[380px]:inline-flex bg-gradient-to-r from-brand-indigo to-brand-cyan hover:shadow-lg hover:shadow-brand-indigo/35 text-white text-xs font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
          >
            Register Pass
          </Link>
        </nav>

        {/* Mobile menu trigger (Hidden only on xl where all links are shown) */}
        <button 
          className="xl:hidden text-white hover:text-brand-cyan transition-colors shrink-0"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* Mobile Drawer Overlay */}
      <div className={`fixed top-[60px] bottom-0 w-full bg-brand-dark/98 backdrop-blur-lg z-40 transition-all duration-500 xl:hidden ${
        mobileOpen ? 'right-0' : 'right-[-100%]'
      }`}>
        <ul className="flex flex-col items-center justify-center h-full gap-6 text-lg font-medium text-center">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className={`block py-2 transition-all ${
                    isActive ? 'text-brand-cyan font-bold' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
          <li className="mt-4">
            <Link 
              to="/register" 
              className="px-8 py-3 bg-gradient-to-r from-brand-indigo to-brand-cyan text-white rounded-lg font-semibold shadow-lg shadow-brand-indigo/25 hover:shadow-brand-indigo/40"
            >
              Claim Summit Pass
            </Link>
          </li>
        </ul>
      </div>

    </header>
  );
}
