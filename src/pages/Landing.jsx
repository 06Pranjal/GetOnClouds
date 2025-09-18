import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import PricingSection from "../components/landing/PricingSection";
import TestimonialsSections from "../components/landing/TestimonialsSections";
import CTASection from "../components/landing/CTASection";
import FooterSection from "../components/landing/FooterSection";

// ✅ import the data
import { features,pricingPlans,testimonials } from "../assets/data";
import { useClerk, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const Landing = () => {
  const {openSignIn,openSignUp}=useClerk();
  const{isSignedIn}=useUser();
  const navigate= useNavigate();

  useEffect(()=>{
    if(isSignedIn){
      navigate("/dashboard");
    }
  },[isSignedIn,navigate]);

  return (
    <div className="landing-page bg-gradient-to-b from-gray-50 to-gray-100">
      <HeroSection openSignIn={openSignIn} openSignUp={openSignUp}/>
      <FeaturesSection features={features} />
      <PricingSection pricingPlans={pricingPlans} />
      <TestimonialsSections testimonials={testimonials}/>
      <CTASection CTASection={CTASection}/>
      <FooterSection FooterSection={FooterSection}/>
    </div>
  );
};

export default Landing;
