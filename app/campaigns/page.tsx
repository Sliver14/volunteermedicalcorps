import { PageLayout } from '@/components/page-layout';
import { SectionWrapper } from '@/components/section-wrapper';
import { CampaignCard } from '@/components/campaign-card';
import { campaigns } from '@/lib/data/campaigns';

export default function CampaignsPage() {
  return (
    <PageLayout>
      <SectionWrapper>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-[#001f3f] mb-4">OUR CAMPAIGNS</h1>
          <div className="h-1 w-20 bg-[#facc15] mx-auto mb-6"></div>
          <p className="text-gray-500 max-w-2xl mx-auto">Support our ongoing initiatives to bring health and relief to those in need.</p>
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
