"use client";

export default function Navbar() {
  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}>
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