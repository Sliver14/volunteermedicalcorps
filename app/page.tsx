import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { SponsorCarousel } from '@/components/sponsor-carousel';
import { Footer } from '@/components/footer';
import { AboutPreview } from '@/components/sections/AboutPreview';
import { ProjectsPreview } from '@/components/sections/ProjectsPreview';
import { ImpactSection } from '@/components/impact-section';
import { Campaigns } from '@/components/sections/Campaigns';
import { Testimonials } from '@/components/sections/Testimonials';
import { NewsSection } from '@/components/news-section';
import { MediaPreview } from '@/components/sections/MediaPreview';
import { Events } from '@/components/sections/Events';
import { HelpingHand } from '@/components/sections/HelpingHand';
import { VolunteersGallery } from '@/components/sections/VolunteersGallery';
import { CTA } from '@/components/sections/CTA';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ImpactSection />
        <AboutPreview />
        <ProjectsPreview /> 
        <Campaigns />
        <Events />
        <HelpingHand />
        <Testimonials />
        <VolunteersGallery />
        <NewsSection />
        <MediaPreview />
        <SponsorCarousel />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
