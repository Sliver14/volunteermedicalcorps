'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-116px)] min-h-[600px] flex items-center overflow-hidden bg-white">
      {/* Background Image - Medical Volunteer / Relief context */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=2062&auto=format&fit=crop')` 
        }}
      >
        {/* Gradient Overlay - Strong white fade on the left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="max-w-xl">
            <h2 className="text-[#002855] text-lg md:text-xl font-bold tracking-widest mb-3 uppercase">
              Volunteer Medical Corps
            </h2>
            
            <h1 className="text-[2.8rem] sm:text-[3.8rem] md:text-[4.8rem] lg:text-[5.5rem] leading-[1.1] font-black text-[#002855] mb-6 tracking-tighter">
              JOIN OUR <br className="hidden sm:block" />COMMUNITY <br className="hidden sm:block" /><span className="text-[#facc15]">TODAY!</span>
            </h1>

            <p className="text-[#002855]/80 text-base md:text-[17px] leading-relaxed max-w-lg mb-8 font-medium">
              A global network of Christian health workers, para-medics, volunteers and students committed to providing medical care and relief assistance in regions of crisis.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                asChild
                className="bg-[#facc15] hover:bg-[#e5b800] text-[#002855] font-black rounded-none px-8 md:px-10 py-6 md:py-7 text-xs md:text-sm uppercase tracking-widest shadow-xl transition-all active:scale-[0.98]"
              >
                <Link href="/login">Log In</Link>
              </Button>
              
              <Button 
                asChild
                className="bg-[#002855] hover:bg-[#001f3f] text-white font-black rounded-none px-8 md:px-10 py-6 md:py-7 text-xs md:text-sm uppercase tracking-widest shadow-xl transition-all active:scale-[0.98]"
              >
                <Link href="/register">Sign Up</Link>
              </Button>

              <Button 
                asChild
                className="bg-red-600 hover:bg-red-700 text-white font-black rounded-none px-8 md:px-10 py-6 md:py-7 text-xs md:text-sm uppercase tracking-widest shadow-xl transition-all active:scale-[0.98]"
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
