'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function MissionSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-[#001f3f] text-white">
      {/* Background Motion Effect Simulation */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-100 ease-linear scale-110"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-1000">
            <div>
              <h3 className="text-[#facc15] text-sm md:text-base font-semibold tracking-widest mb-4">
                Mission is Give for People
              </h3>
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-semibold leading-tight tracking-tighter">
                Some People Need Help And We Give It!
              </h2>
            </div>
            
            <p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
              We Help All People Around the World is more than a mission — it’s a promise
            </p>
          </div>

          {/* Right Column */}
          <div className="flex justify-center md:justify-end">
            <Button asChild className="bg-[#facc15] hover:bg-[#e5b800] text-[#001f3f] font-semibold px-10 md:px-14 py-7 md:py-9 rounded-none text-xs md:text-sm tracking-widest transition-all shadow-2xl active:scale-95 uppercase">
              <Link href="/campaigns">Discover More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
