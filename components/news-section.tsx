'use client';

import { Calendar, User } from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    title: 'UN Recognizes Alone Organization for Community Development',
    excerpt: 'Our efforts in sustainable development have been recognized by the United Nations at the annual SDG Summit.',
    date: 'April 3, 2026',
    author: 'Global News Team',
    category: 'Awards',
  },
  {
    id: 2,
    title: 'Partnership Expansion: Reaching 20 New Communities',
    excerpt: 'We announce strategic partnerships with local organizations to expand our reach and impact in Asia and Africa.',
    date: 'March 31, 2026',
    author: 'Partnership Department',
    category: 'Partnerships',
  },
  {
    id: 3,
    title: 'Volunteer Stories: How One Person Changed a Village',
    excerpt: 'Meet Sarah, whose dedication and passion inspired an entire community to take action for environmental conservation.',
    date: 'March 28, 2026',
    author: 'Sarah Mitchell',
    category: 'Stories',
  },
  {
    id: 4,
    title: 'Impact Report 2025: By The Numbers',
    excerpt: 'Our comprehensive annual report shows remarkable progress across all program areas with detailed metrics and stories.',
    date: 'March 25, 2026',
    author: 'Research & Impact Team',
    category: 'Reports',
  },
  {
    id: 5,
    title: 'Innovation in Social Enterprise: New Revenue Model',
    excerpt: 'Learn how our new social enterprise initiative creates sustainable funding while empowering local entrepreneurs.',
    date: 'March 22, 2026',
    author: 'Innovation Lab',
    category: 'Innovation',
  },
  {
    id: 6,
    title: 'Climate Action Campaign Launches Globally',
    excerpt: 'Join our new initiative to address climate change through community-based environmental projects worldwide.',
    date: 'March 19, 2026',
    author: 'Environmental Team',
    category: 'Environment',
  },
];

export function NewsSection() {
  return (
    <section id="news" className="py-20 bg-gray-50 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Latest News & Updates
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Stay informed about our initiatives, partnerships, and impact stories from around the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Featured Article */}
          <div className="md:col-span-2 lg:col-span-1 bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow lg:row-span-2">
            <div className="bg-gradient-to-br from-green-400 to-emerald-500 h-64 flex items-center justify-center text-white text-sm font-medium">
              Featured News Image
            </div>
            <div className="p-8 flex flex-col h-full">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 text-sm font-semibold rounded-full">
                  {newsArticles[0].category}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex-grow">
                {newsArticles[0].title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {newsArticles[0].excerpt}
              </p>
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <User className="w-4 h-4" />
                  <span>{newsArticles[0].author}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{newsArticles[0].date}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Other Articles Grid */}
          <div className="md:col-span-2 lg:col-span-1 space-y-6">
            {newsArticles.slice(1, 4).map((article) => (
              <article
                key={article.id}
                className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-amber-600"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <span className="inline-block px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 text-xs font-semibold rounded">
                    {article.category}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {article.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                  <Calendar className="w-3 h-3" />
                  <span>{article.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* All News List */}
        <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-8 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">All News</h3>
          </div>

          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {newsArticles.map((article) => (
              <article
                key={article.id}
                className="p-6 hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded">
                        {article.category}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {article.title}
                    </h4>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                  </div>
                  <button className="text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-semibold whitespace-nowrap">
                    Read →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="inline-block px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg transition-colors">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
}
