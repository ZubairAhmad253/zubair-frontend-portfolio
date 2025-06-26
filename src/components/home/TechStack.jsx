const TechStack = () => (
  <section className="py-12 bg-white dark:bg-gray-900" data-aos="zoom-in-up">
    <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-6">Tech Stack</h2>
    <div className="flex justify-center flex-wrap gap-6 px-4">
      {["React", "Next.js", "Tailwind", "JavaScript", "TypeScript", "GitHub"].map(tech => (
        <span key={tech} className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-full shadow-md font-medium">
          {tech}
        </span>
      ))}
    </div>
  </section>
);

export default TechStack;