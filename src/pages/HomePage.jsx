import FooterCompact from "../components/common/FooterCompact";
import HeroSection from "../components/home/HeroSection";
import PromoGridSection from "../components/home/PromoGridSection";
import SmartCollarSection from "../components/home/SmartCollarSection";
import StorySection from "../components/home/StorySection";

export default function HomePage() {
  return (
    <div className="page-shell page-stack home-page">
      <HeroSection />
      <StorySection />
      <SmartCollarSection />
      <PromoGridSection />
      <FooterCompact />
    </div>
  );
}