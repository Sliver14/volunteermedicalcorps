'use client';

import { PageLayout } from '@/components/page-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, ArrowLeft, KeyRound } from 'lucide-react';

export default function ForgotPasswordPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert('If an account exists with that email, a password reset link will be sent.');
  };

  return (
    <PageLayout>
      <div className="min-h-[calc(100vh-116px)] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl w-full bg-white shadow-lg overflow-hidden flex flex-col md:row border-b-8 border-[#facc15] md:flex-row">
          
          {/* Left Side - Image/Branding */}
          <div className="md:w-1/2 relative bg-[#001f3f] text-white p-12 flex flex-col justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <Image 
                src="https://images.unsplash.com/photo-1542884748-2b87b36c6b90?q=80&w=2070&auto=format&fit=crop" 
                alt="Reset Password Visual" 
                fill 
                className="object-cover"
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
            <div className="relative z-10">
              <h2 className="text-sm font-semibold text-[#facc15]  tracking-[0.3em] mb-4">Account Security</h2>
              <h3 className="text-base font-semibold  leading-none mb-6">Reset Your<br />Password</h3>
              <div className="h-1.5 w-16 bg-[#facc15] mb-8"></div>
              <p className="text-white/70 text-base font-medium leading-relaxed mb-8">
                Don't worry, it happens to the best of us. Provide your account email and we'll help you get back on track.
              </p>
              <div className="flex items-center gap-3 text-[#facc15]">
                <KeyRound size={20} />
                <span className="text-xs font-semibold  tracking-widest">Recovery Center</span>
              </div>
            </div>
            
            {/* Abstract Shape */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#facc15]/10 rounded-full blur-3xl"></div>
          </div>

          {/* Right Side - Form */}
          <div className="md:w-1/2 p-8 md:p-16">
            <div className="mb-10">
              <h1 className="text-base font-semibold text-[#001f3f]  mb-2">Recover Account</h1>
              <p className="text-gray-400 font-semibold  tracking-widest text-[10px]">Enter your registered email address</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-semibold text-gray-400  tracking-widest flex items-center gap-2">
                    <Mail size={12} className="text-[#facc15]" /> Email Address
                  </label>
                  <Input 
                    type="email" 
                    {...register('email')} 
                    required 
                    className="rounded-none border-gray-200 focus-visible:ring-[#facc15] py-6 bg-gray-50"
                    placeholder="your-email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <Button type="submit" className="w-full bg-[#001f3f] hover:bg-[#002855] text-white rounded-none py-8 font-semibold  tracking-widest text-sm shadow-lg transition-colors transition-transform transition-shadow active:scale-95 uppercase">
                  Send Recovery Link
                </Button>
                
                <Link 
                  href="/login" 
                  className="flex items-center justify-center gap-2 text-[10px] font-semibold  tracking-widest text-gray-400 hover:text-[#001f3f] transition-colors py-2"
                >
                  <ArrowLeft size={14} /> Back to Login
                </Link>
              </div>
            </form>

            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-xs font-semibold text-gray-400  tracking-widest mb-4 text-center">Need more help?</p>
              <p className="text-xs font-medium text-gray-500">Contact <span className="text-[#001f3f] font-semibold ">support@volunteermedicalcorps.org</span></p>
            </div>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}
