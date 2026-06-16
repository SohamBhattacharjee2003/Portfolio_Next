"use client";
import { useEffect, useRef } from "react";

const stats = [
  { num: "3+",  label: "Years Experience" },
  { num: "20+", label: "Projects Shipped"  },
  { num: "10+", label: "Happy Clients"     },
  { num: "∞",   label: "Lines of Code"     },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("reveal");
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("in"); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="reveal" style={{ padding: "120px 0" }}>
      <div className="container">

        {/* Label */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 64 }}>
          <div style={{ width: 28, height: 2, background: "#2563eb" }} />
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "#2563eb" }}>
            About
          </span>
        </div>

        {/* Two column */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>

          {/* Left */}
          <div>
            <h2 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 800, lineHeight: 0.92, letterSpacing: "-0.02em", color: "#f2f2f2", marginBottom: 32 }}>
              I BUILD<br />
              <span style={{ color: "#2563eb" }}>THINGS</span><br />
              THAT MATTER.
            </h2>
            <p style={{ fontSize: 15, color: "#666", lineHeight: 1.8, marginBottom: 18, maxWidth: 440 }}>
              I&apos;m Soham — a full-stack software engineer who thrives at the intersection of engineering and design. I obsess over code quality, performance, and the kind of UI that makes people stop and look twice.
            </p>
            <p style={{ fontSize: 15, color: "#666", lineHeight: 1.8, maxWidth: 440 }}>
              From architecting backend systems to shipping pixel-precise frontends and AI-powered products — I bring ideas to life fast, and I bring them to life well.
            </p>
          </div>

          {/* Right: stats */}
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
                <div style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, color: "#f2f2f2", lineHeight: 1, marginBottom: 8 }}>{num}</div>
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#444" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
