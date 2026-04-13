import React from 'react';
import { SectionWrapper } from '@/components/section-wrapper';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Jeanne Louise Ridge',
      location: 'Cape Town, South Africa',
      role: 'Volunteer',
      text: 'I enjoy working with people and spreading the love of Jesus Christ, and this is one of the reasons why I chose to join the VMC.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop'
    },
    {
      name: 'Jerilee Pinheiro',
      location: 'Bangalore, India',
      role: 'HR professional',
      text: 'Our President Pastor Chris said we must find human needs and meet them. VMC is a platform where we can do just that. Whenever I go to an orphanage or an old age home, and then they see the love of Jesus in my eyes that experience is very rewarding and encouraging.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop'
    },
    {
      name: 'Patricia Pokhabela',
      location: 'Pietermaritzburg, South Africa',
      role: 'Radiographer',
      text: "I joined the VMC in 2019. I've always had a heart for community service work but I didn't know how or where to start. VMC gave me the platform to make an impact in my community and beyond.",
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <SectionWrapper className="bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-[#facc15] uppercase tracking-widest mb-2">Testimonials</h2>
        <h3 className="text-4xl md:text-5xl font-black text-[#001f3f] mb-4 uppercase">Voices of Impact</h3>
        <div className="h-1.5 w-24 bg-[#facc15] mx-auto mb-6"></div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <div key={index} className="bg-white p-10 shadow-xl relative border-t-4 border-[#facc15]">
            <div className="text-[#facc15] text-8xl font-serif absolute -top-4 left-4 opacity-10">"</div>
            <p className="text-gray-600 mb-8 relative z-10 italic leading-relaxed text-lg">"{t.text}"</p>
            <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
              <div className="w-14 h-14 bg-gray-200 rounded-full overflow-hidden shadow-md">
                <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-black text-[#001f3f] text-sm uppercase">{t.name}</h4>
                <div className="text-[11px] text-[#facc15] font-bold uppercase tracking-widest">{t.location}</div>
                <div className="text-[10px] text-gray-400 font-medium uppercase tracking-tighter mt-1">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
