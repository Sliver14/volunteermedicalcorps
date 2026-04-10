import React from 'react';
import { SectionWrapper } from '@/components/section-wrapper';

export function Testimonials() {
  return (
    <SectionWrapper>
      <div className="text-center mb-16">
        <h2 className="text-3xl font-black text-[#001f3f] mb-4">WHAT PEOPLE SAY</h2>
        <div className="h-1 w-20 bg-[#facc15] mx-auto mb-6"></div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-gray-50 p-8 border border-gray-100 relative">
            <div className="text-[#facc15] text-6xl font-serif absolute top-4 left-4 opacity-20">"</div>
            <p className="text-gray-600 mb-6 relative z-10 italic">"The medical corps truly changed the trajectory of our community recovery after the disaster. We are forever grateful."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                <img src="/placeholder-user.jpg" alt="User" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-black text-[#001f3f] text-sm">John Doe</h4>
                <span className="text-xs text-gray-500 uppercase tracking-widest">Community Leader</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
