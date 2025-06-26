const ExperienceCard = ({ company, role, duration, description }) => (
  <div
    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
    data-aos="fade-up"
  >
    <h3 className="text-xl font-semibold text-[var(--color-primary)]">
      {company}
    </h3>
    <p className="text-sm text-gray-500 dark:text-gray-400">
      {role} | {duration}
    </p>
    <p className="mt-3 text-gray-700 dark:text-gray-300">{description}</p>
  </div>
);

export default ExperienceCard;
