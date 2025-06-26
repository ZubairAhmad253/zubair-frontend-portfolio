import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="bg-[var(--color-dark)] text-white py-10"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-[var(--color-primary)]">
            Zubair Ahmad
          </h2>
          <p className="text-sm text-gray-300 mt-1">Frontend Developer</p>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-4 text-sm">
          <li>
            <Link
              to="/"
              className="hover:text-[var(--color-primary)] transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-[var(--color-primary)] transition"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="hover:text-[var(--color-primary)] transition"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className="hover:text-[var(--color-primary)] transition"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-[var(--color-primary)] transition"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer">
            <img src="/icons/whatsapp.png" alt="WhatsApp" className="h-5 w-5" />
          </a>
          <a href="mailto:zubair@example.com" target="_blank" rel="noreferrer">
            <img src="/icons/email.png" alt="Email" className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/zubair-ahmad"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/icons/linkedin.png" alt="LinkedIn" className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/zubairdev"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/icons/github.png"
              alt="GitHub"
              className="bg-white h-5 w-5"
            />
          </a>
        </div>
      </div>

      {/* Bottom note */}
      <p className="text-center text-sm mt-6 text-gray-400">
        &copy; {new Date().getFullYear()} Zubair Ahmad. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
