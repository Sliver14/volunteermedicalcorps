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

export function CampaignCard({ id, title, description, image, target, raised }: CampaignProps) {
  const percentage = Math.min(100, Math.round((raised / target) * 100));

  return (
    <div className="flex flex-col bg-white border border-gray-100 shadow-sm">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-black text-[#001f3f] mb-3 line-clamp-2">{title}</h3>
        <p className="text-gray-500 mb-6 line-clamp-3 text-sm flex-1">{description}</p>
        
        <div className="mb-6">
          <div className="flex justify-between text-sm font-bold mb-2">
            <span className="text-[#001f3f]">Raised: ${raised.toLocaleString()}</span>
            <span className="text-[#001f3f]">Goal: ${target.toLocaleString()}</span>
          </div>
          <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
            <div className="bg-[#facc15] h-full" style={{ width: `${percentage}%` }} />
          </div>
        </div>

        <Button asChild className="w-full bg-[#002855] hover:bg-[#001f3f] text-white rounded-none py-6 font-black uppercase tracking-widest text-xs">
          <Link href="/donate">Give Now</Link>
        </Button>
      </div>
    </div>
  );
}
