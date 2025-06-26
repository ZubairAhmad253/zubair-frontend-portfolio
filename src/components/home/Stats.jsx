const Stats = () => (
  <section className="py-12 bg-[var(--color-background)] dark:bg-[var(--color-dark)]" data-aos="fade-up">
    <div className="max-w-5xl mx-auto flex flex-wrap justify-around text-center gap-6">
      {[
        { number: "3+", label: "Years Experience" },
        { number: "10+", label: "Projects Delivered" },
        { number: "5+", label: "Technologies Mastered" }
      ].map(stat => (
        <div key={stat.label} className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg w-40">
          <div className="text-3xl font-bold text-[var(--color-primary)]">{stat.number}</div>
          <div className="text-sm mt-2 text-gray-600 dark:text-gray-300">{stat.label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Stats;