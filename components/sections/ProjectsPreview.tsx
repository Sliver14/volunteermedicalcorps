'use client';

import React from 'react';
import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Stethoscope, Globe } from 'lucide-react';

export function ProjectsPreview() {
  const projects = [
    {
      title: 'Medical Projects',
      desc: 'Expert medical care, emergency response, and specialized missions to regions in dire need.',
      href: '/projects/medical',
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop',
      icon: <Stethoscope size={32} className="text-[#facc15]" />,
      accent: 'border-[#facc15]'
    },
    {
      title: 'Humanitarian Projects',
      desc: 'Providing essential aid, sustainable solutions, and disaster relief to vulnerable communities.',
      href: '/projects/humanitarian',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop',
      icon: <Globe size={32} className="text-[#facc15]" />,
      accent: 'border-[#001f3f]'
    }
  ];

  return (
    <SectionWrapper className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-xs md:text-sm font-bold text-[#facc15] uppercase tracking-widest mb-2">What We Do</h2>
        <h3 className="text-3xl md:text-5xl font-black text-[#001f3f] uppercase">Our Core Projects</h3>
        <div className="h-1.5 w-24 bg-[#facc15] mx-auto mt-4"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, i) => (
          <div key={i} className={`group relative bg-[#001f3f] overflow-hidden aspect-[4/3] md:aspect-[16/10] shadow-2xl ${project.accent} border-t-8`}>
            <Image 
              src={project.image} 
              alt={project.title} 
              fill 
              className="object-cover opacity-40 transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001f3f] via-[#001f3f]/20 to-transparent"></div>
            
            <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
              <div className="mb-4 md:mb-6 transform group-hover:-translate-y-2 transition-transform duration-300">
                {project.icon}
              </div>
              <h4 className="text-2xl md:text-3xl font-black text-white uppercase mb-2 md:mb-4 tracking-tighter leading-none">
                {project.title}
              </h4>
              <p className="text-white/70 text-sm md:text-lg mb-6 md:mb-8 max-w-md font-medium leading-relaxed md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 line-clamp-2 md:line-clamp-none">
                {project.desc}
              </p>
              <div className="flex">
                <Button asChild className="bg-[#facc15] hover:bg-white text-[#001f3f] rounded-none px-6 md:px-8 py-5 md:py-6 font-black uppercase tracking-widest text-[10px] md:text-xs shadow-xl group-hover:translate-x-2 transition-transform w-full md:w-auto">
                  <Link href={project.href} className="flex items-center justify-center gap-2">
                    View Projects <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
