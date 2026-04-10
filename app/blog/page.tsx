import { PageLayout } from '@/components/page-layout';
import { SectionWrapper } from '@/components/section-wrapper';
import { BlogCard } from '@/components/blog-card';
import { blogPosts } from '@/lib/data/blog';

export default function BlogPage() {
  return (
    <PageLayout>
      <SectionWrapper>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-[#001f3f] mb-4">LATEST NEWS</h1>
          <div className="h-1 w-20 bg-[#facc15] mx-auto mb-6"></div>
          <p className="text-gray-500 max-w-2xl mx-auto">Stay updated with our recent activities, volunteer stories, and global impact.</p>
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
