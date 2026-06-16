"use client";
import { useEffect, useRef } from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Hero() {
  const headRef = useRef<HTMLDivElement>(null);
  const subRef  = useRef<HTMLDivElement>(null);
  const ctaRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    [headRef, subRef, ctaRef].forEach((r, i) => {
      const el = r.current;
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(36px)";
      el.style.transition = `opacity 0.9s ease ${i * 0.18}s, transform 0.9s ease ${i * 0.18}s`;
      setTimeout(() => { el.style.opacity = "1"; el.style.transform = "translateY(0)"; }, 60);
    });
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 100,
        paddingBottom: 80,
      }}
    >
      {/* Grid bg */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage:
          "linear-gradient(rgba(37,99,235,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.03) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }} />

      {/* Blue glow top-right */}
      <div style={{
        position: "absolute", top: -120, right: -120,
        width: 480, height: 480,
        background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Rotating border square */}
      <div style={{
        position: "absolute", top: 110, right: 52,
        width: 180, height: 180,
        border: "1px solid rgba(37,99,235,0.12)",
        animation: "spin 40s linear infinite",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: 155, right: 97,
        width: 90, height: 90,
        background: "rgba(37,99,235,0.05)",
        pointerEvents: "none",
      }} />

      {/* Left accent */}
      <div style={{
        position: "absolute", left: 0, top: "28%",
        width: 3, height: "38%",
        background: "linear-gradient(to bottom, transparent, #2563eb, transparent)",
      }} />

      <div className="container">

        {/* Eyebrow */}
        <div ref={headRef}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 40 }}>
            <div style={{ width: 32, height: 2, background: "#2563eb" }} />
            <span style={{
              fontSize: 11, fontWeight: 600, letterSpacing: "0.32em",
              textTransform: "uppercase", color: "#2563eb",
            }}>
              Available for Work · 2026
            </span>
          </div>

          {/* Name — two lines */}
          <div style={{ lineHeight: 0.86, fontWeight: 800, letterSpacing: "-0.025em" }}>
            <div style={{ fontSize: "clamp(64px, 11vw, 148px)", color: "#f2f2f2" }}>
              SOHAM
            </div>
            <div style={{
              fontSize: "clamp(64px, 11vw, 148px)",
              color: "transparent",
              WebkitTextStroke: "2px #2563eb",
              /* fallback for browsers that don't support stroke well */
              background: "linear-gradient(90deg, #2563eb, #60a5fa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              BHATTACHARJEE
            </div>
          </div>
        </div>

        {/* Sub row */}
        <div
          ref={subRef}
          style={{
            marginTop: 44,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div style={{ maxWidth: 460 }}>
            <p style={{ fontSize: 15, color: "#666", lineHeight: 1.75, marginBottom: 20 }}>
              Full-stack developer building across web, mobile &amp; AI.
              Real-time systems · WebRTC · OpenAI · Docker · AWS.
            </p>
            {/* Location pill */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span style={{
                width: 6, height: 6, background: "#22c55e",
                borderRadius: "50%", boxShadow: "0 0 6px #22c55e",
                animation: "pulse 2s ease infinite",
              }} />
              <span style={{ fontSize: 12, color: "#444", letterSpacing: "0.06em" }}>
                Kolkata, West Bengal
              </span>
            </div>
          </div>

          {/* Role tags */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
            {["Full Stack Dev", "Mobile / Flutter", "AI Integration"].map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

        {/* CTAs + socials */}
        <div ref={ctaRef} style={{ marginTop: 52, display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
          <a
            href="#projects"
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "#2563eb", color: "#fff",
              fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase",
              padding: "15px 32px", textDecoration: "none",
              transition: "background 0.2s, gap 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#1d4ed8"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#2563eb"; }}
          >
            View Work <span>→</span>
          </a>

          <a href="#contact" className="arrow-link">
            Get in touch <span>→</span>
          </a>

          {/* Divider */}
          <div style={{ width: 1, height: 32, background: "#1e1e1e", margin: "0 4px" }} />

          {/* Social icons */}
          <a
            href="https://github.com/SohamBhattacharjee2003"
            target="_blank" rel="noreferrer"
            style={{ color: "#333", transition: "color 0.2s", display: "flex" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#f2f2f2")}
            onMouseLeave={e => (e.currentTarget.style.color = "#333")}
          >
            <SiGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/sohambhattacharjee84"
            target="_blank" rel="noreferrer"
            style={{ color: "#333", transition: "color 0.2s", display: "flex" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#2563eb")}
            onMouseLeave={e => (e.currentTarget.style.color = "#333")}
          >
            <SiLinkedin size={20} />
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: 0.3,
      }}>
        <span style={{ fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "#555" }}>Scroll</span>
        <div style={{ width: 1, height: 32, background: "#444", animation: "pulse 2s ease infinite" }} />
      </div>

      <style>{`
        @keyframes spin  { to { transform: rotate(360deg); } }
        @keyframes pulse { 0%,100% { opacity:0.3; } 50% { opacity:1; } }
      `}</style>
    </section>
  );
}
