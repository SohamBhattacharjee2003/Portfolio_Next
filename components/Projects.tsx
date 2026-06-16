"use client";
import { useEffect, useRef, useState } from "react";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Mentor-Connect",
    date: "Dec 2024",
    desc: "Full-stack platform intelligently matching mentors and mentees by domain expertise. OpenAI-powered chatbot for 24/7 guidance. Containerised with Docker, deployed on AWS EC2.",
    tags: ["ReactJS", "TailwindCSS", "Firebase", "Flask", "OpenAI API", "Docker", "AWS EC2"],
    live: null,
    github: "https://github.com/SohamBhattacharjee2003",
    gradient: "linear-gradient(135deg,#1a0800 0%,#2d1200 50%,#ff6b0015 100%)",
    accent: "#ff6b00",
  },
  {
    title: "AI Chatbot — Text & Image",
    date: "Jan 2025",
    desc: "Multimodal AI platform unifying conversational AI and on-demand image synthesis via GPT & DALL-E. Stripe subscription billing, ImageKit CDN for optimised delivery.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "OpenAI API", "ImageKit", "Stripe"],
    live: null,
    github: "https://github.com/SohamBhattacharjee2003",
    gradient: "linear-gradient(135deg,#001a0e 0%,#00301a 50%,#10a37f18 100%)",
    accent: "#10a37f",
  },
  {
    title: "ReqNest — API Sandbox",
    date: "Mar 2025",
    desc: "Cross-platform Flutter app for mobile-native API testing — full REST support, live response introspection. Flask/Gunicorn backend returns latency, status codes, formatted JSON.",
    tags: ["Flutter", "Flask", "Supabase", "REST APIs", "JWT", "Gunicorn"],
    live: null,
    github: "https://github.com/SohamBhattacharjee2003",
    gradient: "linear-gradient(135deg,#00101e 0%,#00203e 50%,#027dff18 100%)",
    accent: "#027dff",
  },
  {
    title: "SyncIDE — Collaborative IDE",
    date: "Apr 2025",
    desc: "Browser-based IDE for real-time pair programming. Live multi-cursor sync over WebSocket with sub-second latency. Peer-to-peer video calling via WebRTC built directly into the editor.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "WebSocket", "WebRTC", "Tailwind CSS"],
    live: "#",
    github: "https://github.com/SohamBhattacharjee2003",
    gradient: "linear-gradient(135deg,#001810 0%,#00301e 50%,#00c98318 100%)",
    accent: "#00c983",
  },
];

function BrowserMockup({ gradient, accent, date }: { gradient: string; accent: string; date: string }) {
  return (
    <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #1e1e1e", background: "#0a0a0a", flexShrink: 0 }}>
      {/* Chrome bar */}
      <div style={{ background: "#141414", padding: "10px 14px", display: "flex", alignItems: "center", gap: 10, borderBottom: "1px solid #1e1e1e" }}>
        <div style={{ display: "flex", gap: 6 }}>
          {["#ff5f57","#febc2e","#28c840"].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
        </div>
        <div style={{ flex: 1, background: "#1e1e1e", borderRadius: 4, height: 22, display: "flex", alignItems: "center", paddingLeft: 10 }}>
          <span style={{ fontSize: 10, color: "#444" }}>https://github.com/SohamBhattacharjee2003</span>
        </div>
      </div>

      {/* Screen */}
      <div style={{ height: 220, background: gradient, position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>

        {/* scanline texture */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.08) 2px,rgba(0,0,0,0.08) 4px)", pointerEvents: "none" }} />

        {/* mock UI */}
        <div style={{ width: "82%", height: "72%", border: `1px solid ${accent}33`, borderRadius: 8, background: `${accent}06`, padding: 16, display: "flex", flexDirection: "column", gap: 10, position: "relative", zIndex: 1 }}>
          {/* nav bar mockup */}
          <div style={{ display: "flex", gap: 8, alignItems: "center", paddingBottom: 10, borderBottom: `1px solid ${accent}20` }}>
            <div style={{ width: 24, height: 24, borderRadius: 4, background: accent, opacity: 0.8 }} />
            <div style={{ flex: 1, height: 6, background: `${accent}30`, borderRadius: 4 }} />
            <div style={{ width: 48, height: 20, background: `${accent}40`, borderRadius: 4 }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 7, flex: 1 }}>
            <div style={{ width: "55%", height: 7, background: `${accent}55`, borderRadius: 4 }} />
            <div style={{ width: "100%", height: 5, background: "#ffffff08", borderRadius: 4 }} />
            <div style={{ width: "80%",  height: 5, background: "#ffffff06", borderRadius: 4 }} />
            <div style={{ width: "90%",  height: 5, background: "#ffffff05", borderRadius: 4 }} />
            <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
              <div style={{ width: 70, height: 22, background: accent, borderRadius: 5, opacity: 0.85 }} />
              <div style={{ width: 70, height: 22, border: `1px solid ${accent}44`, borderRadius: 5 }} />
            </div>
          </div>
        </div>

        {/* date badge */}
        <div style={{ position: "absolute", top: 10, right: 10, background: "rgba(0,0,0,0.6)", border: "1px solid #2a2a2a", borderRadius: 4, padding: "3px 8px", fontSize: 10, fontWeight: 600, color: "#666", backdropFilter: "blur(8px)" }}>
          {date}
        </div>

        {/* accent glow bottom */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 60, background: `linear-gradient(to top, ${accent}18, transparent)`, pointerEvents: "none" }} />
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
        border: `1px solid ${hovered ? p.accent + "44" : "#1a1a1a"}`,
        borderRadius: 14,
        padding: 28,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 40,
        alignItems: "center",
        transition: "border-color 0.3s, background 0.3s, box-shadow 0.3s",
        background: hovered ? "#0a0a0a" : "transparent",
        boxShadow: hovered ? `0 0 40px ${p.accent}10` : "none",
      }}
    >
      <BrowserMockup gradient={p.gradient} accent={p.accent} date={p.date} />

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Title row */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <h3 style={{ fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 700, color: hovered ? p.accent : "#f2f2f2", transition: "color 0.3s", letterSpacing: "-0.02em" }}>
            {p.title}
          </h3>
          <div style={{ display: "flex", gap: 8, marginLeft: "auto" }}>
            {p.live && (
              <a href={p.live} target="_blank" rel="noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 14px", border: `1px solid #2a2a2a`, borderRadius: 6, fontSize: 11, fontWeight: 600, color: "#aaa", background: "#111", textDecoration: "none", transition: "all 0.2s" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = p.accent; el.style.color = p.accent; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#2a2a2a"; el.style.color = "#aaa"; }}>
                <FiExternalLink size={12} /> Live
              </a>
            )}
            <a href={p.github} target="_blank" rel="noreferrer"
              style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 14px", border: "1px solid #2a2a2a", borderRadius: 6, fontSize: 11, fontWeight: 600, color: "#aaa", background: "#111", textDecoration: "none", transition: "all 0.2s" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#f2f2f2"; el.style.color = "#f2f2f2"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#2a2a2a"; el.style.color = "#aaa"; }}>
              <SiGithub size={12} /> GitHub
            </a>
          </div>
        </div>

        <p style={{ fontSize: 13, color: "#555", lineHeight: 1.8 }}>{p.desc}</p>

        <div>
          <p style={{ fontSize: 10, fontWeight: 700, color: "#333", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>
            Technologies Used:
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {p.tags.map(tag => (
              <span key={tag} style={{ fontSize: 11, fontWeight: 500, color: "#555", padding: "4px 11px", border: "1px solid #1e1e1e", borderRadius: 4, background: "#0d0d0d", transition: "border-color 0.2s, color 0.2s" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = p.accent + "55"; el.style.color = p.accent; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#1e1e1e"; el.style.color = "#555"; }}>
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
    <section id="projects" ref={ref} className="reveal" style={{ padding: "72px 0", background: "#050505", position: "relative", overflow: "hidden" }}>

      <div style={{ position: "absolute", top: "-20%", right: "-5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(37,99,235,0.05) 0%,transparent 70%)", pointerEvents: "none" }} />

      <div className="container">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 40 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
              <div style={{ width: 28, height: 2, background: "linear-gradient(90deg,#2563eb,#7c3aed)" }} />
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "#2563eb" }}>Selected Work</span>
            </div>
            <h2 style={{ fontSize: "clamp(34px, 5vw, 60px)", fontWeight: 800, lineHeight: 0.92, letterSpacing: "-0.02em" }}>
              <span style={{ background: "linear-gradient(110deg,#f2f2f2 40%,#7c3aed 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                PROJECTS.
              </span>
            </h2>
          </div>
          <span style={{ fontSize: 72, fontWeight: 800, color: "#111", letterSpacing: "-0.04em", lineHeight: 1 }}>
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {projects.map(p => <ProjectCard key={p.title} p={p} />)}
        </div>
      </div>
    </section>
  );
}
