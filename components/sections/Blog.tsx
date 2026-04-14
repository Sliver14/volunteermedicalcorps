import React from 'react';
import { SectionWrapper } from '@/components/section-wrapper';
import { BlogCard } from '@/components/blog-card';
import { blogPosts } from '@/lib/data/blog';
import Link from 'next/link';

export function Blog() {
  return (
    <SectionWrapper className="bg-gray-50">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#001f3f] mb-4">Latest News</h2>
          <div className="h-1 w-20 bg-[#facc15]"></div>
        </div>
        <Link href="/blog" className="text-[#001f3f] font-semibold  tracking-widest hover:text-[#facc15] transition-colors text-sm">
          View All →
        </Link>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.slice(0, 3).map(post => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </SectionWrapper>
  );
}
