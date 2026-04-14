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
           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
          <p className="text-xs md:text-sm font-semibold text-[#facc15] tracking-widest mb-2 uppercase">Events</p>
          <h1 className="text-3xl md:text-5xl font-semibold mb-6">Summits & Conferences</h1>
          <div className="h-1 w-20 bg-[#facc15] mx-auto mb-8"></div>
          <p className="text-base text-white/80 font-medium max-w-3xl mx-auto">
            Gathering leaders and volunteers to shape the future of medical relief.
          </p>
        </div>
      </section>

      <SectionWrapper className="bg-white">
        <div className="flex justify-between items-end mb-16 text-center md:text-left">
          <div>
            <p className="text-xs md:text-sm font-semibold text-[#facc15] tracking-widest mb-2 uppercase">Upcoming</p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#001f3f]">Vmc Events Calendar</h2>
            <div className="h-1 w-20 bg-[#facc15] mb-8"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {events.map((event) => (
            <div key={event.id} className="group bg-gray-50 flex flex-col lg:flex-row shadow-md hover:shadow-lg transition-colors transition-transform transition-shadow duration-500 border-l-8 border-[#001f3f] overflow-hidden">
              <div className="relative w-full lg:w-1/3 aspect-video lg:aspect-auto">
                <Image src={event.image} alt={event.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div className="p-10 flex-1 flex flex-col justify-center">
                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center gap-2 text-[#facc15] font-semibold  text-xs tracking-widest">
                    <Calendar size={16} /> {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 font-semibold  text-xs tracking-widest">
                    <MapPin size={16} /> {event.location}
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#001f3f]  mb-6 group-hover:text-[#facc15] transition-colors">{event.title}</h3>
                <p className="text-gray-600 mb-8 max-w-2xl leading-relaxed">{event.description}</p>
                <div>
                  <Button asChild className="bg-[#001f3f] hover:bg-[#002855] text-white rounded-none px-10 py-6 font-semibold  tracking-widest text-xs shadow-lg uppercase">
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
            <p className="text-xs md:text-sm font-semibold text-[#facc15] tracking-widest mb-2 uppercase">Get Involved</p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#001f3f]">Host A Vmc Fundraising Event</h2>
            <div className="h-1 w-20 bg-[#facc15] mx-auto mb-8"></div>
            <p className="text-base text-gray-500 mb-10 font-medium">You can organize an event in your local city to support VMC missions. We provide the resources and guidance you need to succeed.</p>
            <Button asChild className="bg-[#facc15] hover:bg-[#001f3f] text-[#001f3f] hover:text-white rounded-none px-12 py-8 font-semibold  tracking-widest text-sm shadow-lg uppercase">
              <Link href="/contact">Apply to Host</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
