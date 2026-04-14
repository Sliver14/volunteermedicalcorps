'use client';

import React from 'react';
import { SectionWrapper } from '@/components/section-wrapper';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const newsArticles = [
  {
    id: 1,
    title: 'VMC Volunteers Deploy to Regions of Crisis',
    date: 'April 10, 2026',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop',
    category: 'Relief',
  },
  {
    id: 2,
    title: 'New VMC Academy Courses Launched for Health Workers',
    date: 'April 8, 2026',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
    category: 'Education',
  },
  {
    id: 3,
    title: 'Global Hospital Outreach Reaches Over 1000 Patients',
    date: 'April 5, 2026',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop',
    category: 'Impact',
  },
];

export function NewsSection() {
  return (
    <SectionWrapper className="bg-gray-50">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-6 text-center md:text-left">
        <div>
          <h2 className="text-xs md:text-sm font-semibold text-[#facc15]  tracking-widest mb-2 uppercase">Latest</h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-[#001f3f] mb-4  leading-tight">News & Updates</h3>
          <div className="h-1 w-20 bg-[#facc15] mb-8 mx-auto md:mx-0"></div>
        </div>
        <Link href="/blog" className="text-[#001f3f] font-semibold  tracking-widest hover:text-[#facc15] transition-colors text-xs md:text-sm flex items-center gap-2 border-b-2 border-[#facc15] pb-1">
          View All News <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {newsArticles.map((article) => (
          <div key={article.id} className="bg-white group cursor-pointer shadow-md hover:shadow-lg transition-colors transition-transform transition-shadow duration-300 border-b-4 border-transparent hover:border-[#facc15] flex flex-col h-full">
            <div className="relative aspect-video overflow-hidden">
              <Image 
                src={article.image} 
                alt={article.title} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110" 
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              <div className="absolute top-4 left-4 bg-[#facc15] text-[#001f3f] text-[9px] md:text-[10px] font-semibold px-3 py-1  tracking-widest shadow-lg">
                {article.category}
              </div>
            </div>
            <div className="p-6 md:p-8 flex-1 flex flex-col">
              <div className="text-gray-400 text-[10px] md:text-xs font-semibold  tracking-widest mb-3">{article.date}</div>
              <h3 className="text-base md:text-base font-semibold text-[#001f3f] mb-6 leading-tight group-hover:text-[#facc15] transition-colors  flex-1">
                {article.title}
              </h3>
              <div className="flex items-center gap-2 text-[#001f3f] font-semibold text-[10px] md:text-xs  tracking-widest group-hover:translate-x-2 transition-transform">
                Read More <ArrowRight size={14} className="text-[#facc15]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
