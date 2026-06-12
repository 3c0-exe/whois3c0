"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const sections = ["work", "about", "contact"];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -50% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}>
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
          {["work", "about", "contact"].map((item) => {
            const isActive = activeSection === item;
            const isHovered = hoveredLink === item;
            return (
              <a
                key={item}
                href={`#${item}`}
                onMouseEnter={() => setHoveredLink(item)}
                onMouseLeave={() => setHoveredLink(null)}
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? "#C8391D" : isHovered ? "#111" : "#9B9486",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  paddingBottom: "3px",
                  borderBottom: isActive
                    ? "1px solid #C8391D"
                    : "1px solid transparent",
                }}
              >
                {item}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}