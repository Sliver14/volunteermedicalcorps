import React from 'react';
import { SectionWrapper } from '@/components/section-wrapper';
import { EventCard } from '@/components/event-card';
import { events } from '@/lib/data/events';
import Link from 'next/link';

export function Events() {
  return (
    <SectionWrapper>
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl font-black text-[#001f3f] mb-4">UPCOMING EVENTS</h2>
          <div className="h-1 w-20 bg-[#facc15]"></div>
        </div>
        <Link href="/events" className="text-[#001f3f] font-bold uppercase tracking-widest hover:text-[#facc15] transition-colors text-sm">
          View All →
        </Link>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        {events.slice(0, 2).map(e => (
          <EventCard key={e.id} {...e} />
        ))}
      </div>
    </SectionWrapper>
  );
}
