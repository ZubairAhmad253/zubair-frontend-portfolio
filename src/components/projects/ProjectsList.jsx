import ProjectCard from './ProjectCard';

const projectData = [
  {
    title: "Contracta",
    desc: "Platform for generating legal contracts using OpenAI.",
    tech: "React.js, Tailwind CSS, APIs",
    link: "https://contracta.app/",
    image: "/projects/contracta.png",
  },
  {
    title: "Companion Animal Health",
    desc: "Web platform for animal healthcare services and courses.",
    tech: "React.js",
    link: "https://companionanimalhealth.com/",
    image: "/projects/companion.png",
  },
  {
    title: "Avatare",
    desc: "AI bot training platform for customer support.",
    tech: "React.js, Tailwind CSS, APIs",
    link: "http://www.avatare.com/",
    image: "/projects/avatare.png",
  },
  {
    title: "E-Commerce AI",
    desc: "AI-based suggestions by aggregating Amazon and eBay data.",
    tech: "React.js, Tailwind CSS, APIs",
    link: "https://ecommerce.avatare.com/",
    image: "/projects/ecommerce.png",
  },
  {
    title: "Med Reach 365",
    desc: "Online health consultation between doctors and schools.",
    tech: "React.js, Tailwind CSS, Firebase",
    link: "https://www.medreach365.com.ng/",
    image: "/projects/medreach.png",
  },
  {
    title: "Bursa Ambulance Dashboard",
    desc: "Dashboard for managing ambulance requests and patient data.",
    tech: "React.js, Tailwind CSS, TypeScript, APIs",
    link: "https://admin.bursadeambulante.ro/",
    image: "/projects/bursa.png",
  },
];


const ProjectsList = () => (
  <section className="py-12 px-6 bg-[var(--color-background)] dark:bg-[var(--color-dark)]">
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
      {projectData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </section>
);

export default ProjectsList;