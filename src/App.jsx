import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Global layout components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages components
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import PitchArena from './pages/PitchArena';
import Hackathon from './pages/Hackathon';
import Panels from './pages/Panels';
import Workshops from './pages/Workshops';
import Speakers from './pages/Speakers';
import SpeakerDetail from './pages/SpeakerDetail';
import Schedule from './pages/Schedule';
import Partners from './pages/Partners';
import Initiatives from './pages/Initiatives';
import StartupExpo from './pages/StartupExpo';
import InternFair from './pages/InternFair';
import Gallery from './pages/Gallery';
import Team from './pages/Team';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Register from './pages/Register';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-cyan selection:text-brand-dark">
        {/* Sticky Header Nav */}
        <Navbar />

        {/* View routes */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/pitch-arena" element={<PitchArena />} />
            <Route path="/events/hackathon" element={<Hackathon />} />
            <Route path="/events/panel-discussions" element={<Panels />} />
            <Route path="/events/workshops" element={<Workshops />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/speakers/:id" element={<SpeakerDetail />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/initiatives" element={<Initiatives />} />
            <Route path="/initiatives/startup-expo" element={<StartupExpo />} />
            <Route path="/initiatives/intern-fair" element={<InternFair />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/team" element={<Team />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
}
