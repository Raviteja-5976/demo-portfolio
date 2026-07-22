"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaDev, FaEnvelope, FaFileDownload } from "react-icons/fa";

export default function Hero() {
  const scrollToContact = () => {
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/jondoe", label: "GitHub" },
    { icon: FaLinkedin, url: "https://linkedin.com/in/jondoe", label: "LinkedIn" },
    { icon: FaTwitter, url: "https://twitter.com/jondoe", label: "Twitter" },
    { icon: FaDev, url: "https://dev.to/jondoe", label: "Dev.to" },
  ];

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "6rem 2rem 4rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
      className="bg-plus-grid"
    >
      {/* Background Floating Sticker Elements */}

      <div
        className="hero-sticker"
        style={{
          position: "absolute",
          bottom: "15%",
          right: "8%",
          transform: "rotate(8deg)",
          background: "var(--color-red)",
          color: "white",
          border: "2px solid black",
          padding: "0.25rem 0.75rem",
          fontWeight: 900,
          fontFamily: "var(--font-jetbrains-mono)",
          fontSize: "0.8rem",
          boxShadow: "2px 2px 0 black",
          zIndex: 1,
        }}
      >
        ✨ 60FPS MOTION
      </div>

      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          gap: "4rem",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* Left Column: Headline & Bio */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div>
            <div className="availability-badge" style={{ marginBottom: "1.5rem" }}>
              <span className="pulse-dot"></span>
              AVAILABLE FOR COLLABORATION
            </div>
            
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                lineHeight: "1.05",
                letterSpacing: "-0.02em",
                marginBottom: "1rem",
              }}
            >
              CREATIVE <br />
              <span style={{ backgroundColor: "var(--color-yellow)", padding: "0 0.5rem", border: "4px solid black", display: "inline-block", transform: "skew(-3deg) rotate(-1deg)" }}>
                ENGINEERING
              </span>{" "}
              <br />
              FOR THE WEB.
            </h1>
          </div>

          <p
            style={{
              fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
              color: "var(--color-text)",
              fontFamily: "var(--font-space-grotesk)",
              fontWeight: 500,
              maxWidth: "600px",
            }}
          >
            Hi, I&apos;m <strong style={{ fontWeight: 800 }}>Jon Doe</strong>. A hybrid designer & developer crafting digital collector zines, creative web applications, and interactive physics interfaces.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              marginTop: "1rem",
            }}
          >
            <button className="neo-btn" onClick={scrollToContact}>
              <FaEnvelope /> Hire Me
            </button>
            <a
              href="/resume.pdf"
              download
              className="neo-btn neo-btn-mint"
              style={{ textDecoration: "none" }}
            >
              <FaFileDownload /> Resume
            </a>
          </div>

          {/* Social Icons */}
          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="neo-btn"
                  style={{
                    padding: "0.75rem",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "48px",
                    height: "48px",
                    backgroundColor: "var(--color-paper)",
                  }}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Column: Cartoon Avatar Card */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <motion.div
            initial={{ rotate: 2, scale: 0.95 }}
            animate={{ rotate: [-1, 2, -2, 1] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="neo-card"
            style={{
              width: "100%",
              maxWidth: "380px",
              padding: "1rem",
              backgroundColor: "var(--color-paper)",
              cursor: "pointer",
            }}
          >
            {/* Header style bar */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "3px solid black",
                paddingBottom: "0.75rem",
                marginBottom: "1rem",
              }}
            >
              <div style={{ display: "flex", gap: "6px" }}>
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "var(--color-red)", border: "2px solid black" }} />
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "var(--color-yellow)", border: "2px solid black" }} />
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "var(--color-mint)", border: "2px solid black" }} />
              </div>
              <span style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "0.75rem", fontWeight: 700 }}>
                JON_DOE_V1.EXE
              </span>
            </div>

            {/* Avatar Frame */}
            <div
              style={{
                border: "4px solid black",
                position: "relative",
                height: "320px",
                width: "100%",
                backgroundColor: "var(--color-header)",
                overflow: "hidden",
              }}
            >
              <Image
                src="/images/jon_doe_avatar.png"
                alt="Jon Doe Cartoon Avatar"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 380px"
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Label */}
            <div style={{ marginTop: "1rem", textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontWeight: 900,
                  fontSize: "1.2rem",
                  textTransform: "uppercase",
                }}
              >
                JON DOE
              </div>
              <div
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontSize: "0.8rem",
                  color: "#666",
                  marginTop: "0.25rem",
                }}
              >
                BROOKLYN, NY // 40.7128° N
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 868px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
            text-align: center;
          }
          .hero-grid div {
            align-items: center;
          }
          .availability-badge {
            justify-content: center;
          }
          .hero-sticker {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
