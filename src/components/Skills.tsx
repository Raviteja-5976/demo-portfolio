"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  { id: "all", label: "ALL" },
  { id: "frontend", label: "FRONTEND" },
  { id: "backend", label: "BACKEND & DB" },
  { id: "devops", label: "DEVOPS & CLOUD" },
  { id: "ai-tools", label: "AI & CREATIVE TOOLS" },
  { id: "soft", label: "SOFT SKILLS" },
];

const skills = [
  { name: "TypeScript", cat: "frontend", color: "var(--color-yellow)" },
  { name: "JavaScript", cat: "frontend", color: "var(--color-yellow)" },
  { name: "HTML5/CSS3", cat: "frontend", color: "var(--color-yellow)" },
  { name: "React", cat: "frontend", color: "var(--color-yellow)" },
  { name: "Next.js", cat: "frontend", color: "var(--color-yellow)" },
  { name: "WebGL/GLSL", cat: "frontend", color: "var(--color-yellow)" },
  { name: "Three.js", cat: "frontend", color: "var(--color-yellow)" },
  { name: "GSAP", cat: "frontend", color: "var(--color-yellow)" },
  { name: "Framer Motion", cat: "frontend", color: "var(--color-yellow)" },
  { name: "Tailwind CSS", cat: "frontend", color: "var(--color-yellow)" },
  
  { name: "Node.js", cat: "backend", color: "var(--color-mint)" },
  { name: "Python", cat: "backend", color: "var(--color-mint)" },
  { name: "Rust", cat: "backend", color: "var(--color-mint)" },
  { name: "PostgreSQL", cat: "backend", color: "var(--color-mint)" },
  { name: "Redis", cat: "backend", color: "var(--color-mint)" },
  { name: "MongoDB", cat: "backend", color: "var(--color-mint)" },
  { name: "SQLite", cat: "backend", color: "var(--color-mint)" },
  
  { name: "AWS", cat: "devops", color: "var(--color-red)" },
  { name: "Google Cloud", cat: "devops", color: "var(--color-red)" },
  { name: "Docker", cat: "devops", color: "var(--color-red)" },
  { name: "GitHub Actions", cat: "devops", color: "var(--color-red)" },
  { name: "Supabase", cat: "devops", color: "var(--color-red)" },
  { name: "Vercel", cat: "devops", color: "var(--color-red)" },

  { name: "Gemini API", cat: "ai-tools", color: "var(--color-header)" },
  { name: "OpenAI API", cat: "ai-tools", color: "var(--color-header)" },
  { name: "Figma", cat: "ai-tools", color: "var(--color-header)" },
  { name: "Blender 3D", cat: "ai-tools", color: "var(--color-header)" },
  { name: "Vite", cat: "ai-tools", color: "var(--color-header)" },
  { name: "Git", cat: "ai-tools", color: "var(--color-header)" },
  
  { name: "Creative Direction", cat: "soft", color: "var(--color-paper)" },
  { name: "Technical Writing", cat: "soft", color: "var(--color-paper)" },
  { name: "Public Speaking", cat: "soft", color: "var(--color-paper)" },
  { name: "Client Consulting", cat: "soft", color: "var(--color-paper)" },
];

export default function Skills() {
  const [selectedCat, setSelectedCat] = useState("all");

  const filteredSkills = selectedCat === "all" 
    ? skills 
    : skills.filter(skill => skill.cat === selectedCat);

  return (
    <section
      id="skills"
      style={{
        padding: "6rem 2rem",
        backgroundColor: "var(--color-paper)",
        borderBottom: "4px solid var(--color-border)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {/* Section Stamp Label */}
        <div
          style={{
            display: "inline-block",
            backgroundColor: "var(--color-yellow)",
            color: "var(--color-text)",
            border: "4px solid var(--color-border)",
            padding: "0.5rem 1.5rem",
            fontWeight: 900,
            fontSize: "1.2rem",
            transform: "rotate(1.5deg)",
            boxShadow: "4px 4px 0 var(--color-border)",
            marginBottom: "3rem",
          }}
        >
          SECTION 02 // TECHNICAL_SKILLS
        </div>

        <h2 style={{ fontSize: "2.2rem", marginBottom: "2rem" }}>
          CURATED STACK & TOOLKITS
        </h2>

        {/* Filter Categories */}
        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            flexWrap: "wrap",
            marginBottom: "3rem",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 800,
                fontSize: "0.85rem",
                padding: "0.5rem 1rem",
                border: "3px solid var(--color-border)",
                backgroundColor: selectedCat === cat.id ? "var(--color-text)" : "var(--color-paper)",
                color: selectedCat === cat.id ? "var(--color-paper)" : "var(--color-text)",
                cursor: "pointer",
                boxShadow: selectedCat === cat.id ? "none" : "3px 3px 0 var(--color-border)",
                transform: selectedCat === cat.id ? "translate(3px, 3px)" : "none",
                transition: "all 0.1s ease",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Chips Grid */}
        <motion.div
          layout
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            minHeight: "200px",
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                key={skill.name}
                className="skill-chip"
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  padding: "0.75rem 1.5rem",
                  border: "3px solid var(--color-border)",
                  borderRadius: "4px",
                  backgroundColor: "var(--color-paper)",
                  boxShadow: "4px 4px 0 var(--color-border)",
                  cursor: "default",
                  userSelect: "none",
                  display: "inline-flex",
                  alignItems: "center",
                }}
                whileHover={{
                  y: -3,
                  x: -3,
                  boxShadow: `7px 7px 0 var(--color-border)`,
                  backgroundColor: skill.color,
                }}
              >
                {skill.name}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
