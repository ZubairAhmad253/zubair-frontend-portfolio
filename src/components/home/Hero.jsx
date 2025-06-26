import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
import CTAButtons from "./CTAButtons";

const Hero = () => {
  useEffect(() => { AOS.init({ duration: 1000 }); }, []);

  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 py-12 bg-[var(--color-background)] dark:bg-[var(--color-dark)]">
      <div className="w-full md:w-1/2" data-aos="fade-right">
        <HeroText />
        <CTAButtons />
      </div>
      <div className="w-full md:w-1/2 flex justify-center" data-aos="fade-left">
        <HeroImage />
      </div>
    </section>
  );
};

export default Hero;