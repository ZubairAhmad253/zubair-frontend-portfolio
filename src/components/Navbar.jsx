import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) setTheme(stored);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <nav className="bg-[var(--color-background)] dark:bg-[var(--color-dark)] shadow-md px-4 py-3 fixed w-full z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-[var(--color-primary)]">
          Zubair Ahmad
        </Link>

        <div className="hidden md:flex space-x-6">
          {[
            "/",
            "/about",
            "/projects",
            "/experience",
            "/skills",
            "/contact",
          ].map((path) => (
            <Link
              key={path}
              to={path}
              className={`capitalize ${
                location.pathname === path
                  ? "text-[var(--color-accent)] font-semibold"
                  : "text-[var(--color-dark)] dark:text-white"
              }`}
            >
              {path === "/" ? "home" : path.substring(1)}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            {theme === "dark" ? (
              <SunIcon className="h-6 w-6 text-yellow-400" />
            ) : (
              <MoonIcon className="h-6 w-6 text-gray-800" />
            )}
          </button>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2">
            {open ? (
              <XMarkIcon className="h-6 w-6 text-[var(--color-dark)] dark:text-white" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-[var(--color-dark)] dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mt-2 space-y-2 text-center">
          {["home", "about", "projects", "experience", "skills", "contact"].map(
            (label) => (
              <Link
                key={label}
                to={label === "home" ? "/" : `/${label}`}
                className="block py-2 text-[var(--color-dark)] dark:text-white hover:text-[var(--color-primary)] capitalize"
              >
                {label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
