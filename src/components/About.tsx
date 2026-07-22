"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const timelineEvents = [
  {
    year: "2024 - PRES",
    title: "Freelance Creative Technologist",
    company: "Self-Employed",
    desc: "Building high-performance interactive interfaces and physics-based web apps for startups.",
  },
  {
    year: "2022 - 2024",
    title: "Lead Interactive Developer",
    company: "PixelCraft Agency",
    desc: "Directed front-end development for award-winning marketing campaigns and WebGL sites.",
  },
  {
    year: "2020 - 2022",
    title: "Full-Stack Software Engineer",
    company: "DevSolutions Co.",
    desc: "Developed secure full-stack dashboards, API integrations, and robust PostgreSQL databases.",
  },
  {
    year: "2018 - 2020",
    title: "UI Designer & Animator",
    company: "VisualStitch Studio",
    desc: "Created visual guidelines, vector assets, and intricate CSS micro-animations.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "6rem 2rem",
        backgroundColor: "var(--color-canvas)",
        borderTop: "4px solid var(--color-border)",
        borderBottom: "4px solid var(--color-border)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Sticky Label */}
        <div
          style={{
            display: "inline-block",
            backgroundColor: "var(--color-red)",
            color: "white",
            border: "4px solid var(--color-border)",
            padding: "0.5rem 1.5rem",
            fontWeight: 900,
            fontSize: "1.2rem",
            transform: "rotate(-1deg)",
            boxShadow: "4px 4px 0 var(--color-border)",
            marginBottom: "3rem",
          }}
        >
          SECTION 01 // WHO_IS_JON
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.9fr 1.1fr",
            gap: "4rem",
          }}
          className="about-grid"
        >
          {/* Left Column: Polaroid & Fun Facts */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {/* Polaroid Photo */}
            <div
              className="neo-card"
              style={{
                padding: "1rem 1rem 3rem 1rem",
                backgroundColor: "var(--color-paper)",
                transform: "rotate(-2deg)",
                width: "100%",
                maxWidth: "400px",
              }}
            >
              <div
                style={{
                  border: "4px solid var(--color-border)",
                  height: "280px",
                  position: "relative",
                  overflow: "hidden",
                  backgroundColor: "#ccc",
                  marginBottom: "1.5rem",
                }}
              >
                <Image
                  src="/images/jon_doe_about.png"
                  alt="Jon Doe Desk Polaroid"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  textAlign: "center",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  color: "var(--color-text)",
                }}
              >
                # MY_WORKSTATION.JPG // 2026
              </p>
            </div>

            {/* Facts and Hobbies */}
            <div
              className="neo-card"
              style={{
                backgroundColor: "var(--color-header)",
                padding: "1.5rem",
              }}
            >
              <h3 style={{ fontSize: "1.2rem", marginBottom: "1rem", borderBottom: "2px solid black", paddingBottom: "0.5rem" }}>
                TACTILE PREFERENCES
              </h3>
              <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <li>🔧 Repairing analog synthesizer circuits</li>
                <li>🎨 Risograph printing & self-publishing zines</li>
                <li>🛹 Skateboarding & urban architecture exploration</li>
                <li>☕ Dialing in single-origin light roasts</li>
                <li>💾 Floppy disk digital archival collector</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Narrative, Mission/Vision, Journey Timeline */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div>
              <h2 style={{ fontSize: "2.2rem", lineHeight: "1.1", marginBottom: "1.5rem" }}>
                RESCUING THE WEB FROM BORING TEMPLATES.
              </h2>
              <p style={{ fontSize: "1.15rem", marginBottom: "1rem" }}>
                I am a hybrid designer-developer who refuses to make boring boxes. With over 8 years of crossing boundaries, I combine strict full-stack performance with playful user interfaces that feel alive under the cursor.
              </p>
              <p style={{ fontSize: "1.15rem" }}>
                My work is heavily inspired by 90s zine layouts, classic arcade terminals, and tactile interfaces. I believe web apps should be digital collector items, full of delightful micro-interactions and custom motion.
              </p>
            </div>

            {/* Mission & Vision Bento Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.5rem",
              }}
              className="about-bento"
            >
              <div className="neo-card" style={{ padding: "1.25rem", backgroundColor: "var(--color-mint)" }}>
                <h4 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>THE MISSION</h4>
                <p style={{ fontSize: "0.95rem" }}>
                  To rescue the modern web from repetitive templates and restore texture, playfulness, and tactility to every layout.
                </p>
              </div>

              <div className="neo-card" style={{ padding: "1.25rem", backgroundColor: "var(--color-yellow)" }}>
                <h4 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>THE VISION</h4>
                <p style={{ fontSize: "0.95rem" }}>
                  A decentralized, high-motion internet where visitors feel a physical sense of feedback from digital clicks.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", borderBottom: "3px solid black", paddingBottom: "0.5rem" }}>
                JOURNEY LOGBOOK
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", position: "relative" }}>
                {timelineEvents.map((event, index) => (
                  <div
                    key={index}
                    className="neo-card timeline-card"
                    style={{
                      padding: "1rem 1.5rem",
                      backgroundColor: "var(--color-paper)",
                      display: "grid",
                      gridTemplateColumns: "100px 1fr",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-jetbrains-mono)",
                        fontWeight: 900,
                        backgroundColor: "var(--color-canvas)",
                        border: "2px solid black",
                        textAlign: "center",
                        padding: "0.25rem",
                        boxShadow: "2px 2px 0 black",
                      }}
                    >
                      {event.year}
                    </div>
                    <div>
                      <h4 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>{event.title}</h4>
                      <div
                        style={{
                          fontFamily: "var(--font-jetbrains-mono)",
                          fontSize: "0.85rem",
                          fontWeight: 700,
                          color: "#555",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {event.company}
                      </div>
                      <p style={{ fontSize: "0.95rem", margin: 0 }}>{event.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 868px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .about-bento {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .timeline-card {
            grid-template-columns: 1fr !important;
            text-align: left;
            gap: 0.5rem !important;
          }
          .timeline-card div:first-child {
            width: fit-content;
          }
        }
      `}</style>
    </section>
  );
}
