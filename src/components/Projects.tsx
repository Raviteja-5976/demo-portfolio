"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: "retrocade",
    title: "Retrocade OS",
    status: "ACTIVE",
    statusColor: "var(--color-mint)",
    desc: "A fully-functional virtual operating system inspired by 90s desktops and vintage arcade interfaces running inside the browser.",
    features: [
      "Drag-and-drop retro windows with custom window manager",
      "Built-in retro audio synthesizer and paint drawing applications",
      "Interactive pixel arcade games written in vanilla canvas rendering",
    ],
    stack: ["Next.js", "Framer Motion", "Web Audio API", "Tailwind CSS"],
    image: "/images/project_retrocade.png",
    github: "https://github.com/jondoe/retrocade-os",
    demo: "https://retrocade.jondoe.dev",
    rotation: -1,
  },
  {
    id: "paperflow",
    title: "PaperFlow CMS",
    status: "COMPLETE",
    statusColor: "var(--color-yellow)",
    desc: "A visual content management engine that exports web pages as print-ready Zines and physical PDFs using CSS Paged Media.",
    features: [
      "Visual grid editor with collage layout templates",
      "Real-time CSS Paged Media print preview rendering",
      "Automated PDF export engine running headless Puppeteer",
    ],
    stack: ["React", "GSAP", "Tailwind CSS", "Node.js", "Puppeteer"],
    image: "/images/project_paperflow.png",
    github: "https://github.com/jondoe/paperflow-cms",
    demo: "https://paperflow.jondoe.dev",
    rotation: 1.5,
  },
  {
    id: "pixelforge",
    title: "PixelForge 3D",
    status: "IN PROGRESS",
    statusColor: "var(--color-red)",
    desc: "A browser-based 3D voxel builder and renderer with real-time shadow baking running on custom GLSL shaders.",
    features: [
      "Grid-based 3D model builder with intuitive block editing",
      "Real-time lighting calculations and custom GLSL shadows",
      "Export directly to .OBJ, .GLTF, and voxel image sheets",
    ],
    stack: ["Three.js", "React Three Fiber", "GLSL", "GSAP", "TypeScript"],
    image: "/images/project_pixelforge.png",
    github: "https://github.com/jondoe/pixelforge-3d",
    demo: "https://pixelforge.jondoe.dev",
    rotation: -1.5,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "6rem 2rem",
        backgroundColor: "var(--color-canvas)",
        borderBottom: "4px solid var(--color-border)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Sticky Label */}
        <div
          style={{
            display: "inline-block",
            backgroundColor: "var(--color-mint)",
            color: "var(--color-text)",
            border: "4px solid var(--color-border)",
            padding: "0.5rem 1.5rem",
            fontWeight: 900,
            fontSize: "1.2rem",
            transform: "rotate(-1deg)",
            boxShadow: "4px 4px 0 var(--color-border)",
            marginBottom: "3rem",
          }}
        >
          SECTION 03 // FEATURED_PROJECTS
        </div>

        <h2 style={{ fontSize: "2.2rem", marginBottom: "3rem" }}>
          DIGITAL COLLECTIBLES & EXPERIMENTS
        </h2>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 350px), 1fr))",
            gap: "3rem",
          }}
          className="projects-grid"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="neo-card"
              style={{
                backgroundColor: "var(--color-paper)",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                height: "100%",
              }}
              whileHover={{
                y: -8,
                x: -8,
                rotate: project.rotation,
                boxShadow: "16px 16px 0 var(--color-border)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              {/* Image Frame */}
              <div
                style={{
                  borderBottom: "4px solid var(--color-border)",
                  height: "240px",
                  position: "relative",
                  overflow: "hidden",
                  backgroundColor: "var(--color-header)",
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                  style={{ objectFit: "cover" }}
                  className="project-img"
                />
                
                {/* Status Sticker */}
                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    backgroundColor: project.statusColor,
                    border: "2px solid var(--color-border)",
                    padding: "0.25rem 0.5rem",
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontSize: "0.75rem",
                    fontWeight: 900,
                    boxShadow: "2px 2px 0 var(--color-border)",
                  }}
                >
                  {project.status}
                </div>
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  gap: "1rem",
                }}
              >
                <div>
                  <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: "0.95rem", color: "var(--color-text)", minHeight: "60px" }}>
                    {project.desc}
                  </p>
                </div>

                {/* Bullet Points */}
                <ul
                  style={{
                    paddingLeft: "1.25rem",
                    fontSize: "0.9rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.4rem",
                    flexGrow: 1,
                  }}
                >
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                {/* Tech Stack Badges */}
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    flexWrap: "wrap",
                    marginTop: "0.5rem",
                  }}
                >
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontFamily: "var(--font-jetbrains-mono)",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        backgroundColor: "var(--color-canvas)",
                        border: "1.5px solid var(--color-border)",
                        padding: "0.15rem 0.5rem",
                        borderRadius: "2px",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    marginTop: "1rem",
                    borderTop: "2px solid var(--color-border)",
                    paddingTop: "1rem",
                  }}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-btn"
                    style={{
                      flex: 1,
                      padding: "0.5rem 1rem",
                      fontSize: "0.85rem",
                      justifyContent: "center",
                    }}
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-btn neo-btn-mint"
                    style={{
                      flex: 1,
                      padding: "0.5rem 1rem",
                      fontSize: "0.85rem",
                      justifyContent: "center",
                    }}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 480px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
