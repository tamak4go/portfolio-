import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedProject } from "@/components/FeaturedProject";
import { TechMarquee } from "@/components/TechMarquee";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Writing } from "@/components/Writing";
import { GithubActivity } from "@/components/GithubActivity";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6">
        <Hero />
        <FeaturedProject />
        <Projects />
        <TechMarquee />
        <Experience />
        <Writing />
        <GithubActivity />
        <Footer />
      </main>
      <ChatWidget />
    </>
  );
}
