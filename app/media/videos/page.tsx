'use client';
import { PageLayout } from '@/components/page-layout';
import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { Play, PlayCircle, Filter } from 'lucide-react';
import Image from 'next/image';

export default function VideoGalleryPage() {
  const categories = ['All', 'Mission Reports', 'Presidential Updates', 'Interviews', 'Events'];
  
  const videos = [
    { title: 'President Pastor Chris: The VMC Vision', category: 'Presidential Updates', image: 'https://images.unsplash.com/photo-1515658323406-25d61c141a6e?q=80&w=1909&auto=format&fit=crop', duration: '12:45' },
    { title: 'Special Report: Relief in South East Asia', category: 'Mission Reports', image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop', duration: '08:20' },
    { title: 'Volunteer Experience: Jerilee Pinheiro', category: 'Interviews', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop', duration: '05:15' },
    { title: 'VMC Annual Conference Highlights', category: 'Events', image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop', duration: '15:30' },
    { title: 'Medical Student Outreach Program', category: 'Mission Reports', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop', duration: '10:00' },
    { title: 'Global Prayer for the Sick', category: 'Events', image: 'https://images.unsplash.com/photo-1515658323406-25d61c141a6e?q=80&w=1909&auto=format&fit=crop', duration: '45:00' },
  ];

  return (
    <PageLayout>
      {/* Header */}
      <section className="bg-[#001f3f] text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-[#facc15]/10 skew-x-12 translate-x-1/2"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black uppercase mb-4">Video Gallery</h1>
          <div className="h-2 w-24 bg-[#facc15] mb-8"></div>
          <p className="text-lg text-white/70 max-w-2xl font-medium">Watch the incredible stories of transformation and healing through our global missions.</p>
        </div>
      </section>

      {/* Gallery Filter */}
      <div className="bg-white border-b border-gray-100 sticky top-20 z-30 shadow-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, i) => (
              <button key={i} className={`px-6 py-2 text-xs font-black uppercase tracking-widest transition-colors ${i === 0 ? 'bg-[#facc15] text-[#001f3f]' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>
                {cat}
              </button>
            ))}
          </div>
          <Button variant="outline" className="rounded-none border-gray-200 text-gray-500 font-black uppercase tracking-widest text-[10px]">
            <Filter size={14} className="mr-2" /> Filter
          </Button>
        </div>
      </div>

      <SectionWrapper className="bg-gray-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="group relative bg-white overflow-hidden shadow-xl cursor-pointer">
              <div className="relative aspect-video">
                <Image 
                  src={video.image} 
                  alt={video.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                {/* Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#facc15] rounded-full flex items-center justify-center opacity-90 group-hover:scale-110 transition-transform">
                    <Play size={28} className="text-[#001f3f] fill-current ml-1" />
                  </div>
                </div>
                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 bg-black/80 text-white text-[10px] font-bold px-2 py-1">
                  {video.duration}
                </div>
              </div>
              
              <div className="p-8 border-b-4 border-transparent group-hover:border-[#facc15] transition-all">
                <div className="text-[#facc15] text-[10px] font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                  <PlayCircle size={12} /> {video.category}
                </div>
                <h3 className="text-[#001f3f] text-lg font-black uppercase leading-tight group-hover:text-[#facc15] transition-colors">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button className="bg-[#001f3f] hover:bg-[#002855] text-white rounded-none px-12 py-8 font-black uppercase tracking-widest shadow-xl">
            View All Videos
          </Button>
        </div>
      </SectionWrapper>
    </PageLayout>
  );
}
