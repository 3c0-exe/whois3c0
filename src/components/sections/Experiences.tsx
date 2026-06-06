"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// TODO: Add your real experiences here
// Examples: Multimedia Director, Leadership roles, Speaking engagements, Mentorship, etc.
interface Experience {
  title: string;
  org: string;
  year: string;
  description: string;
  tags: string[];
}

const experiences: Experience[] = [
  {
    title: "Multimedia Director",
    org: "Systems Plus Computer College",
    year: "2022 – 2025",
    description: "Progressed from member to Assistant Director to Director over 3 years, managing a team of 8–10. Planned and executed multimedia coverage for large-scale institutional events with 500+ attendees. Managed simultaneous multi-event coverage under severe resource constraints. Oversaw post-production end-to-end, from raw footage to final edits across all outputs.",
    tags: ["Video Production", "Team Leadership", "Event Coverage", "Post-Production"],
  },
  {
    title: "Infomercial Champion",
    org: "Systems Plus Computer College",
    year: "2023",
    description: "Won Best Infomercial as Director, Writer & Editor for 'How to Find the Right School.' Demonstrated full production mastery across direction, scriptwriting, and editorial control.",
    tags: ["Video Direction", "Creative Writing", "Editing"],
  },
  {
    title: "Exemplary Leadership & Mentor Award",
    org: "Systems Plus Computer College",
    year: "2022 – 2025",
    description: "Recognized for 3 years of service with awards for exemplary leadership and mentorship. Mentored junior members and delegated critical tasks under tight timelines while maintaining excellence.",
    tags: ["Mentorship", "Leadership", "Team Building"],
  },
];

export default function Experiences() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="experiences" style={{ background: "#F2EDE4" }}>
      <div style={{ width: "100%", height: "3px", background: "#C8391D" }} />

      <div ref={ref} className="page-container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <p style={{ fontSize: "0.58rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9B9486", marginBottom: "40px" }}>
          Experiences
        </p>

        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.09, duration: 0.35 }}
            style={{
              borderTop: "1px solid rgba(17,17,17,0.12)",
              padding: "24px 0",
            }}
          >
            <div style={isMobile ? { display: "block" } : { display: "grid", gridTemplateColumns: "160px 1fr 240px", gap: "0" }}>
              {/* LEFT */}
              <div style={{ paddingRight: isMobile ? "0" : "24px", marginBottom: isMobile ? "20px" : "0" }}>
                <p style={{ fontSize: "0.72rem", color: "#9B9486", marginTop: "0" }}>
                  {exp.year}
                </p>
              </div>

              {/* CENTER */}
              <div style={{ borderLeft: isMobile ? "0" : "1px solid rgba(17,17,17,0.15)", paddingLeft: isMobile ? "0" : "40px", paddingRight: isMobile ? "0" : "32px", paddingTop: isMobile ? "20px" : "0", borderTop: isMobile ? "1px solid rgba(17,17,17,0.15)" : "none" }}>
                <h3 style={{ fontWeight: 700, fontSize: "1.2rem", color: "#111", marginBottom: "4px", marginTop: 0 }}>
                  {exp.title}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "#9B9486", marginBottom: "12px" }}>
                  {exp.org}
                </p>
                <p style={{ fontSize: "0.92rem", color: "#9B9486", lineHeight: 1.7 }}>
                  {exp.description}
                </p>
              </div>

              {/* RIGHT */}
              <div style={{ borderLeft: isMobile ? "0" : "1px solid rgba(17,17,17,0.15)", paddingLeft: isMobile ? "0" : "32px", paddingTop: isMobile ? "20px" : "0", borderTop: isMobile ? "1px solid rgba(17,17,17,0.15)" : "none" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {exp.tags.map((tag) => (
                    <span key={tag} style={{ fontSize: "0.6rem", fontWeight: 500, color: "#111", border: "1px solid rgba(17,17,17,0.25)", padding: "3px 8px", letterSpacing: "0.04em" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {experiences.length > 0 && <div style={{ borderTop: "1px solid rgba(17,17,17,0.12)" }} />}
      </div>
    </section>
  );
}