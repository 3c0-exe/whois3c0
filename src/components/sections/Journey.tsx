"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const timeline = [
  { year: "2022", event: "Joined the multimedia team as a member — cameras, not code." },
  { year: "2023", event: "Won Best Infomercial. Director, Writer, Editor. Did all three." },
  { year: "2024", event: "Picked up a keyboard for a different reason. First serious line of code." },
  { year: "2025", event: "AVONIC wins Best Capstone — Hardware Category. Founded ODDS." },
  { year: "2026", event: "396 hours OJT at LISAI. Full-stack. Actually shipping." },
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
            alignItems: "center",
            borderTop: "1px solid rgba(17,17,17,0.12)",
            borderBottom: "1px solid rgba(17,17,17,0.12)",
            padding: "28px 0",
            marginBottom: "64px",
            gap: isMobile ? "20px" : "32px",
          }}
        >
          <div>
            <p style={{ fontSize: "0.55rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9B9486", marginBottom: "10px" }}>
              Then
            </p>
            <p style={{ fontWeight: 800, fontSize: "clamp(1.4rem, 2.5vw, 2rem)", color: "#111", lineHeight: 1.05 }}>
              Multimedia<br />Director
            </p>
            <p style={{ fontSize: "0.7rem", color: "#9B9486", marginTop: "10px" }}>2022 – 2025</p>
          </div>

          {!isMobile && (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
              <div style={{ width: "40px", height: "1px", background: "#C8391D" }} />
              <span style={{ fontSize: "1.1rem", color: "#C8391D", lineHeight: 1 }}>→</span>
              <div style={{ width: "40px", height: "1px", background: "#C8391D" }} />
            </div>
          )}

          <div style={{ textAlign: isMobile ? "left" : "right" }}>
            <p style={{ fontSize: "0.55rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9B9486", marginBottom: "10px" }}>
              Now
            </p>
            <p style={{ fontWeight: 800, fontSize: "clamp(1.4rem, 2.5vw, 2rem)", color: "#111", lineHeight: 1.05 }}>
              Full-Stack<br />Lead Dev
            </p>
            <p style={{ fontSize: "0.7rem", color: "#9B9486", marginTop: "10px" }}>2025 – present</p>
          </div>
        </motion.div>

        {/* Timeline */}
        <div>
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
              <div style={{ paddingTop: "18px", paddingBottom: "18px", textAlign: "right" }}>
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

              {/* Event */}
              <div style={{ paddingTop: "18px", paddingBottom: "18px" }}>
                <p style={{ fontSize: "0.92rem", color: "#9B9486", lineHeight: 1.65, margin: 0 }}>
                  {item.event}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
