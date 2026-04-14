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
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tight">Partner with Us</h1>
          <div className="h-2 w-24 md:w-32 bg-[#facc15] mx-auto mb-8"></div>
          <p className="text-lg md:text-2xl text-[#facc15] font-bold uppercase tracking-widest max-w-3xl mx-auto">
            Your seed today brings health and hope to communities in crisis.
          </p>
        </div>
      </section>

      <SectionWrapper className="bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[#facc15] uppercase tracking-widest mb-2">Give Online</h2>
          <h3 className="text-3xl md:text-5xl font-black text-[#001f3f] uppercase">Make a Donation</h3>
          <div className="h-1.5 w-24 bg-[#facc15] mx-auto mt-4"></div>
        </div>
        <DonationForm />
      </SectionWrapper>

      {/* Other Ways to Give */}
      <SectionWrapper className="bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video shadow-2xl border-l-8 border-[#facc15] overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop" 
              alt="Other ways to give" 
              fill 
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-3xl font-black text-[#001f3f] uppercase mb-6">Other Ways to Support</h3>
            <div className="space-y-8">
              <div className="border-b border-gray-100 pb-6">
                <h4 className="text-lg font-black text-[#001f3f] uppercase mb-2">Bank Wire Transfer</h4>
                <p className="text-gray-500 text-sm leading-relaxed">For large donations or corporate sponsorships, please contact our finance team for official banking details.</p>
              </div>
              <div className="border-b border-gray-100 pb-6">
                <h4 className="text-lg font-black text-[#001f3f] uppercase mb-2">Gift in Kind</h4>
                <p className="text-gray-500 text-sm leading-relaxed">We accept medical supplies, equipment, and logistics support. Email us at <span className="text-[#001f3f] font-bold">donations@volunteermedicalcorps.org</span></p>
              </div>
              <div>
                <h4 className="text-lg font-black text-[#001f3f] uppercase mb-2">Sponsor a Project</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Choose a specific mission or region you'd like to support directly. View our current active campaigns for more information.</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </PageLayout>
  );
}
