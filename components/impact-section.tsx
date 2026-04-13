'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import Link from 'next/link';

// TopoJSON for the world map
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const markers = [
  { name: "Nigeria", coordinates: [8.6753, 9.0820] },
  { name: "South Africa", coordinates: [22.9375, -30.5595] },
  { name: "India", coordinates: [78.9629, 20.5937] },
  { name: "Philippines", coordinates: [121.7740, 12.8797] },
  { name: "UK", coordinates: [-3.4360, 55.3781] },
];

export function ImpactSection() {
  return (
    <section className="py-16 md:py-24 bg-white font-sans overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Statistics */}
          <div className="space-y-8 md:space-y-10 order-2 lg:order-1">
            <div className="group">
              <div className="text-[#002855] text-5xl md:text-7xl font-black tracking-tighter transition-transform group-hover:translate-x-2 duration-300">150,000+</div>
              <div className="text-[#002855] text-lg md:text-xl font-bold mt-2 uppercase tracking-widest text-[#facc15]">Global Volunteers</div>
              <div className="h-[2px] w-16 bg-[#facc15] my-6 md:my-8 transition-all group-hover:w-24 duration-300"></div>
            </div>

            <div className="group">
              <div className="text-[#002855] text-5xl md:text-7xl font-black tracking-tighter leading-none transition-transform group-hover:translate-x-2 duration-300">2.5M+</div>
              <div className="text-[#002855] text-lg md:text-xl font-bold mt-4 uppercase tracking-widest text-[#facc15]">Patients Treated</div>
              <div className="h-[2px] w-16 bg-[#facc15] my-6 md:my-8 transition-all group-hover:w-24 duration-300"></div>
            </div>

            <div className="group">
              <div className="flex items-baseline transition-transform group-hover:translate-x-2 duration-300">
                <span className="text-[#002855] text-5xl md:text-7xl font-black tracking-tighter">60</span>
                <span className="text-[#002855] text-3xl md:text-5xl font-black tracking-tighter ml-1">M+</span>
              </div>
              <div className="text-[#002855] text-lg md:text-xl font-bold mt-2 uppercase tracking-widest text-[#facc15]">Volunteering Hours</div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="relative order-1 lg:order-2 text-center lg:text-left">
            <p className="text-[#facc15] font-black text-sm md:text-lg mb-4 uppercase tracking-[0.2em]">
              VMC Global Impact
            </p>
            
            <h2 className="text-[#002855] text-3xl md:text-6xl font-black leading-tight tracking-tight mb-6 md:mb-8 uppercase">
              WE ARE A GLOBAL<br className="hidden md:block" /> NETWORK OF CARE
            </h2>

            <p className="text-[#4b5563] text-base md:text-lg leading-relaxed max-w-lg mb-8 md:mb-10 mx-auto lg:mx-0">
              The Volunteer Medical Corps is committed to providing medical care, relief assistance, and sustainable 
              health care solutions in regions of crisis and to communities in dire need worldwide.
            </p>

            <Button asChild className="bg-[#002855] hover:bg-[#001f3f] text-white font-black px-8 md:px-10 py-6 md:py-8 rounded-none text-xs md:text-sm uppercase tracking-[0.2em] transition-all shadow-xl active:scale-95">
              <Link href="/about">Organization Info</Link>
            </Button>
          </div>
        </div>

        {/* Yellow Campaign Section */}
        <div className="mt-16 md:mt-24 bg-[#facc15] rounded-none shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 skew-x-12 translate-x-1/2"></div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center p-8 md:p-16 lg:p-20 relative z-10">
            
            {/* Left - Campaign Info */}
            <div className="text-center lg:text-left">
              <div className="inline-block bg-[#002855] text-white text-[9px] md:text-[10px] font-black px-5 py-2 mb-6 md:mb-8 tracking-[0.2em] uppercase">
                SPONSOR OUR MISSIONS
              </div>

              <h3 className="text-[#002855] text-2xl md:text-5xl font-black leading-tight mb-6 uppercase">
                HELP US STRENGTHEN<br className="hidden md:block" /> GLOBAL HEALTHCARE
              </h3>

              <p className="text-[#002855]/70 text-lg md:text-xl font-bold mb-8 md:mb-12 italic uppercase tracking-wider">
                Healing the world with love.
              </p>

              <Button 
                asChild
                variant="outline"
                className="border-[3px] border-[#002855] bg-transparent text-[#002855] hover:bg-[#002855] hover:text-white font-black px-10 md:px-12 py-6 md:py-8 rounded-none uppercase tracking-[0.2em] transition-all text-xs md:text-sm w-full sm:w-auto"
              >
                <Link href="/campaigns">OUR CAMPAIGNS</Link>
              </Button>
            </div>

            {/* Right - Functional World Map */}
            <div className="relative h-[250px] sm:h-[350px] lg:h-[450px] w-full transform group-hover:scale-105 transition-transform duration-700">
              <ComposableMap
                projectionConfig={{ scale: 145 }}
                className="w-full h-full"
              >
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#002855"
                        stroke="#facc15"
                        strokeWidth={0.5}
                        style={{
                          default: { outline: "none", opacity: 0.15 },
                          hover: { outline: "none", opacity: 0.25 },
                          pressed: { outline: "none" },
                        }}
                      />
                    ))
                  }
                </Geographies>
                {markers.map(({ name, coordinates }) => (
                  <Marker key={name} coordinates={coordinates as [number, number]}>
                    <circle r={4} className="md:r-6" fill="#002855" stroke="#fff" strokeWidth={2} />
                    <circle r={10} className="md:r-12" fill="#002855" opacity={0.2} className="animate-pulse" />
                  </Marker>
                ))}
              </ComposableMap>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
