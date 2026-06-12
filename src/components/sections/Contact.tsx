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

        {/* Open to */}
        <div style={{ marginTop: "48px", display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
          <span style={{ fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(17,17,17,0.5)", marginRight: "4px" }}>
            Open to
          </span>
          {["Full-stack roles", "IoT & embedded projects", "Freelance", "Interesting problems"].map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: "0.65rem",
                fontWeight: 500,
                color: "#111",
                border: "1px solid rgba(17,17,17,0.3)",
                padding: "4px 10px",
                letterSpacing: "0.02em",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Divider + one-liners + social + back to top */}
        <div style={{ marginTop: "48px", borderTop: "1px solid rgba(17,17,17,0.15)", paddingTop: "32px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "24px" }}>

            {/* One-liners */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <p style={{ fontSize: "0.82rem", color: "rgba(17,17,17,0.6)" }}>
                Based in the Philippines. Available wherever the Wi-Fi is.
              </p>
              <p style={{ fontSize: "0.82rem", color: "rgba(17,17,17,0.6)" }}>
                Responds faster than my IoT sensors. Usually.
              </p>
            </div>

            {/* Social + Back to top */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "16px" }}>
              <div style={{ display: "flex", gap: "24px" }}>
                {[
                  { label: "GitHub", href: "https://github.com/3c0" },
                  { label: "LinkedIn", href: "https://linkedin.com/in/jericosanchez" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#111"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(17,17,17,0.5)"; }}
                    style={{
                      fontSize: "0.6rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "rgba(17,17,17,0.5)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>

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
        </div>
      </div>
    </section>
  );
}
