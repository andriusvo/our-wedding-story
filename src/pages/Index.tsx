import HeroSection from "@/components/HeroSection";
import OurStorySection from "@/components/OurStorySection";
import DetailsSection from "@/components/DetailsSection";
import ScheduleSection from "@/components/ScheduleSection";
import FAQSection from "@/components/FAQSection.tsx";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <OurStorySection />
      <DetailsSection />
      <ScheduleSection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;
