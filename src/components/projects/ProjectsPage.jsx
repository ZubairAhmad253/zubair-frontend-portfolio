import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import ProjectsIntro from '../components/projects/ProjectsIntro';
import ProjectsList from '../components/projects/ProjectsList';

const ProjectsPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="bg-[var(--color-background)] dark:bg-[var(--color-dark)] text-[var(--color-dark)] dark:text-white">
      <ProjectsIntro />
      <ProjectsList />
    </main>
  );
};

export default ProjectsPage;