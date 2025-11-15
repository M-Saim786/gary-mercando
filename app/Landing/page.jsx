"use client";

// import { useRef } from 'react';
// import { useScroll } from 'framer-motion';
import HeroSection from '../components/Hero';
import AboutSection from '../components/About';
import BrandSlider from '../components/BrandSlider';
import ServicesSection from '../components/Services';
import FaqSection from '../components/FAQSection';
// import WordReveal from '../components/WordReveal';
// import AboutSection from '../components/AboutSection';
// import FeaturesSection from '../components/FeaturesSection'; // Assuming you have this
// import ContactSection from '../components/ContactSection'; // Assuming you have this
// import { motion } from "motion/react"



export default function LandingPage() {
  // 1. Create a ref for the container we want to track
  // const scrollContainerRef = useRef(null);

  // 2. Use the `useScroll` hook to get scrollYProgress
  // This value will go from 0 to 1 as we scroll through the container.

  return (
    <>


      <div className="relative h-[200vh] w-full ">
        <div className="sticky top-0 flex h-screen items-center justify-center">
          {/* HeroSection will be visible first */}
          <HeroSection />
        </div>

        {/* AboutSection is also sticky and will appear on top as you scroll */}
        <div className="sticky top-150 flex h-screen items-center justify-center">
          <AboutSection />
        </div>
      </div>
      {/* <HeroSection /> */}

      {/* 
        3. This is the main scroll container. It's taller than the viewport (300vh) 
           to provide scrolling "space" for the animation to happen.
      */}
      {/* <div ref={scrollContainerRef}> */}
      {/* <AboutSection /> */}
      {/* </div> */}

      {/* The rest of your page content will appear naturally after the pinned section */}
      <main className="">

        {/* <BrandSlider /> */}
        {/* <ServicesSection /> */}
                {/* <h2>dasdlaskl</h2>
        <h2>dasdlaskl</h2>
        <h2>dasdlaskl</h2>
        <h2>dasdlaskl</h2>
        <h2>dasdlaskl</h2>
        <h2>dasdlaskl</h2> */}

        {/* <WordReveal > */}
        <ServicesSection />
        <FaqSection />

        {/* <h2>dasdlaskl</h2> */}
        {/* </WordReveal> */}
        {/* <FeaturesSection />
        <ContactSection /> */}
      </main>
    </>
  );
}