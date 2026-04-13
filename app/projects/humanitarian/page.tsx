'use client';
import { PageLayout } from '@/components/page-layout';
import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { Globe, Droplets, Home, Users, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HumanitarianProjectsPage() {
  const projects = [
    {
      title: 'Disaster Relief Assistance',
      desc: 'Immediate provision of food, shelter, and essential supplies to communities affected by natural disasters and conflicts.',
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop',
      icon: <Globe className="text-[#facc15]" size={32} />
    },
    {
      title: 'Water & Sanitation (WASH)',
      desc: 'Ensuring access to clean water and promoting hygiene practices to prevent the spread of diseases in vulnerable regions.',
      image: 'https://images.unsplash.com/photo-1515658323406-25d61c141a6e?q=80&w=1909&auto=format&fit=crop',
      icon: <Droplets className="text-[#facc15]" size={32} />
    },
    {
      title: 'Sustainable Housing & Infrastructure',
      desc: 'Rebuilding homes and essential community facilities to foster long-term recovery and resilience.',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop',
      icon: <Home className="text-[#facc15]" size={32} />
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-32 bg-[#001f3f] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
            alt="Humanitarian Projects Hero" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-7xl font-black mb-8 uppercase tracking-tighter leading-none">
            Humanitarian <span className="text-[#facc15]">Projects</span>
          </h1>
          <p className="text-xl text-white/80 mb-10 leading-relaxed font-medium max-w-2xl">
            Empowering communities and restoring hope through comprehensive humanitarian aid and sustainable solutions.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <SectionWrapper className="bg-gray-50">
        <div className="grid lg:grid-cols-1 gap-16">
          {projects.map((project, i) => (
            <div key={i} className={`flex flex-col lg:flex-row items-center gap-12 bg-white shadow-2xl overflow-hidden border-l-8 border-[#facc15] ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="w-full lg:w-1/2 aspect-video relative">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              </div>
              <div className="w-full lg:w-1/2 p-12">
                <div className="mb-6">{project.icon}</div>
                <h2 className="text-3xl font-black text-[#001f3f] uppercase mb-6 leading-tight">{project.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">{project.desc}</p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="bg-[#001f3f] hover:bg-[#002855] text-white rounded-none px-8 py-6 font-black uppercase tracking-widest text-xs">
                    <Link href="/register">Volunteer for this project</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-2 border-[#001f3f] text-[#001f3f] hover:bg-[#001f3f] hover:text-white rounded-none px-8 py-6 font-black uppercase tracking-widest text-xs">
                    <Link href="/donate">Sponsor Project</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Global Impact Banner */}
      <section className="bg-[#001f3f] py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-[#facc15]/10 skew-x-12 translate-x-1/2"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black uppercase mb-8">Our Global Impact</h2>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Through our collaborative efforts with local partners and international organizations, we have reached millions of people, providing critical aid and fostering resilience in the face of adversity.
              </p>
              <div className="flex items-center gap-6">
                 <div className="flex -space-x-4">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full border-4 border-[#001f3f] overflow-hidden">
                        <Image src={`https://i.pravatar.cc/100?u=${i}`} alt="Avatar" width={48} height={48} />
                      </div>
                    ))}
                 </div>
                 <div className="text-sm font-bold uppercase tracking-widest text-[#facc15]">
                    +150,000 Volunteers Worldwide
                 </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-md p-8 border border-white/10">
                 <div className="text-3xl font-black mb-1 text-[#facc15]">10M+</div>
                 <div className="text-[10px] font-bold uppercase tracking-widest text-white/50">Liters of Water Provided</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-8 border border-white/10">
                 <div className="text-3xl font-black mb-1 text-[#facc15]">5M+</div>
                 <div className="text-[10px] font-bold uppercase tracking-widest text-white/50">Meals Distributed</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-8 border border-white/10">
                 <div className="text-3xl font-black mb-1 text-[#facc15]">50,000+</div>
                 <div className="text-[10px] font-bold uppercase tracking-widest text-white/50">Shelters Built</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-8 border border-white/10">
                 <div className="text-3xl font-black mb-1 text-[#facc15]">20+</div>
                 <div className="text-[10px] font-bold uppercase tracking-widest text-white/50">Years of Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <SectionWrapper className="bg-white text-center">
        <h2 className="text-sm font-bold text-[#facc15] uppercase tracking-widest mb-4">Make a Difference</h2>
        <h3 className="text-4xl md:text-5xl font-black text-[#001f3f] mb-8 uppercase">Your support saves lives</h3>
        <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          Whether through volunteering your skills or providing financial support, your contribution makes a direct impact on communities in need.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Button asChild size="lg" className="bg-[#001f3f] hover:bg-[#002855] text-white rounded-none px-12 py-8 text-lg font-black uppercase tracking-widest shadow-xl">
            <Link href="/register">Join the Mission</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-2 border-[#001f3f] text-[#001f3f] hover:bg-[#001f3f] hover:text-white rounded-none px-12 py-8 text-lg font-black uppercase tracking-widest shadow-xl">
            <Link href="/donate">Sponsor Aid</Link>
          </Button>
        </div>
      </SectionWrapper>
    </PageLayout>
  );
}
