import React from 'react';
import { SectionWrapper } from '@/components/section-wrapper';
import { EventCard } from '@/components/event-card';
import { events } from '@/lib/data/events';
import Link from 'next/link';

export function Events() {
  return (
    <SectionWrapper>
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-6 text-center md:text-left">
        <div>
          <h2 className="text-xs md:text-sm font-bold text-[#facc15] uppercase tracking-widest mb-2">Upcoming</h2>
          <h3 className="text-3xl md:text-5xl font-black text-[#001f3f] uppercase">VMC Events</h3>
          <div className="h-1 w-20 bg-[#facc15] mt-4 mx-auto md:mx-0"></div>
        </div>
        <Link href="/events" className="text-[#001f3f] font-bold uppercase tracking-widest hover:text-[#facc15] transition-colors text-xs md:text-sm border-b-2 border-[#facc15] pb-1">
          View All Events →
        </Link>
      </div>
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {events.slice(0, 2).map(e => (
          <EventCard key={e.id} {...e} />
        ))}
      </div>
    </SectionWrapper>
  );
}
