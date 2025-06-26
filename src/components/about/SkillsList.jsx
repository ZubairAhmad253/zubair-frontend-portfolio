const skills = [
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "Redux",
  "Bootstrap",
  "Git & GitHub"
];

const SkillsList = () => (
  <section className="py-12 px-6" data-aos="fade-left">
    <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">Skills</h2>
    <div className="flex flex-wrap justify-center gap-4">
      {skills.map(skill => (
        <span key={skill} className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
          {skill}
        </span>
      ))}
    </div>
  </section>
);
export default SkillsList;