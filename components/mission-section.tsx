'use client';

import { Users, Globe, Heart, Zap } from 'lucide-react';

const stats = [
  {
    icon: Users,
    label: 'Volunteers',
    value: '15,000+',
    description: 'Active volunteers worldwide',
  },
  {
    icon: Globe,
    label: 'Countries',
    value: '45',
    description: 'Making impact globally',
  },
  {
    icon: Heart,
    label: 'Lives Impacted',
    value: '500K+',
    description: 'Direct beneficiaries',
  },
  {
    icon: Zap,
    label: 'Projects',
    value: '200+',
    description: 'Active initiatives',
  },
];

export function MissionSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                We Help All People Around the World
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed text-pretty">
                Our mission is to create sustainable positive change by connecting compassionate individuals with communities in need. Through education, healthcare, and economic empowerment, we build pathways to prosperity.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Since our founding, we have worked tirelessly to bridge the gap between resources and need. Our programs are designed by local leaders and implemented with community participation, ensuring lasting impact.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Every donation, every volunteer hour, and every shared story amplifies our reach and strengthens communities.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/30 dark:to-amber-800/20 rounded-lg p-6 text-center"
                >
                  <Icon className="w-8 h-8 text-amber-600 dark:text-amber-400 mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
