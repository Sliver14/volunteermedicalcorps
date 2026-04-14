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
           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-semibold mb-6">
                VMC <span className="text-[#facc15]">Academy</span>
              </h1>
              <div className="h-1 w-20 bg-[#facc15] mb-8"></div>
              <p className="text-base text-white/80 mb-10 leading-relaxed font-medium">
                Empowering Christian medical professionals and volunteers with specialized training for global health impact and disaster relief.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-[#facc15] hover:bg-white text-[#001f3f] rounded-none px-10 py-8 font-semibold tracking-widest text-sm shadow-lg uppercase">
                  <Link href="/elearn/courses">Explore Courses</Link>
                </Button>
                <Button asChild variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#001f3f] rounded-none px-10 py-8 font-semibold tracking-widest text-sm uppercase">
                  <Link href="/elearn/students/home">Student Portal</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-4">
               {stats.map((stat, i) => (
                 <div key={i} className="bg-white/5 backdrop-blur-md p-8 border border-white/10 text-center">
                    <div className="text-[#facc15] mb-4 flex justify-center">{stat.icon}</div>
                    <div className="text-2xl font-semibold mb-1">{stat.value}</div>
                    <div className="text-[10px] font-semibold uppercase tracking-widest text-white/50">{stat.label}</div>
                 </div>
               ))}
               <div className="bg-[#facc15] p-8 text-[#001f3f] text-center">
                  <GraduationCap size={24} className="mb-4 mx-auto" />
                  <div className="text-sm font-semibold uppercase tracking-widest leading-tight">Accredited <br />Certificates</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose VMC Academy */}
      <SectionWrapper className="bg-gray-50">
        <div className="text-center mb-16">
          <p className="text-xs md:text-sm font-semibold text-[#facc15] tracking-widest mb-2 uppercase">Our Advantage</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#001f3f] mb-4">Why Train With Us?</h2>
          <div className="h-1 w-20 bg-[#facc15] mx-auto mb-8"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center p-8 bg-white shadow-lg border-b-8 border-[#facc15]">
            <Laptop className="mx-auto mb-6 text-[#001f3f]" size={40} />
            <h3 className="text-xl md:text-2xl font-semibold text-[#001f3f] mb-4">Flexible Learning</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Access world-class medical training anytime, anywhere, on any device.</p>
          </div>
          <div className="text-center p-8 bg-white shadow-lg border-b-8 border-[#001f3f]">
            <ShieldCheck className="mx-auto mb-6 text-[#001f3f]" size={40} />
            <h3 className="text-xl md:text-2xl font-semibold text-[#001f3f] mb-4">Verified Certificates</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Earn globally recognized certificates verified by the Volunteer Medical Corps.</p>
          </div>
          <div className="text-center p-8 bg-white shadow-lg border-b-8 border-[#facc15]">
            <Users className="mx-auto mb-6 text-[#001f3f]" size={40} />
            <h3 className="text-xl md:text-2xl font-semibold text-[#001f3f] mb-4">Expert Instructors</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Learn from seasoned medical professionals with decades of field experience.</p>
          </div>
        </div>
      </SectionWrapper>

      {/* Featured Courses */}
      <SectionWrapper>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <p className="text-xs md:text-sm font-semibold text-[#facc15] tracking-widest mb-2 uppercase">Active Learning</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#001f3f] mb-4">Featured Courses</h2>
            <div className="h-1 w-20 bg-[#facc15] mb-8"></div>
          </div>
          <Link href="/elearn/courses" className="text-[#001f3f] font-semibold tracking-widest hover:text-[#facc15] transition-colors text-sm border-b-2 border-[#facc15] pb-1 uppercase">
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
          <p className="text-xs md:text-sm font-semibold text-[#facc15] tracking-widest mb-2 uppercase">Student Portal</p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Ready To Start Learning?</h2>
          <div className="h-1 w-20 bg-[#facc15] mx-auto mb-8"></div>
          <p className="text-base text-white/70 mb-12 max-w-2xl mx-auto">
            Log in to your student account to access your courses, track your progress, and download your certificates.
          </p>
          <Button asChild size="lg" className="bg-[#facc15] hover:bg-white text-[#001f3f] rounded-none px-12 py-8 text-base font-semibold  tracking-widest shadow-lg transition-colors uppercase">
            <Link href="/elearn/students/home">Access Student Portal</Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
}
