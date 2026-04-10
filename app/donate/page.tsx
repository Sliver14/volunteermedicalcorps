import { PageLayout } from '@/components/page-layout';
import { SectionWrapper } from '@/components/section-wrapper';
import { DonationForm } from '@/components/donation-form';

export default function DonatePage() {
  return (
    <PageLayout>
      <SectionWrapper>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-[#001f3f] mb-4">MAKE A DONATION</h1>
          <div className="h-1 w-20 bg-[#facc15] mx-auto mb-6"></div>
          <p className="text-gray-500 max-w-2xl mx-auto">Your contribution helps us provide critical medical assistance to those who need it most.</p>
        </div>
        <DonationForm />
      </SectionWrapper>
    </PageLayout>
  );
}
