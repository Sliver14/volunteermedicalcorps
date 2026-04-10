import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/section-wrapper';

export function AboutPreview() {
  return (
    <SectionWrapper>
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-sm font-bold text-[#facc15] uppercase tracking-widest mb-2">Who We Are</h2>
          <h3 className="text-4xl md:text-5xl font-black text-[#001f3f] mb-6">A GLOBAL NETWORK OF CARE</h3>
          <div className="h-1 w-20 bg-[#facc15] mb-8"></div>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            We are dedicated to providing immediate medical relief and establishing long-term health solutions in the world's most vulnerable communities.
          </p>
          <Button asChild className="bg-[#002855] hover:bg-[#001f3f] text-white rounded-none px-8 py-6 font-black uppercase tracking-[0.15em] text-xs">
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
        <div className="relative aspect-video md:aspect-square bg-gray-100">
          <Image src="/placeholder.jpg" alt="About Us Preview" fill className="object-cover" />
        </div>
      </div>
    </SectionWrapper>
  );
}
