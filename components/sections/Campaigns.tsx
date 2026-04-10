import React from 'react';
import { SectionWrapper } from '@/components/section-wrapper';
import { CampaignCard } from '@/components/campaign-card';
import { campaigns } from '@/lib/data/campaigns';
import Link from 'next/link';

export function Campaigns() {
  return (
    <SectionWrapper className="bg-gray-50">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl font-black text-[#001f3f] mb-4">ACTIVE CAMPAIGNS</h2>
          <div className="h-1 w-20 bg-[#facc15]"></div>
        </div>
        <Link href="/campaigns" className="text-[#001f3f] font-bold uppercase tracking-widest hover:text-[#facc15] transition-colors text-sm">
          View All →
        </Link>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {campaigns.slice(0, 3).map(c => (
          <CampaignCard key={c.id} {...c} />
        ))}
      </div>
    </SectionWrapper>
  );
}
