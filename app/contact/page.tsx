'use client';
import { PageLayout } from '@/components/page-layout';
import { SectionWrapper } from '@/components/section-wrapper';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
  const { register, handleSubmit } = useForm();
  
  const onSubmit = (data: any) => {
    console.log(data);
    alert('Message sent!');
  };

  return (
    <PageLayout>
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h1 className="text-base md:text-base font-semibold text-[#001f3f] mb-4">CONTACT US</h1>
            <div className="h-1 w-20 bg-[#facc15] mb-8"></div>
            <p className="text-gray-500 mb-10">We would love to hear from you. Reach out to us for any inquiries about volunteering, partnerships, or donations.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#facc15] flex items-center justify-center text-[#001f3f]">
                  <MapPin />
                </div>
                <div>
                  <h4 className="font-semibold text-[#001f3f]">Our Location</h4>
                  <p className="text-sm text-gray-500">123 Charity Lane, New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#facc15] flex items-center justify-center text-[#001f3f]">
                  <Phone />
                </div>
                <div>
                  <h4 className="font-semibold text-[#001f3f]">Call Us</h4>
                  <p className="text-sm text-gray-500">+1 234 567 8900</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#facc15] flex items-center justify-center text-[#001f3f]">
                  <Mail />
                </div>
                <div>
                  <h4 className="font-semibold text-[#001f3f]">Email Us</h4>
                  <p className="text-sm text-gray-500">contact@alonecharity.org</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 md:p-10 border border-gray-100">
            <h3 className="text-base font-semibold text-[#001f3f] mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Input placeholder="Your Name" {...register('name')} required className="rounded-none border-gray-200 focus-visible:ring-[#facc15] bg-white h-12" />
              </div>
              <div className="space-y-2">
                <Input type="email" placeholder="Your Email" {...register('email')} required className="rounded-none border-gray-200 focus-visible:ring-[#facc15] bg-white h-12" />
              </div>
              <div className="space-y-2">
                <Input placeholder="Subject" {...register('subject')} required className="rounded-none border-gray-200 focus-visible:ring-[#facc15] bg-white h-12" />
              </div>
              <div className="space-y-2">
                <Textarea placeholder="Message" {...register('message')} required className="rounded-none border-gray-200 min-h-[150px] focus-visible:ring-[#facc15] bg-white" />
              </div>
              <Button type="submit" className="w-full bg-[#facc15] hover:bg-[#002855] text-[#001f3f] hover:text-white rounded-none py-6 font-semibold  tracking-widest transition-colors uppercase">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </SectionWrapper>
    </PageLayout>
  );
}
