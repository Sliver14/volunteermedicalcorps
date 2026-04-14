import { PageLayout } from '@/components/page-layout';
import { SectionWrapper } from '@/components/section-wrapper';
import { events } from '@/lib/data/events';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, MapPin } from 'lucide-react';

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string, id: string }> }) {
  const resolvedParams = await params;
  const event = events.find(e => e.id === resolvedParams.id);
  if (!event) return notFound();

  return (
    <PageLayout>
      <div className="relative h-[40vh] min-h-[300px] w-full">
        <Image src={event.image} alt={event.title} fill className="object-cover"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full text-white">
            <div className="flex flex-wrap gap-6 text-xs md:text-sm font-semibold text-[#facc15] uppercase tracking-widest mb-4">
              <span className="flex items-center gap-2"><Calendar size={16} /> {event.date}</span>
              <span className="flex items-center gap-2"><MapPin size={16} /> {event.location}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold mb-6">{event.title}</h1>
            <div className="h-1 w-20 bg-[#facc15]"></div>
          </div>
        </div>
      </div>
      <SectionWrapper>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 prose max-w-none">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#001f3f] mb-4">Event Details</h2>
            <p className="text-lg text-gray-600 mb-8">{event.description}</p>
            <h3 className="text-xl md:text-2xl font-semibold text-[#001f3f] mb-4">Activities</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              {event.activities.map((activity, i) => (
                <li key={i}>{activity}</li>
              ))}
            </ul>
          </div>
          <div>
             <div className="bg-gray-50 p-8 border border-gray-100">
                <h3 className="text-xl md:text-2xl font-semibold text-[#001f3f] mb-4">Interested?</h3>
                <p className="text-gray-500 text-sm mb-6">Join us for this event and make a difference.</p>
                <button className="w-full bg-[#facc15] hover:bg-[#002855] text-[#001f3f] hover:text-white rounded-none py-4 font-semibold uppercase tracking-widest transition-colors text-xs md:text-sm">
                  Register For Event
                </button>
             </div>
          </div>
        </div>
      </SectionWrapper>
    </PageLayout>
  );
}
