"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";

export default function DemoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show the popup immediately when the component mounts
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10001,
            padding: "1.5rem",
          }}
        >
          {/* Overlay click to close */}
          <div
            onClick={handleClose}
            style={{
              position: "absolute",
              inset: 0,
              cursor: "pointer",
            }}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 10, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="neo-card"
            style={{
              width: "100%",
              maxWidth: "520px",
              backgroundColor: "var(--color-paper)",
              padding: "2.5rem 2rem",
              position: "relative",
              zIndex: 10002,
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            {/* Close button in corner */}
            <button
              onClick={handleClose}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-text)",
                transition: "transform 0.1s ease",
              }}
              className="close-hover"
              aria-label="Close modal"
            >
              <FaTimes size={20} />
            </button>

            {/* Header Badge */}
            <div style={{ display: "flex" }}>
              <span
                style={{
                  backgroundColor: "var(--color-red)",
                  color: "#fff",
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontWeight: 900,
                  fontSize: "0.85rem",
                  padding: "0.25rem 0.75rem",
                  border: "2px solid var(--color-border)",
                  boxShadow: "3px 3px 0 var(--color-border)",
                  transform: "rotate(-1deg)",
                  textTransform: "uppercase",
                }}
              >
                Workshop Demo Project
              </span>
            </div>

            {/* Title */}
            <h2
              style={{
                fontSize: "1.8rem",
                lineHeight: "1.2",
                color: "var(--color-text)",
                margin: 0,
              }}
            >
              DevTrackAcademy
            </h2>

            {/* Content Text */}
            <p
              style={{
                fontFamily: "var(--font-lora), serif",
                fontSize: "1.1rem",
                color: "var(--color-text)",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              This is a Demo project for Building porfolio workshop form DevTrackAcademy.
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                marginTop: "0.5rem",
              }}
            >
              <a
                href="https://workshop.devtrackacademy.com/workshops/professional-level-frontend-with-vibecoding"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn neo-btn-mint"
                style={{
                  textDecoration: "none",
                  flex: "1 1 auto",
                  justifyContent: "center",
                }}
              >
                Join Workshop <FaExternalLinkAlt size={14} />
              </a>

              <button
                onClick={handleClose}
                className="neo-btn"
                style={{
                  backgroundColor: "var(--color-canvas)",
                  flex: "1 1 auto",
                  justifyContent: "center",
                }}
              >
                View Portfolio
              </button>
            </div>

            <style jsx global>{`
              .close-hover:hover {
                transform: scale(1.15) rotate(90deg);
              }
            `}</style>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
