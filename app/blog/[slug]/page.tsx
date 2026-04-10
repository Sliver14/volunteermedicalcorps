import { PageLayout } from '@/components/page-layout';
import { SectionWrapper } from '@/components/section-wrapper';
import { blogPosts } from '@/lib/data/blog';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, User } from 'lucide-react';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find(p => p.slug === resolvedParams.slug);
  if (!post) return notFound();

  return (
    <PageLayout>
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <Image src={post.image} alt={post.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 w-full text-center text-white">
            <div className="flex justify-center items-center gap-6 text-sm font-bold text-[#facc15] uppercase tracking-widest mb-6">
              <span className="flex items-center gap-2"><Calendar size={16} /> {post.date}</span>
              <span className="flex items-center gap-2"><User size={16} /> {post.author}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">{post.title}</h1>
          </div>
        </div>
      </div>
      <SectionWrapper>
        <div className="max-w-3xl mx-auto prose prose-lg prose-blue">
          <p className="text-xl text-gray-600 leading-relaxed font-medium mb-8">{post.excerpt}</p>
          <div className="text-gray-600 leading-relaxed space-y-6">
            <p>{post.content}</p>
            {/* Extended mock content */}
            <p>Our volunteers on the ground have witnessed firsthand the transformative power of these initiatives. From rapid response in disaster zones to establishing long-term healthcare infrastructure, every step is crucial.</p>
          </div>
        </div>
      </SectionWrapper>
    </PageLayout>
  );
}
