"use client";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    num: "01",
    title: "AI Dashboard",
    tags: ["Next.js", "OpenAI", "PostgreSQL"],
    desc: "Real-time analytics dashboard powered by AI — ingests live data, surfaces insights, and auto-generates reports.",
    year: "2025",
  },
  {
    num: "02",
    title: "E-Commerce Platform",
    tags: ["React", "Node.js", "Stripe"],
    desc: "Full-stack storefront with custom CMS, inventory management, and seamless payment flows.",
    year: "2025",
  },
  {
    num: "03",
    title: "Design System",
    tags: ["TypeScript", "Storybook", "Figma"],
    desc: "Component library and design token system used across 3 products — zero drift between design and code.",
    year: "2024",
  },
  {
    num: "04",
    title: "Mobile App",
    tags: ["React Native", "Supabase", "Expo"],
    desc: "Cross-platform productivity app with offline-first architecture and real-time collaboration.",
    year: "2024",
  },
];

function ProjectRow({ p }: { p: typeof projects[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "56px 1fr auto",
        gap: 32,
        alignItems: "center",
        padding: "28px 0",
        borderBottom: "1px solid #141414",
        cursor: "pointer",
        transition: "padding 0.25s",
        paddingLeft: hovered ? 12 : 0,
      }}
    >
      {/* Number */}
      <span style={{ fontSize: 12, fontWeight: 700, color: "#2563eb", letterSpacing: "0.1em" }}>{p.num}</span>

      {/* Title + desc */}
      <div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 6 }}>
          <h3 style={{ fontSize: "clamp(18px, 2vw, 26px)", fontWeight: 700, color: hovered ? "#2563eb" : "#f2f2f2", transition: "color 0.25s", letterSpacing: "-0.01em" }}>
            {p.title}
          </h3>
          <span style={{ fontSize: 11, color: "#333", letterSpacing: "0.1em" }}>{p.year}</span>
        </div>
        <p style={{ fontSize: 13, color: "#555", lineHeight: 1.6, maxWidth: 520 }}>{p.desc}</p>
        <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}>
          {p.tags.map((t) => (
            <span key={t} className="tag" style={{ borderColor: hovered ? "rgba(37,99,235,0.3)" : "#1e1e1e", color: hovered ? "#2563eb" : "#444", transition: "all 0.25s" }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Arrow */}
      <div style={{ fontSize: 20, color: hovered ? "#2563eb" : "#222", transform: hovered ? "translateX(6px)" : "translateX(0)", transition: "all 0.25s" }}>
        →
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("reveal");
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("in"); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} className="reveal" style={{ padding: "120px 0", background: "#050505" }}>
      <div className="container">

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 64 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
              <div style={{ width: 28, height: 2, background: "#2563eb" }} />
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "#2563eb" }}>
                Selected Work
              </span>
            </div>
            <h2 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 800, lineHeight: 0.92, color: "#f2f2f2", letterSpacing: "-0.02em" }}>
              PROJECTS<span style={{ color: "#2563eb" }}>.</span>
            </h2>
          </div>
          <span style={{ fontSize: 80, fontWeight: 800, color: "#111", letterSpacing: "-0.04em", lineHeight: 1 }}>
            {projects.length.toString().padStart(2, "0")}
          </span>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "#141414", marginBottom: 0 }} />

        {/* List */}
        <div>
          {projects.map((p) => <ProjectRow key={p.num} p={p} />)}
        </div>
      </div>
    </section>
  );
}
