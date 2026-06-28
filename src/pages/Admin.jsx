import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegistrations, deleteRegistration } from '../store/slices/registrationSlice';
import { ShieldAlert, RefreshCw, Layers, Search, Filter, Download, Trash2, Users, GraduationCap, Calendar, Ticket } from 'lucide-react';
import gsap from 'gsap';

export default function Admin() {
  const dispatch = useDispatch();
  const { allRegistrations, loading } = useSelector((state) => state.registration);

  const [searchQuery, setSearchQuery] = useState('');
  const [eventFilter, setEventFilter] = useState('All');

  useEffect(() => {
    dispatch(fetchRegistrations());
    const ctx = gsap.context(() => {
      gsap.from('.gsap-admin-reveal', {
        opacity: 0,
        y: 15,
        stagger: 0.08,
        duration: 0.8,
        ease: 'power2.out'
      });
    });
    return () => ctx.revert();
  }, [dispatch]);

  const handleRefresh = () => {
    dispatch(fetchRegistrations());
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to remove registration for ${name} (${id})?`)) {
      dispatch(deleteRegistration(id));
    }
  };

  // Filter registrations based on search and event selection
  const filteredRegistrations = allRegistrations.filter(reg => {
    const matchesSearch = 
      reg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reg.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reg.college.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reg.phone.includes(searchQuery) ||
      reg.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesEvent = eventFilter === 'All' || reg.event === eventFilter;
    
    return matchesSearch && matchesEvent;
  });

  // Calculate Dashboard Statistics
  const totalRegistrations = allRegistrations.length;
  const uniqueColleges = new Set(allRegistrations.map(r => r.college.trim().toLowerCase())).size;
  
  const hackathonCount = allRegistrations.filter(r => r.event === 'Hackathon').length;
  const pitchArenaCount = allRegistrations.filter(r => r.event === 'Pitch Arena').length;
  const workshopCount = allRegistrations.filter(r => r.event === 'Workshops').length;
  const panelsCount = allRegistrations.filter(r => r.event === 'Panel Discussions').length;
  const generalPassCount = allRegistrations.filter(r => r.event === 'General Pass').length;

  // Export to CSV
  const exportToCSV = () => {
    if (filteredRegistrations.length === 0) return;
    const headers = ['Registration ID', 'Full Name', 'Email Address', 'College/University', 'Contact Number', 'Event Track', 'Registered Date'];
    const rows = filteredRegistrations.map(reg => [
      reg.id,
      reg.name,
      reg.email,
      reg.college,
      reg.phone,
      reg.event,
      new Date(reg.registeredAt).toLocaleString()
    ]);
    
    const csvContent = "data:text/csv;charset=utf-8," 
      + [headers.join(','), ...rows.map(e => e.map(val => `"${String(val).replace(/"/g, '""')}"`).join(','))].join('\n');
      
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `esummit_registrations_${eventFilter.toLowerCase().replace(/\s+/g, '_')}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pt-24 min-h-screen bg-brand-dark px-4 sm:px-6 py-20">
      <div className="max-w-7xl mx-auto text-left">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 border-b border-white/5 pb-6 gsap-admin-reveal">
          <div>
            <span className="px-3.5 py-1.5 bg-brand-pink/10 border border-brand-pink/25 text-brand-pink text-xs font-semibold rounded-full uppercase tracking-wider flex items-center gap-1.5 w-fit">
              <ShieldAlert size={14} /> Security Level: Administrator
            </span>
            <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mt-4">E-Summit Ledger</h1>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={exportToCSV}
              disabled={filteredRegistrations.length === 0}
              className="px-4 py-2.5 bg-white/5 border border-white/10 hover:border-brand-cyan hover:text-brand-cyan text-gray-300 disabled:opacity-30 disabled:hover:border-white/10 disabled:hover:text-gray-300 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow"
            >
              <Download size={14} /> Export CSV ({filteredRegistrations.length})
            </button>
            <button 
              onClick={handleRefresh}
              className="px-4 py-2.5 bg-brand-surface border border-white/5 text-gray-400 hover:text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow"
              disabled={loading}
            >
              <RefreshCw className={loading ? 'animate-spin' : ''} size={14} /> Refresh Entries
            </button>
          </div>
        </div>

        {/* Statistics Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 gsap-admin-reveal">
          <div className="p-6 bg-brand-surface border border-white/5 rounded-2xl flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/25 flex items-center justify-center text-brand-cyan shrink-0">
              <Users size={22} />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Total Ledger</span>
              <h3 className="text-2xl font-heading font-extrabold text-white mt-0.5">{totalRegistrations}</h3>
            </div>
          </div>

          <div className="p-6 bg-brand-surface border border-white/5 rounded-2xl flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-brand-indigo/10 border border-brand-indigo/25 flex items-center justify-center text-brand-indigo shrink-0">
              <GraduationCap size={22} />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Active Colleges</span>
              <h3 className="text-2xl font-heading font-extrabold text-white mt-0.5">{uniqueColleges}</h3>
            </div>
          </div>

          <div className="p-6 bg-brand-surface border border-white/5 rounded-2xl flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-brand-pink/10 border border-brand-pink/25 flex items-center justify-center text-brand-pink shrink-0">
              <Calendar size={22} />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Hack & Pitch Track</span>
              <h3 className="text-2xl font-heading font-extrabold text-white mt-0.5">{hackathonCount + pitchArenaCount}</h3>
            </div>
          </div>

          <div className="p-6 bg-brand-surface border border-white/5 rounded-2xl flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/25 flex items-center justify-center text-yellow-500 shrink-0">
              <Ticket size={22} />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">General & Workshops</span>
              <h3 className="text-2xl font-heading font-extrabold text-white mt-0.5">{generalPassCount + workshopCount}</h3>
            </div>
          </div>
        </div>

        {/* Search and Filters Controller */}
        <div className="p-5 bg-brand-surface/60 border border-white/5 rounded-2xl mb-6 flex flex-col md:flex-row items-center gap-4 gsap-admin-reveal">
          {/* Search Bar */}
          <div className="relative w-full md:flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
            <input 
              type="text" 
              placeholder="Search by ID, name, email, college, phone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-brand-dark/40 border border-white/5 focus:border-brand-cyan/40 rounded-xl text-xs text-white placeholder-gray-500 outline-none transition-colors"
            />
          </div>

          {/* Event Filter */}
          <div className="flex items-center gap-2 w-full md:w-auto shrink-0">
            <Filter className="text-gray-500 hidden sm:block" size={16} />
            <select
              value={eventFilter}
              onChange={(e) => setEventFilter(e.target.value)}
              className="w-full md:w-56 px-4 py-2.5 bg-brand-dark/40 border border-white/5 focus:border-brand-cyan/40 rounded-xl text-xs text-gray-300 outline-none transition-colors"
            >
              <option value="All">All Event Tracks</option>
              <option value="General Pass">General Pass</option>
              <option value="Hackathon">Hackathon</option>
              <option value="Pitch Arena">Pitch Arena</option>
              <option value="Panel Discussions">Panel Discussions</option>
              <option value="Workshops">Workshops</option>
            </select>
          </div>
        </div>

        {/* Entries Table */}
        <div className="gsap-admin-reveal bg-brand-surface border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
          {loading && allRegistrations.length === 0 ? (
            <div className="p-20 text-center text-gray-400 text-xs flex flex-col items-center gap-3">
              <RefreshCw className="animate-spin text-brand-indigo" size={24} />
              <span>Fetching ledger data from database...</span>
            </div>
          ) : filteredRegistrations.length === 0 ? (
            <div className="p-20 text-center text-gray-400 text-xs flex flex-col items-center gap-3">
              <Layers className="text-gray-500" size={32} />
              <span>No registrations match your search criteria.</span>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-brand-dark/40 border-b border-white/5 text-[9px] uppercase tracking-wider text-gray-500 font-bold">
                    <th className="py-4 px-6">ID</th>
                    <th className="py-4 px-6">Name</th>
                    <th className="py-4 px-6">Email</th>
                    <th className="py-4 px-6">College</th>
                    <th className="py-4 px-6">Phone</th>
                    <th className="py-4 px-6">Selected Event</th>
                    <th className="py-4 px-6">Registered At</th>
                    <th className="py-4 px-6 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-xs text-gray-300">
                  {filteredRegistrations.map((reg) => (
                    <tr key={reg.id} className="hover:bg-white/2 transition-colors">
                      <td className="py-4 px-6 font-heading font-extrabold text-brand-cyan">{reg.id}</td>
                      <td className="py-4 px-6 text-white font-semibold">{reg.name}</td>
                      <td className="py-4 px-6">{reg.email}</td>
                      <td className="py-4 px-6 max-w-xs truncate">{reg.college}</td>
                      <td className="py-4 px-6 font-mono text-[11px]">{reg.phone}</td>
                      <td className="py-4 px-6">
                        <span className="px-2.5 py-1 bg-brand-indigo/10 border border-brand-indigo/25 text-brand-indigo font-bold text-[10px] rounded-full">
                          {reg.event}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-gray-500 text-[10px] font-mono">
                        {new Date(reg.registeredAt).toLocaleString()}
                      </td>
                      <td className="py-4 px-6 text-center">
                        <button
                          onClick={() => handleDelete(reg.id, reg.name)}
                          className="p-2 bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white rounded-lg transition-all"
                          title="Remove Registration"
                        >
                          <Trash2 size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
