"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const headRef = useRef<HTMLDivElement>(null);
  const subRef  = useRef<HTMLDivElement>(null);
  const ctaRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = [headRef, subRef, ctaRef];
    items.forEach((r, i) => {
      const el = r.current;
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(40px)";
      el.style.transition = `opacity 0.9s ease ${i * 0.2}s, transform 0.9s ease ${i * 0.2}s`;
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 60);
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
      {/* Subtle grid bg */}
      <div
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(37,99,235,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.035) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Top-right geo shapes */}
      <div style={{ position: "absolute", top: 120, right: 60, width: 160, height: 160, border: "1px solid rgba(37,99,235,0.15)", transform: "rotate(15deg)", animation: "spin 30s linear infinite" }} />
      <div style={{ position: "absolute", top: 155, right: 95, width: 88, height: 88, background: "rgba(37,99,235,0.06)" }} />

      {/* Left accent bar */}
      <div style={{ position: "absolute", left: 0, top: "30%", width: 3, height: "35%", background: "linear-gradient(to bottom, transparent, #2563eb, transparent)" }} />

      <div className="container">
        {/* Eyebrow */}
        <div ref={headRef}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 32 }}>
            <div style={{ width: 32, height: 2, background: "#2563eb" }} />
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "#2563eb" }}>
              Available for work · 2026
            </span>
          </div>

          {/* Name */}
          <div style={{ lineHeight: 0.88, fontWeight: 800, letterSpacing: "-0.02em" }}>
            <div style={{ fontSize: "clamp(56px, 10vw, 140px)", color: "#f2f2f2" }}>SOHAM</div>
            <div style={{ fontSize: "clamp(56px, 10vw, 140px)", color: "#2563eb" }}>BHATTA</div>
            <div style={{ fontSize: "clamp(56px, 10vw, 140px)", color: "#f2f2f2" }}>CHARJEE</div>
          </div>
        </div>

        {/* Sub row */}
        <div
          ref={subRef}
          style={{
            marginTop: 48,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <p style={{ fontSize: 15, color: "#666", lineHeight: 1.7, maxWidth: 420, letterSpacing: "0.01em" }}>
            Full-stack engineer & creator. I build clean, fast, and visually precise digital products — from complex systems to pixel-perfect interfaces.
          </p>

          {/* Role tags */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
            {["Full Stack Dev", "UI / UX", "AI Engineering"].map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div ref={ctaRef} style={{ marginTop: 52, display: "flex", alignItems: "center", gap: 28 }}>
          <a
            href="#projects"
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "#2563eb", color: "#fff",
              fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase",
              padding: "16px 32px",
              textDecoration: "none",
              transition: "background 0.25s, gap 0.25s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#1d4ed8"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#2563eb"; }}
          >
            View Work <span style={{ transition: "transform 0.25s" }}>→</span>
          </a>
          <a href="#contact" className="arrow-link">
            Get in touch <span>→</span>
          </a>
        </div>

        {/* Scroll hint */}
        <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: 0.35 }}>
          <span style={{ fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "#555" }}>Scroll</span>
          <div style={{ width: 1, height: 32, background: "#444", animation: "pulse 2s ease infinite" }} />
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(375deg); } } @keyframes pulse { 0%,100% { opacity: 0.3; } 50% { opacity: 1; } }`}</style>
    </section>
  );
}
