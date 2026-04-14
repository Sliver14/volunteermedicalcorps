'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const sponsors = [
  { name: 'Sponsor 1', logo: 'https://alonethemes.com/wp-content/uploads/2020/10/pmr-logo-1.png' },
  { name: 'Sponsor 2', logo: 'https://alonethemes.com/wp-content/uploads/2020/10/pmr-logo-2.png' },
  { name: 'Sponsor 3', logo: 'https://alonethemes.com/wp-content/uploads/2020/10/pmr-logo-3.png' },
  { name: 'Sponsor 4', logo: 'https://alonethemes.com/wp-content/uploads/2020/10/pmr-logo-4.png' },
  { name: 'Sponsor 5', logo: 'https://alonethemes.com/wp-content/uploads/2021/06/pmr-logo-5-1.png' },
];

export function SponsorCarousel() {
  // Double the array for seamless looping
  const duplicatedSponsors = [...sponsors, ...sponsors, ...sponsors];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="py-12 bg-gray-50/50 border-y border-gray-100 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 mb-8 text-center">
        <h2 className="text-[10px] md:text-xs font-semibold text-gray-400 uppercase tracking-[0.3em]">
          Our Trusted Partners & Sponsors
        </h2>
      </div>
      
      <div className="relative flex">
        {/* Infinite Scroll Container */}
        <div className="flex animate-scroll hover:[animation-play-state:paused] whitespace-nowrap border-r border-transparent">
          {duplicatedSponsors.map((sponsor, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center mx-8 md:mx-16 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <div className="relative w-32 h-16 md:w-40 md:h-20">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 128px, 160px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </motion.section>
  );
}
