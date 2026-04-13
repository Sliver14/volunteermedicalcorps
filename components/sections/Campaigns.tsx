import React from 'react';
import { SectionWrapper } from '@/components/section-wrapper';
import { CampaignCard } from '@/components/campaign-card';
import { campaigns } from '@/lib/data/campaigns';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Campaigns() {
  const goodDeeds = [
    { title: 'Praying for the Sick', image: 'https://images.unsplash.com/photo-1515658323406-25d61c141a6e?q=80&w=1909&auto=format&fit=crop' },
    { title: 'Recruiting New VMC Volunteers', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop' },
    { title: 'Administer First Aid at public events', image: 'https://images.unsplash.com/photo-1542884748-2b87b36c6b90?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Organize a VMC Fundraising Campaign', image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Volunteer Health Worker', image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Volunteer as a Kitchen Help', image: 'https://images.unsplash.com/photo-1591336395447-731383794186?q=80&w=2070&auto=format&fit=crop' },
  ];

  return (
    <>
      {/* Sign Up for VMC Campaigns */}
      <section className="py-24 bg-[#001f3f] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#facc15]/10 skew-x-12 translate-x-1/2"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight max-w-4xl mx-auto uppercase">
            Sign Up for these VMC Campaigns and Earn Verified Volunteer Hours
          </h2>
          <p className="text-[#facc15] text-xl md:text-2xl font-bold mb-10 tracking-wide uppercase">
            Over 60 million volunteering hours recorded and still counting
          </p>
          <Button asChild size="lg" className="bg-[#facc15] hover:bg-[#e5b800] text-[#001f3f] rounded-none px-12 py-8 text-lg font-black uppercase tracking-widest shadow-2xl transition-transform active:scale-95">
            <Link href="/register">Start Today!</Link>
          </Button>
        </div>
      </section>

      {/* Active Campaigns Section */}
      <SectionWrapper className="bg-gray-50">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold text-[#facc15] uppercase tracking-widest mb-2">Our Missions</h2>
            <h3 className="text-4xl md:text-5xl font-black text-[#001f3f] uppercase">Active Campaigns</h3>
            <div className="h-1.5 w-24 bg-[#facc15] mt-4"></div>
          </div>
          <Link href="/campaigns" className="text-[#001f3f] font-bold uppercase tracking-widest hover:text-[#facc15] transition-colors text-sm border-b-2 border-[#facc15] pb-1">
            View All Campaigns →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map(c => (
            <CampaignCard key={c.id} {...c} />
          ))}
        </div>
      </SectionWrapper>

      {/* Good Deeds Campaigns */}
      <SectionWrapper className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[#facc15] uppercase tracking-widest mb-2">Community Impact</h2>
          <h3 className="text-4xl md:text-5xl font-black text-[#001f3f] mb-4 uppercase">Good Deeds Campaigns</h3>
          <div className="h-1.5 w-24 bg-[#facc15] mx-auto mb-6"></div>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-sm max-w-2xl mx-auto leading-relaxed">
            Join thousands of volunteers making a difference in their local communities through these impactful initiatives.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {goodDeeds.map((campaign, index) => (
            <div key={index} className="group relative overflow-hidden bg-gray-900 aspect-[4/5] shadow-xl">
              <Image 
                src={campaign.image} 
                alt={campaign.title} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-60" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001f3f] via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-white text-2xl font-black mb-6 leading-tight uppercase">{campaign.title}</h3>
                <Button asChild className="w-full bg-[#facc15] hover:bg-[#e5b800] text-[#001f3f] rounded-none font-bold uppercase tracking-widest py-8 shadow-xl">
                  <Link href="/campaigns">View Campaign</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
