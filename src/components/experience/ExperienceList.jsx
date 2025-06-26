import ExperienceCard from "./ExperienceCard";

const experienceData = [
  {
    company: "Freelance Front-End Developer",
    role: "Remote",
    duration: "Jan 2025 – Present",
    description: `Delivered custom web solutions using React.js, Next.js, Tailwind CSS.
Built dynamic interfaces and implemented API integrations for various global clients.`,
  },
  {
    company: "Alright Tech, Rawalpindi, Pakistan",
    role: "Front-End Web Developer",
    duration: "May 2024 – Dec 2024",
    description: `Engineered and maintained scalable web applications.
Improved user engagement by 20% through intuitive UI designs.
Collaborated with designers to deliver high-quality frontend experiences.`,
  },
  {
    company: "Eziline Software House, Rawalpindi",
    role: "Front-End Developer (Trainee)",
    duration: "Oct 2023 – May 2024",
    description: `Built responsive UIs using React, TypeScript, Tailwind, Bootstrap.
Contributed to cross-functional collaboration for efficient development.
Reduced load time and improved cross-browser compatibility.`,
  },
  {
    company: "Parismatic HR",
    role: "Data Entry Specialist",
    duration: "Sep 2022 – Aug 2023",
    description: `Researched and input product/vendor data (website, origin, contact, and nature) into spreadsheets.`,
  },
];


const ExperienceList = () => (
  <section className="py-12 px-6 bg-[var(--color-background)] dark:bg-[var(--color-dark)]">
    <div className="max-w-4xl mx-auto space-y-6">
      {experienceData.map((item, index) => (
        <ExperienceCard key={index} {...item} />
      ))}
    </div>
  </section>
);

export default ExperienceList;
