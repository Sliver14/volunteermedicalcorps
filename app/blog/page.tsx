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
           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
          <p className="text-xs md:text-sm font-semibold text-[#facc15] tracking-widest mb-2 uppercase">Vmc News</p>
          <h1 className="text-3xl md:text-5xl font-semibold mb-6">Media & News</h1>
          <div className="h-1 w-20 bg-[#facc15] mx-auto mb-8"></div>
          <p className="text-base text-white/80 font-medium max-w-3xl mx-auto">
            Stay informed with the latest updates from our global missions.
          </p>
        </div>
      </section>

      <SectionWrapper className="bg-white">
        <div className="text-center mb-16">
          <p className="text-xs md:text-sm font-semibold text-[#facc15] tracking-widest mb-2 uppercase">Latest</p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#001f3f]">Vmc News Feed</h2>
          <div className="h-1 w-20 bg-[#facc15] mx-auto mb-8"></div>
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
