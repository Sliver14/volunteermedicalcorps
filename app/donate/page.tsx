import { PageLayout } from '@/components/page-layout';
import { SectionWrapper } from '@/components/section-wrapper';
import { DonationForm } from '@/components/donation-form';
import Image from 'next/image';

export default function DonatePage() {
  return (
    <PageLayout>
      {/* Donate Hero */}
      <section className="relative py-24 md:py-32 bg-[#001f3f] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
            alt="Donation Background" 
            fill 
            className="object-cover"
           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold mb-6">Partner With Us</h1>
          <div className="h-1 w-20 bg-[#facc15] mx-auto mb-8"></div>
          <p className="text-xs md:text-sm text-[#facc15] font-semibold uppercase tracking-widest max-w-3xl mx-auto">
            Your seed today brings health and hope to communities in crisis.
          </p>
        </div>
      </section>

      <SectionWrapper className="bg-gray-50">
        <div className="text-center mb-16">
          <p className="text-xs md:text-sm font-semibold text-[#facc15] tracking-widest mb-2 uppercase">Give Online</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#001f3f] mb-4">Make a Donation</h2>
          <div className="h-1 w-20 bg-[#facc15] mx-auto mb-8"></div>
        </div>
        <DonationForm />
      </SectionWrapper>

      {/* Other Ways to Give */}
      <SectionWrapper className="bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video shadow-lg border-l-8 border-[#facc15] overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop" 
              alt="Other ways to give" 
              fill 
              className="object-cover"
             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#001f3f] mb-4">Other Ways to Support</h2>
            <div className="h-1 w-20 bg-[#facc15] mb-8"></div>
            <div className="space-y-8">
              <div className="border-b border-gray-100 pb-6">
                <h3 className="text-xl md:text-2xl font-semibold text-[#001f3f] mb-2">Bank Wire Transfer</h3>
                <p className="text-gray-500 text-sm leading-relaxed">For large donations or corporate sponsorships, please contact our finance team for official banking details.</p>
              </div>
              <div className="border-b border-gray-100 pb-6">
                <h3 className="text-xl md:text-2xl font-semibold text-[#001f3f] mb-2">Gift in Kind</h3>
                <p className="text-gray-500 text-sm leading-relaxed">We accept medical supplies, equipment, and logistics support. Email us at <span className="text-[#001f3f] font-semibold">donations@volunteermedicalcorps.org</span></p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#001f3f] mb-2">Sponsor a Project</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Choose a specific mission or region you'd like to support directly. View our current active campaigns for more information.</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </PageLayout>
  );
}
