'use client';

import React from 'react';
import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HelpingHand() {
  return (
    <SectionWrapper className="bg-[#001f3f] text-white overflow-hidden">
      <div className="text-center space-y-8 animate-in fade-in duration-1000">
        <div>
          <div className="text-xs md:text-sm font-semibold text-[#facc15] tracking-widest mb-2 uppercase">
            We’re worldwide non-profit charity.
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-widest mb-4 text-white">
            Give A Helping Hand For <br /> Needy People
          </h2>
          <div className="h-1 w-20 bg-[#facc15] mx-auto mb-8"></div>
        </div>
        
        <p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto mb-12 tracking-widest">
          Give A Helping Hand For Needy People is a call to compassion and action. Our organization is devoted to reaching out to those facing hardship — offering food, shelter, medical care, and emotional support to individuals and families in need.
        </p>

        <Button asChild className="bg-[#facc15] hover:bg-[#e5b800] text-[#001f3f] font-semibold px-10 md:px-14 py-7 md:py-9 rounded-none text-xs md:text-sm tracking-widest transition-all shadow-lg active:scale-95 uppercase">
          <Link href="/register">Become A Volunteer</Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
