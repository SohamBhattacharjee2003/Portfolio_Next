"use client";
import { useEffect, useRef, useState } from "react";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Mentor-Connect",
    date: "Dec 2024",
    desc: "Full-stack platform that intelligently matches mentors and mentees based on domain expertise and availability. Integrated an OpenAI-powered chatbot for 24/7 guidance. Containerised with Docker and deployed on AWS EC2.",
    tags: ["ReactJS", "TailwindCSS", "Firebase", "Flask", "OpenAI API", "Docker", "AWS EC2"],
    live: null,
    github: "https://github.com/SohamBhattacharjee2003",
    gradient: "linear-gradient(135deg, #1a0a00 0%, #2d1500 40%, #ff6b0022 100%)",
    accent: "#ff6b00",
  },
  {
    title: "AI Chatbot — Text & Image",
    date: "Jan 2025",
    desc: "Multimodal generative AI platform unifying conversational AI and on-demand image synthesis using OpenAI's GPT and DALL-E APIs. Includes Stripe subscription billing and ImageKit CDN for optimised delivery.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "OpenAI API", "ImageKit", "Stripe"],
    live: null,
    github: "https://github.com/SohamBhattacharjee2003",
    gradient: "linear-gradient(135deg, #0a0a1a 0%, #10103a 50%, #10a37f22 100%)",
    accent: "#10a37f",
  },
  {
    title: "ReqNest — API Sandbox",
    date: "Mar 2025",
    desc: "Cross-platform Flutter app for mobile-native API testing with full REST method support (GET, POST, PUT, DELETE) and live response introspection. Flask/Gunicorn backend returns latency, status codes, headers, and JSON.",
    tags: ["Flutter", "Flask", "Supabase", "REST APIs", "JWT", "Gunicorn"],
    live: null,
    github: "https://github.com/SohamBhattacharjee2003",
    gradient: "linear-gradient(135deg, #001a2e 0%, #00264d 50%, #027dff22 100%)",
    accent: "#027dff",
  },
  {
    title: "SyncIDE — Collaborative IDE",
    date: "Apr 2025",
    desc: "Browser-based IDE where multiple developers write and edit code simultaneously in real time. Features live multi-cursor sync over WebSocket and peer-to-peer video calling via WebRTC embedded directly in the editor.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "WebSocket", "WebRTC", "Tailwind CSS"],
    live: "#",
    github: "https://github.com/SohamBhattacharjee2003",
    gradient: "linear-gradient(135deg, #001a14 0%, #003328 50%, #00c98322 100%)",
    accent: "#00c983",
  },
];

function BrowserMockup({ gradient, accent, date }: { gradient: string; accent: string; date: string }) {
  return (
    <div style={{ borderRadius: 10, overflow: "hidden", border: "1px solid #2a2a2a", background: "#111", flexShrink: 0 }}>
      <div style={{ background: "#1a1a1a", padding: "10px 14px", display: "flex", alignItems: "center", gap: 10, borderBottom: "1px solid #2a2a2a" }}>
        <div style={{ display: "flex", gap: 6 }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
        </div>
        <div style={{ flex: 1, background: "#252525", borderRadius: 4, height: 22, display: "flex", alignItems: "center", paddingLeft: 10 }}>
          <span style={{ fontSize: 10, color: "#555" }}>https://github.com/SohamBhattacharjee2003</span>
        </div>
      </div>

      <div style={{ height: 220, background: gradient, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.1, backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(255,255,255,0.03) 30px, rgba(255,255,255,0.03) 31px)" }} />
        <div style={{ width: "80%", height: "70%", border: `1px solid ${accent}44`, borderRadius: 6, background: `${accent}08`, padding: 14, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ width: "55%", height: 8, background: `${accent}55`, borderRadius: 4 }} />
          <div style={{ width: "100%", height: 5, background: "#ffffff0a", borderRadius: 4 }} />
          <div style={{ width: "80%",  height: 5, background: "#ffffff08", borderRadius: 4 }} />
          <div style={{ width: "90%",  height: 5, background: "#ffffff06", borderRadius: 4 }} />
          <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
            <div style={{ width: 64, height: 22, background: accent, borderRadius: 4, opacity: 0.85 }} />
            <div style={{ width: 64, height: 22, border: `1px solid ${accent}55`, borderRadius: 4 }} />
          </div>
        </div>
        <div style={{ position: "absolute", top: 12, right: 12, background: "rgba(0,0,0,0.75)", border: "1px solid #2a2a2a", borderRadius: 4, padding: "3px 10px", fontSize: 10, fontWeight: 600, color: "#888", backdropFilter: "blur(8px)" }}>
          {date}
        </div>
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
        border: `1px dashed ${hovered ? "#333" : "#1e1e1e"}`,
        borderRadius: 12,
        padding: 28,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 40,
        alignItems: "center",
        transition: "border-color 0.25s, background 0.25s",
        background: hovered ? "#0a0a0a" : "transparent",
      }}
    >
      <BrowserMockup gradient={p.gradient} accent={p.accent} date={p.date} />

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <h3 style={{ fontSize: "clamp(18px, 2vw, 26px)", fontWeight: 700, color: "#f2f2f2", letterSpacing: "-0.02em" }}>
            {p.title}
          </h3>
          <div style={{ display: "flex", gap: 8, marginLeft: "auto" }}>
            {p.live && (
              <a href={p.live} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 14px", border: "1px solid #2a2a2a", borderRadius: 6, fontSize: 12, fontWeight: 600, color: "#f2f2f2", background: "#111", textDecoration: "none", transition: "border-color 0.2s, color 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#2563eb"; (e.currentTarget as HTMLElement).style.color = "#2563eb"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#2a2a2a"; (e.currentTarget as HTMLElement).style.color = "#f2f2f2"; }}>
                <FiExternalLink size={12} /> Live
              </a>
            )}
            <a href={p.github} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 14px", border: "1px solid #2a2a2a", borderRadius: 6, fontSize: 12, fontWeight: 600, color: "#f2f2f2", background: "#111", textDecoration: "none", transition: "border-color 0.2s, color 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#2563eb"; (e.currentTarget as HTMLElement).style.color = "#2563eb"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#2a2a2a"; (e.currentTarget as HTMLElement).style.color = "#f2f2f2"; }}>
              <SiGithub size={12} /> GitHub
            </a>
          </div>
        </div>

        <p style={{ fontSize: 13, color: "#666", lineHeight: 1.75 }}>{p.desc}</p>

        <div>
          <p style={{ fontSize: 10, fontWeight: 700, color: "#333", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>
            Technologies Used:
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {p.tags.map((tag) => (
              <span key={tag} style={{ fontSize: 11, fontWeight: 600, color: "#666", padding: "4px 12px", border: "1px solid #1e1e1e", borderRadius: 4, background: "#0d0d0d", letterSpacing: "0.03em" }}>
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
      { threshold: 0.04 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} className="reveal" style={{ padding: "120px 0", background: "#050505" }}>
      <div className="container">

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
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {projects.map((p) => <ProjectCard key={p.title} p={p} />)}
        </div>
      </div>
    </section>
  );
}
