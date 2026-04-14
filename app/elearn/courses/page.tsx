import { PageLayout } from '@/components/page-layout';
import { SectionWrapper } from '@/components/section-wrapper';
import { CourseCard } from '@/components/course-card';
import { courses } from '@/lib/data/courses';

export default function CoursesPage() {
  return (
    <PageLayout>
      <SectionWrapper>
        <div className="text-center mb-16">
          <p className="text-xs md:text-sm font-semibold text-[#facc15] tracking-widest mb-2 uppercase">Course Catalog</p>
          <h1 className="text-3xl md:text-5xl font-semibold text-[#001f3f] mb-4">All Courses</h1>
          <div className="h-1 w-20 bg-[#facc15] mx-auto mb-8"></div>
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
