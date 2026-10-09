import "@/styles/base.css";
import HeroSection from "@/components/HeroSection";
import CoderAnimation from "@/components/CoderAnimation";
import AboutMe from "@/components/AboutMe";
import RecentProjects from "@/components/RecentProjects";


// app/page.js
export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>

      <CoderAnimation></CoderAnimation>

      <AboutMe></AboutMe>

      <RecentProjects></RecentProjects>
    </>
  );
}
