'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100dvh-80px)] sm:min-h-[calc(100dvh-120px)] flex items-center overflow-hidden bg-white py-12 sm:py-0">
      {/* Background Image - Medical Volunteer / Relief context */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat blur-[2px] sm:blur-0 scale-105 sm:scale-100 transition-all duration-1000"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=2062&auto=format&fit=crop')` 
        }}
      >
        {/* Gradient Overlay - Adaptive for all views */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/40 sm:bg-gradient-to-r sm:from-white sm:via-white/95 sm:to-white/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Main Content Area */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl text-center lg:text-left mx-auto lg:ml-0 flex flex-col items-center lg:items-start"
          >
            <h2 className="text-[#002855] text-[10px] sm:text-xs md:text-sm lg:text-xl font-bold tracking-[0.3em] mb-4 uppercase bg-[#facc15]/20 px-3 py-1 inline-block">
              Volunteer Medical Corps
            </h2>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#002855] mb-6 tracking-tighter leading-[1] uppercase">
              Join Our <br className="hidden xs:block" />Community <br className="hidden xs:block" /><span className="text-[#facc15] drop-shadow-sm">Today!</span>
            </h1>

            <p className="text-[#002855]/90 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md mb-10 font-medium">
              A global network of Christian health workers, para-medics, volunteers and students committed to providing medical care and relief assistance.
            </p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 w-full sm:w-auto"
            >
              <Button 
                asChild
                className="bg-[#facc15] hover:bg-[#e5b800] text-[#002855] font-black rounded-none px-8 py-7 text-xs sm:text-sm tracking-widest uppercase shadow-[0_8px_30px_rgb(250,204,21,0.3)] transition-all active:scale-95 w-full sm:w-auto"
              >
                <Link href="/login">Log In</Link>
              </Button>
              
              <Button 
                asChild
                className="bg-[#002855] hover:bg-[#001f3f] text-white font-black rounded-none px-8 py-7 text-xs sm:text-sm tracking-widest uppercase shadow-[0_8px_30px_rgb(0,40,85,0.3)] transition-all active:scale-95 w-full sm:w-auto"
              >
                <Link href="/register">Sign Up</Link>
              </Button>

              <Button 
                asChild
                className="bg-red-600 hover:bg-red-700 text-white font-black rounded-none px-8 py-7 text-xs sm:text-sm tracking-widest uppercase shadow-[0_8px_30px_rgb(220,38,38,0.3)] transition-all active:scale-95 w-full sm:w-auto"
              >
                <Link href="/donate">Give</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side visual balance for desktop */}
          <div className="hidden lg:block h-1"></div>
        </div>
      </div>
    </section>
  );
}
