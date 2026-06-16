"use client";
import { useEffect, useRef } from "react";

const stats = [
  { num: "4+",  label: "Projects Shipped"   },
  { num: "SIH", label: "Hackathon Finalist"  },
  { num: "7.0", label: "CGPA — B.Tech IT"   },
  { num: "100+",label: "DSA Problems Solved" },
];

const education = [
  {
    degree: "B.Tech — Information Technology",
    school: "Techno Main Saltlake, Kolkata",
    year: "2022 – 2026",
    score: "CGPA: 7.0 / 10",
  },
  {
    degree: "Higher Secondary (Class XII)",
    school: "DAV Public School Rupnarayanpur",
    year: "2022",
    score: "74%",
  },
  {
    degree: "Secondary (Class X)",
    school: "DAV Public School Rupnarayanpur",
    year: "2020",
    score: "77%",
  },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("in"); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="reveal" style={{ padding: "120px 0" }}>
      <div className="container">

        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 64 }}>
          <div style={{ width: 28, height: 2, background: "#2563eb" }} />
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "#2563eb" }}>
            About
          </span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>

          {/* Left — bio */}
          <div>
            <h2 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 800, lineHeight: 0.92, letterSpacing: "-0.02em", color: "#f2f2f2", marginBottom: 32 }}>
              I BUILD<br />
              <span style={{ color: "#2563eb" }}>THINGS</span><br />
              THAT MATTER.
            </h2>
            <p style={{ fontSize: 15, color: "#666", lineHeight: 1.8, marginBottom: 18, maxWidth: 440 }}>
              I&apos;m Soham — a B.Tech IT student at Techno Main Saltlake, Kolkata. I build full-stack products at the intersection of web, mobile, and AI, from WebRTC-powered collaborative IDEs to OpenAI-driven platforms.
            </p>
            <p style={{ fontSize: 15, color: "#666", lineHeight: 1.8, maxWidth: 440, marginBottom: 40 }}>
              Finalist at Smart India Hackathon 2024 · Passionate about clean architecture, real-time systems, and shipping things that actually work in production.
            </p>

            {/* Education timeline */}
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {education.map((ed, i) => (
                <div key={i} style={{ display: "flex", gap: 20, paddingBottom: 24, position: "relative" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                    <div style={{ width: 8, height: 8, background: "#2563eb", borderRadius: "50%", marginTop: 4 }} />
                    {i < education.length - 1 && <div style={{ width: 1, flex: 1, background: "#1a1a1a", marginTop: 6 }} />}
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#f2f2f2", marginBottom: 2 }}>{ed.degree}</div>
                    <div style={{ fontSize: 12, color: "#555", marginBottom: 4 }}>{ed.school}</div>
                    <div style={{ display: "flex", gap: 12 }}>
                      <span style={{ fontSize: 10, color: "#333", letterSpacing: "0.1em" }}>{ed.year}</span>
                      <span style={{ fontSize: 10, color: "#2563eb", letterSpacing: "0.05em" }}>{ed.score}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — stats */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
            {stats.map(({ num, label }) => (
              <div
                key={label}
                style={{
                  background: "#0e0e0e",
                  padding: "36px 28px",
                  borderBottom: "2px solid transparent",
                  transition: "border-color 0.25s, background 0.25s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderBottomColor = "#2563eb";
                  (e.currentTarget as HTMLDivElement).style.background = "#111";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderBottomColor = "transparent";
                  (e.currentTarget as HTMLDivElement).style.background = "#0e0e0e";
                }}
              >
                <div style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 800, color: "#f2f2f2", lineHeight: 1, marginBottom: 8 }}>{num}</div>
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#444" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
