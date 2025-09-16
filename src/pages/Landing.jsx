import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import PricingSection from "../components/landing/PricingSection";
import TestimonialsSections from "../components/landing/TestimonialsSections";
import CTASection from "../components/landing/CTASection";
import FooterSection from "../components/landing/FooterSection";

// ✅ import the features data
import { features } from "../assets/data";

const Landing = () => {
  return (
    <div className="landing-page bg-gradient-to-b from-gray-50 to-gray-100">
      <HeroSection />
      <FeaturesSection features={features} />
      <PricingSection />
      <TestimonialsSections />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default Landing;
