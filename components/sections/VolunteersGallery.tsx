'use client';

import React from 'react';
import { SectionWrapper } from '@/components/section-wrapper';
import { Phone, Plus } from 'lucide-react';

export function VolunteersGallery() {
  const volunteers = [
    { image: 'https://alonethemes.com/wp-content/uploads/2020/11/volunteer-4.jpg', name: 'Paul Smith' },
    { image: 'https://alonethemes.com/wp-content/uploads/2020/11/volunteer-2.jpg', name: 'Alexandra Trab' },
    { image: 'https://alonethemes.com/wp-content/uploads/2020/11/volunteer-1.jpg', name: 'John Lincoln' },
    { image: 'https://alonethemes.com/wp-content/uploads/2020/11/volunteer-6.jpg', name: 'Paul Smith' },
    { image: 'https://alonethemes.com/wp-content/uploads/2020/11/volunteer-3.jpg', name: 'Alisha Mahen' },
    { image: 'https://alonethemes.com/wp-content/uploads/2020/11/volunteer-5.jpg', name: 'Andrew Bowe' },
  ];

  return (
    <SectionWrapper className="bg-white">
      <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
        <div>
          <div className="text-xs md:text-sm font-semibold text-[#facc15] tracking-widest mb-2 uppercase">
            We Help Thousand Of Peoples
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#001f3f] mb-4">
            Our Volunteers
          </h2>
          <div className="h-1 w-20 bg-[#facc15] mb-8"></div>
        </div>

        <div className="flex items-center gap-6 bg-gray-50 p-6 md:p-10 border-l-8 border-[#facc15] shadow-lg">
          <div className="w-16 h-16 bg-[#001f3f] rounded-full flex items-center justify-center shrink-0">
            <Phone size={32} className="text-[#facc15]" />
          </div>
          <div>
            <div className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-1">Have Any Question</div>
            <div className="text-[#001f3f] text-2xl md:text-3xl font-bold tabular-nums">888 99 0032</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {volunteers.map((v, i) => (
          <div key={i} className="group relative aspect-[3/4] bg-gray-100 overflow-hidden shadow-lg animate-in fade-in duration-500" style={{ animationDelay: `${i * 100}ms` }}>
            <img 
              src={v.image} 
              alt={v.name} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-[#001f3f]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-12 h-12 bg-[#facc15] rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500">
                <Plus size={24} className="text-[#001f3f]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
