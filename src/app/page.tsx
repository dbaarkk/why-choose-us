import HeroSection from "@/components/HeroSection";
import AppShowcaseSection from "@/components/AppShowcaseSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import SupportingSection from "@/components/SupportingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#080808] min-h-screen">
      <HeroSection />
      <WhyChooseSection />
      <AppShowcaseSection />
      <SupportingSection />
      <Footer />
    </main>
  );
}
