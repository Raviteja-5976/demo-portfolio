"use client";

import { motion } from "framer-motion";
import { FaTrophy, FaTerminal, FaMicrophone, FaAward } from "react-icons/fa";

const achievements = [
  {
    title: "Hackathons Won",
    value: "12+",
    desc: "1st place finishes at NYC Hack, Global Creative Jam, and TechCrunch Disrupt Local.",
    icon: FaTrophy,
    bg: "var(--color-mint)",
    gridArea: "span 2 / span 1",
  },
  {
    title: "Open Source",
    value: "1.2k+",
    desc: "Maintainer of retro-ui-kit and contributor to Three.js & Framer Motion animation libraries.",
    icon: FaTerminal,
    bg: "var(--color-yellow)",
    gridArea: "span 1 / span 1",
  },
  {
    title: "Public Speaking",
    value: "24",
    desc: "Delivered talks at JSConf, CreativeDev Meetups, and universities on WebGL shaders.",
    icon: FaMicrophone,
    bg: "var(--color-red)",
    textColor: "#FFF",
    gridArea: "span 1 / span 1",
  },
  {
    title: "Design Awards",
    value: "6",
    desc: "Recipient of Awwwards Honorable Mentions and CSS Design Awards for Best UI/UX.",
    icon: FaAward,
    bg: "var(--color-header)",
    gridArea: "span 1 / span 2",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      style={{
        padding: "6rem 2rem",
        backgroundColor: "var(--color-canvas)",
        borderBottom: "4px solid var(--color-border)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {/* Section Stamp Label */}
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
          SECTION 06 // STATS_ACCOLADES
        </div>

        <h2 style={{ fontSize: "2.2rem", marginBottom: "3rem" }}>
          BENTO STATS & MILESTONES
        </h2>

        {/* Bento Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2.5rem",
          }}
          className="bento-grid"
        >
          {achievements.map((ach, index) => {
            const Icon = ach.icon;
            return (
              <motion.div
                key={index}
                className="neo-card"
                style={{
                  backgroundColor: ach.bg,
                  color: ach.textColor || "var(--color-text)",
                  padding: "2rem",
                  gridArea: ach.gridArea,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "1.5rem",
                }}
                whileHover={{
                  y: -6,
                  x: -6,
                  boxShadow: "14px 14px 0 var(--color-border)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <h3 style={{ fontSize: "1.2rem", color: ach.textColor || "var(--color-text)" }}>{ach.title}</h3>
                  <Icon size={28} />
                </div>

                <div>
                  <div
                    style={{
                      fontSize: "clamp(3rem, 6vw, 4.5rem)",
                      fontWeight: 900,
                      lineHeight: "1",
                      fontFamily: "var(--font-space-grotesk)",
                      marginBottom: "0.5rem",
                      WebkitTextStroke: "1px black",
                    }}
                  >
                    {ach.value}
                  </div>
                  <p style={{ fontSize: "0.95rem", margin: 0, opacity: 0.9 }}>
                    {ach.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .bento-grid {
            grid-template-columns: 1fr !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 2rem !important;
          }
          .bento-grid > div {
            grid-area: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
