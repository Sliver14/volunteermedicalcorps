'use client';
import { PageLayout } from '@/components/page-layout';
import { SectionWrapper } from '@/components/section-wrapper';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Image from 'next/image';
import { CheckCircle2, Globe, Heart, ShieldCheck } from 'lucide-react';

export default function RegisterPage() {
  const { register, handleSubmit, setValue } = useForm();
  
  const onSubmit = (data: any) => {
    console.log(data);
    alert('Thank you for your interest! Your VMC registration is being processed.');
  };

  const benefits = [
    { icon: <Globe className="text-[#facc15]" size={24} />, title: 'Global Network', desc: 'Connect with Christian health workers worldwide.' },
    { icon: <Heart className="text-[#facc15]" size={24} />, title: 'Impact Lives', desc: 'Provide medical aid in regions of crisis.' },
    { icon: <ShieldCheck className="text-[#facc15]" size={24} />, title: 'Certified Hours', desc: 'Earn verified volunteer hours and certificates.' },
  ];

  return (
    <PageLayout>
      {/* Registration Hero */}
      <section className="relative py-24 bg-[#001f3f] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image 
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop" 
            alt="Registration Background" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">Become a VMC Volunteer</h1>
          <div className="h-2 w-24 bg-[#facc15] mx-auto mb-8"></div>
          <p className="text-xl text-[#facc15] font-bold uppercase tracking-widest max-w-3xl mx-auto">
            Join the fastest growing Christian medical outreach in the world.
          </p>
        </div>
      </section>

      <SectionWrapper className="bg-gray-50">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Info Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-[#001f3f] text-white p-8 shadow-2xl border-b-8 border-[#facc15]">
              <h3 className="text-2xl font-black mb-6 uppercase">Why Join VMC?</h3>
              <div className="space-y-6">
                {benefits.map((b, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 mt-1">{b.icon}</div>
                    <div>
                      <h4 className="font-bold text-[#facc15] uppercase text-sm mb-1">{b.title}</h4>
                      <p className="text-white/70 text-sm leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 shadow-xl border border-gray-100">
              <h4 className="font-black text-[#001f3f] uppercase mb-4">Registration Support</h4>
              <p className="text-gray-500 text-sm mb-4">Need help with your application? Contact our registration team.</p>
              <div className="text-[#001f3f] font-bold text-sm">support@volunteermedicalcorps.org</div>
            </div>
          </div>

          {/* Form Area */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 shadow-2xl border-t-8 border-[#001f3f]">
              <div className="mb-10">
                <h2 className="text-3xl font-black text-[#001f3f] uppercase mb-2">Volunteer Application</h2>
                <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Please provide accurate information for verification</p>
              </div>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-black text-[#001f3f] uppercase border-b border-gray-100 pb-2">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">First Name</label>
                      <Input {...register('firstName')} required className="rounded-none border-gray-200 focus-visible:ring-[#facc15] py-6" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Last Name</label>
                      <Input {...register('lastName')} required className="rounded-none border-gray-200 focus-visible:ring-[#facc15] py-6" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                      <Input type="email" {...register('email')} required className="rounded-none border-gray-200 focus-visible:ring-[#facc15] py-6" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Phone Number</label>
                      <Input type="tel" {...register('phone')} required className="rounded-none border-gray-200 focus-visible:ring-[#facc15] py-6" />
                    </div>
                  </div>
                </div>

                {/* Professional Details */}
                <div className="space-y-6">
                  <h3 className="text-lg font-black text-[#001f3f] uppercase border-b border-gray-100 pb-2">Professional Details</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Profession Type</label>
                      <Select onValueChange={(v) => setValue('profession', v)}>
                        <SelectTrigger className="rounded-none border-gray-200 h-[50px] focus:ring-[#facc15]">
                          <SelectValue placeholder="Select Profession" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="doctor">Medical Doctor</SelectItem>
                          <SelectItem value="nurse">Nurse</SelectItem>
                          <SelectItem value="paramedic">Paramedic</SelectItem>
                          <SelectItem value="student">Medical Student</SelectItem>
                          <SelectItem value="non-medical">Non-Medical Volunteer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Specialization</label>
                      <Input {...register('specialty')} placeholder="e.g. Surgery, Pediatrics, etc." className="rounded-none border-gray-200 focus-visible:ring-[#facc15] py-6" />
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-black text-[#001f3f] uppercase border-b border-gray-100 pb-2">Experience & Motivation</h3>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Why do you want to join the VMC?</label>
                    <Textarea 
                      {...register('motivation')} 
                      className="rounded-none border-gray-200 min-h-[150px] focus-visible:ring-[#facc15] p-4" 
                      placeholder="Tell us about your heart for missions..."
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-[#facc15]/10 p-4 border-l-4 border-[#facc15]">
                  <CheckCircle2 className="text-[#facc15] shrink-0" size={20} />
                  <p className="text-sm text-[#001f3f] font-medium">By submitting, you agree to uphold the core values of the Volunteer Medical Corps.</p>
                </div>

                <Button type="submit" className="w-full bg-[#001f3f] hover:bg-[#002855] text-white rounded-none py-8 font-black uppercase tracking-widest text-lg shadow-xl active:scale-95 transition-all">
                  Submit VMC Application
                </Button>
              </form>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </PageLayout>
  );
}
