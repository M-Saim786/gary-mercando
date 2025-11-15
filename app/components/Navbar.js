"use client";

import Link from "next/link";
import { useState } from "react";
import { useNavbarEffects } from "../hooks/useNavbarEffects";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { MoonIcon, SunIcon } from "lucide-react";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { activeSection, isScrolled, scrollDirection } = useNavbarEffects(
    NAV_LINKS.map((link) => link.href.substring(1))
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);



  // Inside Navbar component, near the right side buttons:
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);


  if (!mounted) {
    return null; // or a static placeholder
  }



  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 sm:px-10 
        ${scrollDirection === "down" && isScrolled
          ? "-translate-y-full"
          : "translate-y-0"
        }`}
    >      <div
      className={`
          mx-auto mt-4 max-w-screen rounded-xl transition-all duration-300 overflow-hidden
             ${isScrolled
          ? "bg-black/80 backdrop-blur-lg shadow-md"
          : "bg-black/60"
        }
         `}
    >
        <nav className="flex items-center justify-between p-2">
          <Link href="/" className="text-xl font-semibold pl-4" onClick={closeMenu}>
            <span className="text-red-500">Gary Mercando</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${activeSection === link.href.substring(1)
                  ? " text-red-600"
                  : "text-white hover:bg-red-600 hover:text-white"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/signup"
              className="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ml-2 bg-red-700 text-white hover:bg-red-600"
            >
              Sign up
            </Link>
          </div>
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hidden p-2 rounded-md text-white hover:text-red-500"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          )}
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-white hover:text-red-500"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96" : "max-h-0"
            }`}
        >
          <div className="flex flex-col items-center px-4 pt-2 pb-4 space-y-2 border-t border-red-500/30">
            {NAV_LINKS.map((link) => (
              <Link
                key={`mobile-${link.href}`}
                href={link.href}
                onClick={closeMenu}
                className={`w-full text-center px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${activeSection === link.href.substring(1)
                  ? "bg-red-600 text-white"
                  : "text-white hover:bg-red-600"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            {/* <Link
              href="/signup"
              onClick={closeMenu}
              className="w-full text-center px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 mt-2 bg-red-700 text-white hover:bg-red-600"
            >
              Sign up
            </Link> */}
          </div>
        </div>
      </div>
    </header>
  );
}
