'use client';

import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    id: 1,
    title: 'Education Initiative Transforms Lives in Rural Districts',
    excerpt: 'Our new education program has reached over 5,000 children, providing access to quality learning resources and mentorship.',
    date: 'April 5, 2026',
    author: 'Michael Chen',
    category: 'Education',
    image: 'bg-blue-400',
  },
  {
    id: 2,
    title: 'Clean Water Project Brings Health to 50 Villages',
    excerpt: 'Installing sustainable water systems has reduced waterborne diseases by 60% in participating communities.',
    date: 'April 1, 2026',
    author: 'Emma Watson',
    category: 'Health',
    image: 'bg-cyan-400',
  },
  {
    id: 3,
    title: 'Women Empowerment Through Skills Training',
    excerpt: 'Our vocational training program enables women to gain independence and economic stability through practical skills.',
    date: 'March 28, 2026',
    author: 'James Rivera',
    category: 'Empowerment',
    image: 'bg-purple-400',
  },
];

export function BlogGrid() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base md:text-base font-semibold text-gray-900 dark:text-white mb-4">
            Latest Updates
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover stories of impact and progress from our ongoing initiatives around the world.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className={`${post.image} h-48 flex items-center justify-center text-white text-sm font-medium`}>
                Featured Post Image
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-200 text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-3 flex-grow">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex flex-col gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <Button
                      variant="ghost"
                      className="text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 p-0 h-auto uppercase"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 h-auto text-base uppercase"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}
