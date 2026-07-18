"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Mentor-Connect",
    date: "Dec 2024",
    desc: "A full-stack platform that pairs mentors and mentees by domain expertise, with an OpenAI-powered chatbot delivering round-the-clock guidance. Containerised with Docker and deployed on AWS EC2 for reliable, always-on access.",
    tags: ["ReactJS", "TailwindCSS", "Firebase", "Flask", "OpenAI API", "Docker", "AWS EC2"],
    image: "/mentor_connect.png",
    url: "github.com/SohamBhattacharjee2003",
    live: null,
    github: "https://github.com/SohamBhattacharjee2003",
    darkGradient: "linear-gradient(135deg,#1a0800 0%,#2d1200 50%,#ff6b0015 100%)",
    lightGradient: "linear-gradient(135deg,#fff4ee 0%,#ffe8d6 50%,#ff6b0012 100%)",
    accent: "#ff6b00",
  },
  {
    title: "SyncIDE — Collaborative IDE",
    date: "Apr 2025",
    desc: "Browser-based IDE for real-time pair programming. Live multi-cursor sync over WebSocket with sub-second latency. Peer-to-peer video calling via WebRTC built directly into the editor.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "WebSocket", "WebRTC", "Tailwind CSS"],
    image: "/sync_logo.png",
    url: "github.com/SohamBhattacharjee2003",
    live: "#",
    github: "https://github.com/SohamBhattacharjee2003",
    darkGradient: "linear-gradient(135deg,#001810 0%,#00301e 50%,#00c98318 100%)",
    lightGradient: "linear-gradient(135deg,#edfff8 0%,#d0faea 50%,#00c98312 100%)",
    accent: "#00c983",
  },
  {
    title: "Traviante — AI Travel Concierge",
    date: "Mar 2026",
    desc: "A conversational destination-discovery experience. Customers chat with Aria, Traviante's AI concierge — describing the trip they want in natural language or uploading a photo of a place they love — and get ranked destination cards surfaced inline. OpenAI CLIP maps images and text into one 512-dimensional embedding space for true multimodal search, while a Groq-hosted LLM runs a tool-calling loop to extract preferences and narrate the matches, degrading to deterministic offline NLU when key-free.",
    tags: ["Python", "OpenAI CLIP", "Groq LLM", "PyTorch", "FastAPI", "Next.js"],
    image: "/traviante.png",
    url: "traviante-search-engine.vercel.app",
    live: "https://traviante-search-engine.vercel.app",
    github: "https://github.com/SohamBhattacharjee2003",
    darkGradient: "linear-gradient(135deg,#14110d 0%,#241f17 50%,#9a846818 100%)",
    lightGradient: "linear-gradient(135deg,#faf8f4 0%,#f0ebe2 50%,#9a846812 100%)",
    accent: "#9a8468",
  },
  {
    title: "July Coffee AI Barista",
    date: "Oct 2025",
    desc: "A production-grade RAG-powered assistant for julycoffee.in that turns confused first-time buyers into confident coffee drinkers. It recommends products by taste, brewing method and experience level, answers brewing questions, detects complaints and escalates to the human team, and handles order-status queries via the Shopify Admin API — streaming responses token-by-token with Redis-backed session memory.",
    tags: ["Next.js", "RAG", "Vector Search", "Redis", "Shopify API", "Vercel"],
    image: "/rag_chat_system.png",
    url: "rag-based-chat-application-r1zq.vercel.app",
    live: "https://rag-based-chat-application-r1zq.vercel.app",
    github: "https://github.com/SohamBhattacharjee2003",
    darkGradient: "linear-gradient(135deg,#1a0c02 0%,#2d1606 50%,#8b451318 100%)",
    lightGradient: "linear-gradient(135deg,#fdf6ef 0%,#f5e6d6 50%,#8b451312 100%)",
    accent: "#8b4513",
  },
];

function BrowserMockup({ image, title, url, darkGradient, lightGradient, accent, date }: { image: string; title: string; url: string; darkGradient: string; lightGradient: string; accent: string; date: string }) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const check = () => setIsDark(document.documentElement.getAttribute("data-theme") !== "light");
    check();
    const obs = new MutationObserver(check);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => obs.disconnect();
  }, []);

  const gradient = isDark ? darkGradient : lightGradient;

  return (
    <div style={{ borderRadius:12, overflow:"hidden", border:"1px solid var(--border)", background:"var(--bg-card)", flexShrink:0 }}>
      {/* Chrome bar */}
      <div style={{ background:"var(--bg-elevated)", padding:"10px 14px", display:"flex", alignItems:"center", gap:10, borderBottom:"1px solid var(--border)" }}>
        <div style={{ display:"flex", gap:6 }}>
          {["#ff5f57","#febc2e","#28c840"].map(c => <div key={c} style={{ width:10, height:10, borderRadius:"50%", background:c }} />)}
        </div>
        <div style={{ flex:1, background:"var(--bg-card)", borderRadius:4, height:22, display:"flex", alignItems:"center", paddingLeft:10, border:"1px solid var(--border)", overflow:"hidden" }}>
          <span style={{ fontSize:10, color:"var(--text-faint)", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>{url}</span>
        </div>
      </div>

      {/* Screen */}
      <div style={{ aspectRatio:"16 / 10", background:gradient, position:"relative", overflow:"hidden" }}>
        <Image src={image} alt={title} fill sizes="(max-width: 1024px) 100vw, 50vw" style={{ objectFit:"cover", objectPosition:"center top" }} />

        <div style={{ position:"absolute", top:10, right:10, background:"var(--bg-elevated)", border:"1px solid var(--border)", borderRadius:4, padding:"3px 8px", fontSize:10, fontWeight:600, color:"var(--text-muted)", backdropFilter:"blur(8px)", zIndex:2 }}>
          {date}
        </div>

        <div style={{ position:"absolute", bottom:0, left:0, right:0, height:60, background:`linear-gradient(to top,${accent}18,transparent)`, pointerEvents:"none", zIndex:1 }} />
      </div>
    </div>
  );
}

function ProjectCard({ p }: { p: typeof projects[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="proj-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? p.accent + "44" : "var(--border)"}`,
        borderRadius:14,
        transition:"border-color 0.3s, background-color 0.3s, box-shadow 0.3s",
        backgroundColor: hovered ? "var(--bg-elevated)" : "transparent",
        boxShadow: hovered ? `0 0 40px ${p.accent}10` : "none",
      }}
    >
      <BrowserMockup image={p.image} title={p.title} url={p.url} darkGradient={p.darkGradient} lightGradient={p.lightGradient} accent={p.accent} date={p.date} />

      <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
        <div style={{ display:"flex", alignItems:"center", gap:12, flexWrap:"wrap" }}>
          <h3 style={{ fontSize:"clamp(18px,2vw,24px)", fontWeight:700, color: hovered ? p.accent : "var(--text)", transition:"color 0.3s", letterSpacing:"-0.02em" }}>
            {p.title}
          </h3>
          <div style={{ display:"flex", gap:8, marginLeft:"auto" }}>
            {p.live && (
              <a href={p.live} target="_blank" rel="noreferrer"
                style={{ display:"flex", alignItems:"center", gap:6, padding:"6px 14px", border:"1px solid var(--border)", borderRadius:6, fontSize:11, fontWeight:600, color:"var(--text-muted)", background:"var(--bg-card)", textDecoration:"none", transition:"all 0.2s" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = p.accent; el.style.color = p.accent; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border)"; el.style.color = "var(--text-muted)"; }}>
                <FiExternalLink size={12} /> Live
              </a>
            )}
            <a href={p.github} target="_blank" rel="noreferrer"
              style={{ display:"flex", alignItems:"center", gap:6, padding:"6px 14px", border:"1px solid var(--border)", borderRadius:6, fontSize:11, fontWeight:600, color:"var(--text-muted)", background:"var(--bg-card)", textDecoration:"none", transition:"all 0.2s" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--text)"; el.style.color = "var(--text)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border)"; el.style.color = "var(--text-muted)"; }}>
              <SiGithub size={12} /> GitHub
            </a>
          </div>
        </div>

        <p style={{ fontSize:13, color:"var(--text-muted)", lineHeight:1.8 }}>{p.desc}</p>

        <div>
          <p style={{ fontSize:10, fontWeight:700, color:"var(--text-faint)", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:10 }}>
            Technologies Used:
          </p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
            {p.tags.map(tag => (
              <span key={tag}
                style={{ fontSize:11, fontWeight:500, color:"var(--text-muted)", padding:"4px 11px", border:"1px solid var(--border)", borderRadius:4, background:"var(--bg-card)", transition:"border-color 0.2s, color 0.2s, background-color 0.2s" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = p.accent+"55"; el.style.color = p.accent; el.style.backgroundColor = p.accent+"08"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border)"; el.style.color = "var(--text-muted)"; el.style.backgroundColor = "var(--bg-card)"; }}>
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
    <section id="projects" ref={ref} className="reveal" style={{ padding:"72px 0", background:"var(--bg-2)", position:"relative", overflow:"hidden" }}>
      <style>{`
        .proj-card { display:grid; grid-template-columns:1fr 1fr; gap:40px; align-items:center; padding:28px; }
        @media (max-width:1024px) {
          .proj-card { grid-template-columns:1fr; gap:24px; padding:20px; align-items:stretch; }
        }
      `}</style>

      <div style={{ position:"absolute", top:"-20%", right:"-5%", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle,var(--orb-blue) 0%,transparent 70%)", filter:"blur(80px)", pointerEvents:"none" }} />

      {/* SVG grid dots */}
      <svg style={{ position:"absolute", bottom:40, right:40, opacity:0.04, pointerEvents:"none" }} width="120" height="120" viewBox="0 0 120 120">
        {[0,1,2,3,4].flatMap(row => [0,1,2,3,4].map(col => (
          <circle key={`${row}-${col}`} cx={col*24+12} cy={row*24+12} r="2" fill="var(--accent)" />
        )))}
      </svg>

      <div className="container">
        <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", marginBottom:40 }}>
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:20 }}>
              <div style={{ width:28, height:2, background:"linear-gradient(90deg,var(--accent),var(--accent-2))" }} />
              <span style={{ fontSize:11, fontWeight:600, letterSpacing:"0.3em", textTransform:"uppercase", color:"var(--accent)" }}>Selected Work</span>
            </div>
            <h2 style={{ fontSize:"clamp(34px,5vw,60px)", fontWeight:800, lineHeight:0.92, letterSpacing:"-0.02em" }}>
              <span style={{ background:"linear-gradient(110deg,var(--text) 40%,var(--accent-2) 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                PROJECTS.
              </span>
            </h2>
          </div>
          <span style={{ fontSize:72, fontWeight:800, color:"var(--border)", letterSpacing:"-0.04em", lineHeight:1 }}>
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
          {projects.map(p => <ProjectCard key={p.title} p={p} />)}
        </div>
      </div>
    </section>
  );
}
