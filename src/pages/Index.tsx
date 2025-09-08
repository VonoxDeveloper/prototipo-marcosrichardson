import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import QuickActions from '@/components/QuickActions';
import AboutPreview from '@/components/AboutPreview';
import SegmentsPreview from '@/components/SegmentsPreview';
import NewsPreview from '@/components/NewsPreview';
import StructurePreview from '@/components/StructurePreview';
import FinalCTA from '@/components/FinalCTA';
import FooterMR from '@/components/FooterMR';

const Index = () => {
  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Header />
      <main>
        <HeroSection />
        <QuickActions />
        <AboutPreview />
        <SegmentsPreview />
        <NewsPreview />
        <StructurePreview />
        <FinalCTA />
      </main>
      <FooterMR />
    </div>
  );
};

export default Index;
