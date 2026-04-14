'use client';

import React, { useMemo, useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import Link from 'next/link';
import { motion, animate } from 'framer-motion';

function Counter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string, prefix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isAnimated.current) {
          isAnimated.current = true;
          animate(0, value, {
            duration: 2,
            ease: "easeOut",
            onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
          });
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
}

// TopoJSON for the world map
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Standard markers for consistency with detailed reporting
const markers = [
  { 
    name: "Nepal", 
    coordinates: [84.1240, 28.3949], 
    label: "Nepal Earthquake Relief",
    reached: "15,000+ Lives Impacted",
    support: "Emergency Medical Aid"
  },
  { 
    name: "Nigeria", 
    coordinates: [8.6753, 9.0820], 
    label: "West Africa Outreach",
    reached: "120,000+ Patients",
    support: "Primary Healthcare & Relief"
  },
  { 
    name: "South Africa", 
    coordinates: [22.9375, -30.5595], 
    label: "Southern Africa Missions",
    reached: "45,000+ Volunteers",
    support: "Disaster Management Training"
  },
  { 
    name: "India", 
    coordinates: [78.9629, 20.5937], 
    label: "Asia Medical Missions",
    reached: "85,000+ Reached",
    support: "Specialist Surgical Care"
  },
  { 
    name: "Philippines", 
    coordinates: [121.7740, 12.8797], 
    label: "SE Asia Relief",
    reached: "30,000+ Families",
    support: "Clean Water & Medical Kits"
  },
];

export function ImpactSection() {
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);

  // Memoize the map to prevent unnecessary re-renders
  const memoizedMap = useMemo(() => (
    <ComposableMap
      projectionConfig={{ scale: 160 }}
      className="w-full h-full"
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#001f3f" // Navy background for countries
              stroke="#facc15" // Yellow border between countries
              strokeWidth={0.2}
              style={{
                default: { outline: "none", opacity: 0.15 },
                hover: { outline: "none", opacity: 0.25 },
                pressed: { outline: "none" },
              }}
            />
          ))
        }
      </Geographies>
      {/* Map Markers - Pins Only */}
      {markers.map(({ name, coordinates }) => (
        <Marker 
          key={name} 
          coordinates={coordinates as [number, number]}
          onMouseEnter={() => setHoveredMarker(name)}
          onMouseLeave={() => setHoveredMarker(null)}
        >
          <g className="cursor-pointer group">
            <circle r={8} fill="#facc15" stroke="#fff" strokeWidth={2} />
            <circle r={16} fill="#facc15" opacity={0.2} className="animate-ping" />
          </g>
        </Marker>
      ))}

      {/* Active Tooltip - Rendered last to ensure it is always on top */}
      {hoveredMarker && (() => {
        const marker = markers.find(m => m.name === hoveredMarker);
        if (!marker) return null;
        return (
          <Marker coordinates={marker.coordinates as [number, number]}>
            <foreignObject x="20" y="-110" width="240" height="120" className="overflow-visible pointer-events-none">
              <div className="relative z-50 bg-white p-4 shadow-2xl border-b-4 border-[#facc15] animate-in fade-in zoom-in duration-200">
                <div className="text-[#facc15] text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1.5">{marker.label}</div>
                <div className="text-[#001f3f] text-sm md:text-base font-bold mb-1">{marker.reached}</div>
                <div className="text-gray-500 text-xs font-medium italic leading-tight">{marker.support}</div>
              </div>
            </foreignObject>
          </Marker>
        );
      })()}
    </ComposableMap>
  ), [hoveredMarker]);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-white font-sans overflow-hidden"
    >
      {/* Top Section - Impact Stats & Introduction */}
      <div className="py-20 lg:py-28">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            
            {/* Left Column - Stats (Fades in from LEFT, Right Aligned) - Sidebar */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-12 order-2 lg:order-1 lg:col-span-3 text-center lg:text-right flex flex-col items-center lg:items-end w-full"
            >
              <div className="w-full">
                <div className="text-[#001f3f] text-3xl md:text-4xl font-semibold mb-1 tracking-tight tabular-nums">
                  <Counter value={6478} />
                </div>
                <h3 className="text-gray-500 text-[10px] md:text-xs font-semibold uppercase tracking-widest whitespace-nowrap">Volunteers In 2025</h3>
              </div>

              <div className="h-px w-20 bg-gray-200"></div>

              <div className="w-full">
                <div className="text-[#001f3f] text-3xl md:text-4xl font-semibold mb-1 tracking-tight tabular-nums">
                  <Counter value={2348195} suffix="+" />
                </div>
                <h3 className="text-gray-500 text-[10px] md:text-xs font-semibold uppercase tracking-widest whitespace-nowrap">People Helped</h3>
              </div>

              <div className="h-px w-20 bg-gray-200"></div>

              <div className="w-full">
                <div className="text-[#001f3f] text-3xl md:text-4xl font-semibold mb-1 tracking-tight tabular-nums">
                  <Counter value={16} prefix="$" suffix="M" />
                </div>
                <h3 className="text-gray-500 text-[10px] md:text-xs font-semibold uppercase tracking-widest whitespace-nowrap">Funds Collected</h3>
              </div>
            </motion.div>

            {/* Right Column - Organization Info (Fades in from RIGHT, Left Aligned) - Expansive Width */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="order-1 lg:order-2 lg:col-span-9 text-center lg:text-left flex flex-col items-center lg:items-start w-full"
            >
              <h2 className="text-xs md:text-sm font-semibold text-[#facc15] tracking-widest mb-2 uppercase w-full">
                VMC Global Impact
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#001f3f] mb-4 uppercase tracking-tighter w-full leading-tight">
                We Are A World Wide Organization
              </h3>
              <div className="h-1 w-20 bg-[#facc15] mb-8 lg:ml-0"></div>
              
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10 w-full max-w-none">
                The Volunteer Medical Corps is a global network committed to making a positive impact across communities, cultures, and countries. With a presence on every continent, we unite people, resources, and ideas to drive meaningful change.
              </p>

              <Button asChild className="bg-[#001f3f] hover:bg-[#002855] text-white font-semibold px-10 py-7 rounded-none text-xs md:text-sm tracking-widest uppercase shadow-lg transition-colors active:scale-95">
                <Link href="/about">Organization Info</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Sponsor/Map Banner */}
      <div className="bg-[#facc15] py-0 relative min-h-[450px] flex items-center overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            {/* Left Column - Sponsor Info */}
            <div className="py-16">
              <div className="inline-block bg-[#001f3f] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest mb-6 shadow-sm">
                Sponsor Our Missions
              </div>
              <h2 className="text-[#001f3f] text-2xl md:text-4xl font-semibold leading-tight mb-4 uppercase tracking-tight">
                Help Us Strengthen <br /> Global Healthcare
              </h2>
              <p className="text-[#001f3f]/80 text-lg md:text-xl font-medium mb-8">
                Protect and enhance lives worldwide.
              </p>

              <Button variant="outline" asChild className="border-2 border-[#001f3f] bg-transparent text-[#001f3f] hover:bg-[#001f3f] hover:text-white font-bold px-10 py-7 rounded-none text-xs tracking-widest uppercase transition-all shadow-md">
                <Link href="/campaigns">Our Campaigns</Link>
              </Button>
            </div>

            {/* Right Column - Map with Hotspots (overlay) */}
            <div className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 opacity-90 pointer-events-auto">
              {memoizedMap}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
