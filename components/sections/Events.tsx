'use client';

import React from 'react';
import { SectionWrapper } from '@/components/section-wrapper';
import { EventCard } from '@/components/event-card';
import { events } from '@/lib/data/events';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Events() {
  return (
    <SectionWrapper className="bg-gray-50">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom duration-1000">
          <div>
            <div className="text-xs md:text-sm font-semibold text-[#facc15] tracking-widest mb-2 uppercase">Events & Conferences</div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#001f3f] mb-4">
              Multiple Event & <br /> Conference
            </h2>
            <div className="h-1 w-20 bg-[#facc15] mb-8"></div>
            <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed max-w-lg">
              Our mission is to empower individuals and foster collaboration for a better, more connected world.
            </p>
          </div>
          
          <Button asChild className="bg-[#001f3f] hover:bg-[#002855] text-white font-semibold px-10 md:px-12 py-6 md:py-7 rounded-none text-xs md:text-sm tracking-widest transition-all shadow-xl uppercase">
            <Link href="/events">View All Events</Link>
          </Button>
        </div>

        {/* Right Column - Events List */}
        <div className="space-y-6 animate-in fade-in duration-1000">
          {events.slice(0, 2).map((e) => (
            <div key={e.id} className="group bg-white flex flex-col md:flex-row shadow-lg hover:shadow-2xl transition-all duration-300 border-l-8 border-[#facc15] overflow-hidden">
               <div className="relative w-full md:w-48 h-48 md:h-auto shrink-0">
                <img 
                  src={e.image} 
                  alt={e.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <div className="text-[#facc15] text-[11px] font-semibold uppercase tracking-widest mb-2">{e.date}</div>
                <h3 className="text-[#001f3f] text-xl md:text-2xl font-semibold mb-3 leading-tight group-hover:text-[#facc15] transition-colors">{e.title}</h3>
                <div className="text-gray-400 text-[11px] font-medium uppercase tracking-tight flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#facc15] rounded-full"></span>
                  {e.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
