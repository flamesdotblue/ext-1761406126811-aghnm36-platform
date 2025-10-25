import React, { useMemo, useState } from 'react';
import Hero from './components/Hero';
import SearchFilters from './components/SearchFilters';
import HackathonList from './components/HackathonList';
import Footer from './components/Footer';

const SAMPLE_HACKATHONS = [
  {
    id: 'htn-1',
    name: 'Open Source Hack 2025',
    organizer: 'OSS Collective',
    startDate: '2025-11-05',
    endDate: '2025-11-07',
    mode: 'online',
    location: 'Global',
    url: 'https://example.com/oss-hack',
    prize: '$10,000',
    tags: ['open-source', 'web', 'devtools'],
  },
  {
    id: 'htn-2',
    name: 'GreenTech Hackathon',
    organizer: 'Eco Labs',
    startDate: '2025-12-01',
    endDate: '2025-12-03',
    mode: 'in-person',
    location: 'San Francisco, CA',
    url: 'https://example.com/greentech',
    prize: '$25,000',
    tags: ['climate', 'iot', 'ai'],
  },
  {
    id: 'htn-3',
    name: 'AI for Good Sprint',
    organizer: 'Civic AI',
    startDate: '2025-11-20',
    endDate: '2025-11-22',
    mode: 'hybrid',
    location: 'New York, NY + Online',
    url: 'https://example.com/ai4good',
    prize: '$15,000',
    tags: ['ai', 'ml', 'nlp'],
  },
  {
    id: 'htn-4',
    name: 'FinTech Challenge',
    organizer: 'Ledger Labs',
    startDate: '2026-01-10',
    endDate: '2026-01-12',
    mode: 'online',
    location: 'Global',
    url: 'https://example.com/fintech',
    prize: '$20,000',
    tags: ['fintech', 'security', 'payments'],
  },
];

function App() {
  const [filters, setFilters] = useState({
    query: '',
    mode: 'any',
    month: 'any',
    tag: 'any',
  });

  const hackathons = SAMPLE_HACKATHONS;

  const filtered = useMemo(() => {
    return hackathons.filter((h) => {
      const q = filters.query.trim().toLowerCase();
      const matchesQuery =
        q.length === 0 ||
        h.name.toLowerCase().includes(q) ||
        h.organizer.toLowerCase().includes(q) ||
        h.location.toLowerCase().includes(q) ||
        h.tags.some((t) => t.toLowerCase().includes(q));

      const matchesMode = filters.mode === 'any' || h.mode === filters.mode;

      const month = filters.month;
      const matchesMonth =
        month === 'any' || new Date(h.startDate).getMonth() + 1 === Number(month);

      const matchesTag =
        filters.tag === 'any' || h.tags.map((t) => t.toLowerCase()).includes(filters.tag);

      return matchesQuery && matchesMode && matchesMonth && matchesTag;
    });
  }, [filters, hackathons]);

  const allTags = useMemo(() => {
    const set = new Set();
    hackathons.forEach((h) => h.tags.forEach((t) => set.add(t.toLowerCase())));
    return Array.from(set).sort();
  }, [hackathons]);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Hero />

      <main className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 shadow-2xl">
          <SearchFilters
            filters={filters}
            setFilters={setFilters}
            availableTags={allTags}
          />
          <HackathonList hackathons={filtered} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
