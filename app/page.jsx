// import HeroSection from "../components/Hero";
"use client"
import AboutSection from "./components/About";
import HeroSection from "./components/Hero";
import RevealSection from "./components/RevealSection";

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import LandingPage from "./Landing/page";

export default function Page() {

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ y: 0, scale: 1, opacity: 1 });
    }
  }, [inView, controls]);


  return (
    <>
      <LandingPage />
    </>
  );
}
