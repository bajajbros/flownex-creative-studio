import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AvatarMarquee from "@/components/AvatarMarquee";
import WorkSection from "@/components/WorkSection";
import LongformSection from "@/components/LongformSection";
import ProcessSection from "@/components/ProcessSection";
import SkillsMarquee from "@/components/SkillsMarquee";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrustedClients from "@/components/TrustedClients";
import Footer from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AvatarMarquee />
      <WorkSection />
      <LongformSection />
      <ProcessSection />
      <SkillsMarquee />
      <TestimonialsSection />
      <TrustedClients />
      <Footer />
    </div>
  );
};

export default Index;
