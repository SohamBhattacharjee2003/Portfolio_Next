"use client";
import { useEffect, useRef } from "react";

const categories = [
  { label: "Frontend",  items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"] },
  { label: "Backend",   items: ["Node.js", "Python", "PostgreSQL", "REST APIs", "GraphQL", "Redis"] },
  { label: "AI / ML",   items: ["OpenAI API", "LangChain", "RAG", "Embeddings", "Prompt Engineering"] },
  { label: "Tooling",   items: ["Git", "Docker", "Vercel", "Figma", "CI/CD", "AWS"] },
];

const allSkills = [...categories.flatMap(c => c.items), ...categories.flatMap(c => c.items)];

export default function Skills() {
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
    <section id="skills" ref={ref} className="reveal" style={{ padding: "120px 0" }}>
      <div className="container">

        {/* Label */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
          <div style={{ width: 28, height: 2, background: "#2563eb" }} />
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "#2563eb" }}>
            Capabilities
          </span>
        </div>

        <h2 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 800, lineHeight: 0.92, color: "#f2f2f2", letterSpacing: "-0.02em", marginBottom: 72 }}>
          SKILLS<span style={{ color: "#2563eb" }}>.</span>
        </h2>

        {/* Category grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "#0f0f0f" }}>
          {categories.map((cat, i) => (
            <div
              key={cat.label}
              style={{ background: "#080808", padding: "40px 32px", position: "relative", overflow: "hidden" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#0c0c0c")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#080808")}
            >
              {/* Big index number watermark */}
              <span style={{
                position: "absolute", top: 16, right: 16,
                fontSize: 64, fontWeight: 800, color: "#111",
                lineHeight: 1, userSelect: "none",
              }}>
                {String(i + 1).padStart(2, "0")}
              </span>

              <div style={{ width: 20, height: 2, background: "#2563eb", marginBottom: 20 }} />

              <h3 style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#f2f2f2", marginBottom: 24 }}>
                {cat.label}
              </h3>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                {cat.items.map((skill) => (
                  <li key={skill} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "#666" }}>
                    <span style={{ width: 4, height: 4, background: "#2563eb", borderRadius: "50%", flexShrink: 0 }} />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee strip — full bleed */}
      <div style={{ marginTop: 72, overflow: "hidden", borderTop: "1px solid #141414", borderBottom: "1px solid #141414", padding: "16px 0" }}>
        <div className="marquee" style={{ display: "flex", gap: 48, whiteSpace: "nowrap" }}>
          {allSkills.map((skill, i) => (
            <span key={i} style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2a2a2a" }}>
              {skill} <span style={{ color: "#2563eb", margin: "0 8px" }}>◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
