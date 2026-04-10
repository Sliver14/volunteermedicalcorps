import { PageLayout } from '@/components/page-layout';
import { SectionWrapper } from '@/components/section-wrapper';
import { courses } from '@/lib/data/courses';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { BookOpen, User, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default async function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const course = courses.find(c => c.id === resolvedParams.id);
  if (!course) return notFound();

  return (
    <PageLayout>
      <SectionWrapper>
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-black text-[#001f3f] mb-4">{course.title}</h1>
            <div className="flex flex-wrap gap-6 text-sm font-bold text-gray-500 uppercase tracking-widest mb-8 border-b border-gray-100 pb-6">
              <span className="flex items-center gap-2"><User size={16} className="text-[#facc15]"/> {course.instructor}</span>
              <span className="flex items-center gap-2"><BookOpen size={16} className="text-[#facc15]"/> {course.lessons} Lessons</span>
              <span className="flex items-center gap-2"><Clock size={16} className="text-[#facc15]"/> Self-paced</span>
            </div>
            
            <div className="relative aspect-[16/9] mb-8 bg-gray-100">
              <Image src={course.image} alt={course.title} fill className="object-cover" />
            </div>

            <div className="prose max-w-none text-gray-600">
              <h2 className="text-2xl font-bold text-[#001f3f] mb-4">Course Overview</h2>
              <p>{course.description}</p>
              <h3 className="text-xl font-bold text-[#001f3f] mt-8 mb-4">What you'll learn</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Essential protocols for emergency medical response.</li>
                <li>How to coordinate with local health authorities.</li>
                <li>Triage and immediate care in resource-limited settings.</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="bg-gray-50 p-8 border border-gray-100 sticky top-32">
              <h3 className="text-2xl font-black text-[#001f3f] mb-2">Enroll Now</h3>
              <p className="text-gray-500 text-sm mb-6">Free for registered volunteers.</p>
              <ul className="space-y-4 mb-8">
                <li className="flex justify-between border-b border-gray-200 pb-2"><span className="text-gray-500">Duration</span><span className="font-bold text-[#001f3f]">4 Weeks</span></li>
                <li className="flex justify-between border-b border-gray-200 pb-2"><span className="text-gray-500">Lectures</span><span className="font-bold text-[#001f3f]">{course.lessons}</span></li>
                <li className="flex justify-between border-b border-gray-200 pb-2"><span className="text-gray-500">Certificate</span><span className="font-bold text-[#001f3f]">Yes</span></li>
              </ul>
              <Button className="w-full bg-[#facc15] hover:bg-[#002855] text-[#001f3f] hover:text-white rounded-none py-6 font-black uppercase tracking-widest transition-colors">
                Start Course
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </PageLayout>
  );
}
