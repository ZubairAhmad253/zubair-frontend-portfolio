import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ContactIntro from "../components/contact/ContactIntro";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="bg-[var(--color-background)] dark:bg-[var(--color-dark)] text-[var(--color-dark)] dark:text-white min-h-screen">
      <ContactIntro />
      <ContactForm />
    </main>
  );
};

export default Contact;
