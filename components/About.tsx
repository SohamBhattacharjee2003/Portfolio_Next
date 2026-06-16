"use client";
import { useEffect, useRef } from "react";

const highlights = [
  { label: "Full-Stack Web Development",              color: "#2563eb" },
  { label: "Mobile Apps — Flutter & React Native",    color: "#7c3aed" },
  { label: "AI / LLM Integration",                   color: "#06b6d4" },
  { label: "Real-Time Systems — WebSocket & WebRTC",  color: "#2563eb" },
  { label: "Cloud Deployment — AWS EC2, Docker",      color: "#7c3aed" },
  { label: "REST API Design & Backend Architecture",  color: "#06b6d4" },
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
    <section id="about" ref={ref} className="reveal" style={{ padding: "72px 0", position: "relative", overflow: "hidden" }}>

      {/* faint bg orb */}
      <div style={{ position: "absolute", top: "-20%", right: "-10%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="container">
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 40 }}>
          <div style={{ width: 28, height: 2, background: "linear-gradient(90deg,#2563eb,#7c3aed)" }} />
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "#2563eb" }}>
            About
          </span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "start" }}>

          {/* Left */}
          <div>
            <h2 style={{ fontSize: "clamp(34px, 5vw, 60px)", fontWeight: 800, lineHeight: 0.92, letterSpacing: "-0.02em", marginBottom: 28 }}>
              <span style={{ color: "#f2f2f2" }}>I BUILD</span><br />
              <span style={{
                background: "linear-gradient(110deg,#2563eb,#06b6d4,#7c3aed)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>THINGS</span><br />
              <span style={{ color: "#f2f2f2" }}>THAT MATTER.</span>
            </h2>

            <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85, marginBottom: 16, maxWidth: 440 }}>
              I&apos;m Soham — a full-stack developer who builds across web, mobile, and AI. From real-time collaborative tools to OpenAI-powered platforms, I care about shipping products that are fast, reliable, and well-crafted.
            </p>
            <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85, maxWidth: 440 }}>
              Finalist at Smart India Hackathon 2024 · Passionate about clean architecture, real-time systems, and getting things into production.
            </p>

            {/* SIH badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginTop: 28, padding: "8px 16px", border: "1px solid rgba(37,99,235,0.3)", background: "rgba(37,99,235,0.06)", borderRadius: 4 }}>
              <span style={{ fontSize: 16 }}>🏆</span>
              <span style={{ fontSize: 12, color: "#2563eb", fontWeight: 600, letterSpacing: "0.05em" }}>Smart India Hackathon 2024 Finalist</span>
            </div>
          </div>

          {/* Right — what I do list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {highlights.map((item, i) => (
              <div
                key={i}
                className="about-item"
                style={{
                  display: "flex", alignItems: "center", gap: 16,
                  padding: "16px 20px",
                  borderBottom: "1px solid #111",
                  transition: "background 0.2s, padding-left 0.2s",
                  cursor: "default", borderRadius: 4,
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = "#0d0d0d";
                  (e.currentTarget as HTMLElement).style.paddingLeft = "28px";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.paddingLeft = "20px";
                }}
              >
                <span style={{ width: 6, height: 6, background: item.color, borderRadius: "50%", flexShrink: 0, boxShadow: `0 0 6px ${item.color}` }} />
                <span style={{ fontSize: 14, color: "#555", letterSpacing: "0.01em" }}>{item.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
