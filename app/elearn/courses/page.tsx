import { PageLayout } from '@/components/page-layout';
import { SectionWrapper } from '@/components/section-wrapper';
import { CourseCard } from '@/components/course-card';
import { courses } from '@/lib/data/courses';

export default function CoursesPage() {
  return (
    <PageLayout>
      <SectionWrapper>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-[#001f3f] mb-4">ALL COURSES</h1>
          <div className="h-1 w-20 bg-[#facc15] mx-auto mb-6"></div>
          <p className="text-gray-500 max-w-2xl mx-auto">Explore our full catalog of medical and disaster response training programs.</p>
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
