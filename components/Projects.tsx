"use client";
import { useEffect, useRef, useState } from "react";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Mx Icons",
    badge: "3.7k+ downloads",
    desc: "Open source | Beautiful icons for React projects. A modern, lightweight React icon library with beautiful SVG icons. Built with React · Optimised for Production.",
    tags: ["JavaScript", "React", "SVG", "Rollup.js", "Vite", "NPM"],
    live: "#",
    github: "#",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)",
    accent: "#e94560",
  },
  {
    title: "Secure2FA",
    badge: null,
    desc: "A robust two-factor authentication system implementing Time-based One-Time Password (TOTP) for enhanced application security.",
    tags: ["JavaScript", "React", "Node.js", "MongoDB", "Java", "SpringBoot", "Spring Security"],
    live: "#",
    github: "#",
    gradient: "linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 50%, #2d1b69 100%)",
    accent: "#00ff88",
  },
  {
    title: "BlogZone",
    badge: null,
    desc: "A modern full-stack blogging platform with rich text editing, user authentication, and a clean reading experience.",
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    live: "#",
    github: "#",
    gradient: "linear-gradient(135deg, #0d1117 0%, #161b22 50%, #21262d 100%)",
    accent: "#58a6ff",
  },
  {
    title: "AI Dashboard",
    badge: null,
    desc: "Real-time analytics dashboard powered by AI — ingests live data, surfaces insights, and auto-generates reports.",
    tags: ["Next.js", "OpenAI", "PostgreSQL", "TypeScript"],
    live: "#",
    github: "#",
    gradient: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
    accent: "#a78bfa",
  },
];

function BrowserMockup({ gradient, accent, badge }: { gradient: string; accent: string; badge: string | null }) {
  return (
    <div style={{
      borderRadius: 10,
      overflow: "hidden",
      border: "1px solid #2a2a2a",
      background: "#111",
      flexShrink: 0,
    }}>
      {/* Browser chrome */}
      <div style={{
        background: "#1a1a1a",
        padding: "10px 14px",
        display: "flex",
        alignItems: "center",
        gap: 10,
        borderBottom: "1px solid #2a2a2a",
      }}>
        <div style={{ display: "flex", gap: 6 }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
        </div>
        <div style={{
          flex: 1,
          background: "#252525",
          borderRadius: 4,
          height: 22,
          display: "flex",
          alignItems: "center",
          paddingLeft: 10,
        }}>
          <span style={{ fontSize: 10, color: "#555" }}>https://project.vercel.app</span>
        </div>
      </div>

      {/* Screenshot area */}
      <div style={{
        height: 220,
        background: gradient,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        {/* Decorative inner UI hint */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.15, backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(255,255,255,0.03) 30px, rgba(255,255,255,0.03) 31px)" }} />
        <div style={{
          width: "80%",
          height: "70%",
          border: `1px solid ${accent}33`,
          borderRadius: 6,
          background: `${accent}08`,
          display: "flex",
          flexDirection: "column",
          gap: 8,
          padding: 14,
        }}>
          <div style={{ width: "60%", height: 8, background: `${accent}40`, borderRadius: 4 }} />
          <div style={{ width: "100%", height: 5, background: "#ffffff10", borderRadius: 4 }} />
          <div style={{ width: "80%", height: 5, background: "#ffffff08", borderRadius: 4 }} />
          <div style={{ width: "90%", height: 5, background: "#ffffff08", borderRadius: 4 }} />
          <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
            <div style={{ width: 60, height: 20, background: accent, borderRadius: 4, opacity: 0.8 }} />
            <div style={{ width: 60, height: 20, border: `1px solid ${accent}66`, borderRadius: 4 }} />
          </div>
        </div>

        {badge && (
          <div style={{
            position: "absolute",
            top: 12,
            left: 12,
            background: "rgba(0,0,0,0.75)",
            border: "1px solid #333",
            borderRadius: 4,
            padding: "4px 10px",
            fontSize: 11,
            fontWeight: 600,
            color: "#f2f2f2",
            backdropFilter: "blur(8px)",
          }}>
            {badge}
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ p }: { p: typeof projects[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px dashed ${hovered ? "#333" : "#222"}`,
        borderRadius: 12,
        padding: 28,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 40,
        alignItems: "center",
        transition: "border-color 0.25s, background 0.25s",
        background: hovered ? "#0a0a0a" : "transparent",
        cursor: "default",
      }}
    >
      {/* Left: browser mockup */}
      <BrowserMockup gradient={p.gradient} accent={p.accent} badge={p.badge} />

      {/* Right: project info */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

        {/* Title + buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
          <h3 style={{
            fontSize: "clamp(22px, 2.5vw, 30px)",
            fontWeight: 700,
            color: "#f2f2f2",
            letterSpacing: "-0.02em",
          }}>
            {p.title}
          </h3>

          <div style={{ display: "flex", gap: 8, marginLeft: "auto" }}>
            <a
              href={p.live}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "6px 14px",
                border: "1px solid #2a2a2a",
                borderRadius: 6,
                fontSize: 12,
                fontWeight: 600,
                color: "#f2f2f2",
                background: "#111",
                textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#2563eb"; (e.currentTarget as HTMLAnchorElement).style.color = "#2563eb"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#2a2a2a"; (e.currentTarget as HTMLAnchorElement).style.color = "#f2f2f2"; }}
            >
              <FiExternalLink size={13} />
              Live
            </a>
            <a
              href={p.github}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "6px 14px",
                border: "1px solid #2a2a2a",
                borderRadius: 6,
                fontSize: 12,
                fontWeight: 600,
                color: "#f2f2f2",
                background: "#111",
                textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#2563eb"; (e.currentTarget as HTMLAnchorElement).style.color = "#2563eb"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#2a2a2a"; (e.currentTarget as HTMLAnchorElement).style.color = "#f2f2f2"; }}
            >
              <SiGithub size={13} />
              GitHub
            </a>
          </div>
        </div>

        {/* Description */}
        <p style={{ fontSize: 13, color: "#666", lineHeight: 1.7 }}>
          {p.desc}
        </p>

        {/* Tech tags */}
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, color: "#444", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
            Technologies Used:
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {p.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "#888",
                  padding: "4px 12px",
                  border: "1px solid #222",
                  borderRadius: 4,
                  letterSpacing: "0.04em",
                  background: "#0d0d0d",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("in"); obs.disconnect(); } },
      { threshold: 0.05 }
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

        {/* Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {projects.map((p) => <ProjectCard key={p.title} p={p} />)}
        </div>

      </div>
    </section>
  );
}
