"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const gridStyles = isMobile
    ? { display: "block" }
    : { display: "grid", gridTemplateColumns: "160px 1fr 240px", gap: "0" };

  return (
    <section id="about" style={{ background: "#1A1A1A", color: "white" }}>
      <div style={{ width: "100%", height: "3px", background: "#C8391D" }} />

      <div ref={ref} className="page-container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <div style={gridStyles}>
          {/* LEFT: rotated label + skills web */}
          <motion.div
            style={{ paddingRight: isMobile ? "0" : "24px", marginBottom: isMobile ? "28px" : "0" }}
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

            {/* Skill Bars */}
            <div style={{ marginTop: "28px" }}>
              {[
                { name: "Frontend", level: 85, tech: "React" },
                { name: "Backend", level: 80, tech: "Node, Laravel" },
                { name: "Hardware", level: 75, tech: "ESP32, MQTT" },
              ].map((skill, i) => (
                <div key={skill.name} style={{ marginBottom: "20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                    <p style={{ fontSize: "0.7rem", fontWeight: 600, color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: "0.06em", margin: 0 }}>
                      {skill.name}
                    </p>
                    <p style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.5)", margin: 0 }}>
                      {skill.level}%
                    </p>
                  </div>
                  <div style={{ width: "100%", height: "6px", background: "rgba(255,255,255,0.1)", borderRadius: "2px", overflow: "hidden" }}>
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: inView ? `${skill.level}%` : "0%" }}
                      transition={{ duration: 0.9, delay: i * 0.15, ease: "easeOut" }}
                      style={{
                        height: "100%",
                        background: "#C8391D",
                        borderRadius: "2px",
                      }}
                    />
                  </div>
                  <p style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.4)", marginTop: "4px", margin: "4px 0 0 0" }}>
                    {skill.tech}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CENTER: copy */}
          <motion.div
            style={{ borderLeft: isMobile ? "0" : "1px solid rgba(255,255,255,0.08)", paddingLeft: isMobile ? "0" : "40px", paddingRight: isMobile ? "0" : "32px", paddingTop: isMobile ? "28px" : "0", borderTop: isMobile ? "1px solid rgba(255,255,255,0.08)" : "none" }}
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
            style={{ borderLeft: isMobile ? "0" : "1px solid rgba(255,255,255,0.08)", paddingLeft: isMobile ? "0" : "32px", paddingTop: isMobile ? "28px" : "0", borderTop: isMobile ? "1px solid rgba(255,255,255,0.08)" : "none" }}
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