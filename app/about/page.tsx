import { PageLayout } from '@/components/page-layout';
import { SectionWrapper } from '@/components/section-wrapper';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <PageLayout>
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-black text-[#001f3f] mb-6">ABOUT US</h1>
            <div className="h-1 w-20 bg-[#facc15] mb-8"></div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are a global volunteer medical corps dedicated to providing relief and medical assistance to communities in need worldwide. Our mission is to bridge the gap in healthcare access and disaster response.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With thousands of volunteers across the globe, we are always ready to deploy where we are needed most, bringing hope, healing, and health.
            </p>
          </div>
          <div className="relative aspect-square">
            <Image src="/placeholder.jpg" alt="About Us" fill className="object-cover" />
          </div>
        </div>
      </SectionWrapper>
    </PageLayout>
  );
}
