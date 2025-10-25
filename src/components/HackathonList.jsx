import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

function formatDateRange(start, end) {
  const s = new Date(start);
  const e = new Date(end);
  const sameMonth = s.getMonth() === e.getMonth() && s.getFullYear() === e.getFullYear();
  const sStr = s.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
  const eStr = sameMonth
    ? e.toLocaleDateString(undefined, { day: 'numeric' })
    : e.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
  return `${sStr} - ${eStr}`;
}

function Badge({ children }) {
  return (
    <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">
      {children}
    </span>
  );
}

function HackathonCard({ h }) {
  return (
    <a
      href={h.url}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-5 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold flex items-center gap-2">
            {h.name}
            <ExternalLink className="h-4 w-4 opacity-60 group-hover:opacity-100 transition-opacity" />
          </h3>
          <p className="text-white/70 text-sm">{h.organizer}</p>
          <div className="flex flex-wrap items-center gap-3 mt-3 text-sm text-white/80">
            <div className="inline-flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{formatDateRange(h.startDate, h.endDate)}</span>
            </div>
            <div className="inline-flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{h.location}</span>
            </div>
            <Badge>{h.mode}</Badge>
            {h.prize && <Badge>Prize {h.prize}</Badge>}
          </div>
          {h.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {h.tags.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded-lg bg-emerald-400/10 text-emerald-300 border border-emerald-400/20">
                  #{t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </a>
  );
}

function EmptyState() {
  return (
    <div className="text-center py-16">
      <div className="text-2xl font-semibold">No hackathons match your filters</div>
      <p className="text-white/70 mt-2">Try broadening your search terms or selecting Any for filters.</p>
    </div>
  );
}

function HackathonList({ hackathons }) {
  return (
    <div className="mt-5 md:mt-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-semibold">Live and Upcoming</h2>
        <div className="text-sm text-white/70">{hackathons.length} results</div>
      </div>
      {hackathons.length === 0 ? (
        <EmptyState />)
        : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {hackathons.map((h) => (
            <HackathonCard key={h.id} h={h} />
          ))}
        </div>
      )}
    </div>
  );
}

export default HackathonList;
