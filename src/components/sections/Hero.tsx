export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        background: "#F2EDE4",
        paddingTop: "140px",
        paddingBottom: "80px",
      }}
    >
      <div className="page-container">
        {/* Metadata — top right */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "32px" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px" }}>
            <span style={{ fontSize: "0.6rem", letterSpacing: "0.2em", fontWeight: 600, color: "#111", textTransform: "uppercase" }}>
              Jerico Sanchez
            </span>
            <span style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: "#9B9486", textTransform: "uppercase" }}>
              Full Stack Dev
            </span>
            <span style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: "#9B9486", textTransform: "uppercase" }}>
              ODDS · 2025
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontWeight: 800,
            color: "#111",
            lineHeight: 0.92,
            letterSpacing: "-0.035em",
            fontSize: "clamp(3.5rem, 10vw, 9rem)",
            marginBottom: 0,
          }}
        >
          Fluent in<br />
          unfamiliar<span style={{ color: "#F5C800" }}>!</span>
        </h1>

        {/* Bauhaus Red rule */}
        <div style={{ width: "100%", height: "2px", background: "#C8391D", margin: "48px 0" }} />

        {/* Subline */}
        <p style={{ fontSize: "1.1rem", lineHeight: 1.65, color: "#111", maxWidth: "48rem" }}>
          Multimedia Director. Lead Dev.<br />
          Keeps ending up somewhere he wasn&apos;t supposed to be — and belonging there.
        </p>
      </div>
    </section>
  );
}
