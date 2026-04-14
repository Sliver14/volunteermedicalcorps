'use client';

import React from 'react';
import { SectionWrapper } from '@/components/section-wrapper';
import Image from 'next/image';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Jeanne Louise Ridge',
      location: 'Cape Town, South Africa',
      content: 'The VMC medical mission to our community was a life-saving event. We received care that we could never have afforded.',
      role: 'Community Member',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop'
    },
    {
      name: 'Dr. Samuel Okafor',
      location: 'Lagos, Nigeria',
      content: 'Being part of the VMC allows me to practice medicine with a higher purpose. The impact we make globally is truly inspiring.',
      role: 'VMC Doctor',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      name: 'Maria Gonzalez',
      location: 'Puebla, Mexico',
      content: 'The training programs provided by VMC Academy have empowered our local youth to become health pioneers in our village.',
      role: 'Health Volunteer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop'
    }
  ];

  return (
    <SectionWrapper className="bg-gray-50">
      <div className="text-center mb-12 md:mb-16">
        <div className="text-xs md:text-sm font-semibold text-[#facc15] tracking-widest mb-2 uppercase">Testimonials</div>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#001f3f] mb-4">Voices of Impact</h2>
        <div className="h-1 w-20 bg-[#facc15] mx-auto mb-8"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <div key={index} className="bg-white p-8 shadow-lg relative group border-b-4 border-transparent hover:border-[#facc15] transition-colors duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-100">
                <Image src={t.image} alt={t.name} fill className="object-cover" />
              </div>
              <div>
                <div className="text-[#001f3f] font-semibold text-sm">{t.name}</div>
                <div className="text-gray-400 text-[10px] font-medium uppercase tracking-tighter">{t.location}</div>
              </div>
            </div>
            <p className="text-gray-600 text-sm italic leading-relaxed relative z-10">
              "{t.content}"
            </p>
            <div className="absolute top-8 right-8 text-gray-100 text-6xl font-serif pointer-events-none group-hover:text-[#facc15]/10 transition-colors">"</div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
