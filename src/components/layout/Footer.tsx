"use client";

export default function Footer() {
  return (
    <footer style={{ background: "#F2EDE4", borderTop: "1px solid rgba(17,17,17,0.1)", padding: "24px 0" }}>
      <div
        className="page-container"
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}
      >
        <p style={{ fontSize: "0.72rem", color: "#9B9486" }}>
          Built by someone who had no business building it. · 3c0 · ODDS · 2025
        </p>
        <div style={{ display: "flex", gap: "20px" }}>
          {[
            { label: "GitHub", href: "https://github.com/3c0" },
            { label: "LinkedIn", href: "https://linkedin.com/in/jericosanchez" },
            { label: "hello@3c0.dev", href: "mailto:hello@3c0.dev" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={(e) => { e.currentTarget.style.color = "#111"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#9B9486"; }}
              style={{
                fontSize: "0.65rem",
                color: "#9B9486",
                textDecoration: "none",
                letterSpacing: "0.04em",
                transition: "color 0.2s",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
