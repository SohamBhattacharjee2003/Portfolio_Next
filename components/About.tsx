"use client";
import { useEffect, useRef } from "react";

const highlights = [
  "Full-Stack Web Development",
  "Mobile Apps — Flutter & React Native",
  "AI / LLM Integration",
  "Real-Time Systems — WebSocket & WebRTC",
  "Cloud Deployment — AWS EC2, Docker",
  "REST API Design & Backend Architecture",
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
              I&apos;m Soham — a full-stack developer who builds across web, mobile, and AI. From real-time collaborative tools to OpenAI-powered platforms, I care about shipping products that are fast, reliable, and well-crafted.
            </p>
            <p style={{ fontSize: 15, color: "#666", lineHeight: 1.8, maxWidth: 440 }}>
              Finalist at Smart India Hackathon 2024 · Passionate about clean architecture, real-time systems, and getting things into production.
            </p>
          </div>

          {/* Right — what I do */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {highlights.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "18px 0",
                  borderBottom: "1px solid #111",
                  transition: "padding-left 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={e => (e.currentTarget.style.paddingLeft = "10px")}
                onMouseLeave={e => (e.currentTarget.style.paddingLeft = "0px")}
              >
                <span style={{ width: 4, height: 4, background: "#2563eb", borderRadius: "50%", flexShrink: 0 }} />
                <span style={{ fontSize: 14, color: "#555", letterSpacing: "0.01em" }}>{item}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
