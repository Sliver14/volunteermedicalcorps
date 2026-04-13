import { PageLayout } from '@/components/page-layout';
import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function AboutPage() {
  const coreValues = [
    { name: 'Faith', description: 'Grounded in Christian principles and love.' },
    { name: 'Innovation', description: 'Modern solutions for global health challenges.' },
    { name: 'Integrity', description: 'Honesty and transparency in all our missions.' },
    { name: 'Effectiveness', description: 'Results-driven medical outreach and relief.' },
    { name: 'Compassion', description: 'Heart-led service to those in dire need.' },
  ];

  return (
    <PageLayout>
      {/* Hero Section for About */}
      <section className="relative py-24 md:py-32 bg-[#001f3f] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" 
            alt="About VMC Background" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-3xl md:text-7xl font-black mb-6 uppercase tracking-tight leading-tight">Our Mission & Vision</h1>
          <div className="h-2 w-24 md:w-32 bg-[#facc15] mx-auto mb-8"></div>
          <p className="text-lg md:text-2xl text-[#facc15] font-bold uppercase tracking-widest max-w-3xl mx-auto">
            Healing the world with love and medical excellence.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <div className="bg-white p-8 md:p-12 shadow-2xl border-l-8 border-[#facc15]">
            <h2 className="text-2xl md:text-3xl font-black text-[#001f3f] mb-6 uppercase tracking-wider">Our Mission</h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed italic">
              "To provide the best and most suitable medical aid to communities and persons in need."
            </p>
          </div>
          <div className="bg-[#001f3f] p-8 md:p-12 shadow-2xl border-l-8 border-[#facc15] text-white">
            <h2 className="text-2xl md:text-3xl font-black mb-6 uppercase tracking-wider">Our Vision</h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed italic">
              "To have global medical outreaches geared towards the provision of prompt medical services in regions of crisis and/or dire need."
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Content Sections */}
      <SectionWrapper className="bg-gray-50">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-[#001f3f] mb-8 uppercase">Who We Are</h2>
          <p className="text-base md:text-xl text-gray-600 leading-relaxed mb-8">
            The Volunteer Medical Corps is the fastest growing Christian medical outreach. The VMC was established as a global network of Christian health workers, para-medics, volunteers and students committed to providing medical care, relief assistance, and sustainable health care solutions in regions of crisis and to communities in dire need.
          </p>
          <p className="text-base md:text-xl text-gray-600 leading-relaxed">
            We are an ever-expanding global network of Christian health care workers, non-medical volunteers and students committed to providing medical care through outreaches, humanitarian assistance and sustainable health care solutions in regions of crisis and to communities in dire need.
          </p>
        </div>
      </SectionWrapper>

      {/* Core Values */}
      <SectionWrapper>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xs md:text-sm font-bold text-[#facc15] uppercase tracking-widest mb-2">Our Foundation</h2>
          <h3 className="text-3xl md:text-5xl font-black text-[#001f3f] mb-4 uppercase">Core Values</h3>
          <div className="h-1.5 w-24 bg-[#facc15] mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {coreValues.map((value, index) => (
            <div key={index} className="text-center p-6 md:p-8 bg-white shadow-xl hover:shadow-2xl transition-all border-b-4 border-[#facc15]">
              <div className="text-[#001f3f] text-xl md:text-2xl font-black mb-4 uppercase">{value.name}</div>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper className="bg-[#001f3f] text-white">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase text-center md:text-left">Get In Touch</h2>
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#facc15] mt-1 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold uppercase tracking-wider text-xs md:text-sm mb-1">Address</h4>
                  <p className="text-xs md:text-base text-white/70">29, Unity Road, Off Obafemi Awolowo Road, Ikeja, Lagos Nigeria</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-[#facc15] mt-1 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold uppercase tracking-wider text-xs md:text-sm mb-1">Phone</h4>
                  <p className="text-xs md:text-base text-white/70">+234 708 9267 186</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-[#facc15] mt-1 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold uppercase tracking-wider text-xs md:text-sm mb-1">Email</h4>
                  <p className="text-xs md:text-base text-white/70">contact@volunteermedicalcorps.org</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 md:p-10 shadow-2xl text-[#001f3f]">
            <h3 className="text-xl md:text-2xl font-black mb-6 uppercase">Send us a message</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name" className="p-4 bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#facc15] text-sm" />
                <input type="email" placeholder="Email Address" className="p-4 bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#facc15] text-sm" />
              </div>
              <input type="text" placeholder="Subject" className="w-full p-4 bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#facc15] text-sm" />
              <textarea placeholder="Your Message" rows={4} className="w-full p-4 bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#facc15] text-sm"></textarea>
              <Button className="w-full bg-[#001f3f] hover:bg-[#002855] text-white rounded-none py-6 md:py-8 font-black uppercase tracking-widest text-xs md:text-sm">
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </PageLayout>
  );
}
