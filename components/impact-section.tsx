'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

// TopoJSON for the world map
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const markers = [
  { markerOffset: -15, name: "Nepal", coordinates: [84.1240, 28.3949] },
  { markerOffset: -15, name: "Africa", coordinates: [20.0, 5.0] },
  { markerOffset: -15, name: "South America", coordinates: [-60.0, -20.0] },
  { markerOffset: -15, name: "Australia", coordinates: [133.0, -25.0] },
];

export function ImpactSection() {
  return (
    <section className="py-20 bg-white font-sans">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Statistics */}
          <div className="space-y-10">
            <div>
              <div className="text-[#002855] text-7xl font-black tracking-tighter">378</div>
              <div className="text-[#002855] text-xl font-bold mt-2 opacity-90">Volunteers In 2025</div>
              <div className="h-[2px] w-16 bg-[#002855]/20 my-8"></div>
            </div>

            <div>
              <div className="text-[#002855] text-7xl font-black tracking-tighter leading-none">2,348,195</div>
              <div className="text-[#002855] text-xl font-bold mt-4 opacity-90">People We Helped In 2025</div>
              <div className="h-[2px] w-16 bg-[#002855]/20 my-8"></div>
            </div>

            <div>
              <div className="flex items-baseline">
                <span className="text-[#002855] text-7xl font-black tracking-tighter">$16</span>
                <span className="text-[#002855] text-5xl font-black tracking-tighter ml-1">M</span>
              </div>
              <div className="text-[#002855] text-xl font-bold mt-2 opacity-90">Funds We Collected</div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="relative">
            <p className="text-[#002855] font-semibold text-lg mb-4">
              Help The Poors With Alone Organization
            </p>
            
            <h2 className="text-[#002855] text-5xl md:text-6xl font-black leading-[1.1] tracking-tight mb-8">
              WE ARE WORLD WIDE<br />ORGANIZATION
            </h2>

            <p className="text-[#4b5563] text-lg leading-relaxed max-w-lg mb-10">
              We Are World Wide Organization is a global network committed to making a positive impact across 
              communities, cultures, and countries. With a presence on every continent, we unite people, 
              resources, and ideas to drive meaningful change.
            </p>

            <Button className="bg-[#facc15] hover:bg-[#002855] hover:text-white text-[#002855] font-black px-10 py-8 rounded-none text-sm uppercase tracking-[0.2em] transition-colors duration-300">
              ORGANIZATION INFO
            </Button>
          </div>
        </div>

        {/* Yellow Campaign Section */}
        <div className="mt-24 bg-[#fde047] rounded-sm shadow-sm">
          <div className="grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-20">
            
            {/* Left - Campaign Info */}
            <div className="z-10">
              <div className="inline-block bg-[#002855] text-white text-[10px] font-bold px-5 py-2 mb-8 tracking-[0.2em]">
                SPONSOR THIS PROJECT
              </div>

              <h3 className="text-[#002855] text-4xl md:text-5xl font-black leading-[1.1] mb-6">
                HELP NEPAL TO OVERCOME<br />FROM HUGE EARTHQUAKE
              </h3>

              <p className="text-[#002855]/70 text-xl font-medium mb-12 italic">
                Protect and enhance poverty.
              </p>

              <Button 
                variant="outline"
                className="border-[3px] border-[#002855] bg-transparent text-[#002855] hover:bg-[#002855] hover:text-white font-black px-12 py-8 rounded-none uppercase tracking-[0.2em] transition-all"
              >
                OUR CAMPAIGNS
              </Button>
            </div>

            {/* Right - Functional World Map */}
            <div className="relative h-[300px] lg:h-[450px] w-full">
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
                        stroke="#fde047"
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
                {markers.map(({ name, coordinates, markerOffset }) => (
                  <Marker key={name} coordinates={coordinates as [number, number]}>
                    <circle r={6} fill="#7c2d12" stroke="#fff" strokeWidth={2} />
                    <circle r={12} fill="#7c2d12" opacity={0.2} />
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