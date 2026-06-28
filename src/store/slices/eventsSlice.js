import { createSlice } from '@reduxjs/toolkit';

const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    tracks: [
      {
        id: 'pitch-arena',
        title: 'Pitch Arena',
        desc: 'The ultimate stage for early-stage startups. Present your business model to a panel of venture partners, angel networks, and accelerators to raise seed funding.',
        icon: 'Rocket',
        prize: '$10,000 Seed Equity',
        date: 'Day 1 & Day 2'
      },
      {
        id: 'hackathon',
        title: 'E-Summit Hackathon',
        desc: 'A fast-paced 24-hour product building marathon. Collaborate with builders, designers, and programmers to solve critical ecosystem problems under expert mentorship.',
        icon: 'Code2',
        prize: '$5,000 Cash Pool',
        date: 'Day 2'
      },
      {
        id: 'panel-discussions',
        title: 'Panel Discussions',
        desc: 'Raw and insightful conversations with founders of unicorn startups, pioneering research teams, and VC investors discussing economic cycles and scaling methodologies.',
        icon: 'MessagesSquare',
        prize: 'Mentorship Access',
        date: 'Day 1'
      },
      {
        id: 'workshops',
        title: 'Interactive Workshops',
        desc: 'Practical, hands-on masterclasses hosted by ecosystem experts covering growth marketing, AI integration, business valuation, and legal structuring.',
        icon: 'Award',
        prize: 'Certification Pass',
        date: 'Day 3'
      }
    ],
    speakers: [
      {
        id: 'sarah-chen',
        name: 'Dr. Sarah Chen',
        role: 'Partner',
        company: 'Blue Horizon Ventures',
        img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
        bio: 'Dr. Chen specializes in early-stage deeptech and biotechnology investments, leading over $120M in series-A rounds.',
        talk: 'Economic Horizons of the Next Tech Century'
      },
      {
        id: 'alex-rivera',
        name: 'Alex Rivera',
        role: 'Founder & CEO',
        company: 'Core AI Technologies',
        img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80',
        bio: 'Alex is a former principal researcher who bootstrapped Core AI to $15M ARR, developing localized large language models.',
        talk: 'Bootstrapping Deep Tech without Dilution'
      },
      {
        id: 'liam-patterson',
        name: 'Liam Patterson',
        role: 'Director of Product',
        company: 'Fintech Systems',
        img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80',
        bio: 'Liam oversees checkout architectures and ledger systems processing over 50 million monthly transactions globally.',
        talk: 'Scaling Distributed Ledgers for High-Volume Rails'
      },
      {
        id: 'anya-petrova',
        name: 'Anya Petrova',
        role: 'Author & Investor',
        company: 'Ecosystem Partners',
        img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
        bio: 'Anya is the author of "Incubate," a comprehensive roadmap for first-time founders, and acts as a mentor at Tech incubator.',
        talk: 'From Classroom Idea to Incubation Engine'
      }
    ],
    selectedTrackId: null,
    searchQuery: '',
  },
  reducers: {
    selectTrack: (state, action) => {
      state.selectedTrackId = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    }
  }
});

export const { selectTrack, setSearchQuery } = eventsSlice.actions;
export default eventsSlice.reducer;
