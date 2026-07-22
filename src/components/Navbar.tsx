"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaCode, FaBriefcase, FaGraduationCap, FaAward, FaEnvelope } from "react-icons/fa";

const navItems = [
  { id: "hero", label: "Home", icon: FaHome },
  { id: "about", label: "About", icon: FaUser },
  { id: "skills", label: "Skills", icon: FaCode },
  { id: "projects", label: "Projects", icon: FaBriefcase },
  { id: "experience", label: "Experience", icon: FaGraduationCap },
  { id: "achievements", label: "Stats", icon: FaAward },
  { id: "contact", label: "Contact", icon: FaEnvelope },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      let currentSection = "hero";

      sections.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            currentSection = section.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <nav style={{
      position: "fixed",
      bottom: "2rem",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 999,
      display: "flex",
      alignItems: "center",
      backgroundColor: "var(--color-paper)",
      border: "4px solid var(--color-border)",
      borderRadius: "9999px",
      padding: "0.5rem 1rem",
      boxShadow: "8px 8px 0 var(--color-border)",
      gap: "0.5rem",
      maxWidth: "95vw",
      overflowX: "auto"
    }}>
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.5rem 1rem",
              borderRadius: "9999px",
              border: isActive ? "2px solid var(--color-border)" : "2px solid transparent",
              backgroundColor: isActive ? "var(--color-yellow)" : "transparent",
              color: "var(--color-text)",
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontWeight: 800,
              fontSize: "0.9rem",
              cursor: "pointer",
              transition: "all 0.2s ease",
              whiteSpace: "nowrap"
            }}
          >
            <Icon size={16} />
            <span className="nav-label">{item.label}</span>
          </button>
        );
      })}

      <style jsx global>{`
        @media (max-width: 640px) {
          .nav-label {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}
