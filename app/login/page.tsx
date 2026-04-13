'use client';

import { PageLayout } from '@/components/page-layout';
import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Lock, Mail, ArrowRight } from 'lucide-react';

export default function LoginPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert('Login functionality will be connected to the backend soon.');
  };

  return (
    <PageLayout>
      <div className="min-h-[calc(100vh-116px)] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl w-full bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row border-b-8 border-[#facc15]">
          
          {/* Left Side - Image/Branding */}
          <div className="md:w-1/2 relative bg-[#001f3f] text-white p-12 flex flex-col justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <Image 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" 
                alt="Login Visual" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="relative z-10">
              <h2 className="text-sm font-bold text-[#facc15] uppercase tracking-[0.3em] mb-4">Volunteer Medical Corps</h2>
              <h3 className="text-4xl font-black uppercase leading-none mb-6">Welcome<br />Back</h3>
              <div className="h-1.5 w-16 bg-[#facc15] mb-8"></div>
              <p className="text-white/70 text-lg font-medium leading-relaxed mb-8">
                Access your volunteer dashboard, track your impact, and continue your journey of service.
              </p>
              <div className="flex items-center gap-3 text-[#facc15]">
                <ShieldCheck size={20} />
                <span className="text-xs font-black uppercase tracking-widest">Secure Access Hub</span>
              </div>
            </div>
            
            {/* Abstract Shape */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#facc15]/10 rounded-full blur-3xl"></div>
          </div>

          {/* Right Side - Login Form */}
          <div className="md:w-1/2 p-8 md:p-16">
            <div className="mb-10">
              <h1 className="text-3xl font-black text-[#001f3f] uppercase mb-2">Member Login</h1>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">Please enter your credentials to proceed</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                    <Mail size={12} className="text-[#facc15]" /> Email Address
                  </label>
                  <Input 
                    type="email" 
                    {...register('email')} 
                    required 
                    className="rounded-none border-gray-200 focus-visible:ring-[#facc15] py-6 bg-gray-50"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                      <Lock size={12} className="text-[#facc15]" /> Password
                    </label>
                    <Link href="/forgot-password" size="sm" className="text-[10px] font-bold text-[#001f3f] hover:text-[#facc15] uppercase tracking-widest transition-colors">
                      Forgot?
                    </Link>
                  </div>
                  <Input 
                    type="password" 
                    {...register('password')} 
                    required 
                    className="rounded-none border-gray-200 focus-visible:ring-[#facc15] py-6 bg-gray-50"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" id="remember" className="w-4 h-4 accent-[#001f3f] cursor-pointer" />
                <label htmlFor="remember" className="text-[10px] font-bold text-gray-500 uppercase tracking-widest cursor-pointer">Remember me for 30 days</label>
              </div>

              <Button type="submit" className="w-full bg-[#001f3f] hover:bg-[#002855] text-white rounded-none py-8 font-black uppercase tracking-widest text-sm shadow-xl transition-all active:scale-95 group">
                Login to Dashboard <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            <div className="mt-12 pt-8 border-t border-gray-100 text-center">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Don't have an account?</p>
              <Button asChild variant="outline" className="w-full border-2 border-[#001f3f] text-[#001f3f] hover:bg-[#001f3f] hover:text-white rounded-none py-6 font-black uppercase tracking-widest text-xs transition-all">
                <Link href="/register">Create VMC Account</Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}
