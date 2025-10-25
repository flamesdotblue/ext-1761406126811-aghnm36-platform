import React from 'react';
import { Calendar, Search, MapPin } from 'lucide-react';

function SearchFilters({ filters, setFilters, availableTags }) {
  const handleChange = (key) => (e) => {
    setFilters((prev) => ({ ...prev, [key]: e.target.value }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4">
      <div className="col-span-1 md:col-span-2">
        <label className="block text-sm text-white/70 mb-1">Search</label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
          <input
            type="text"
            value={filters.query}
            onChange={handleChange('query')}
            placeholder="Keyword, organizer, city, tag"
            className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-3 py-2.5 outline-none focus:ring-2 focus:ring-emerald-400/40"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm text-white/70 mb-1">Mode</label>
        <select
          value={filters.mode}
          onChange={handleChange('mode')}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 outline-none focus:ring-2 focus:ring-emerald-400/40"
        >
          <option value="any">Any</option>
          <option value="online">Online</option>
          <option value="in-person">In-person</option>
          <option value="hybrid">Hybrid</option>
        </select>
      </div>

      <div>
        <label className="block text-sm text-white/70 mb-1 flex items-center gap-1"><Calendar className="h-4 w-4" /> Month</label>
        <select
          value={filters.month}
          onChange={handleChange('month')}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 outline-none focus:ring-2 focus:ring-emerald-400/40"
        >
          <option value="any">Any</option>
          {[...Array(12)].map((_, i) => {
            const m = i + 1;
            const date = new Date(2000, i, 1);
            const label = date.toLocaleString(undefined, { month: 'long' });
            return (
              <option key={m} value={m}>{label}</option>
            );
          })}
        </select>
      </div>

      <div className="md:col-span-1">
        <label className="block text-sm text-white/70 mb-1 flex items-center gap-1"><MapPin className="h-4 w-4" /> Tag</label>
        <select
          value={filters.tag}
          onChange={handleChange('tag')}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 outline-none focus:ring-2 focus:ring-emerald-400/40"
        >
          <option value="any">Any</option>
          {availableTags.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SearchFilters;
