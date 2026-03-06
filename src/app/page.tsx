"use client";

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center overflow-hidden">
      <HeroSection />

      {/* Visual Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />

      <AboutSection />

      <ProjectsSection />

      <SkillsSection />

      <ExperienceSection />

      {/* Visual Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />

      <ContactSection />
    </div>
  );
}
