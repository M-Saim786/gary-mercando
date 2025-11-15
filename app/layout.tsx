// app/layout.tsx

import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // Import the font
import "./globals.css";
import { cn } from "./lib/utils";
import Navbar from "./components/Navbar"; // Import the Navbar component
import { ThemeProvider } from "./components/ThemeProvider";

// import { cn } from "@/lib/utils"; // This is from shadcn/ui

// Configure the font
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat", // Assign it to a CSS variable
});

export const metadata: Metadata = {
  title: "Gary Mercando",
  description:
    "High-performance gym offering personalized training, group classes, nutrition coaching, and modern equipment to help you reach your fitness goals. Friendly coaches, flexible memberships, and a motivating community.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-montserrat antialiased",
          montserrat.variable // Apply the font variable to the body
        )}
      >
        <Navbar />

        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}