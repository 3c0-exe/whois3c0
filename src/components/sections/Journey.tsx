"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const timeline = [
  {
    year: "2022",
    title: "Camera before code.",
    event: "Joined the multimedia team as a member — coverage, not commits.",
    detail:
      "Covered large-scale institutional events with 500+ attendees. Managed simultaneous multi-event shoots under severe resource constraints. Learned what it means to perform under pressure with zero margin for error. No second takes.",
    tags: ["Video Production", "Event Coverage", "Post-Production"],
  },
  {
    year: "2023",
    title: "Best Infomercial Champion.",
    event: "Director, Writer & Editor — 'How to Find the Right School.'",
    detail:
      "Handled the full production pipeline solo. Direction, script, cinematography, and post. First time I realized I genuinely liked building things from nothing — and that the craft of telling a story translated across every medium.",
    tags: ["Creative Direction", "Scriptwriting", "Editing"],
  },
  {
    year: "2024",
    title: "The switch.",
    event: "Picked up a keyboard for a different reason. First serious line of code.",
    detail:
      "Started with PHP. Broke a lot of things. Fixed them. Realized debugging felt exactly like editing — find the cut that doesn't work, understand why, fix it. The mental model was already there. Just a new language.",
    tags: ["PHP", "Laravel", "MySQL", "Self-taught"],
  },
  {
    year: "2025",
    title: "AVONIC. Best Capstone. ODDS.",
    event: "Built an autonomous IoT vermicomposting system. Won Best Capstone — Hardware Category.",
    detail:
      "Dual ESP32 architecture (Master + Slave), 4-sensor verification, Peltier cooling, online/offline deployment. Custom UI designed for farmer literacy — used Meralco bill graphs as visual reference. Led a team of 4 across hardware and software. Also founded ODDS.",
    tags: ["IoT", "ESP32", "Full Stack", "Product Design", "Team Lead"],
  },
  {
    year: "2026",
    title: "Shipping real products.",
    event: "396 hours OJT at LISAI Security. Graduated Cum Laude.",
    detail:
      "Built and deployed a bilingual (ENG/FIL) commercial website handling real daily traffic for security operations. Responsive design, full redesign from brief to production. Currently open to the next unfamiliar thing.",
    tags: ["React", "Vite", "Tailwind", "Bilingual", "Production"],
  },
];

const pivotStats = [
  { value: "3", label: "years multimedia" },
  { value: "8–10", label: "team size led" },
  { value: "500+", label: "event attendees" },
  { value: "4+", label: "projects shipped" },
  { value: "1", label: "capstone award" },
];

export default function Journey() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section style={{ background: "#F2EDE4" }}>
      <div style={{ width: "100%", height: "3px", background: "#F5C800" }} />

      <div ref={ref} className="page-container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>

        {/* Header row */}
        <div
          style={
            isMobile
              ? { marginBottom: "48px" }
              : { display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "64px" }
          }
        >
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              color: "#111",
              marginBottom: isMobile ? "24px" : 0,
            }}
          >
            Then.<br />Now.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{
              fontSize: "0.9rem",
              color: "#9B9486",
              maxWidth: "360px",
              lineHeight: 1.7,
              textAlign: isMobile ? "left" : "right",
            }}
          >
            Same skill — orchestrating complexity under pressure.
            Just a different medium.
          </motion.p>
        </div>

        {/* THEN → NOW pivot bar */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr auto 1fr",
            alignItems: "start",
            borderTop: "1px solid rgba(17,17,17,0.12)",
            borderBottom: "1px solid rgba(17,17,17,0.12)",
            padding: "32px 0",
            marginBottom: "64px",
            gap: isMobile ? "24px" : "40px",
          }}
        >
          {/* THEN */}
          <div>
            <p style={{ fontSize: "0.55rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9B9486", marginBottom: "12px" }}>
              Then
            </p>
            <p style={{ fontWeight: 800, fontSize: "clamp(1.4rem, 2.5vw, 2rem)", color: "#111", lineHeight: 1.05, marginBottom: "16px" }}>
              Multimedia<br />Director
            </p>
            <p style={{ fontSize: "0.7rem", color: "#9B9486", marginBottom: "16px" }}>2022 – 2025 · Systems Plus Computer College</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {["Progressed from member → Asst. Director → Director", "Managed teams of 8–10 across live events", "Post-production end-to-end: raw footage to final cut"].map((pt) => (
                <p key={pt} style={{ fontSize: "0.78rem", color: "#9B9486", lineHeight: 1.5, paddingLeft: "10px", borderLeft: "2px solid rgba(17,17,17,0.12)" }}>
                  {pt}
                </p>
              ))}
            </div>
          </div>

          {/* Arrow */}
          {!isMobile && (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", paddingTop: "8px" }}>
              <div style={{ width: "1px", height: "32px", background: "rgba(17,17,17,0.12)" }} />
              <span style={{ fontSize: "1.1rem", color: "#C8391D", lineHeight: 1 }}>→</span>
              <div style={{ width: "1px", height: "32px", background: "rgba(17,17,17,0.12)" }} />
            </div>
          )}

          {/* NOW */}
          <div style={{ textAlign: isMobile ? "left" : "right" }}>
            <p style={{ fontSize: "0.55rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9B9486", marginBottom: "12px" }}>
              Now
            </p>
            <p style={{ fontWeight: 800, fontSize: "clamp(1.4rem, 2.5vw, 2rem)", color: "#111", lineHeight: 1.05, marginBottom: "16px" }}>
              Full-Stack<br />Lead Dev
            </p>
            <p style={{ fontSize: "0.7rem", color: "#9B9486", marginBottom: "16px" }}>2025 – present · ODDS · LISAI</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {["Full-stack across React, Laravel, Node.js", "Hardware: ESP32, MQTT, sensors, live data", "Project Manager, Researcher, Product Designer"].map((pt) => (
                <p key={pt} style={{ fontSize: "0.78rem", color: "#9B9486", lineHeight: 1.5, paddingRight: isMobile ? "0" : "10px", borderRight: isMobile ? "none" : "2px solid rgba(17,17,17,0.12)", textAlign: isMobile ? "left" : "right" }}>
                  {pt}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div style={{ marginBottom: "64px" }}>
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.09 }}
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "56px 1px 1fr" : "80px 1px 1fr",
                gap: "0 20px",
                alignItems: "stretch",
              }}
            >
              {/* Year */}
              <div style={{ paddingTop: "24px", paddingBottom: "24px", textAlign: "right" }}>
                <span style={{ fontWeight: 700, fontSize: "0.82rem", color: "#111" }}>
                  {item.year}
                </span>
              </div>

              {/* Spine */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: "1px", flex: 1, background: "rgba(17,17,17,0.1)" }} />
                <div
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: i === timeline.length - 1 ? "#C8391D" : "#111",
                    flexShrink: 0,
                  }}
                />
                <div
                  style={{
                    width: "1px",
                    flex: 1,
                    background: i < timeline.length - 1 ? "rgba(17,17,17,0.1)" : "transparent",
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ paddingTop: "24px", paddingBottom: "24px" }}>
                <p style={{ fontWeight: 700, fontSize: "0.95rem", color: "#111", marginBottom: "4px", lineHeight: 1.3 }}>
                  {item.title}
                </p>
                <p style={{ fontSize: "0.85rem", color: "#111", lineHeight: 1.6, marginBottom: "8px" }}>
                  {item.event}
                </p>
                <p style={{ fontSize: "0.82rem", color: "#9B9486", lineHeight: 1.65, marginBottom: "12px" }}>
                  {item.detail}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "0.58rem",
                        fontWeight: 500,
                        color: "#111",
                        border: "1px solid rgba(17,17,17,0.2)",
                        padding: "2px 7px",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          style={{
            borderTop: "1px solid rgba(17,17,17,0.12)",
            paddingTop: "32px",
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(3, 1fr)" : `repeat(${pivotStats.length}, 1fr)`,
            gap: "24px",
          }}
        >
          {pivotStats.map((stat) => (
            <div key={stat.label}>
              <p style={{ fontWeight: 800, fontSize: "clamp(1.4rem, 2vw, 2rem)", color: "#111", lineHeight: 1, marginBottom: "6px" }}>
                {stat.value}
              </p>
              <p style={{ fontSize: "0.65rem", color: "#9B9486", lineHeight: 1.4 }}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
