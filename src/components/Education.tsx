"use client";

import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <section
      id="education"
      style={{
        padding: "6rem 2rem",
        backgroundColor: "var(--color-canvas)",
        borderBottom: "4px solid var(--color-border)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* Section Label */}
        <div
          style={{
            display: "inline-block",
            backgroundColor: "var(--color-yellow)",
            color: "var(--color-text)",
            border: "4px solid var(--color-border)",
            padding: "0.5rem 1.5rem",
            fontWeight: 900,
            fontSize: "1.2rem",
            transform: "rotate(-1.5deg)",
            boxShadow: "4px 4px 0 var(--color-border)",
            marginBottom: "3rem",
          }}
        >
          SECTION 05 // ACADEMIC_STUDIES
        </div>

        <h2 style={{ fontSize: "2.2rem", marginBottom: "2rem" }}>
          EDUCATION
        </h2>

        {/* Notebook Paper Card */}
        <div
          className="neo-card notebook-card"
          style={{
            backgroundColor: "#FFFFFF", // pure white for paper look
            border: "4px solid var(--color-border)",
            boxShadow: "12px 12px 0 var(--color-border)",
            position: "relative",
            overflow: "hidden",
            padding: "2rem 2rem 2rem 4.5rem", // large left padding for the red line
            backgroundImage: "repeating-linear-gradient(transparent, transparent 27px, #e2e8f0 27px, #e2e8f0 28px)",
            lineHeight: "28px", // matches repeating gradient spacing
          }}
        >
          {/* Red Margin Line */}
          <div
            className="notebook-margin"
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: "3.5rem",
              width: "2px",
              backgroundColor: "var(--color-red)",
            }}
          />
          
          {/* Notebook binder rings (decorative dots on left edge) */}
          <div
            className="notebook-rings"
            style={{
              position: "absolute",
              top: "2.5rem",
              left: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "3rem",
            }}
          >
            <div style={{ width: "16px", height: "16px", borderRadius: "50%", backgroundColor: "var(--color-canvas)", border: "3px solid black" }} />
            <div style={{ width: "16px", height: "16px", borderRadius: "50%", backgroundColor: "var(--color-canvas)", border: "3px solid black" }} />
            <div style={{ width: "16px", height: "16px", borderRadius: "50%", backgroundColor: "var(--color-canvas)", border: "3px solid black" }} />
            <div style={{ width: "16px", height: "16px", borderRadius: "50%", backgroundColor: "var(--color-canvas)", border: "3px solid black" }} />
          </div>

          {/* Paper Content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
              <FaGraduationCap size={28} />
              <h3 className="notebook-title" style={{ fontSize: "1.6rem", margin: 0, textTransform: "uppercase" }}>
                Brooklyn Polytechnic Institute
              </h3>
            </div>
            
            <p style={{ fontSize: "1.1rem", fontWeight: 700, margin: 0 }}>
              Degree: <span style={{ fontWeight: 400 }}>Bachelor of Science</span>
            </p>
            
            <p style={{ fontSize: "1.1rem", fontWeight: 700, margin: 0 }}>
              Major: <span style={{ fontWeight: 400 }}>Computer Science & Media Arts</span>
            </p>

            <p style={{ fontSize: "1.1rem", fontWeight: 700, margin: 0 }}>
              Duration: <span style={{ fontWeight: 400 }}>2014 - 2018</span>
            </p>

            <p style={{ fontSize: "1.1rem", fontWeight: 700, margin: 0 }}>
              CGPA: <span style={{ fontWeight: 400 }}>3.92 / 4.00</span>
            </p>

            <div style={{ marginTop: "1rem" }}>
              <p style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                Relevant Coursework:
              </p>
              <ul style={{ margin: 0, paddingLeft: "1.25rem" }}>
                <li>Advanced Computer Graphics & WebGL Shader Design</li>
                <li>Human-Computer Interaction & Cognitive Interfaces</li>
                <li>Systems Engineering & Database Architecture</li>
                <li>Data Structures & Efficient Algorithms</li>
              </ul>
            </div>

            <div style={{ marginTop: "1rem" }}>
              <p style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                Extracurricular Activities:
              </p>
              <ul style={{ margin: 0, paddingLeft: "1.25rem" }}>
                <li>President of the Creative Coding Club</li>
                <li>Co-Editor of the Campus Tech & Design Zine</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 600px) {
          .notebook-card {
            padding: 1.5rem 1rem 1.5rem 2.75rem !important;
          }
          .notebook-margin {
            left: 2rem !important;
          }
          .notebook-rings {
            left: 0.5rem !important;
            top: 2rem !important;
            gap: 2rem !important;
          }
          .notebook-rings div {
            width: 12px !important;
            height: 12px !important;
            border-width: 2px !important;
          }
          .notebook-title {
            font-size: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
