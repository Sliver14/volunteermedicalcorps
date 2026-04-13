import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/section-wrapper';

export function CTA() {
  const partnerOptions = [
    { title: 'Sponsor Relief Missions', image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Adopt a Community Health Extension Worker', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Sponsor a Good Deeds Project Today!', image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop' },
  ];

  return (
    <SectionWrapper className="bg-[#002855] text-white">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-xs md:text-sm font-bold text-[#facc15] uppercase tracking-widest mb-2">Get Involved</h2>
        <h3 className="text-3xl md:text-5xl font-black mb-4 uppercase">Partner with Us</h3>
        <div className="h-1.5 w-24 bg-[#facc15] mx-auto mb-6"></div>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {partnerOptions.map((option, index) => (
          <div key={index} className="bg-white text-[#001f3f] p-6 md:p-8 shadow-2xl flex flex-col h-full border-b-8 border-[#facc15]">
            <div className="relative aspect-video mb-6 overflow-hidden">
              <Image 
                src={option.image} 
                alt={option.title} 
                fill 
                className="object-cover" 
              />
            </div>
            <h4 className="text-lg md:text-xl font-black mb-8 uppercase leading-tight flex-grow">{option.title}</h4>
            <Button asChild className="w-full bg-[#001f3f] hover:bg-[#002855] text-white rounded-none font-black uppercase tracking-widest py-6 md:py-7 shadow-lg text-xs md:text-sm">
              <Link href="/donate">Donate</Link>
            </Button>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
