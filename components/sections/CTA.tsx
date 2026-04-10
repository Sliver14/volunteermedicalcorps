import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/section-wrapper';

export function CTA() {
  return (
    <SectionWrapper className="bg-[#002855] text-white">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-6">READY TO MAKE A DIFFERENCE?</h2>
        <p className="text-xl text-white/80 mb-10">Whether by volunteering your medical expertise or supporting our missions financially, your contribution saves lives.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="bg-[#facc15] hover:bg-white text-[#001f3f] rounded-none px-10 py-7 font-black uppercase tracking-[0.15em] text-[11px] shadow-lg">
            <Link href="/register">BECOME A VOLUNTEER</Link>
          </Button>
          <Button asChild variant="outline" className="border-2 border-[#facc15] text-[#facc15] hover:bg-[#facc15] hover:text-[#001f3f] rounded-none px-10 py-7 font-black uppercase tracking-[0.15em] text-[11px] shadow-lg">
            <Link href="/donate">Give Now</Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
