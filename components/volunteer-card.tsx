import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface VolunteerProps {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
}

export function VolunteerCard({ id, name, role, specialty, image }: VolunteerProps) {
  return (
    <Link href={`/volunteers/${id}`} className="group flex flex-col bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Image src={image} alt={name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-black text-[#001f3f] mb-1">{name}</h3>
        <p className="text-[#facc15] font-bold text-sm uppercase tracking-wider mb-2">{role}</p>
        <p className="text-gray-500 text-sm">{specialty}</p>
      </div>
    </Link>
  );
}
