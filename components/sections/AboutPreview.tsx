import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/section-wrapper';

export function AboutPreview() {
  return (
    <>
      {/* About Us */}
      <SectionWrapper className="bg-white">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2 className="text-xs md:text-sm font-bold text-[#facc15] uppercase tracking-widest mb-2">About Us</h2>
            <h3 className="text-3xl md:text-5xl font-black text-[#001f3f] mb-6 uppercase leading-tight">The Fastest Growing Outreach</h3>
            <div className="h-1 w-20 bg-[#facc15] mb-8"></div>
            <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
              The Volunteer Medical Corps is the fastest growing Christian medical outreach. The VMC was established as a global network of Christian health workers, para-medics, volunteers and students committed to providing medical care, relief assistance, and sustainable health care solutions in regions of crisis and to communities in dire need.
            </p>
            <Button asChild className="bg-[#002855] hover:bg-[#001f3f] text-white rounded-none px-8 py-6 font-black uppercase tracking-[0.15em] text-xs w-full md:w-auto">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
          <div className="relative aspect-video md:aspect-square bg-gray-100 shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
              alt="Medical Relief Assistance" 
              fill 
              className="object-cover" 
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Who We Are */}
      <SectionWrapper className="bg-gray-50">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-video md:aspect-square bg-gray-100 order-2 md:order-1 shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" 
              alt="Global Network of Health Workers" 
              fill 
              className="object-cover" 
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-xs md:text-sm font-bold text-[#facc15] uppercase tracking-widest mb-2">Who We Are</h2>
            <h3 className="text-3xl md:text-5xl font-black text-[#001f3f] mb-6 uppercase leading-tight">Global Network of Care</h3>
            <div className="h-1 w-20 bg-[#facc15] mb-8"></div>
            <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
              We are an ever-expanding global network of Christian health care workers, non-medical volunteers and students committed to providing medical care through outreaches, humanitarian assistance and sustainable health care solutions in regions of crisis and to communities in dire need.
            </p>
            <Button asChild className="bg-[#002855] hover:bg-[#001f3f] text-white rounded-none px-8 py-6 font-black uppercase tracking-[0.15em] text-xs w-full md:w-auto">
              <Link href="/register">Join Us Today</Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
