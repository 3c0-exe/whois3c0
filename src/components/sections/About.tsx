"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="about" style={{ background: "#1A1A1A", color: "white" }}>
      <div style={{ width: "100%", height: "3px", background: "#C8391D" }} />

      <div ref={ref} className="page-container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "160px 1fr 240px",
            gap: "0",
          }}
        >
          {/* LEFT: rotated label + skills web */}
          <motion.div
            style={{ paddingRight: "24px" }}
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div
              style={{
                background: "#C8391D",
                color: "white",
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                fontSize: "0.55rem",
                letterSpacing: "0.22em",
                fontWeight: 600,
                padding: "10px 7px",
                display: "inline-block",
              }}
            >
              ABOUT
            </div>

            {/* Skills Web Diagram */}
            <svg
              viewBox="0 0 120 140"
              style={{
                marginTop: "28px",
                width: "100px",
                height: "100%",
              }}
            >
              {/* Center circle */}
              <circle cx="60" cy="70" r="8" fill="rgba(200, 57, 29, 0.8)" />
              
              {/* Frontend node (top-left) */}
              <circle cx="30" cy="30" r="6" fill="rgba(255, 255, 255, 0.3)" />
              <line x1="60" y1="70" x2="30" y2="30" stroke="rgba(200, 57, 29, 0.4)" strokeWidth="1" />
              <text x="20" y="18" fontSize="9" fill="rgba(255,255,255,0.6)" textAnchor="middle">
                Frontend
              </text>
              <text x="20" y="28" fontSize="8" fill="rgba(255,255,255,0.4)" textAnchor="middle">
                React
              </text>
              
              {/* Backend node (top-right) */}
              <circle cx="90" cy="30" r="6" fill="rgba(255, 255, 255, 0.3)" />
              <line x1="60" y1="70" x2="90" y2="30" stroke="rgba(200, 57, 29, 0.4)" strokeWidth="1" />
              <text x="100" y="18" fontSize="9" fill="rgba(255,255,255,0.6)" textAnchor="middle">
                Backend
              </text>
              <text x="100" y="28" fontSize="8" fill="rgba(255,255,255,0.4)" textAnchor="middle">
                Node, Laravel
              </text>
              
              {/* Hardware node (bottom) */}
              <circle cx="60" cy="110" r="6" fill="rgba(255, 255, 255, 0.3)" />
              <line x1="60" y1="70" x2="60" y2="110" stroke="rgba(200, 57, 29, 0.4)" strokeWidth="1" />
              <text x="60" y="130" fontSize="9" fill="rgba(255,255,255,0.6)" textAnchor="middle">
                Hardware
              </text>
              <text x="60" y="138" fontSize="8" fill="rgba(255,255,255,0.4)" textAnchor="middle">
                ESP32, MQTT
              </text>
            </svg>
          </motion.div>

          {/* CENTER: copy */}
          <motion.div
            style={{ borderLeft: "1px solid rgba(255,255,255,0.08)", paddingLeft: "40px", paddingRight: "32px" }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 style={{ fontWeight: 800, fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "white", lineHeight: 1, letterSpacing: "-0.025em", marginBottom: "28px" }}>
              3c0.
            </h2>
            
            <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.88)", lineHeight: 1.7, marginBottom: "14px" }}>
              Jerico Sanchez.
            </p>
            
            <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: "14px" }}>
              Multimedia Director turned Full-Stack Developer. Started directing cameras and teams. Now I direct code, systems, and IoT solutions. Same skill—orchestrating complexity under pressure—just a different medium.
            </p>
            
            <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: "14px" }}>
              Founder of ODDS. Building real solutions at the intersection of hardware and software—IoT systems, live dashboards, autonomous platforms. Problems without obvious answers yet.
            </p>
            
            <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
              Full-stack across React, Laravel, Node.js. Comfortable in hardware: ESP32, MQTT, sensors, live data. Product designer. Team builder. 3 years of mentorship and leadership.
            </p>
          </motion.div>

          {/* RIGHT: THEN/NOW + AWARDS */}
          <motion.div
            style={{ borderLeft: "1px solid rgba(255,255,255,0.08)", paddingLeft: "32px" }}
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* THEN/NOW */}
            <div style={{ marginBottom: "32px" }}>
              <p style={{ fontSize: "0.55rem", letterSpacing: "0.2em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", marginBottom: "8px" }}>
                THEN
              </p>
              <p style={{ fontWeight: 700, fontSize: "1.4rem", color: "white", lineHeight: 1.3 }}>
                Multimedia<br />Director
              </p>
            </div>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "32px", marginBottom: "32px" }}>
              <p style={{ fontSize: "0.55rem", letterSpacing: "0.2em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", marginBottom: "8px" }}>
                NOW
              </p>
              <p style={{ fontWeight: 700, fontSize: "1.4rem", color: "white", lineHeight: 1.3 }}>
                Full-Stack<br />Lead Dev
              </p>
            </div>

            {/* AWARDS */}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "32px", marginBottom: "0" }}>
              <p style={{ fontSize: "0.55rem", letterSpacing: "0.2em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", marginBottom: "12px" }}>
                RECOGNITION
              </p>

                            <div style={{ marginBottom: "14px" }}>
                <p style={{ fontSize: "0.72rem", fontWeight: 600, color: "white", marginBottom: "2px" }}>
                  Cum Laude
                </p>
                <p style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.4)", marginBottom: "8px" }}>
                  Bachelors of Science in Information Technology - 2022 - 2026
                </p>
              </div>
              
              <div style={{ marginBottom: "14px" }}>
                <p style={{ fontSize: "0.72rem", fontWeight: 600, color: "white", marginBottom: "2px" }}>
                  Best Capstone<br />Hardware Category
                </p>
                <p style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.4)", marginBottom: "8px" }}>
                  AVONIC System
                </p>
              </div>

              <div style={{ marginBottom: "14px" }}>
                <p style={{ fontSize: "0.72rem", fontWeight: 600, color: "white", marginBottom: "2px" }}>
                  Infomercial<br />Champion
                </p>
                <p style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.4)", marginBottom: "8px" }}>
                  Director, Writer, Editor
                </p>
              </div>

              <div style={{ marginBottom: "14px" }}>
                <p style={{ fontSize: "0.72rem", fontWeight: 600, color: "white", marginBottom: "2px" }}>
                  Exemplary Leadership<br />+ Mentor Award
                </p>
                <p style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.4)" }}>
                  3 Years Service
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}