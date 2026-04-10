import { PageLayout } from '@/components/page-layout';
import { SectionWrapper } from '@/components/section-wrapper';
import { CourseCard } from '@/components/course-card';
import { courses } from '@/lib/data/courses';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ELearnPage() {
  return (
    <PageLayout>
      <SectionWrapper className="bg-[#001f3f] text-white">
        <div className="text-center max-w-3xl mx-auto py-12">
          <h1 className="text-4xl md:text-6xl font-black mb-6">MEDICAL CORPS ACADEMY</h1>
          <p className="text-xl text-gray-300 mb-8">Empowering volunteers with world-class medical training and disaster response protocols.</p>
          <div className="flex justify-center gap-4">
            <Button asChild className="bg-[#facc15] hover:bg-white text-[#001f3f] font-black py-6 px-8 rounded-none tracking-widest uppercase">
              <Link href="/elearn/courses">Browse Courses</Link>
            </Button>
            <Button asChild variant="outline" className="border-[#facc15] text-[#facc15] hover:bg-[#facc15] hover:text-[#001f3f] font-black py-6 px-8 rounded-none tracking-widest uppercase">
              <Link href="/elearn/students/home">Student Portal</Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-black text-[#001f3f] mb-4">FEATURED COURSES</h2>
            <div className="h-1 w-20 bg-[#facc15]"></div>
          </div>
          <Link href="/elearn/courses" className="text-[#001f3f] font-bold uppercase tracking-widest hover:text-[#facc15] transition-colors text-sm">
            View All →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(course => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </SectionWrapper>
    </PageLayout>
  );
}
