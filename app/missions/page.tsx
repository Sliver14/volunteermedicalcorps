'use client';

import { PageLayout } from '@/components/page-layout';
import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { Globe, Heart, Activity, Stethoscope, ArrowRight, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function MissionsPage() {
  const missions = [
    {
      title: 'Disaster Relief',
      desc: 'Rapid deployment of medical teams and supplies to regions affected by natural disasters, Providing immediate trauma care and health support.',
      image: 'https://images.unsplash.com/photo-1542884748-2b87b36c6b90?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Community Health',
      desc: 'Establishing sustainable healthcare solutions and training local health workers to provide long-term care in underserved areas.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Surgical Missions',
      desc: 'Providing advanced surgical care and corrective procedures for patients in regions with limited medical infrastructure.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop',
    }
  ];

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-32 bg-[#001f3f] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
            alt="Missions Hero" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">Medical <span className="text-[#facc15]">Missions</span></h1>
          <p className="text-xl md:text-2xl text-[#facc15] font-bold uppercase tracking-widest max-w-3xl mx-auto">
            Taking the healing power of Jesus Christ to the ends of the earth.
          </p>
        </div>
      </section>

      {/* Overview */}
      <SectionWrapper className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-[#001f3f] mb-8 uppercase">A Global Mandate of Care</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            Our medical missions are at the heart of what we do. We go where others won't, reaching the most vulnerable with expert care, essential aid, and the message of hope. Every mission is a step towards a healthier, more resilient world.
          </p>
          <div className="h-1.5 w-24 bg-[#facc15] mx-auto"></div>
        </div>
      </SectionWrapper>

      {/* Mission Grid */}
      <SectionWrapper className="bg-gray-50">
        <div className="grid md:grid-cols-3 gap-12">
          {missions.map((m, i) => (
            <div key={i} className="bg-white group shadow-xl border-b-8 border-[#001f3f] overflow-hidden flex flex-col h-full">
              <div className="relative aspect-video overflow-hidden">
                <Image src={m.image} alt={m.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-black text-[#001f3f] uppercase mb-4 group-hover:text-[#facc15] transition-colors">{m.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1 font-medium">{m.desc}</p>
                <Button asChild className="w-full bg-[#001f3f] hover:bg-[#002855] text-white rounded-none py-6 font-black uppercase tracking-widest text-[10px]">
                  <Link href="/register">Volunteer for this Mission</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Impact Stats */}
      <section className="bg-[#facc15] py-20 text-[#001f3f]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            <div className="space-y-2">
              <div className="text-5xl font-black tracking-tighter">50+</div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-70">Active Missions</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-black tracking-tighter">150K+</div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-70">Volunteers</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-black tracking-tighter">200+</div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-70">Crisis Zones Reached</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-black tracking-tighter">Millions</div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-70">Lives Impacted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <SectionWrapper className="bg-white">
        <div className="bg-[#001f3f] p-16 text-white text-center shadow-2xl border-b-8 border-[#facc15] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[#facc15]/5 skew-x-12 translate-x-1/2"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase">Become a Mission Partner</h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Your partnership enables us to deploy teams and deliver aid where it's most needed. Stand with us as we heal the world.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button asChild className="bg-[#facc15] hover:bg-white text-[#001f3f] rounded-none px-12 py-8 text-lg font-black uppercase tracking-widest shadow-xl">
                <Link href="/donate">Sponsor a Mission</Link>
              </Button>
              <Button asChild variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#001f3f] rounded-none px-12 py-8 text-lg font-black uppercase tracking-widest">
                <Link href="/register">Join a Mission</Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </PageLayout>
  );
}
