import { PageLayout } from '@/components/page-layout';
import { SectionWrapper } from '@/components/section-wrapper';
import { VolunteerCard } from '@/components/volunteer-card';
import { volunteers } from '@/lib/data/volunteers';

export default function VolunteersPage() {
  return (
    <PageLayout>
      <SectionWrapper>
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-semibold text-[#001f3f] mb-4">Our Volunteers</h1>
          <div className="h-1 w-20 bg-[#facc15] mx-auto mb-8"></div>
          <p className="text-gray-500 max-w-2xl mx-auto">Meet the dedicated professionals who make our mission possible.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {volunteers.map(v => (
            <VolunteerCard key={v.id} {...v} />
          ))}
        </div>
      </SectionWrapper>
    </PageLayout>
  );
}
