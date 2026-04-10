import { PageLayout } from '@/components/page-layout';
import { SectionWrapper } from '@/components/section-wrapper';
import { CourseCard } from '@/components/course-card';
import { courses } from '@/lib/data/courses';

export default function StudentDashboardPage() {
  return (
    <PageLayout>
      <div className="bg-[#001f3f] py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-black mb-2">WELCOME BACK, STUDENT</h1>
          <p className="text-gray-400">Continue your medical training journey.</p>
        </div>
      </div>
      <SectionWrapper>
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
             <div className="bg-gray-50 p-6 border border-gray-100">
                <ul className="space-y-4 font-bold text-sm text-[#001f3f] uppercase tracking-widest">
                  <li className="text-[#facc15]">Dashboard</li>
                  <li className="hover:text-[#facc15] cursor-pointer">My Courses</li>
                  <li className="hover:text-[#facc15] cursor-pointer">Certificates</li>
                  <li className="hover:text-[#facc15] cursor-pointer">Settings</li>
                </ul>
             </div>
          </div>
          <div className="lg:col-span-3">
             <h2 className="text-2xl font-black text-[#001f3f] mb-6">Enrolled Courses</h2>
             <div className="grid md:grid-cols-2 gap-8 mb-12">
                {courses.slice(0, 1).map(course => (
                  <div key={course.id}>
                    <CourseCard {...course} />
                    <div className="mt-4">
                      <div className="flex justify-between text-xs font-bold text-gray-500 mb-2">
                        <span>Progress</span>
                        <span>45%</span>
                      </div>
                      <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-[#facc15] h-full" style={{ width: '45%' }} />
                      </div>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </SectionWrapper>
    </PageLayout>
  );
}
