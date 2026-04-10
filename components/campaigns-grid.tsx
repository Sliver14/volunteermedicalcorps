'use client';

import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

const campaigns = [
  {
    id: 1,
    title: 'Emergency Medical Relief Fund',
    description: 'Providing urgent medical care and supplies to disaster-affected regions.',
    raised: 45000,
    goal: 100000,
    image: 'bg-red-400',
    urgency: 'Urgent',
  },
  {
    id: 2,
    title: 'School Building Initiative',
    description: 'Constructing learning facilities in rural communities without access to education.',
    raised: 78000,
    goal: 150000,
    image: 'bg-blue-400',
    urgency: 'Ongoing',
  },
  {
    id: 3,
    title: 'Food Security Program',
    description: 'Supporting sustainable agriculture and providing nutritious food to vulnerable families.',
    raised: 92000,
    goal: 120000,
    image: 'bg-green-400',
    urgency: 'Ongoing',
  },
  {
    id: 4,
    title: 'Clean Water Access',
    description: 'Installing wells and purification systems for safe drinking water access.',
    raised: 67000,
    goal: 100000,
    image: 'bg-cyan-400',
    urgency: 'High Priority',
  },
  {
    id: 5,
    title: 'Skills Training Center',
    description: 'Vocational training for youth to build sustainable income opportunities.',
    raised: 55000,
    goal: 80000,
    image: 'bg-purple-400',
    urgency: 'Ongoing',
  },
  {
    id: 6,
    title: 'Healthcare Worker Support',
    description: 'Equipping frontline health workers with training and essential equipment.',
    raised: 38000,
    goal: 90000,
    image: 'bg-pink-400',
    urgency: 'Urgent',
  },
];

function ProgressBar({ raised, goal }: { raised: number; goal: number }) {
  const percentage = (raised / goal) * 100;
  return (
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
      <div
        className="bg-gradient-to-r from-amber-500 to-amber-600 h-full transition-all duration-500"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}

export function CampaignsGrid() {
  return (
    <section id="campaigns" className="py-20 bg-gray-50 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Active Campaigns
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Support our ongoing initiatives to create lasting change in communities worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign) => {
            const percentage = (campaign.raised / campaign.goal) * 100;
            return (
              <div
                key={campaign.id}
                className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                {/* Image */}
                <div className={`${campaign.image} h-40 flex items-center justify-center text-white text-sm font-medium`}>
                  Campaign Image
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white flex-grow pr-2">
                      {campaign.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs font-semibold rounded whitespace-nowrap">
                      <Heart className="w-3 h-3" />
                      {campaign.urgency}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow">
                    {campaign.description}
                  </p>

                  {/* Progress */}
                  <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <ProgressBar raised={campaign.raised} goal={campaign.goal} />

                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          ${(campaign.raised / 1000).toFixed(0)}k of ${(campaign.goal / 1000).toFixed(0)}k
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-500">
                          {percentage.toFixed(0)}% funded
                        </div>
                      </div>
                      <Button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 h-auto text-sm">
                        Donate
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 h-auto text-lg"
          >
            View All Campaigns
          </Button>
        </div>
      </div>
    </section>
  );
}
