import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ExperienceIntro from "../components/experience/ExperienceIntro";
import ExperienceList from "../components/experience/ExperienceList.jsx";

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="bg-[var(--color-background)] dark:bg-[var(--color-dark)] text-[var(--color-dark)] dark:text-white">
      <ExperienceIntro />
      <ExperienceList />
    </main>
  );
};

export default Experience;
