import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Calendar } from 'lucide-react';

interface EventProps {
  slug: string;
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
}

export function EventCard({ slug, id, title, date, location, description, image }: EventProps) {
  return (
    <Link href={`/events/${slug}/${id}`} className="group flex flex-col md:flex-row bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="relative md:w-1/3 aspect-[4/3] md:aspect-auto overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
      <div className="p-6 md:p-8 md:w-2/3 flex flex-col justify-center">
        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#facc15]  tracking-wider mb-4">
          <span className="flex items-center gap-1"><Calendar size={14} /> {date}</span>
          <span className="flex items-center gap-1"><MapPin size={14} /> {location}</span>
        </div>
        <h3 className="text-base font-semibold text-[#001f3f] mb-3 group-hover:text-[#002855] transition-colors">{title}</h3>
        <p className="text-gray-500 line-clamp-2">{description}</p>
      </div>
    </Link>
  );
}
