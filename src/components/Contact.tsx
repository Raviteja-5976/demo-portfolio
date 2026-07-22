"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaTimes, FaHeart, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("creative");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      setSubmitted(true);
    }
  };

  const handleCloseModal = () => {
    setSubmitted(false);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section
      id="contact"
      style={{
        padding: "6rem 2rem 10rem 2rem", // extra bottom padding to account for floating navbar
        backgroundColor: "var(--color-canvas)",
        position: "relative",
      }}
      className="bg-plus-grid"
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
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
            transform: "rotate(1deg)",
            boxShadow: "4px 4px 0 var(--color-border)",
            marginBottom: "3rem",
          }}
        >
          SECTION 07 // GET_IN_TOUCH
        </div>

        <h2 style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>
          SEND A TELEGRAM
        </h2>
        <p style={{ fontSize: "1.15rem", marginBottom: "2.5rem", maxWidth: "600px" }}>
          Have an project in mind, want to collaborate, or just talk synthesizers and WebGL? Toss me a message below.
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="neo-card"
          style={{
            padding: "2.5rem",
            backgroundColor: "var(--color-paper)",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="form-row">
            {/* Name Input */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <label
                htmlFor="name"
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontWeight: 900,
                  fontSize: "0.9rem",
                  textTransform: "uppercase",
                }}
              >
                Your Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jonah Doe"
                style={{
                  padding: "0.75rem 1rem",
                  border: "3px solid var(--color-border)",
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: "1rem",
                  outline: "none",
                  backgroundColor: "var(--color-paper)",
                }}
                className="neo-input"
              />
            </div>

            {/* Email Input */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <label
                htmlFor="email"
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontWeight: 900,
                  fontSize: "0.9rem",
                  textTransform: "uppercase",
                }}
              >
                Your Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@domain.com"
                style={{
                  padding: "0.75rem 1rem",
                  border: "3px solid var(--color-border)",
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: "1rem",
                  outline: "none",
                  backgroundColor: "var(--color-paper)",
                }}
                className="neo-input"
              />
            </div>
          </div>

          {/* Project Type Select */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <label
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 900,
                fontSize: "0.9rem",
                textTransform: "uppercase",
              }}
            >
              Project Inquiry
            </label>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              {[
                { id: "creative", label: "Creative Dev (Three.js/WebGL)" },
                { id: "fullstack", label: "Full-Stack Development" },
                { id: "consult", label: "Architecture / Consulting" },
                { id: "other", label: "Other / Synthesizers" },
              ].map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setType(option.id)}
                  style={{
                    padding: "0.5rem 1rem",
                    border: "3px solid var(--color-border)",
                    backgroundColor: type === option.id ? "var(--color-yellow)" : "var(--color-paper)",
                    color: "var(--color-text)",
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    boxShadow: type === option.id ? "none" : "3px 3px 0 var(--color-border)",
                    transform: type === option.id ? "translate(3px, 3px)" : "none",
                    transition: "all 0.1s ease",
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Message Input */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <label
              htmlFor="message"
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontWeight: 900,
                fontSize: "0.9rem",
                textTransform: "uppercase",
              }}
            >
              Your Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What are we building?"
              style={{
                padding: "0.75rem 1rem",
                border: "3px solid var(--color-border)",
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "1rem",
                outline: "none",
                backgroundColor: "var(--color-paper)",
                resize: "none",
              }}
              className="neo-input"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="neo-btn neo-btn-mint"
            style={{
              padding: "1rem",
              marginTop: "1rem",
              justifyContent: "center",
              fontSize: "1.1rem",
            }}
          >
            <FaPaperPlane /> TRANSMIT MESSAGE ⚡
          </button>
        </form>

        {/* Footer */}
        <footer
          style={{
            marginTop: "6rem",
            borderTop: "4px solid var(--color-border)",
            paddingTop: "2.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
          className="footer-container"
        >
          <div style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "0.85rem", fontWeight: 700 }}>
            DESIGNED & HANDCRAFTED BY JON DOE © 2026. ALL RIGHTS COMMITTED.
          </div>
          
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            <a href="https://github.com/jondoe" target="_blank" rel="noreferrer" style={{ textDecoration: "underline", fontWeight: 800 }}>GITHUB</a>
            <a href="https://linkedin.com/in/jondoe" target="_blank" rel="noreferrer" style={{ textDecoration: "underline", fontWeight: 800 }}>LINKEDIN</a>
            <a href="https://twitter.com/jondoe" target="_blank" rel="noreferrer" style={{ textDecoration: "underline", fontWeight: 800 }}>TWITTER</a>
          </div>
        </footer>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {submitted && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 1000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              padding: "2rem",
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="neo-card"
              style={{
                maxWidth: "500px",
                width: "100%",
                padding: "2.5rem",
                backgroundColor: "var(--color-paper)",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  backgroundColor: "var(--color-mint)",
                  border: "4px solid var(--color-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "4px 4px 0 var(--color-border)",
                }}
              >
                <FaPaperPlane size={28} />
              </div>

              <div>
                <h3 style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>TRANSMISSION SHIPPED!</h3>
                <p style={{ fontSize: "1.05rem" }}>
                  Your packet has successfully traversed the web grid. I will review and reply within 24 standard working hours.
                </p>
              </div>

              <button
                onClick={handleCloseModal}
                className="neo-btn"
                style={{
                  padding: "0.5rem 1.5rem",
                  fontSize: "0.9rem",
                }}
              >
                <FaTimes /> DISMISS
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .neo-input:focus {
          border-color: var(--color-yellow) !important;
          box-shadow: 4px 4px 0 var(--color-border);
        }
        @media (max-width: 640px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
          .footer-container {
            flex-direction: column !important;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
