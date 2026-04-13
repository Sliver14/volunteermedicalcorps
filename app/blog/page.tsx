import { PageLayout } from '@/components/page-layout';
import { SectionWrapper } from '@/components/section-wrapper';
import { BlogCard } from '@/components/blog-card';
import { blogPosts } from '@/lib/data/blog';
import Image from 'next/image';

export default function BlogPage() {
  return (
    <PageLayout>
      {/* Blog Hero */}
      <section className="relative py-24 bg-[#001f3f] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop" 
            alt="News Hero" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">Media & News</h1>
          <div className="h-2 w-24 bg-[#facc15] mx-auto mb-8"></div>
          <p className="text-xl text-[#facc15] font-bold uppercase tracking-widest max-w-3xl mx-auto">
            Stay informed with the latest updates from our global missions.
          </p>
        </div>
      </section>

      <SectionWrapper className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[#facc15] uppercase tracking-widest mb-2">Latest</h2>
          <h3 className="text-4xl font-black text-[#001f3f] uppercase">VMC News Feed</h3>
          <div className="h-1.5 w-24 bg-[#facc15] mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </SectionWrapper>
    </PageLayout>
  );
}
