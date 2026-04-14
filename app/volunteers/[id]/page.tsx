import { PageLayout } from '@/components/page-layout';
import { SectionWrapper } from '@/components/section-wrapper';
import { volunteers } from '@/lib/data/volunteers';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function VolunteerProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const volunteer = volunteers.find(v => v.id === resolvedParams.id);
  if (!volunteer) return notFound();

  return (
    <PageLayout>
      <SectionWrapper>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <div className="relative aspect-square mb-6">
              <Image src={volunteer.image} alt={volunteer.name} fill className="object-cover"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
            <div className="bg-gray-50 p-6 border border-gray-100">
              <h3 className="font-semibold text-[#001f3f] mb-4 border-b pb-2">Information</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><strong className="text-[#001f3f]">Role:</strong> {volunteer.role}</li>
                <li><strong className="text-[#001f3f]">Specialty:</strong> {volunteer.specialty}</li>
                <li><strong className="text-[#001f3f]">Experience:</strong> {volunteer.experience}</li>
                <li><strong className="text-[#001f3f]">Education:</strong> {volunteer.education}</li>
                <li><strong className="text-[#001f3f]">Availability:</strong> {volunteer.availability}</li>
              </ul>
            </div>
          </div>
          <div className="md:col-span-2">
            <h1 className="text-4xl font-semibold text-[#001f3f] mb-2">{volunteer.name}</h1>
            <p className="text-[#facc15] font-semibold uppercase tracking-widest mb-8">{volunteer.role}</p>
            <div className="prose max-w-none text-gray-600">
              <h2 className="text-2xl font-semibold text-[#001f3f] mb-4">Biography</h2>
              <p>{volunteer.bio}</p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </PageLayout>
  );
}
