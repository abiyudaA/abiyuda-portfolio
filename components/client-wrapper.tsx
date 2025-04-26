"use client";

import dynamic from "next/dynamic";

// Dynamically import client components with SSR disabled
const Navbar = dynamic(() => import("@/components/navbar"), { ssr: false });
const Hero = dynamic(() => import("@/components/hero"), { ssr: false });
const About = dynamic(() => import("@/components/about"), { ssr: false });
const Skills = dynamic(() => import("@/components/skills"), { ssr: false });
const Projects = dynamic(() => import("@/components/projects"), { ssr: false });
const Contact = dynamic(() => import("@/components/contact"), { ssr: false });

export default function ClientWrapper() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
