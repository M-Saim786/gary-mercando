// app/components/faq-section.tsx

"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";
import React, { useState } from 'react';

// --- Data remains the same ---
const faqData = {
  title: "ANY QUESTIONS LEFT?",
  section: "FREQUENTLY ASKED QUESTIONS",
  questions: [
    {
      question: "What product lines does Gary Mercado offer?",
      answer:
        "We offer a complete range of state-of-the-art fitness equipment, including cardio machines, strength training stations, and specialized accessories for all types of gyms.",
    },
    {
      question: "How does Gary Mercado stand out in the market?",
      answer:
        "Our differentiation lies in the combination of high-performance equipment, proactive technical support (Care), integrated management software (SaaS), and a robust logistics system (Tracking).",
    },
    {
      question: "Can I customize the machines according to my gym's needs?",
      answer:
        "Yes, we offer customization options for many of our machines, including colors, branding, and specific functional adjustments to perfectly fit your space and brand identity.",
    },
    {
      question: "How can I contact Gary Mercado for support?",
      answer:
        "You can contact our support team through the Client Portal on our website, by email at support@garymercado.com, or by calling our dedicated support line during business hours.",
    },
  ],
  navigation: [
    { link: "Home", href: "/" },
    { link: "Machines", href: "/machines" },
    { link: "Client Portal", href: "/portal" },
    { link: "Download Catalog", href: "/catalog.pdf" },
    { link: "Contact", href: "/contact" },
  ],
};


const FaqSection = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <section className="w-full bg-black py-20 lg:py-32">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-neutral-400">
            • {faqData.section} •
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {faqData.title}
          </h2>
        </div>

        {/* Accordion */}
        <Accordion
          type="single"
          collapsible
          className="w-full space-y-4"
          onValueChange={setOpenItem}
        >
          {faqData.questions.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-xl border-none bg-neutral-900 transition-all hover:bg-neutral-800"
            >
              {/* === THE ONLY CHANGE IS ON THE NEXT LINE === */}
              <AccordionTrigger className="flex w-full items-center justify-between p-6 text-left text-lg font-medium text-neutral-100 hover:no-underline [&>svg]:hidden">
                <span>{item.question}</span>
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-neutral-700">
                  {openItem === `item-${index}` ? (
                    <Minus className="h-5 w-5 text-white" />
                  ) : (
                    <Plus className="h-5 w-5 text-white" />
                  )}
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-base text-neutral-300">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Navigation Links */}
        <nav className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {faqData.navigation.map((navItem) => (
            <a
              key={navItem.link}
              href={navItem.href}
              className="text-sm font-medium text-neutral-400 transition-colors hover:text-white"
            >
              {navItem.link}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default FaqSection;