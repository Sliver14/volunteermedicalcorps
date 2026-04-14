'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative h-[calc(100dvh-120px)] lg:h-[calc(100vh-120px)] min-h-[480px] flex items-center overflow-hidden bg-white">
      {/* Background Image - Medical Volunteer / Relief context */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat blur-[4px] sm:blur-0 scale-105 sm:scale-100 transition-all duration-1000"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=2062&auto=format&fit=crop')` 
        }}
      >
        {/* Gradient Overlay - Adaptive for all views */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-transparent sm:bg-gradient-to-r sm:from-white sm:via-white/95 sm:to-white/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-4 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-12 items-center">
          
          {/* Main Content Area */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl text-center lg:text-left mx-auto lg:ml-0"
          >
            <h2 className="text-[#002855] text-xs sm:text-sm md:text-base lg:text-xl font-semibold tracking-[0.2em] mb-1 uppercase">
              Volunteer Medical Corps
            </h2>
            
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-[#002855] mb-3 tracking-tighter leading-[1.1] uppercase">
              Join Our <br className="hidden sm:block" />Community <br className="hidden sm:block" /><span className="text-[#facc15]">Today!</span>
            </h1>

            <p className="text-[#002855]/80 text-[13px] sm:text-base lg:text-lg leading-relaxed max-w-lg mb-6 font-medium mx-auto lg:ml-0">
              A global network of Christian health workers, para-medics, volunteers and students committed to providing medical care and relief assistance.
            </p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-2 sm:gap-3"
            >
              <Button 
                asChild
                className="bg-[#facc15] hover:bg-[#e5b800] text-[#002855] font-semibold rounded-none px-6 py-4 text-xs md:text-sm tracking-widest uppercase shadow-lg transition-all active:scale-95 sm:w-auto"
              >
                <Link href="/login">Log In</Link>
              </Button>
              
              <Button 
                asChild
                className="bg-[#002855] hover:bg-[#001f3f] text-white font-semibold rounded-none px-6 py-4 text-xs md:text-sm tracking-widest uppercase shadow-lg transition-all active:scale-95 sm:w-auto"
              >
                <Link href="/register">Sign Up</Link>
              </Button>

              <Button 
                asChild
                className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded-none px-6 py-4 text-xs md:text-sm tracking-widest uppercase shadow-lg transition-all active:scale-95 sm:w-auto"
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
