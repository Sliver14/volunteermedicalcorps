'use client';

import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const events = [
  {
    id: 1,
    title: 'Global Volunteering Summit 2026',
    date: 'May 15, 2026',
    time: '9:00 AM - 5:00 PM',
    location: 'Virtual + New York, USA',
    attendees: 2500,
    description: 'Join volunteers from around the world to share experiences and learn best practices for community impact.',
    type: 'Conference',
  },
  {
    id: 2,
    title: 'Community Clean-Up Day',
    date: 'April 22, 2026',
    time: '7:00 AM - 12:00 PM',
    location: '50+ Cities Worldwide',
    attendees: 1200,
    description: 'Participate in local environmental initiatives and strengthen community bonds.',
    type: 'Volunteer Event',
  },
  {
    id: 3,
    title: 'Fundraising Gala Dinner',
    date: 'June 5, 2026',
    time: '6:00 PM - 10:00 PM',
    location: 'Beverly Hills, California',
    attendees: 500,
    description: 'An elegant evening celebrating our achievements and supporting future initiatives.',
    type: 'Fundraiser',
  },
  {
    id: 4,
    title: 'Skills Workshop Series',
    date: 'April 20 - May 4, 2026',
    time: '6:00 PM - 8:00 PM',
    location: 'Multiple Locations',
    attendees: 300,
    description: 'Learn essential skills to support our programs and make a greater impact.',
    type: 'Workshop',
  },
];

export function EventsSection() {
  return (
    <section id="events" className="py-20 bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base md:text-base font-semibold text-gray-900 dark:text-white mb-4">
            Upcoming Events
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join us at upcoming events to connect, learn, and make a difference together.
          </p>
        </div>

        <div className="space-y-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-gradient-to-r from-gray-50 to-white dark:from-slate-900 dark:to-slate-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Event Details */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-200 text-xs font-semibold rounded-full">
                      {event.type}
                    </span>
                  </div>

                  <h3 className="text-base md:text-base font-semibold text-gray-900 dark:text-white">
                    {event.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400">
                    {event.description}
                  </p>

                  {/* Event Info */}
                  <div className="flex flex-col gap-3 pt-4">
                    <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <Calendar className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                      <div>
                        <div className="font-semibold">{event.date}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{event.time}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <MapPin className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                      <div className="font-semibold">{event.location}</div>
                    </div>

                    <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <Users className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                      <div className="font-semibold">{event.attendees.toLocaleString()} participants expected</div>
                    </div>
                  </div>
                </div>

                {/* Register Button */}
                <div className="flex flex-col gap-4">
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-gray-600">
                    <div className="text-center">
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">Ready to join?</p>
                      <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 text-base uppercase">
                        Register Now
                      </Button>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                        Limited spots available
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-amber-600 text-amber-600 hover:bg-amber-50 dark:border-amber-400 dark:text-amber-400 dark:hover:bg-amber-900/20 px-8 py-6 h-auto text-base inline-flex items-center gap-2 uppercase"
          >
            See All Events
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
