'use client';
import { PageLayout } from '@/components/page-layout';
import { SectionWrapper } from '@/components/section-wrapper';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import { HandsPraying, Heart, ShieldCheck, Users } from 'lucide-react';

export default function GlobalPrayerPage() {
  const { register, handleSubmit } = useForm();
  
  const onSubmit = (data: any) => {
    console.log(data);
    alert('Thank you! Your prayer request has been received by the VMC Global Prayer Network.');
  };

  const prayerFocus = [
    { title: 'Medical Missions', desc: 'Divine protection and wisdom for our teams on the field.' },
    { title: 'The Sick & Vulnerable', desc: 'Healing and comfort for those in regions of crisis.' },
    { title: 'New VMC Volunteers', desc: 'Guidance and strength as they join our global network.' },
  ];

  return (
    <PageLayout>
      {/* Prayer Hero */}
      <section className="relative py-24 bg-[#001f3f] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1515658323406-25d61c141a6e?q=80&w=1909&auto=format&fit=crop" 
            alt="Prayer Background" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">VMC Praying Medics</h1>
          <div className="h-2 w-24 bg-[#facc15] mx-auto mb-8"></div>
          <p className="text-xl text-[#facc15] font-bold uppercase tracking-widest max-w-3xl mx-auto">
            A Global Network of Faith, Compassion, and Divine Healing.
          </p>
        </div>
      </section>

      <SectionWrapper className="bg-gray-50">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Info Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-[#001f3f] text-white p-8 shadow-2xl border-b-8 border-[#facc15]">
              <h3 className="text-2xl font-black mb-6 uppercase">Current Prayer Focus</h3>
              <div className="space-y-6">
                {prayerFocus.map((f, i) => (
                  <div key={i} className="flex gap-4 border-b border-white/10 pb-4 last:border-0">
                    <div>
                      <h4 className="font-bold text-[#facc15] uppercase text-sm mb-1">{f.title}</h4>
                      <p className="text-white/70 text-xs leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 shadow-xl border border-gray-100">
              <h4 className="font-black text-[#001f3f] uppercase mb-4">Join the Network</h4>
              <p className="text-gray-500 text-sm mb-6">Become a part of our global intercessory team and pray for medical missions worldwide.</p>
              <Button asChild className="w-full bg-[#facc15] hover:bg-[#001f3f] text-[#001f3f] hover:text-white rounded-none font-black uppercase tracking-widest py-6 text-xs">
                <a href="/register">Sign Up to Pray</a>
              </Button>
            </div>
          </div>

          {/* Prayer Request Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 shadow-2xl border-t-8 border-[#001f3f]">
              <div className="mb-10">
                <h2 className="text-3xl font-black text-[#001f3f] uppercase mb-2">Submit a Prayer Request</h2>
                <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Our global prayer network is standing with you</p>
              </div>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                    <Input {...register('name')} required className="rounded-none border-gray-200 focus-visible:ring-[#facc15] py-6" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                    <Input type="email" {...register('email')} required className="rounded-none border-gray-200 focus-visible:ring-[#facc15] py-6" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Prayer Request Details</label>
                  <Textarea 
                    {...register('request')} 
                    required
                    className="rounded-none border-gray-200 min-h-[200px] focus-visible:ring-[#facc15] p-4" 
                    placeholder="Share your heart and let us stand in faith with you..."
                  />
                </div>

                <div className="flex items-center gap-3 bg-gray-50 p-6 border-l-4 border-[#facc15]">
                  <ShieldCheck className="text-[#facc15] shrink-0" size={24} />
                  <p className="text-sm text-gray-600 font-medium italic">"For where two or three are gathered together in my name, there am I in the midst of them." - Matthew 18:20</p>
                </div>

                <Button type="submit" className="w-full bg-[#001f3f] hover:bg-[#002855] text-white rounded-none py-8 font-black uppercase tracking-widest text-lg shadow-xl active:scale-95 transition-all">
                  Send Prayer Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </PageLayout>
  );
}
