import React from 'react';
import { SectionWrapper } from '@/components/section-wrapper';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function Newsletter() {
  return (
    <SectionWrapper className="bg-[#facc15] py-16 md:py-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#001f3f] mb-2">Subscribe to Our Newsletter</h2>
          <p className="text-[#001f3f]/80 font-medium">Get the latest updates on our global missions.</p>
        </div>
        <div className="w-full md:w-1/2">
          <form className="flex w-full max-w-md ml-auto">
            <Input 
              type="email" 
              placeholder="Your Email Address" 
              className="bg-white border-none rounded-none h-14 focus-visible:ring-0 text-[#001f3f]"
              required
            />
            <Button type="submit" className="bg-[#001f3f] hover:bg-[#002855] text-white h-14 px-8 rounded-none font-semibold tracking-widest uppercase">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
