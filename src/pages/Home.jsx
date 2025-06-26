import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import Home section components
import Hero from "../components/home/Hero";
import TechStack from "../components/home/TechStack";
import Stats from "../components/home/Stats";
import CallToAction from "../components/home/CallToAction";
import HomeContactPreview from "../components/home/HomeContactPreview";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main>
      <Hero />
      <TechStack />
      <Stats />
      <CallToAction />
      <HomeContactPreview />
    </main>
  );
};

export default Home;
