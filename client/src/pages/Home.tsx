import { useEffect } from "react";
import HeroSection from "@/components/sections/HeroSection";
import CareerSection from "@/components/sections/CareerSection";
import ResumeSection from "@/components/sections/ResumeSection";
import BlogSection from "@/components/sections/BlogSection";
import TechStackSection from "@/components/sections/TechStackSection";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  useEffect(() => {
    if (window.location.hash === "#resume") {
      document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <CareerSection />
      <div className="gradient-divider" />
      <ResumeSection />
      <div className="gradient-divider" />
      <BlogSection />
      <div className="gradient-divider" />
      <TechStackSection />
      <div className="gradient-divider" />
      <ContactCTA />
    </div>
  );
}
