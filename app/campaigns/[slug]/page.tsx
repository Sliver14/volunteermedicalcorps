'use client';

import { useParams } from 'next/navigation';
import { PageLayout } from '@/components/page-layout';
import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { Heart, Globe, ShieldCheck, ArrowRight, Star, Users, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const campaignData: Record<string, any> = {
  '1-million-smiles': {
    title: '1 Million Smiles Campaign',
    subtitle: 'Bringing hope and healthcare to children worldwide.',
    description: 'The 1 Million Smiles campaign is a global initiative dedicated to providing essential medical care, nutritional support, and educational resources to 1 million underserved children across the globe. We believe that every child deserves a healthy start and a reason to smile.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop',
    stats: [
      { label: 'Children Reached', value: '450,000+' },
      { label: 'Countries', value: '45' },
      { label: 'Medical Kits', value: '120,000' }
    ],
    features: [
      'Pediatric Medical Screenings',
      'Nutritional Support Programs',
      'Vaccination Drives',
      'Educational Workshops'
    ]
  },
  'ghoc': {
    title: 'Global Hospital Outreach Campaign',
    subtitle: 'Strengthening medical facilities in regions of crisis.',
    description: 'GHOC focuses on providing critical support to hospitals and clinics in disaster-stricken and underserved regions. By supplying modern equipment, essential medicines, and expert training, we ensure that local healthcare providers can deliver sustainable, high-quality care.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
    stats: [
      { label: 'Hospitals Supported', value: '120+' },
      { label: 'Equipment Donated', value: '$2.5M' },
      { label: 'Staff Trained', value: '5,000+' }
    ],
    features: [
      'Medical Equipment Supply',
      'Facility Infrastructure Repair',
      'Specialized Staff Training',
      'Sustainable Resource Management'
    ]
  },
  'light-of-hope': {
    title: 'Light of Hope Mission',
    subtitle: 'Restoring sight and health in the darkest regions.',
    description: 'The Light of Hope mission is dedicated to providing specialized surgical interventions, particularly focusing on sight restoration and corrective surgeries for those in regions with limited access to advanced medical care. We bring the light of healing to those who need it most.',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop',
    stats: [
      { label: 'Surgeries Performed', value: '15,000+' },
      { label: 'Sight Restored', value: '8,500+' },
      { label: 'Field Missions', value: '200+' }
    ],
    features: [
      'Cataract & Vision Surgeries',
      'Corrective Orthopedic Care',
      'Specialized Post-Op Support',
      'Mobile Surgical Units'
    ]
  }
};

export default function CampaignDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const data = campaignData[slug];

  if (!data) {
    return (
      <PageLayout>
        <SectionWrapper>
          <div className="text-center py-24">
            <h1 className="text-4xl font-black text-[#001f3f] mb-4">CAMPAIGN NOT FOUND</h1>
            <Button asChild className="bg-[#facc15] text-[#001f3f] rounded-none">
              <Link href="/campaigns">Back to Campaigns</Link>
            </Button>
          </div>
        </SectionWrapper>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-32 bg-[#001f3f] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src={data.image} alt={data.title} fill className="object-cover" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">{data.title}</h1>
            <p className="text-xl md:text-2xl text-[#facc15] font-bold uppercase tracking-widest mb-10">{data.subtitle}</p>
            <Button asChild className="bg-[#facc15] hover:bg-white text-[#001f3f] rounded-none px-10 py-8 font-black uppercase tracking-widest text-sm shadow-xl">
              <Link href="/donate">Sponsor this Campaign</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {data.stats.map((stat: any, i: number) => (
              <div key={i} className="text-center border-r last:border-0 border-gray-100 py-4">
                <div className="text-4xl font-black text-[#001f3f] mb-1">{stat.value}</div>
                <div className="text-xs font-bold text-[#facc15] uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description */}
      <SectionWrapper className="bg-gray-50">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-black text-[#001f3f] mb-8 uppercase">About the Campaign</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">{data.description}</p>
            <div className="space-y-4">
              {data.features.map((feature: string, i: number) => (
                <div key={i} className="flex items-center gap-3">
                  <ShieldCheck className="text-[#facc15]" size={20} />
                  <span className="font-bold text-[#001f3f] text-sm uppercase tracking-tight">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square shadow-2xl border-8 border-white overflow-hidden">
            <Image src={data.image} alt="Campaign Detail" fill className="object-cover" />
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-[#001f3f] text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#facc15]/5 skew-x-12 translate-x-1/2"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase">Join the Movement</h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto font-medium">
            Your involvement makes these campaigns possible. Whether by volunteering or donating, you are bringing hope to those in need.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button asChild size="lg" className="bg-[#facc15] hover:bg-white text-[#001f3f] rounded-none px-12 py-8 text-lg font-black uppercase tracking-widest shadow-2xl">
              <Link href="/register">Become a Volunteer</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-[#001f3f] rounded-none px-12 py-8 text-lg font-black uppercase tracking-widest shadow-2xl">
              <Link href="/donate">Donate Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
