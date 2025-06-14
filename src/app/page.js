import "@/styles/base.css";
import HeroSection from "@/components/HeroSection";
import CoderAnimation from "@/components/CoderAnimation";
import AboutMe from "@/components/AboutMe";
import RecentProjects from "@/components/RecentProjects";
import WebAnimation from "@/components/WebAnimation";


// app/page.js
export default function Home() {
  return (
    <>
      <main>
        <HeroSection></HeroSection>

        <CoderAnimation></CoderAnimation>

        <AboutMe></AboutMe>

        <WebAnimation></WebAnimation>

        <RecentProjects></RecentProjects>
      </main>
    </>
  );
}
