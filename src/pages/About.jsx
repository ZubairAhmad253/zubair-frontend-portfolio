import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import AboutIntro from "../components/about/AboutIntro";
import Education from "../components/about/Education";
import SkillsList from "../components/about/SkillsList";
import WhyMe from "../components/about/WhyMe";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="bg-[var(--color-background)] dark:bg-[var(--color-dark)] text-[var(--color-dark)] dark:text-white">
      <AboutIntro />
      <Education />
      <SkillsList />
      <WhyMe />
    </main>
  );
};

export default About;
