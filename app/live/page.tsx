'use client';
import { PageLayout } from '@/components/page-layout';
import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { Play, Users, Share2, Info } from 'lucide-react';
import Image from 'next/image';

export default function LiveStreamPage() {
  return (
    <PageLayout>
      {/* Live Hero Header */}
      <section className="bg-[#001f3f] text-white py-12 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-4 h-4 bg-red-600 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-4 h-4 bg-red-600 rounded-full animate-ping opacity-75"></div>
              </div>
              <h1 className="text-2xl font-black uppercase tracking-widest">Live Stream</h1>
            </div>
            <div className="flex items-center gap-6 text-sm font-bold uppercase tracking-widest">
              <div className="flex items-center gap-2 text-[#facc15]">
                <Users size={18} />
                <span>1,240 Watching Now</span>
              </div>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-[#001f3f] rounded-none px-6">
                <Share2 size={16} className="mr-2" /> Share
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper className="bg-gray-100">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Video Player */}
          <div className="lg:col-span-2 space-y-6">
            <div className="aspect-video bg-black relative group shadow-2xl">
              {/* This would be the iframe for YouTube/Vimeo/Custom Player */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image 
                  src="https://images.unsplash.com/photo-1515658323406-25d61c141a6e?q=80&w=1909&auto=format&fit=crop" 
                  alt="Stream Placeholder" 
                  fill 
                  className="object-cover opacity-50"
                />
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 bg-[#facc15] rounded-full flex items-center justify-center mx-auto mb-6 cursor-pointer hover:scale-110 transition-transform shadow-2xl">
                    <Play size={40} className="text-[#001f3f] fill-current ml-2" />
                  </div>
                  <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Click to Join Broadcast</h2>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 shadow-xl">
              <h2 className="text-2xl font-black text-[#001f3f] uppercase mb-4">VMC Global Summit: Healing the Nations</h2>
              <div className="flex flex-wrap gap-4 mb-6">
                <span className="bg-gray-100 text-[#001f3f] px-3 py-1 text-[10px] font-black uppercase tracking-widest border-l-4 border-[#facc15]">Conference</span>
                <span className="bg-gray-100 text-[#001f3f] px-3 py-1 text-[10px] font-black uppercase tracking-widest border-l-4 border-[#facc15]">Medical Missions</span>
                <span className="bg-gray-100 text-[#001f3f] px-3 py-1 text-[10px] font-black uppercase tracking-widest border-l-4 border-[#facc15]">Global Impact</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Join our President and global medical leaders as we discuss the future of Christian medical missions and relief assistance in a rapidly changing world. Witness live reports from the field and learn how you can make a difference.
              </p>
            </div>
          </div>

          {/* Sidebar - Up Next / Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 shadow-xl border-t-8 border-[#facc15]">
              <h3 className="text-xl font-black text-[#001f3f] uppercase mb-6 flex items-center gap-2">
                <Info size={20} className="text-[#facc15]" /> Stream Info
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between border-b border-gray-100 pb-3">
                  <span className="font-bold text-gray-400 uppercase">Started</span>
                  <span className="font-black text-[#001f3f]">10:00 AM GMT</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-3">
                  <span className="font-bold text-gray-400 uppercase">Host</span>
                  <span className="font-black text-[#001f3f]">VMC Global Headquarters</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-3">
                  <span className="font-bold text-gray-400 uppercase">Quality</span>
                  <span className="font-black text-[#001f3f]">1080p Full HD</span>
                </div>
              </div>
            </div>

            <div className="bg-[#001f3f] text-white p-8 shadow-xl">
              <h3 className="text-xl font-black uppercase mb-6 border-b border-white/10 pb-4">Up Next</h3>
              <div className="space-y-6">
                {[
                  { time: '14:00', title: 'Medical Mission Report: Asia' },
                  { time: '16:30', title: 'Volunteer Training Session' },
                  { time: '19:00', title: 'Global Prayer for the Sick' },
                ].map((item, i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="text-[#facc15] font-black text-xs mb-1 uppercase tracking-widest">{item.time} GMT</div>
                    <h4 className="font-bold text-sm group-hover:text-[#facc15] transition-colors">{item.title}</h4>
                  </div>
                ))}
              </div>
            </div>

            <Button asChild className="w-full bg-[#facc15] hover:bg-[#e5b800] text-[#001f3f] rounded-none py-8 font-black uppercase tracking-widest shadow-xl">
              <a href="/donate">Sponsor this Stream</a>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </PageLayout>
  );
}
