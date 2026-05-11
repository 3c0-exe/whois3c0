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
          {/* LEFT: rotated label + debris */}
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

            <div
              style={{
                marginTop: "32px",
                border: "1px solid rgba(255,255,255,0.12)",
                width: "88px",
                height: "110px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p style={{ fontSize: "0.58rem", color: "rgba(255,255,255,0.2)", textAlign: "center", lineHeight: 1.6 }}>
                personal<br />debris<br />TBD
              </p>
            </div>
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
            <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: "14px" }}>
              Jerico Sanchez.
            </p>
            <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: "14px" }}>
              Former Multimedia Director. Still directing, just code instead of cameras.
            </p>
            <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: "14px" }}>
              Member of ODDS.
            </p>
            <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
              Currently building things at the intersection of hardware and software — mostly for problems that don&apos;t have obvious solutions yet.
            </p>
          </motion.div>

          {/* RIGHT: THEN/NOW */}
          <motion.div
            style={{ borderLeft: "1px solid rgba(255,255,255,0.08)", paddingLeft: "32px" }}
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
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
                Lead Dev<br />Full Stack
              </p>
            </div>

            <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.2)", fontStyle: "italic" }}>
              &ldquo;Never planned to. Here we are.&rdquo;
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
