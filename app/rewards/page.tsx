'use client';

import { PageLayout } from '@/components/page-layout';
import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { Trophy, Star, Gift, ShieldCheck, ArrowRight, Clock, Award, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function RewardsPage() {
  const tiers = [
    { name: 'Bronze', hours: '50 Hours', color: 'bg-[#cd7f32]', perks: ['Digital Certificate', 'Volunteer Badge', 'Access to Level 1 Courses'] },
    { name: 'Silver', hours: '200 Hours', color: 'bg-gray-400', perks: ['Signed Physical Certificate', 'VMC Member Card', 'Exclusive Webinar Access'] },
    { name: 'Gold', hours: '500 Hours', color: 'bg-[#facc15]', perks: ['Presidential Award', 'Priority Mission Deployment', 'VMC Leadership Training'] },
    { name: 'Diamond', hours: '1000+ Hours', color: 'bg-[#b9f2ff]', perks: ['Life-time Achievement Award', 'Mission Lead Status', 'Global Summit Guest'] },
  ];

  const categories = [
    { title: 'VMC Gear', icon: <Gift size={24} />, items: ['Official VMC Scrub Sets', 'Volunteer T-shirts', 'VMC Tactical Bags'] },
    { title: 'Education', icon: <Award size={24} />, items: ['Advanced Specialization Courses', 'Leadership Masterclasses', 'Conference Passes'] },
    { title: 'Recognition', icon: <Trophy size={24} />, items: ['Hall of Fame Induction', 'Newsletter Feature', 'Local Media Spotlight'] },
  ];

  return (
    <PageLayout>
      {/* Rewards Hero */}
      <section className="relative py-32 bg-[#001f3f] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop" 
            alt="Rewards Hero" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-7xl font-black mb-8 uppercase tracking-tighter leading-none">
              Earn VMC <span className="text-[#facc15]">Rewards</span>
            </h1>
            <p className="text-xl text-white/80 mb-10 leading-relaxed font-medium">
              Your dedication to service deserves recognition. Track your volunteering hours and unlock exclusive rewards, certificates, and growth opportunities.
            </p>
            <Button asChild className="bg-[#facc15] hover:bg-white text-[#001f3f] rounded-none px-10 py-8 font-black uppercase tracking-widest text-sm shadow-xl">
              <Link href="/elearn/students/home">Check My Hours</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <SectionWrapper className="bg-gray-50">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="space-y-6 p-8 bg-white shadow-xl">
             <div className="w-16 h-16 bg-[#001f3f] text-[#facc15] rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Clock size={32} />
             </div>
             <h3 className="text-xl font-black text-[#001f3f] uppercase">1. Serve</h3>
             <p className="text-sm text-gray-500 leading-relaxed">Participate in VMC campaigns, medical missions, and community outreaches globally.</p>
          </div>
          <div className="space-y-6 p-8 bg-white shadow-xl">
             <div className="w-16 h-16 bg-[#001f3f] text-[#facc15] rounded-full flex items-center justify-center mx-auto shadow-lg">
                <ShieldCheck size={32} />
             </div>
             <h3 className="text-xl font-black text-[#001f3f] uppercase">2. Verify</h3>
             <p className="text-sm text-gray-500 leading-relaxed">Log your activities and get them verified by our mission leads and automated tracking systems.</p>
          </div>
          <div className="space-y-6 p-8 bg-white shadow-xl">
             <div className="w-16 h-16 bg-[#001f3f] text-[#facc15] rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Trophy size={32} />
             </div>
             <h3 className="text-xl font-black text-[#001f3f] uppercase">3. Redeem</h3>
             <p className="text-sm text-gray-500 leading-relaxed">Unlock milestones and redeem your hours for certificates, gear, and advanced training.</p>
          </div>
        </div>
      </SectionWrapper>

      {/* Rewards Tiers */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[#facc15] uppercase tracking-widest mb-2">Milestones</h2>
          <h3 className="text-4xl font-black text-[#001f3f] uppercase">Volunteer Tiers</h3>
          <div className="h-1.5 w-24 bg-[#facc15] mx-auto mt-4"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiers.map((tier, i) => (
            <div key={i} className="bg-white border-t-8 border-[#001f3f] shadow-2xl flex flex-col group hover:-translate-y-2 transition-transform duration-300">
              <div className="p-8 text-center border-b border-gray-50">
                <div className={`w-20 h-20 ${tier.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl text-white`}>
                   <Star size={40} className="fill-current" />
                </div>
                <h4 className="text-2xl font-black text-[#001f3f] uppercase mb-1">{tier.name}</h4>
                <div className="text-[10px] font-black uppercase tracking-widest text-[#facc15]">{tier.hours}</div>
              </div>
              <div className="p-8 flex-1">
                <ul className="space-y-4">
                  {tier.perks.map((perk, j) => (
                    <li key={j} className="flex items-start gap-3 text-xs font-bold text-gray-500 uppercase tracking-tighter">
                      <ShieldCheck size={14} className="text-[#facc15] shrink-0" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Rewards Catalog Preview */}
      <SectionWrapper className="bg-[#001f3f] text-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-[#facc15] uppercase tracking-widest mb-2">Redeem Points</h2>
            <h3 className="text-4xl font-black uppercase mb-8 leading-tight">VMC Rewards Catalog</h3>
            <p className="text-lg text-white/70 mb-10 leading-relaxed font-medium">
              Access an exclusive range of VMC merchandise and professional development resources. Your service impact creates value both for the world and your career.
            </p>
            <div className="grid sm:grid-cols-1 gap-6">
              {categories.map((cat, i) => (
                <div key={i} className="flex items-center gap-6 bg-white/5 p-6 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-[#facc15]">{cat.icon}</div>
                  <div>
                    <h5 className="font-black uppercase tracking-widest text-sm mb-1">{cat.title}</h5>
                    <p className="text-[10px] text-white/50 uppercase font-bold">{cat.items.join(' | ')}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square shadow-2xl overflow-hidden border-8 border-white/5">
             <Image 
              src="https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2070&auto=format&fit=crop" 
              alt="Rewards Catalog" 
              fill 
              className="object-cover"
             />
             <div className="absolute inset-0 bg-[#001f3f]/40 flex items-center justify-center p-12 text-center">
                <div className="border-4 border-[#facc15] p-10 bg-[#001f3f]/80 backdrop-blur-md">
                   <Star size={48} className="text-[#facc15] mx-auto mb-4" />
                   <h4 className="text-2xl font-black uppercase mb-4 tracking-widest">Coming Soon</h4>
                   <p className="text-sm font-bold uppercase tracking-widest text-white/60">Digital Rewards Marketplace</p>
                </div>
             </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <section className="bg-white py-24 text-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-[#facc15] p-16 shadow-2xl border-b-8 border-[#001f3f] relative overflow-hidden">
             <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-black text-[#001f3f] mb-6 uppercase">Ready to start earning?</h2>
                <p className="text-lg text-[#001f3f]/70 mb-10 font-bold uppercase tracking-widest">Join our next campaign and log your first volunteer hours today.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild className="bg-[#001f3f] hover:bg-[#002855] text-white rounded-none px-10 py-7 font-black uppercase tracking-widest text-sm">
                    <Link href="/campaigns">Browse Campaigns</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-2 border-[#001f3f] text-[#001f3f] hover:bg-[#001f3f] hover:text-white rounded-none px-10 py-7 font-black uppercase tracking-widest text-sm transition-all">
                    <Link href="/register">Join VMC Today</Link>
                  </Button>
                </div>
             </div>
             <Heart size={300} className="absolute -bottom-20 -right-20 text-[#001f3f]/5" />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
