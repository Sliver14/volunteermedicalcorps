import { PageLayout } from '@/components/page-layout';
import { SectionWrapper } from '@/components/section-wrapper';
import { CampaignCard } from '@/components/campaign-card';
import { campaigns } from '@/lib/data/campaigns';
import Image from 'next/image';

export default function CampaignsPage() {
  return (
    <PageLayout>
      {/* Campaigns Hero */}
      <section className="relative py-24 bg-[#001f3f] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
            alt="Campaigns Hero" 
            fill 
            className="object-cover"
           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold mb-6">Our Campaigns</h1>
          <div className="h-1 w-20 bg-[#facc15] mx-auto mb-8"></div>
          <p className="text-base text-[#facc15] font-semibold tracking-widest max-w-3xl mx-auto uppercase">
            Supporting critical missions and bringing hope to millions.
          </p>
        </div>
      </section>

      <SectionWrapper className="bg-white">
        <div className="text-center mb-16">
          <p className="text-xs md:text-sm font-semibold text-[#facc15] tracking-widest mb-2 uppercase">Impact</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#001f3f] mb-4">Global Initiatives</h2>
          <div className="h-1 w-20 bg-[#facc15] mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map(c => (
            <CampaignCard key={c.id} {...c} />
          ))}
        </div>
      </SectionWrapper>
    </PageLayout>
  );
}
