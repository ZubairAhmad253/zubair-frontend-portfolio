const CTAButtons = () => (
  <div className="mt-6 flex gap-4">
    <a href="/Zubair Ahmad CV.pdf" download className="btn-primary">
      Download CV
    </a>
    <a
      href="/projects"
      className="py-2 px-4 rounded-lg bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary)/90] transition"
    >
      See Projects
    </a>
  </div>
);

export default CTAButtons;
