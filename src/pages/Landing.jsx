import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import PricingSection from "../components/landing/PricingSection";
import TestimonialsSections from "../components/landing/TestimonialsSections";
import CTASection from "../components/landing/CTASection";
import FooterSection from "../components/landing/FooterSection";

const Landing = () => {
  return (
    <div className="landing-page bg-gradient-to-b from-gray-50 to-gray-100">
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSections />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default Landing;
