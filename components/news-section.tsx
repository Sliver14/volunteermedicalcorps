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
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl font-black text-[#001f3f] mb-4 uppercase">Latest News & Updates</h2>
          <div className="h-1 w-20 bg-[#facc15]"></div>
        </div>
        <Link href="/blog" className="text-[#001f3f] font-bold uppercase tracking-widest hover:text-[#facc15] transition-colors text-sm flex items-center gap-2">
          View All News <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {newsArticles.map((article) => (
          <div key={article.id} className="bg-white group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 border-b-4 border-transparent hover:border-[#facc15]">
            <div className="relative aspect-video overflow-hidden">
              <Image 
                src={article.image} 
                alt={article.title} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute top-4 left-4 bg-[#facc15] text-[#001f3f] text-[10px] font-black px-3 py-1 uppercase tracking-widest">
                {article.category}
              </div>
            </div>
            <div className="p-8">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-3">{article.date}</div>
              <h3 className="text-xl font-black text-[#001f3f] mb-6 leading-tight group-hover:text-[#facc15] transition-colors uppercase">
                {article.title}
              </h3>
              <div className="flex items-center gap-2 text-[#001f3f] font-bold text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                Read More <ArrowRight size={14} className="text-[#facc15]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
