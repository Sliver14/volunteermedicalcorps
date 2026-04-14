import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface CampaignProps {
  id: string;
  title: string;
  description: string;
  image: string;
  target: number;
  raised: number;
}

export function CampaignCard({ id, title, description, image, target = 0, raised = 0 }: CampaignProps) {
  const safeTarget = target || 1; // Prevent division by zero
  const percentage = Math.min(100, Math.round((raised / safeTarget) * 100));

  return (
    <div className="flex flex-col bg-white shadow-md hover:shadow-lg transition-colors transition-transform transition-shadow duration-300 border-b-8 border-[#001f3f] group">
      <div className="relative aspect-video overflow-hidden">
        <Image 
          src={image || 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop'} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-500 group-hover:scale-110" 
         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        <div className="absolute top-4 left-4 bg-[#facc15] text-[#001f3f] text-[10px] font-semibold px-3 py-1  tracking-widest shadow-lg">
          Active Campaign
        </div>
      </div>
      <div className="p-8 flex-1 flex flex-col">
        <h3 className="text-xl md:text-2xl font-semibold text-[#001f3f] mb-4 leading-tight group-hover:text-[#facc15] transition-colors">{title}</h3>
        <p className="text-gray-500 mb-8 line-clamp-3 text-sm leading-relaxed flex-1 font-medium">{description}</p>
        
        <div className="space-y-4 mb-8">
          <div className="flex justify-between items-end">
            <div>
              <span className="block text-[10px] font-semibold text-gray-400  tracking-widest mb-1">Raised</span>
              <span className="text-base font-semibold text-[#001f3f]">${(raised || 0).toLocaleString()}</span>
            </div>
            <div className="text-right">
              <span className="block text-[10px] font-semibold text-gray-400  tracking-widest mb-1">Goal</span>
              <span className="text-sm font-semibold text-gray-600">${(target || 0).toLocaleString()}</span>
            </div>
          </div>
          <div className="relative h-3 bg-gray-100 overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-[#facc15] transition-colors transition-transform transition-shadow duration-1000 ease-out" 
              style={{ width: `${percentage}%` }}
            />
          </div>
          <div className="text-right">
            <span className="text-[10px] font-semibold text-[#facc15]  tracking-tighter">{percentage}% Complete</span>
          </div>
        </div>

        <Button asChild className="w-full bg-[#001f3f] hover:bg-[#002855] text-white rounded-none py-8 font-semibold  tracking-widest text-xs shadow-lg transition-transform active:scale-95 uppercase">
          <Link href={`/donate?campaign=${id}`}>Give Now</Link>
        </Button>
      </div>
    </div>
  );
}
