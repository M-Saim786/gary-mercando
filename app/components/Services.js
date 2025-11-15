// app/components/services-section.tsx

"use client";

import React from "react"; // Import React for useRef
import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay"; // 1. Import the Autoplay plugin

// --- English Content ---
const serviceData = {
  header: {
    brand: "GARY MERCADO",
    main_title: "Comprehensive Gym Solutions",
  },
  sections: [
    {
      title: "GARY MERCADO MACHINES",
      description:
        "State-of-the-art equipment designed for maximum performance and durability.",
      image: {
        src: "/images/service-machines.jpg",
        alt: "Woman smiling, holding gym equipment in a modern gym.",
      },
    },
    {
      title: "GARY MERCADO CARE",
      description:
        "Technical support and proactive maintenance to ensure your gym operates without interruptions.",
      image: {
        src: "/images/service-care.jpg",
        alt: "Expert technician performing maintenance on a piece of gym equipment.",
      },
    },
    {
      title: "GARY MERCADO SAAS",
      description:
        "Complete management software for your gym, optimizing schedules and finances.",
      image: {
        src: "/images/service-saas.jpg",
        alt: "Woman using a tablet to manage the gym's software with charts on the screen.",
      },
    },
    {
      title: "GARY MERCADO TRACKING",
      description:
        "Asset tracking and logistics system for complete control of your inventory.",
      image: {
        src: "/images/service-tracking.jpg",
        alt: "Person in a warehouse using a scanner to track boxes of equipment.",
      },
    },
  ],
};

const ServicesSection = ({ bgColor = "#ffffff" }) => {
  // 2. Create a ref for the autoplay plugin instance
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section className={`w-full text-white bg-[${bgColor}] py-12 md:py-20 lg:py-24`}>
      <div className="container mx-auto px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          // 3. Pass the plugin to the Carousel and add mouse handlers for better UX
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full"
        >
          {/* Header */}
          <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row md:items-end">
            <div className="text-center md:text-left">
              <span className="mb-2 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary text-white">
                {serviceData.header.brand}
              </span>
              <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">
                {serviceData.header.main_title}
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <CarouselPrevious className="static h-10 w-10 rounded-md border-white text-primary hover:bg-primary hover:text-primary-foreground text-white" />
              <CarouselNext className="static h-10 w-10 rounded-md border-white text-white hover:bg-primary hover:text-primary-foreground" />
            </div>
          </div>

          {/* Cards */}
          <CarouselContent className="-ml-4">
            {serviceData.sections.map((service, index) => (
              <CarouselItem
                key={index}
                className="pl-4 sm:basis-1/2 lg:basis-1/3"
              >
                <div className="h-full p-1">
                  <Card className="group flex h-full transform flex-col overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                    <div className="relative h-52 w-full overflow-hidden">
                      <Image
                        src={service.image.src}
                        alt={service.image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <CardContent className="flex flex-1 flex-col p-6">
                      <CardTitle className="mb-2 text-xl font-bold text-card-foreground">
                        {service.title}
                      </CardTitle>
                      <p className="flex-grow text-muted-foreground">
                        {service.description}
                      </p>
                      <Button
                        variant="outline"
                        className="mt-6 w-fit border-primary text-primary hover:bg-primary hover:text-primary-foreground text-white"
                      >
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ServicesSection;