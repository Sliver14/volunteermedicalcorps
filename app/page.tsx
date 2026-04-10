import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { Footer } from '@/components/footer';
import { ImpactSection } from '@/components/impact-section';
import { AboutPreview } from '@/components/sections/AboutPreview';
import { Campaigns } from '@/components/sections/Campaigns';
import { Testimonials } from '@/components/sections/Testimonials';
import { Events } from '@/components/sections/Events';
import { Blog } from '@/components/sections/Blog';
import { CTA } from '@/components/sections/CTA';
import { Newsletter } from '@/components/sections/Newsletter';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ImpactSection />
        <AboutPreview />
        <Campaigns />
        <Events />
        <Testimonials />
        <Blog />
        <CTA />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
