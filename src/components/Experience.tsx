"use client";

import { motion } from "framer-motion";
import { FaAward, FaCertificate } from "react-icons/fa";

const experiences = [
  {
    role: "Lead Creative Technologist",
    company: "Studio Antigravity",
    duration: "2024 - Present",
    desc: "Oversee technical direction for creative web assets, custom animations, and immersive WebGL applications. Reduced load times by 45% using code-splitting and asset pipeline optimization.",
    skills: ["Next.js", "Three.js", "GSAP", "Docker"],
  },
  {
    role: "Senior Front-End Developer",
    company: "Vector Interactive",
    duration: "2022 - 2024",
    desc: "Built custom interactive elements and page systems. Spearheaded the creation of an in-house visual CMS used by 12+ Fortune 500 companies.",
    skills: ["React", "TypeScript", "Framer Motion", "Vite"],
  },
  {
    role: "Full-Stack Engineer",
    company: "DevGrid Solutions",
    duration: "2020 - 2022",
    desc: "Engineered database schemas and REST APIs for logistics and tracking systems. Implemented secure OAuth authentication and background processing pipelines.",
    skills: ["Node.js", "PostgreSQL", "Redis", "AWS"],
  },
];

const certifications = [
  {
    name: "Professional Cloud Architect",
    issuer: "Google Cloud",
    date: "Feb 2025",
    credential: "GCP-PCA-9832",
  },
  {
    name: "Solutions Architect - Assoc.",
    issuer: "Amazon Web Services (AWS)",
    date: "Sep 2024",
    credential: "AWS-ASA-5421",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "6rem 2rem",
        backgroundColor: "var(--color-paper)",
        borderBottom: "4px solid var(--color-border)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section Label */}
        <div
          style={{
            display: "inline-block",
            backgroundColor: "var(--color-red)",
            color: "white",
            border: "4px solid var(--color-border)",
            padding: "0.5rem 1.5rem",
            fontWeight: 900,
            fontSize: "1.2rem",
            transform: "rotate(1deg)",
            boxShadow: "4px 4px 0 var(--color-border)",
            marginBottom: "3rem",
          }}
        >
          SECTION 04 // WORK_EXPERIENCE
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 0.7fr",
            gap: "4rem",
          }}
          className="exp-grid"
        >
          {/* Left Column: Horizontal-Scrolling timeline (on desktop) */}
          <div>
            <h2 style={{ fontSize: "2.2rem", marginBottom: "2rem" }}>
              CAREER ROADMAP
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                position: "relative",
              }}
            >
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="neo-card"
                  style={{
                    padding: "1.5rem",
                    backgroundColor: "var(--color-paper)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      borderBottom: "2px solid var(--color-border)",
                      paddingBottom: "0.5rem",
                      marginBottom: "1rem",
                    }}
                    className="exp-header"
                  >
                    <div>
                      <h3 style={{ fontSize: "1.3rem" }}>{exp.role}</h3>
                      <h4
                        style={{
                          fontSize: "1rem",
                          color: "var(--color-text)",
                          fontFamily: "var(--font-jetbrains-mono)",
                        }}
                      >
                        {exp.company}
                      </h4>
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-jetbrains-mono)",
                        fontSize: "0.85rem",
                        fontWeight: 900,
                        backgroundColor: "var(--color-yellow)",
                        border: "2px solid var(--color-border)",
                        padding: "0.25rem 0.5rem",
                        boxShadow: "2px 2px 0 var(--color-border)",
                      }}
                    >
                      {exp.duration}
                    </span>
                  </div>

                  <p style={{ fontSize: "0.95rem", marginBottom: "1rem" }}>
                    {exp.desc}
                  </p>

                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        style={{
                          fontFamily: "var(--font-jetbrains-mono)",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          backgroundColor: "var(--color-canvas)",
                          border: "1.5px solid var(--color-border)",
                          padding: "0.15rem 0.5rem",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Stamp Certifications */}
          <div>
            <h2 style={{ fontSize: "2.2rem", marginBottom: "2rem" }}>
              CERTIFICATIONS
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: "var(--color-header)",
                    border: "4px dashed var(--color-border)",
                    padding: "1.5rem",
                    boxShadow: "8px 8px 0 var(--color-border)",
                    position: "relative",
                    transform: index % 2 === 0 ? "rotate(-1.5deg)" : "rotate(1.5deg)",
                  }}
                  className="stamp-card"
                >
                  {/* Jagged border helper using stamps visual style */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-6px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: "var(--color-paper)",
                      border: "2px solid var(--color-border)",
                      padding: "0 0.5rem",
                      fontFamily: "var(--font-jetbrains-mono)",
                      fontSize: "0.7rem",
                      fontWeight: 900,
                    }}
                  >
                    POSTAGE OFFICIAL
                  </div>

                  <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1rem" }}>
                    <FaCertificate size={36} color="var(--color-red)" />
                    <div>
                      <h3 style={{ fontSize: "1.1rem", textTransform: "uppercase" }}>{cert.name}</h3>
                      <p style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "0.8rem", margin: 0 }}>
                        ISSUER: {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "0.8rem",
                      fontFamily: "var(--font-jetbrains-mono)",
                      borderTop: "2px dotted var(--color-border)",
                      paddingTop: "0.5rem",
                    }}
                  >
                    <span>ID: {cert.credential}</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 868px) {
          .exp-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .exp-header {
            flex-direction: column !important;
            gap: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
}
