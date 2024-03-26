'use client'
import { FeaturedCourses } from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import { Instructors } from "@/components/Instructors";
import { OurAchievements } from "@/components/OurAchievements";
import { UpcomingCourses } from "@/components/UpcomingCourses";
import { WhyChooseMe } from "@/components/WhyChooseMe";
import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Navbar />
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseMe />
      <OurAchievements />
      <UpcomingCourses />
      <Instructors />
      <Footer />
    </main>
  );
}
