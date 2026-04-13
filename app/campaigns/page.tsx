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
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">Our Campaigns</h1>
          <div className="h-2 w-24 bg-[#facc15] mx-auto mb-8"></div>
          <p className="text-xl text-[#facc15] font-bold uppercase tracking-widest max-w-3xl mx-auto">
            Supporting critical missions and bringing hope to millions.
          </p>
        </div>
      </section>

      <SectionWrapper className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[#facc15] uppercase tracking-widest mb-2">Impact</h2>
          <h3 className="text-4xl font-black text-[#001f3f] uppercase">Global Initiatives</h3>
          <div className="h-1.5 w-24 bg-[#facc15] mx-auto mt-4"></div>
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
