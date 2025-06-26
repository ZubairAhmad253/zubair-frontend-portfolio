const ProjectCard = ({ title, desc, tech, link, image }) => (
  <div
    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
    data-aos="zoom-in"
  >
    <div className="aspect-video overflow-hidden rounded-md mb-4">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
    <h3 className="text-xl font-semibold text-[var(--color-primary)]">
      {title}
    </h3>
    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{desc}</p>
    <p className="mt-3 text-sm text-gray-500 dark:text-gray-300">
      <strong>Tech:</strong> {tech}
    </p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-4 text-[var(--color-secondary)] font-semibold hover:underline"
    >
      Visit Project
    </a>
  </div>
);

export default ProjectCard;
