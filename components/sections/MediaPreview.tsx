'use client';

import React from 'react';
import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Camera, Play, ArrowRight } from 'lucide-react';

export function MediaPreview() {
  return (
    <SectionWrapper className="bg-white">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-xs md:text-sm font-semibold text-[#facc15]  tracking-widest mb-2 uppercase">Our Visual Journey</h2>
        <h3 className="text-2xl md:text-3xl font-semibold text-[#001f3f] mb-4  leading-tight">Media Gallery</h3>
        <div className="h-1 w-20 bg-[#facc15] mx-auto mb-8"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {/* Photo Gallery Preview */}
        <Link href="/media/photos" className="group relative bg-[#001f3f] overflow-hidden aspect-video shadow-lg border-b-8 border-[#facc15]">
          <Image 
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop" 
            alt="Photo Gallery" 
            fill 
            className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-110" 
           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001f3f] via-transparent to-transparent"></div>
          <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
            <Camera size={32} className="text-[#facc15] mb-4 md:mb-6 transform group-hover:-translate-y-2 transition-transform duration-300 md:w-10 md:h-10" />
            <h4 className="text-base md:text-base font-semibold text-white  mb-2 tracking-tighter">Photo Gallery</h4>
            <p className="text-white/70 font-semibold  tracking-widest text-[10px] md:text-xs flex items-center gap-2 group-hover:translate-x-2 transition-transform">
              View All Photos <ArrowRight size={14} />
            </p>
          </div>
        </Link>

        {/* Video Gallery Preview */}
        <Link href="/media/videos" className="group relative bg-[#001f3f] overflow-hidden aspect-video shadow-lg border-b-8 border-[#001f3f]">
          <Image 
            src="https://images.unsplash.com/photo-1515658323406-25d61c141a6e?q=80&w=1909&auto=format&fit=crop" 
            alt="Video Gallery" 
            fill 
            className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-110" 
           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001f3f] via-transparent to-transparent"></div>
          <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#facc15] rounded-full flex items-center justify-center mb-4 md:mb-6 transform group-hover:scale-110 transition-transform shadow-lg">
              <Play size={20} className="text-[#001f3f] fill-current ml-1 md:w-6 md:h-6" />
            </div>
            <h4 className="text-base md:text-base font-semibold text-white  mb-2 tracking-tighter">Video Gallery</h4>
            <p className="text-white/70 font-semibold  tracking-widest text-[10px] md:text-xs flex items-center gap-2 group-hover:translate-x-2 transition-transform">
              Watch All Videos <ArrowRight size={14} />
            </p>
          </div>
        </Link>
      </div>
    </SectionWrapper>
  );
}
