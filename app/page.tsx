import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { BlogGrid } from '@/components/blog-grid';
import { MissionSection } from '@/components/mission-section';
import { CampaignsGrid } from '@/components/campaigns-grid';
import { EventsSection } from '@/components/events-section';
import { DonationForm } from '@/components/donation-form';
import { NewsSection } from '@/components/news-section';
import { Footer } from '@/components/footer';
import { ImpactSection } from '@/components/impact-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ImpactSection />
        <BlogGrid />
        <MissionSection />
        <CampaignsGrid />
        <EventsSection />
        <DonationForm />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}
