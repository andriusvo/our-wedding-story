import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import OurStorySection from "@/components/OurStorySection";
import DetailsSection from "@/components/DetailsSection";
import ScheduleSection from "@/components/ScheduleSection";
import RSVPSection from "@/components/RSVPSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <OurStorySection />
      <DetailsSection />
      <ScheduleSection />
      <RSVPSection />
      <Footer />
    </main>
  );
};

export default Index;
