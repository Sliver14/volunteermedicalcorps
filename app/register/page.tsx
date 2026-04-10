'use client';
import { PageLayout } from '@/components/page-layout';
import { SectionWrapper } from '@/components/section-wrapper';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function RegisterPage() {
  const { register, handleSubmit } = useForm();
  
  const onSubmit = (data: any) => {
    console.log(data);
    alert('Registration submitted successfully!');
  };

  return (
    <PageLayout>
      <SectionWrapper className="bg-gray-50">
        <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-black text-[#001f3f] mb-4">BECOME A VOLUNTEER</h1>
            <div className="h-1 w-16 bg-[#facc15] mx-auto mb-4"></div>
            <p className="text-gray-500">Join our global network of medical professionals.</p>
          </div>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#001f3f]">First Name</label>
                <Input {...register('firstName')} required className="rounded-none border-gray-200 focus-visible:ring-[#facc15]" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#001f3f]">Last Name</label>
                <Input {...register('lastName')} required className="rounded-none border-gray-200 focus-visible:ring-[#facc15]" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#001f3f]">Email Address</label>
              <Input type="email" {...register('email')} required className="rounded-none border-gray-200 focus-visible:ring-[#facc15]" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#001f3f]">Medical Specialty / Role</label>
              <Input {...register('specialty')} required className="rounded-none border-gray-200 focus-visible:ring-[#facc15]" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#001f3f]">Why do you want to join?</label>
              <Textarea {...register('reason')} className="rounded-none border-gray-200 min-h-[120px] focus-visible:ring-[#facc15]" />
            </div>
            <Button type="submit" className="w-full bg-[#facc15] hover:bg-[#002855] text-[#001f3f] hover:text-white rounded-none py-6 font-black uppercase tracking-widest transition-colors">
              Submit Application
            </Button>
          </form>
        </div>
      </SectionWrapper>
    </PageLayout>
  );
}
