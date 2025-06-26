import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import SkillsIntro from "../components/skills/SkillsIntro";
import SkillsGrid from "../components/skills/SkillsGrid";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="bg-[var(--color-background)] dark:bg-[var(--color-dark)] text-[var(--color-dark)] dark:text-white">
      <SkillsIntro />
      <SkillsGrid />
    </main>
  );
};

export default Skills;
