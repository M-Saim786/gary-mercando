"use client";

import React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const { scrollYProgress } = useScroll();

  const headlineY = useTransform(scrollYProgress, [0, 0.15], [0, -50]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const subtextY = useTransform(scrollYProgress, [0, 0.15], [0, -80]);
  const subtextOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden w-screen "
    >
      {/* Background Video / Image */}
      <video
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
        src="/videos/hero.mp4"
        poster="/images/poster-image.png"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 md:hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/images/poster-image.png')" }}
        aria-hidden="true"
      />
      {/* Black + red overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-red-900/50"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl text-center px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg"
          style={{ y: headlineY, opacity: headlineOpacity }}
        >
          Your product headline here
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-xl text-red-100/90"
          style={{ y: subtextY, opacity: subtextOpacity }}
        >
          Short supporting copy to explain the value proposition.
        </motion.p>

        <motion.div
          className="mt-8 flex justify-center gap-4"
          style={{ y: subtextY, opacity: subtextOpacity }}
        >
          <Link
            href="#features"
            className="rounded-md bg-red-600 text-white px-6 py-3 font-semibold shadow hover:bg-red-500 transition-colors"
          >
            See Features
          </Link>
          <Link
            href="#contact"
            className="rounded-md border border-red-400 text-white px-6 py-3 font-medium hover:bg-red-600/30 transition-colors"
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
