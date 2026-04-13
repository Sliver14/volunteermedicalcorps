import { PageLayout } from '@/components/page-layout';
import { SectionWrapper } from '@/components/section-wrapper';
import { CourseCard } from '@/components/course-card';
import { courses } from '@/lib/data/courses';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { BookOpen, GraduationCap, Laptop, ShieldCheck, Trophy, Users } from 'lucide-react';

export default function ELearnPage() {
  const stats = [
    { icon: <Users size={24} />, label: 'Students', value: '15,000+' },
    { icon: <BookOpen size={24} />, label: 'Courses', value: '45' },
    { icon: <Trophy size={24} />, label: 'Certifications', value: '60,000+' },
  ];

  return (
    <PageLayout>
      {/* Academy Hero */}
      <section className="relative py-32 bg-[#001f3f] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" 
            alt="Academy Background" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-7xl font-black mb-8 uppercase tracking-tighter leading-none">
                VMC <br /><span className="text-[#facc15]">Academy</span>
              </h1>
              <p className="text-xl text-white/80 mb-10 leading-relaxed font-medium">
                Empowering Christian medical professionals and volunteers with specialized training for global health impact and disaster relief.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-[#facc15] hover:bg-white text-[#001f3f] rounded-none px-10 py-8 font-black uppercase tracking-widest text-sm shadow-xl">
                  <Link href="/elearn/courses">Explore Courses</Link>
                </Button>
                <Button asChild variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#001f3f] rounded-none px-10 py-8 font-black uppercase tracking-widest text-sm transition-all">
                  <Link href="/elearn/students/home">Student Portal</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-4">
               {stats.map((stat, i) => (
                 <div key={i} className="bg-white/5 backdrop-blur-md p-8 border border-white/10 text-center">
                    <div className="text-[#facc15] mb-4 flex justify-center">{stat.icon}</div>
                    <div className="text-3xl font-black mb-1">{stat.value}</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/50">{stat.label}</div>
                 </div>
               ))}
               <div className="bg-[#facc15] p-8 text-[#001f3f] text-center">
                  <GraduationCap size={24} className="mb-4 mx-auto" />
                  <div className="text-sm font-black uppercase leading-tight">Accredited <br />Certificates</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose VMC Academy */}
      <SectionWrapper className="bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[#facc15] uppercase tracking-widest mb-2">Our Advantage</h2>
          <h3 className="text-4xl font-black text-[#001f3f] uppercase">Why Train With Us?</h3>
          <div className="h-1.5 w-24 bg-[#facc15] mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center p-8 bg-white shadow-xl border-b-8 border-[#facc15]">
            <Laptop className="mx-auto mb-6 text-[#001f3f]" size={40} />
            <h4 className="text-xl font-black text-[#001f3f] uppercase mb-4">Flexible Learning</h4>
            <p className="text-gray-500 text-sm leading-relaxed">Access world-class medical training anytime, anywhere, on any device.</p>
          </div>
          <div className="text-center p-8 bg-white shadow-xl border-b-8 border-[#001f3f]">
            <ShieldCheck className="mx-auto mb-6 text-[#001f3f]" size={40} />
            <h4 className="text-xl font-black text-[#001f3f] uppercase mb-4">Verified Certificates</h4>
            <p className="text-gray-500 text-sm leading-relaxed">Earn globally recognized certificates verified by the Volunteer Medical Corps.</p>
          </div>
          <div className="text-center p-8 bg-white shadow-xl border-b-8 border-[#facc15]">
            <Users className="mx-auto mb-6 text-[#001f3f]" size={40} />
            <h4 className="text-xl font-black text-[#001f3f] uppercase mb-4">Expert Instructors</h4>
            <p className="text-gray-500 text-sm leading-relaxed">Learn from seasoned medical professionals with decades of field experience.</p>
          </div>
        </div>
      </SectionWrapper>

      {/* Featured Courses */}
      <SectionWrapper>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold text-[#facc15] uppercase tracking-widest mb-2">Active Learning</h2>
            <h3 className="text-4xl font-black text-[#001f3f] uppercase">Featured Courses</h3>
            <div className="h-1.5 w-24 bg-[#facc15] mt-4"></div>
          </div>
          <Link href="/elearn/courses" className="text-[#001f3f] font-bold uppercase tracking-widest hover:text-[#facc15] transition-colors text-sm border-b-2 border-[#facc15] pb-1">
            Browse Full Catalog →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(course => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </SectionWrapper>

      {/* Student Portal CTA */}
      <section className="bg-[#001f3f] text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#facc15]/5 skew-x-12 translate-x-1/2"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase">Ready to Start Learning?</h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Log in to your student account to access your courses, track your progress, and download your certificates.
          </p>
          <Button asChild size="lg" className="bg-[#facc15] hover:bg-white text-[#001f3f] rounded-none px-12 py-8 text-lg font-black uppercase tracking-widest shadow-2xl transition-all">
            <Link href="/elearn/students/home">Access Student Portal</Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
}
