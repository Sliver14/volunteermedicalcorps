'use client';
import { PageLayout } from '@/components/page-layout';
import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { Camera, Maximize2, Filter } from 'lucide-react';
import Image from 'next/image';

export default function PhotoGalleryPage() {
  const categories = ['All', 'Medical Missions', 'Summits', 'Disaster Relief', 'Campaigns'];
  
  const photos = [
    { title: 'Relief Mission in Africa', category: 'Medical Missions', image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Global Summit 2025', category: 'Summits', image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Mobile Clinic Outreach', category: 'Medical Missions', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Emergency Response Unit', category: 'Disaster Relief', image: 'https://images.unsplash.com/photo-1542884748-2b87b36c6b90?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Campaign for Smiles', category: 'Campaigns', image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=2062&auto=format&fit=crop' },
    { title: 'Health Worker Training', category: 'Medical Missions', image: 'https://images.unsplash.com/photo-1581578731522-745d05cb972b?q=80&w=2070&auto=format&fit=crop' },
  ];

  return (
    <PageLayout>
      {/* Header */}
      <section className="bg-[#001f3f] text-white py-16 md:py-20 relative overflow-hidden text-center md:text-left">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-[#facc15]/10 skew-x-12 translate-x-1/2 hidden md:block"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-xs md:text-sm font-semibold text-[#facc15] tracking-widest mb-2 uppercase">Media</p>
          <h1 className="text-3xl md:text-5xl font-semibold mb-4 leading-tight">Photo Gallery</h1>
          <div className="h-1 w-20 bg-[#facc15] mb-8 mx-auto md:mx-0"></div>
          <p className="text-base md:text-base text-white/70 max-w-2xl font-medium mx-auto md:mx-0">Capturing the moments of hope, healing, and humanitarian impact across the globe.</p>
        </div>
      </section>

      {/* Gallery Filter */}
      <div className="bg-white border-b border-gray-100 sticky top-[72px] md:top-20 z-30 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {categories.map((cat, i) => (
              <button key={i} className={`px-4 md:px-6 py-2 text-[9px] md:text-xs font-semibold  tracking-widest transition-colors ${i === 0 ? 'bg-[#facc15] text-[#001f3f]' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>
                {cat}
              </button>
            ))}
          </div>
          <Button variant="outline" className="rounded-none border-gray-200 text-gray-500 font-semibold  tracking-widest text-[9px] md:text-[10px] w-full md:w-auto uppercase">
            <Filter size={14} className="mr-2" /> Filter
          </Button>
        </div>
      </div>

      <SectionWrapper className="bg-gray-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {photos.map((photo, index) => (
            <div key={index} className="group relative bg-white overflow-hidden aspect-square shadow-lg cursor-pointer">
              <Image 
                src={photo.image} 
                alt={photo.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#001f3f]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8">
                <div className="text-[#facc15] text-[9px] md:text-[10px] font-semibold  tracking-widest mb-2 flex items-center gap-2">
                  <Camera size={12} /> {photo.category}
                </div>
                <h3 className="text-white text-xl md:text-2xl font-semibold leading-tight mb-4">{photo.title}</h3>
                <div className="w-8 h-8 md:w-10 md:h-10 bg-[#facc15] flex items-center justify-center self-end">
                  <Maximize2 size={16} className="text-[#001f3f] md:w-[18px] md:h-[18px]" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 md:mt-16 text-center">
          <Button className="bg-[#001f3f] hover:bg-[#002855] text-white rounded-none px-10 md:px-12 py-6 md:py-8 font-semibold  tracking-widest shadow-lg text-xs md:text-sm w-full md:w-auto uppercase">
            Load More Photos
          </Button>
        </div>
      </SectionWrapper>
    </PageLayout>
  );
}
