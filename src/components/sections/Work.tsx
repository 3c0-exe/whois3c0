"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const otherWork = [
  {
    code: "LISAI",
    year: "2026",
    tags: "React · Vite · Tailwind · Bilingual",
    problem: "Security firm needed a modern, bilingual website to showcase services and handle inquiries.",
    solution: "Built with React (Vite) + Tailwind CSS. Bilingual interface (ENG/FIL) with responsive design. Comprehensive redesign handling daily traffic for commercial security operations.",
    stat: "326",
    statLabel: "hours OJT completed",
    roles: ["Full Stack Developer"],
    projectTags: ["React", "Vite", "Tailwind", "Bilingual"],
    link: "#",
  },
  {
    code: "THEODORE",
    year: "2025",
    tags: "Embedded Systems · IoT · Fire Safety",
    problem: "Schools had no real-time fire detection system that could alert admins and emergency services simultaneously.",
    solution: "ESP32-based fire alarm with 3-sensor verification. Any sensor threshold breach triggers automated voicemail to School Admin; critical levels alert BFP directly.",
    stat: "3",
    statLabel: "sensor verification layer",
    roles: ["Project Manager", "Full Stack Developer"],
    projectTags: ["Embedded Systems", "IoT", "Fire Safety"],
    link: "#",
  },
  {
    code: "CLASSGUARD",
    year: "2025-2026",
    tags: "RFID · Laravel · Attendance",
    problem: "Manual student attendance tracking was time-consuming and error-prone.",
    solution: "PHP Laravel + ESP32-based RFID attendance system with comprehensive admin and professor dashboards. Real-time tracking, reporting, and student management.",
    stat: "100",
    statLabel: "% automated attendance",
    roles: ["Full Stack Developer"],
    projectTags: ["RFID", "Laravel", "PHP", "Attendance System"],
    link: "#",
  },
  {
    code: "PRISMA",
    year: "2025",
    tags: "Analytics · Holt-Winters · Multi-branch",
    problem: "Business owners had no unified view of branch performance across locations.",
    solution: "Multi-branch analytics platform using Holt-Winters forecasting. Single dashboard for business owners, data analysts, admins, and corp employees to track performance metrics.",
    stat: "∞",
    statLabel: "scalable to any branch count",
    roles: ["Full Stack Developer", "Data Engineer"],
    projectTags: ["Analytics", "Holt-Winters", "Forecasting", "Multi-branch"],
    link: "#",
  },
];

export default function Work() {
  const ledgerRef = useRef(null);
  const inView = useInView(ledgerRef, { once: true, margin: "-60px" });
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set());
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleProject = (code: string) => {
    const newSet = new Set(expandedProjects);
    if (newSet.has(code)) {
      newSet.delete(code);
    } else {
      newSet.add(code);
    }
    setExpandedProjects(newSet);
  };

  const gridStyles = isMobile
    ? { display: "block" }
    : { display: "grid", gridTemplateColumns: "160px 1fr 240px", gap: "0" };

  return (
    <section id="work" style={{ background: "#F2EDE4" }}>
      <div style={{ width: "100%", height: "3px", background: "#1B4FBE" }} />

      {/* AVONIC LEAD PROJECT - MOBILE RESPONSIVE */}
      <div className="page-container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <div style={gridStyles}>
          {/* LEFT COLUMN */}
          <div style={{ paddingRight: isMobile ? "0" : "24px", marginBottom: isMobile ? "28px" : "0" }}>
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
                80<span style={{ color: "#C8391D" }}>%</span>
              </div>
              <p style={{ color: "#9B9486", fontSize: "0.68rem", lineHeight: 1.5, marginTop: "6px" }}>
                survival rate<br />with AVONIC
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

          {/* CENTER COLUMN */}
          <div style={{ borderLeft: isMobile ? "0" : "1px solid rgba(17,17,17,0.15)", paddingLeft: isMobile ? "0" : "40px", paddingRight: isMobile ? "0" : "32px", paddingTop: isMobile ? "28px" : "0", borderTop: isMobile ? "1px solid rgba(17,17,17,0.15)" : "none" }}>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(2rem, 3.5vw, 3.2rem)", color: "#111", lineHeight: 1, letterSpacing: "-0.02em", marginBottom: "28px" }}>
              AVONIC
            </h2>
            <p style={{ fontSize: "1.05rem", color: "#111", lineHeight: 1.7, marginBottom: "14px" }}>
              Vermicomposting farmers losing entire batches. No visibility. No data. Just gut feel.
            </p>
            <p style={{ fontSize: "0.92rem", color: "#9B9486", lineHeight: 1.7, marginBottom: "14px" }}>
              Built an autonomous IoT system: DHT22, MQ135, soil moisture, water temp sensors, peltier cooling. Dual ESP32 architecture (Master + Slave) with online/offline deployment—Railway for web, ESP32 for local hosting. Automatic Mode runs completely self-sufficient.
            </p>
            <p style={{ fontSize: "0.92rem", color: "#9B9486", lineHeight: 1.7, marginBottom: "14px" }}>
              The real innovation: custom UI designed for farmer literacy, not tech literacy. Used Meralco bill graphs as reference—visual language farmers already understand. Fully localized, handdrawn art, mobile-responsive from ground up.
            </p>
            <p style={{ fontSize: "0.92rem", color: "#9B9486", lineHeight: 1.7 }}>
              Best Capstone Award - Hardware Category. Seeking sponsors to scale.
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div style={{ borderLeft: isMobile ? "0" : "1px solid rgba(17,17,17,0.15)", paddingLeft: isMobile ? "0" : "32px", paddingTop: isMobile ? "28px" : "0", borderTop: isMobile ? "1px solid rgba(17,17,17,0.15)" : "none" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "24px" }}>
              {["IoT", "Full Stack", "Product Design", "Research"].map((tag) => (
                <span key={tag} style={{ fontSize: "0.6rem", fontWeight: 500, color: "#111", border: "1px solid rgba(17,17,17,0.25)", padding: "3px 8px", letterSpacing: "0.04em" }}>
                  {tag}
                </span>
              ))}
            </div>
            <p style={{ fontSize: "0.55rem", letterSpacing: "0.18em", color: "#9B9486", textTransform: "uppercase", marginBottom: "4px" }}>Year</p>
            <p style={{ fontWeight: 700, color: "#111", marginBottom: "20px" }}>2025</p>
            <p style={{ fontSize: "0.55rem", letterSpacing: "0.18em", color: "#9B9486", textTransform: "uppercase", marginBottom: "4px" }}>Award</p>
            <p style={{ fontWeight: 700, color: "#111", marginBottom: "20px", fontSize: "0.92rem" }}>Best Capstone<br />Hardware Category</p>
            <p style={{ fontSize: "0.55rem", letterSpacing: "0.18em", color: "#9B9486", textTransform: "uppercase", marginBottom: "4px" }}>Status</p>
            <p style={{ fontWeight: 700, color: "#C8391D", marginBottom: "20px", fontSize: "0.92rem" }}>Seeking Sponsors</p>
            <a href="/avonic-dashboard.svg" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.72rem", color: "#111", textDecoration: "none", borderBottom: "1px solid rgba(17,17,17,0.25)" }}>
              avonic.online ↗
            </a>
            <a href="/avonic-page.png" target="_blank" rel="noopener noreferrer" style={{ display: "block", marginTop: "28px", border: "1px solid rgba(17,17,17,0.15)", aspectRatio: "16/10", overflow: "hidden", cursor: "pointer", transition: "opacity 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.opacity = "0.9"} onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}>
              <img src="/avonic-page.png" alt="AVONIC Dashboard" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </a>
          </div>
        </div>
      </div>

      <div style={{ width: "100%", borderTop: "1px solid rgba(17,17,17,0.12)" }} />

      {/* OTHER WORK - LEDGER */}
      <div ref={ledgerRef} className="page-container" style={{ paddingTop: "56px", paddingBottom: "64px" }}>
        <p style={{ fontSize: "0.58rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9B9486", marginBottom: "40px" }}>
          Other work
        </p>

        {otherWork.map((project, i) => (
          <div key={project.code}>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.09, duration: 0.35 }}
              onClick={() => toggleProject(project.code)}
              style={{
                borderTop: "1px solid rgba(17,17,17,0.12)",
                padding: "18px 0",
                display: "flex",
                alignItems: isMobile ? "center" : "baseline",
                gap: isMobile ? "12px" : "32px",
                cursor: "pointer",
                flexWrap: isMobile ? "wrap" : "nowrap",
              }}
              whileHover={!isMobile ? { x: 8 } : {}}
            >
              <span style={{ fontWeight: 700, fontSize: "1.15rem", color: "#111", minWidth: isMobile ? "auto" : "80px", flexShrink: 0 }}>
                {project.code}
              </span>
              <span style={{ fontSize: "0.72rem", color: "#9B9486", flexShrink: 0 }}>
                {project.year}
              </span>
              {!expandedProjects.has(project.code) && (
                <span style={{ fontSize: "0.76rem", color: "#9B9486", flex: isMobile ? "1 0 100%" : "1", textAlign: isMobile ? "left" : "right" }}>
                  {project.tags}
                </span>
              )}
            </motion.div>

            <AnimatePresence>
              {expandedProjects.has(project.code) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: "hidden" }}
                >
                  <div style={isMobile ? { paddingTop: "32px", paddingBottom: "32px" } : { display: "grid", gridTemplateColumns: "160px 1fr 240px", gap: "0", paddingTop: "32px", paddingBottom: "32px" }}>
                    {/* LEFT */}
                    <div style={{ paddingRight: isMobile ? "0" : "24px", marginBottom: isMobile ? "28px" : "0" }}>
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
                          marginBottom: "32px",
                        }}
                      >
                        PROJECT
                      </div>

                      <div style={{ marginTop: "0px" }}>
                        <div style={{ fontWeight: 800, fontSize: "3rem", color: "#111", lineHeight: 1 }}>
                          {project.stat}
                          <span style={{ color: "#C8391D" }}>{project.stat === "∞" ? "" : "%"}</span>
                        </div>
                        <p style={{ color: "#9B9486", fontSize: "0.68rem", lineHeight: 1.5, marginTop: "6px" }}>
                          {project.statLabel}
                        </p>
                      </div>

                      <div style={{ marginTop: "32px", paddingTop: "16px", borderTop: "1px solid rgba(17,17,17,0.15)" }}>
                        {project.roles.map((r) => (
                          <p key={r} style={{ fontSize: "0.55rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", lineHeight: 2.4, color: "#111" }}>
                            {r}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* CENTER */}
                    <div style={{ borderLeft: isMobile ? "0" : "1px solid rgba(17,17,17,0.15)", paddingLeft: isMobile ? "0" : "40px", paddingRight: isMobile ? "0" : "32px", paddingTop: isMobile ? "28px" : "0", borderTop: isMobile ? "1px solid rgba(17,17,17,0.15)" : "none" }}>
                      <h3 style={{ fontWeight: 800, fontSize: "clamp(2rem, 3.5vw, 3.2rem)", color: "#111", lineHeight: 1, letterSpacing: "-0.02em", marginBottom: "28px", marginTop: 0 }}>
                        {project.code}
                      </h3>
                      <p style={{ fontSize: "1.05rem", color: "#111", lineHeight: 1.7, marginBottom: "14px" }}>
                        {project.problem}
                      </p>
                      <p style={{ fontSize: "0.92rem", color: "#9B9486", lineHeight: 1.7 }}>
                        {project.solution}
                      </p>
                    </div>

                    {/* RIGHT */}
                    <div style={{ borderLeft: isMobile ? "0" : "1px solid rgba(17,17,17,0.15)", paddingLeft: isMobile ? "0" : "32px", paddingTop: isMobile ? "28px" : "0", borderTop: isMobile ? "1px solid rgba(17,17,17,0.15)" : "none" }}>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "24px" }}>
                        {project.projectTags.map((tag) => (
                          <span key={tag} style={{ fontSize: "0.6rem", fontWeight: 500, color: "#111", border: "1px solid rgba(17,17,17,0.25)", padding: "3px 8px", letterSpacing: "0.04em" }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p style={{ fontSize: "0.55rem", letterSpacing: "0.18em", color: "#9B9486", textTransform: "uppercase", marginBottom: "4px" }}>Year</p>
                      <p style={{ fontWeight: 700, color: "#111", marginBottom: "20px" }}>
                        {project.year}
                      </p>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.72rem", color: "#111", textDecoration: "none", borderBottom: "1px solid rgba(17,17,17,0.25)" }}>
                        {project.link} ↗
                      </a>
                      <a href={project.code === "LISAI" ? "/lisai-page.png" : project.link} target="_blank" rel="noopener noreferrer" style={{ display: "block", marginTop: "28px", border: "1px solid rgba(17,17,17,0.15)", aspectRatio: "16/10", overflow: "hidden", cursor: "pointer", transition: "opacity 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.opacity = "0.9"} onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}>
                        <img src={project.code === "LISAI" ? "/lisai-page.png" : "/placeholder.png"} alt={project.code} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
        <div style={{ borderTop: "1px solid rgba(17,17,17,0.12)" }} />
      </div>
    </section>
  );
} 