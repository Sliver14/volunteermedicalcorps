'use client';

import { PageLayout } from '@/components/page-layout';
import { SectionWrapper } from '@/components/section-wrapper';
import { events } from '@/lib/data/events';
import { EventCard } from '@/components/event-card';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function EventsPage() {
  return (
    <PageLayout>
      {/* Events Hero */}
      <section className="relative py-24 bg-[#001f3f] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop" 
            alt="Events Hero" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">Summits & Conferences</h1>
          <div className="h-2 w-24 bg-[#facc15] mx-auto mb-8"></div>
          <p className="text-xl text-[#facc15] font-bold uppercase tracking-widest max-w-3xl mx-auto">
            Gathering leaders and volunteers to shape the future of medical relief.
          </p>
        </div>
      </section>

      <SectionWrapper className="bg-white">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-sm font-bold text-[#facc15] uppercase tracking-widest mb-2">Upcoming</h2>
            <h3 className="text-4xl font-black text-[#001f3f] uppercase">VMC Events Calendar</h3>
            <div className="h-1.5 w-24 bg-[#facc15] mt-4"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {events.map((event) => (
            <div key={event.id} className="group bg-gray-50 flex flex-col lg:flex-row shadow-xl hover:shadow-2xl transition-all duration-500 border-l-8 border-[#001f3f] overflow-hidden">
              <div className="relative w-full lg:w-1/3 aspect-video lg:aspect-auto">
                <Image src={event.image} alt={event.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-10 flex-1 flex flex-col justify-center">
                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center gap-2 text-[#facc15] font-black uppercase text-xs tracking-widest">
                    <Calendar size={16} /> {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 font-bold uppercase text-xs tracking-widest">
                    <MapPin size={16} /> {event.location}
                  </div>
                </div>
                <h4 className="text-3xl font-black text-[#001f3f] uppercase mb-6 group-hover:text-[#facc15] transition-colors">{event.title}</h4>
                <p className="text-gray-600 mb-8 max-w-2xl leading-relaxed">{event.description}</p>
                <div>
                  <Button asChild className="bg-[#001f3f] hover:bg-[#002855] text-white rounded-none px-10 py-6 font-black uppercase tracking-widest text-xs shadow-lg">
                    <Link href={`/events/${event.slug}/${event.id}`}>Event Details</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Host an Event */}
      <section className="bg-gray-100 py-24 text-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black text-[#001f3f] uppercase mb-6">Host a VMC Fundraising Event</h2>
            <p className="text-lg text-gray-500 mb-10 font-medium">You can organize an event in your local city to support VMC missions. We provide the resources and guidance you need to succeed.</p>
            <Button asChild className="bg-[#facc15] hover:bg-[#001f3f] text-[#001f3f] hover:text-white rounded-none px-12 py-8 font-black uppercase tracking-widest text-sm shadow-xl">
              <Link href="/contact">Apply to Host</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
