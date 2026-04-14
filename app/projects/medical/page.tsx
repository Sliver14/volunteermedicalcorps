'use client';
import { PageLayout } from '@/components/page-layout';
import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { Heart, Activity, Stethoscope, ShieldCheck, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function MedicalProjectsPage() {
  const projects = [
    {
      title: 'Emergency Response Units (ERU)',
      desc: 'Rapidly deployable medical teams equipped for immediate trauma care and life-saving interventions in disaster zones.',
      image: 'https://images.unsplash.com/photo-1542884748-2b87b36c6b90?q=80&w=2070&auto=format&fit=crop',
      icon: <Activity className="text-[#facc15]" size={32} />
    },
    {
      title: 'Specialized Surgical Missions',
      desc: 'Advanced surgical care for complex cases in regions lacking specialized medical infrastructure.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop',
      icon: <Stethoscope className="text-[#facc15]" size={32} />
    },
    {
      title: 'Mobile Health Clinics',
      desc: 'Extending healthcare reach to remote communities through fully equipped mobile medical units.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
      icon: <Heart className="text-[#facc15]" size={32} />
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-[#001f3f] text-white overflow-hidden text-center md:text-left">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop" 
            alt="Medical Projects Hero" 
            fill 
            className="object-cover"
           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <h1 className="text-3xl md:text-5xl font-semibold mb-6">
            Medical <span className="text-[#facc15]">Projects</span>
          </h1>
          <div className="h-1 w-20 bg-[#facc15] mb-8"></div>
          <p className="text-base md:text-base text-white/80 mb-8 md:mb-10 leading-relaxed font-medium max-w-2xl mx-auto md:mx-0">
            Providing expert medical care and sustainable health solutions where they are needed most.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <SectionWrapper className="bg-gray-50">
        <div className="grid lg:grid-cols-1 gap-12 md:gap-16">
          {projects.map((project, i) => (
            <div key={i} className={`flex flex-col lg:flex-row items-center gap-8 md:gap-12 bg-white shadow-lg overflow-hidden border-l-8 border-[#facc15] ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="w-full lg:w-1/2 aspect-video relative">
                <Image src={project.image} alt={project.title} fill className="object-cover"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div className="w-full lg:w-1/2 p-8 md:p-12">
                <div className="mb-4 md:mb-6">{project.icon}</div>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#001f3f] mb-4">{project.title}</h2>
                <div className="h-1 w-20 bg-[#facc15] mb-8"></div>
                <p className="text-base md:text-base text-gray-600 leading-relaxed mb-8">{project.desc}</p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="bg-[#001f3f] hover:bg-[#002855] text-white rounded-none px-6 md:px-8 py-5 md:py-6 font-semibold tracking-widest uppercase text-[10px] md:text-xs w-full sm:w-auto">
                    <Link href="/register">Volunteer For This Project</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-2 border-[#001f3f] text-[#001f3f] hover:bg-[#001f3f] hover:text-white rounded-none px-6 md:px-8 py-5 md:py-6 font-semibold tracking-widest uppercase text-[10px] md:text-xs w-full sm:w-auto">
                    <Link href="/donate">Sponsor Project</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Impact Stats Banner */}
      <section className="bg-[#facc15] py-16 md:py-20 text-[#001f3f]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-semibold tracking-tight">500+</div>
              <div className="text-xs md:text-sm font-semibold uppercase tracking-widest opacity-70">Medical Missions</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-semibold tracking-tight">2.5M+</div>
              <div className="text-xs md:text-sm font-semibold uppercase tracking-widest opacity-70">Patients Treated</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-semibold tracking-tight">150+</div>
              <div className="text-xs md:text-sm font-semibold uppercase tracking-widest opacity-70">Participating Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#001f3f] text-white py-20 md:py-24 relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#facc15]/5 skew-x-12 translate-x-1/2"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <p className="text-xs md:text-sm font-semibold text-[#facc15] tracking-widest mb-2 uppercase">Take Action</p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 leading-tight">Ready To Join Our Medical Corps?</h2>
          <div className="h-1 w-20 bg-[#facc15] mx-auto mb-8"></div>
          <p className="text-base md:text-base text-white/70 mb-10 md:mb-12 max-w-2xl mx-auto">
            Your expertise can save lives. Join our global network of medical professionals today.
          </p>
          <Button asChild size="lg" className="bg-[#facc15] hover:bg-white text-[#001f3f] rounded-none px-10 md:px-12 py-6 md:py-8 text-sm md:text-base font-semibold  tracking-widest shadow-lg w-full md:w-auto uppercase">
            <Link href="/register">Become A Volunteer</Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
}
