import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User } from 'lucide-react';

interface BlogProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
}

export function BlogCard({ slug, title, excerpt, date, author, image }: BlogProps) {
  return (
    <div className="flex flex-col bg-white border border-gray-100 shadow-sm group">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-4 text-[11px] font-semibold text-gray-500  tracking-widest mb-4">
          <span className="flex items-center gap-1"><Calendar size={12} className="text-[#facc15]" /> {date}</span>
          <span className="flex items-center gap-1"><User size={12} className="text-[#facc15]" /> {author}</span>
        </div>
        <h3 className="text-base font-semibold text-[#001f3f] mb-3 group-hover:text-[#002855] transition-colors leading-tight">
          <Link href={`/blog/${slug}`}>{title}</Link>
        </h3>
        <p className="text-gray-500 text-sm mb-6 flex-1 line-clamp-3">{excerpt}</p>
        <Link href={`/blog/${slug}`} className="text-[#001f3f] font-semibold text-xs  tracking-widest hover:text-[#facc15] transition-colors inline-flex items-center">
          Read More →
        </Link>
      </div>
    </div>
  );
}
