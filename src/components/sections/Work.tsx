"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const otherWork = [
  { code: "EMBER", year: "2024", tags: "Embedded Systems · Computer Vision · Full Stack" },
  { code: "LENS", year: "2024", tags: "Data Engineering · Forecasting · Internal Tooling" },
  { code: "GATE", year: "2023", tags: "Hardware Integration · Full Stack · Institutional" },
];

export default function Work() {
  const ledgerRef = useRef(null);
  const inView = useInView(ledgerRef, { once: true, margin: "-60px" });

  return (
    <section id="work" style={{ background: "#F2EDE4" }}>
      {/* Blue separator */}
      <div style={{ width: "100%", height: "3px", background: "#1B4FBE" }} />

      {/* ── AVONIC spread ── */}
      <div className="page-container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "160px 1fr 240px",
            gap: "0",
          }}
        >
          {/* LEFT: label + stat + roles */}
          <div style={{ paddingRight: "24px" }}>
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
              LEAD PROJECT
            </div>

            <div style={{ marginTop: "32px" }}>
              <div style={{ fontWeight: 800, fontSize: "3rem", color: "#111", lineHeight: 1 }}>
                30<span style={{ color: "#C8391D" }}>%</span>
              </div>
              <p style={{ color: "#9B9486", fontSize: "0.68rem", lineHeight: 1.5, marginTop: "6px" }}>
                worm mortality rate<br />before AVONIC
              </p>
            </div>

            <div style={{ marginTop: "32px", paddingTop: "16px", borderTop: "1px solid rgba(17,17,17,0.15)" }}>
              {["Project Manager", "Researcher", "Lead Full Stack Dev"].map((r) => (
                <p key={r} style={{ fontSize: "0.55rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", lineHeight: 2.4, color: "#111" }}>
                  {r}
                </p>
              ))}
            </div>
          </div>

          {/* CENTER: story */}
          <div style={{ borderLeft: "1px solid rgba(17,17,17,0.15)", paddingLeft: "40px", paddingRight: "32px" }}>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(2rem, 3.5vw, 3.2rem)", color: "#111", lineHeight: 1, letterSpacing: "-0.02em", marginBottom: "28px" }}>
              AVONIC
            </h2>
            <p style={{ fontSize: "1.05rem", color: "#111", lineHeight: 1.7, marginBottom: "14px" }}>
              Filipino farmers were losing worms to bad monitoring.
            </p>
            <p style={{ fontSize: "0.92rem", color: "#9B9486", lineHeight: 1.7, marginBottom: "14px" }}>
              No data. Gut feel as the only tool. Worm health is invisible until
              it&apos;s too late — by then, an entire vermicomposting batch is gone.
            </p>
            <p style={{ fontSize: "0.92rem", color: "#9B9486", lineHeight: 1.7 }}>
              Built sensors. Built the dashboard. Led the research. Figured it out.
              Didn&apos;t know how to build IoT before this. Apparently that wasn&apos;t a reason not to.
            </p>
          </div>

          {/* RIGHT: tags + meta + placeholder */}
          <div style={{ borderLeft: "1px solid rgba(17,17,17,0.15)", paddingLeft: "32px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "24px" }}>
              {["IoT", "Full Stack", "Product Design", "Research"].map((tag) => (
                <span key={tag} style={{ fontSize: "0.6rem", fontWeight: 500, color: "#111", border: "1px solid rgba(17,17,17,0.25)", padding: "3px 8px", letterSpacing: "0.04em" }}>
                  {tag}
                </span>
              ))}
            </div>
            <p style={{ fontSize: "0.55rem", letterSpacing: "0.18em", color: "#9B9486", textTransform: "uppercase", marginBottom: "4px" }}>Year</p>
            <p style={{ fontWeight: 700, color: "#111", marginBottom: "20px" }}>2025</p>
            <a href="https://avonic.online" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.72rem", color: "#111", textDecoration: "none", borderBottom: "1px solid rgba(17,17,17,0.25)" }}>
              avonic.online ↗
            </a>
            <div style={{ marginTop: "28px", border: "1px solid rgba(17,17,17,0.15)", aspectRatio: "16/10", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: "0.62rem", color: "#9B9486" }}>[image / diagram]</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── LEDGER ── */}
      <div style={{ width: "100%", borderTop: "1px solid rgba(17,17,17,0.12)" }} />

      <div ref={ledgerRef} className="page-container" style={{ paddingTop: "56px", paddingBottom: "64px" }}>
        <p style={{ fontSize: "0.58rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9B9486", marginBottom: "40px" }}>
          Other work
        </p>

        {otherWork.map((project, i) => (
          <motion.div
            key={project.code}
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.09, duration: 0.35 }}
            style={{
              borderTop: "1px solid rgba(17,17,17,0.12)",
              padding: "18px 0",
              display: "flex",
              alignItems: "baseline",
              gap: "32px",
              cursor: "pointer",
            }}
          >
            <span style={{ fontWeight: 700, fontSize: "1.15rem", color: "#111", minWidth: "80px", flexShrink: 0 }}>
              {project.code}
            </span>
            <span style={{ fontSize: "0.72rem", color: "#9B9486", flexShrink: 0 }}>
              {project.year}
            </span>
            <span style={{ fontSize: "0.76rem", color: "#9B9486", flex: 1, textAlign: "right" }}>
              {project.tags}
            </span>
          </motion.div>
        ))}
        <div style={{ borderTop: "1px solid rgba(17,17,17,0.12)" }} />
      </div>
    </section>
  );
}
