import SkillCard from "./SkillCard";

const skills = [
  { name: "React.js", icon: "/skills/react.png" },
  { name: "Next.js", icon: "/skills/nextjs.png" },
  { name: "JavaScript", icon: "/skills/javascript.png" },
  { name: "TypeScript", icon: "/skills/typescript.png" },
  { name: "Tailwind CSS", icon: "/skills/tailwind.png" },
  { name: "Bootstrap", icon: "/skills/bootstrap.png" },
  { name: "Redux", icon: "/skills/redux.png" },
  { name: "HTML5", icon: "/skills/html.png" },
  { name: "CSS3", icon: "/skills/css.png" },
  { name: "GitHub", icon: "/skills/github.png" },
];

const SkillsGrid = () => (
  <section className="py-12 px-6 bg-[var(--color-background)] dark:bg-[var(--color-dark)]">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
      {skills.map((skill, index) => (
        <SkillCard key={index} {...skill} />
      ))}
    </div>
  </section>
);

export default SkillsGrid;
