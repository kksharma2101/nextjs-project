'use client'
import { FeaturedCourses } from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import { OurAchievements } from "@/components/OurAchievements";
import { UpcomingCourses } from "@/components/UpcomingCourses";
import { WhyChooseMe } from "@/components/WhyChooseMe";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseMe />
      <OurAchievements />
      <UpcomingCourses />
    </main>
  );
}
