"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: "#F5C800",
        padding: "120px 0 80px",
      }}
    >
      <div className="page-container">
        <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", fontWeight: 600, textTransform: "uppercase", color: "#111", marginBottom: "32px" }}>
          Built something worth talking about?
        </p>
        <a
          href="mailto:hello@3c0.dev"
          style={{
            display: "block",
            fontWeight: 800,
            color: "#111",
            lineHeight: 1,
            letterSpacing: "-0.03em",
            fontSize: "clamp(2rem, 6vw, 6rem)",
            textDecoration: "none",
          }}
        >
          hello@3c0.dev
        </a>

        {/* One-liners */}
        <div style={{ marginTop: "64px", borderTop: "1px solid rgba(17,17,17,0.15)", paddingTop: "32px", display: "flex", flexDirection: "column", gap: "8px" }}>
          <p style={{ fontSize: "0.82rem", color: "rgba(17,17,17,0.6)" }}>
            Based in the Philippines. Available wherever the Wi-Fi is.
          </p>
          <p style={{ fontSize: "0.82rem", color: "rgba(17,17,17,0.6)" }}>
            Responds faster than my IoT sensors. Usually.
          </p>
          <p style={{ fontSize: "0.82rem", color: "rgba(17,17,17,0.6)" }}>
            Open to collaboration, freelance, and interesting problems.
          </p>
        </div>

        {/* Back to top */}
        <div style={{ marginTop: "48px", display: "flex", justifyContent: "flex-end" }}>
          <a
            href="#hero"
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "0.4"; }}
            style={{
              fontSize: "0.55rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#111",
              textDecoration: "none",
              opacity: 0.4,
              transition: "opacity 0.2s",
            }}
          >
            ↑ Top
          </a>
        </div>
      </div>
    </section>
  );
}
