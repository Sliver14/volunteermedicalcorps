import { PageLayout } from '@/components/page-layout';
import { SectionWrapper } from '@/components/section-wrapper';
import { ResourceItem } from '@/components/resource-item';
import { resources } from '@/lib/data/resources';

export default function ResourcesPage() {
  return (
    <PageLayout>
      <SectionWrapper>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-[#001f3f] mb-4">RESOURCES</h1>
          <div className="h-1 w-20 bg-[#facc15] mx-auto mb-6"></div>
          <p className="text-gray-500 max-w-2xl mx-auto">Downloadable materials, guides, and medical protocols for our volunteers and partners.</p>
        </div>
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {resources.map(res => (
            <ResourceItem key={res.id} {...res} />
          ))}
        </div>
      </SectionWrapper>
    </PageLayout>
  );
}
