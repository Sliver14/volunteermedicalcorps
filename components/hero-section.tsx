'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative min-h-[700px] flex items-center overflow-hidden bg-white">
      {/* Background Image - Medical Volunteer / Relief context */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop')` 
        }}
      >
        {/* Gradient Overlay - Strong white fade on the left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="max-w-xl pt-12 lg:pt-0">
            <h2 className="text-[#002855] text-xl md:text-2xl font-bold tracking-wider mb-3 uppercase">
              Volunteer Medical Corps
            </h2>
            
            <h1 className="text-[3.8rem] md:text-[4.8rem] lg:text-[5.5rem] leading-none font-extrabold text-[#002855] mb-8">
              Join our Community<br />Today!
            </h1>

            <p className="text-[#002855]/80 text-[17px] leading-relaxed max-w-lg mb-10 font-medium">
              A global network of Christian health workers, para-medics, volunteers and students committed to providing medical care and relief assistance in regions of crisis.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                asChild
                className="bg-[#facc15] hover:bg-[#e5b800] text-[#002855] font-bold rounded-none px-10 py-7 text-sm uppercase tracking-wider shadow-md transition-all active:scale-[0.98]"
              >
                <Link href="/login">Log In</Link>
              </Button>
              
              <Button 
                asChild
                className="bg-[#002855] hover:bg-[#001f3f] text-white font-bold rounded-none px-10 py-7 text-sm uppercase tracking-wider shadow-md transition-all active:scale-[0.98]"
              >
                <Link href="/register">Sign Up</Link>
              </Button>

              <Button 
                asChild
                className="bg-red-600 hover:bg-red-700 text-white font-bold rounded-none px-10 py-7 text-sm uppercase tracking-wider shadow-md transition-all active:scale-[0.98]"
              >
                <Link href="/donate">Give</Link>
              </Button>
            </div>
          </div>

          {/* Right side spacer for background image */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}