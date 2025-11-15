"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end']
    // offset: ['0 1', '1.33 1']
  })

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1])

  // ADDED: Create a transform for the Y-axis (vertical position).
  // It will move from 100px below its final position to its final position (0).
  const yProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);


  return (
    <motion.div
      ref={ref}
      id="about"
      // className="absolute top-0 left-0 w-full py-20 bg-black/70 flex items-center z-20"
      style={{
        scale: scaleProgress,
        y: yProgress, // ADDED: Apply the slide-up animation.
        // REMOVED: The opacity property is gone, so it's always fully opaque.
      }}    >


      <section
        id="about"
        className="w-[90%] rounded-sm mx-auto py-20 bg-black flex items-center"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">

            {/* Left Column: Text Content */}
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-base font-semibold text-red-500 tracking-wide">
                ABOUT ME
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                A Passion for Building, a Commitment to Quality.
              </p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="mt-6 text-lg leading-8 text-gray-300"
              >
                Hello! I'm Gary, a developer and designer with a keen eye for
                detail and a love for creating seamless digital experiences.
                My journey into technology was driven by a desire to solve
                real-world problems with elegant, efficient code.
                Hello! I'm Gary, a developer and designer with a keen eye for
                detail and a love for creating seamless digital experiences.
                My journey into technology was driven by a desire to solve
                real-world problems with elegant, efficient code.

              </motion.p>
            </motion.div>

            {/* Right Column: Image with Animation */}
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9, y: 60 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative w-full max-w-sm group">
                <Image
                  src="/images/image.jpg"
                  alt="Portrait of Gary Mercando, the owner"
                  width={500}
                  height={600}
                  className="rounded-xl object-cover shadow-[0_10px_40px_rgba(255,0,0,0.4)] transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                {/* Red glow effect */}
                <div className="absolute inset-0 rounded-xl ring-2 ring-red-500/60 pointer-events-none"></div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </motion.div>

  );
}
