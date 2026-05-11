"use client";

import { motion } from "framer-motion";

const tickerItems = [
  "3c0", "JERICO SANCHEZ", "FULL STACK DEV", "MEMBER OF ODDS",
  "FLUENT IN UNFAMILIAR", "BAUHAUS BONES",
];
const tickerLoop = [...tickerItems, ...tickerItems, ...tickerItems];

export default function Navbar() {
  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}>
      {/* Ticker */}
      <div style={{ background: "#111", overflow: "hidden", padding: "8px 0" }}>
        <motion.div
          style={{ display: "flex", gap: "40px", whiteSpace: "nowrap" }}
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {tickerLoop.map((item, i) => (
            <span
              key={i}
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                fontWeight: 500,
                color: "#F2EDE4",
                textTransform: "uppercase",
                flexShrink: 0,
              }}
            >
              {item} <span style={{ color: "#F5C800", opacity: 0.5 }}>·</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Nav */}
      <nav
        style={{
          background: "#F2EDE4",
          borderBottom: "1px solid rgba(17,17,17,0.1)",
          padding: "14px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ fontWeight: 700, fontSize: "1.1rem", color: "#111" }}>
          3c0
        </span>
        <div style={{ display: "flex", gap: "32px" }}>
          {["work", "about", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                fontWeight: 500,
                color: "#111",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
