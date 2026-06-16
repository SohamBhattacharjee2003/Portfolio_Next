"use client";
import { useEffect, useRef, useState } from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";

const roles = ["Full-Stack Developer", "Mobile Engineer", "AI Builder", "Open Source Contributor"];

export default function Hero() {
  const [roleIdx, setRoleIdx]       = useState(0);
  const [displayed, setDisplayed]   = useState("");
  const [deleting, setDeleting]     = useState(false);
  const containerRef                = useRef<HTMLElement>(null);

  /* typewriter */
  useEffect(() => {
    const word  = roles[roleIdx];
    const speed = deleting ? 45 : 90;
    const t = setTimeout(() => {
      if (!deleting && displayed === word) {
        setTimeout(() => setDeleting(true), 2000);
        return;
      }
      if (deleting && displayed === "") {
        setDeleting(false);
        setRoleIdx(i => (i + 1) % roles.length);
        return;
      }
      setDisplayed(deleting ? word.slice(0, displayed.length - 1) : word.slice(0, displayed.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [displayed, deleting, roleIdx]);

  /* staggered entrance */
  useEffect(() => {
    const els = containerRef.current?.querySelectorAll<HTMLElement>("[data-anim]");
    els?.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
      el.style.transition = `opacity 0.85s ease ${i * 0.13}s, transform 0.85s ease ${i * 0.13}s`;
      setTimeout(() => { el.style.opacity = "1"; el.style.transform = "translateY(0)"; }, 80);
    });
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", paddingTop: 100, paddingBottom: 80 }}
    >
      {/* ── Animated orbs ── */}
      <div className="orb orb-blue"  style={{ top: "-10%",  left: "-5%"  }} />
      <div className="orb orb-purple" style={{ bottom: "-15%", right: "-8%" }} />
      <div className="orb orb-cyan"  style={{ top: "50%",   right: "20%" }} />

      {/* ── Grid overlay ── */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
        backgroundSize: "72px 72px",
      }} />

      {/* ── Vignette ── */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse at center, transparent 40%, #080808 100%)",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        {/* Eyebrow */}
        <div data-anim style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 36 }}>
          <div style={{ width: 6, height: 6, background: "#22c55e", borderRadius: "50%", boxShadow: "0 0 8px #22c55e", animation: "pulse-dot 2s ease infinite" }} />
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.32em", textTransform: "uppercase", color: "#555" }}>
            Available for Work · 2026
          </span>
        </div>

        {/* Name */}
        <div data-anim style={{ lineHeight: 0.85, fontWeight: 900, letterSpacing: "-0.03em", marginBottom: 32 }}>
          <div style={{ fontSize: "clamp(60px, 11vw, 152px)", color: "#f2f2f2" }}>
            SOHAM
          </div>
          <div style={{
            fontSize: "clamp(60px, 11vw, 152px)",
            background: "linear-gradient(110deg, #2563eb 0%, #06b6d4 50%, #7c3aed 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            BHATTACHARJEE
          </div>
        </div>

        {/* Typewriter role */}
        <div data-anim style={{ marginBottom: 40, minHeight: 28 }}>
          <span style={{ fontSize: 16, color: "#888", fontWeight: 400, letterSpacing: "0.04em" }}>
            {displayed}
            <span style={{ borderRight: "2px solid #2563eb", marginLeft: 2, animation: "blink 0.9s step-end infinite" }} />
          </span>
        </div>

        {/* Description + tags */}
        <div data-anim style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 24, marginBottom: 48 }}>
          <p style={{ fontSize: 15, color: "#555", lineHeight: 1.8, maxWidth: 440 }}>
            Building across web, mobile &amp; AI — WebRTC collaborative IDEs, OpenAI-powered chatbots, cross-platform Flutter apps. Hackathon finalist. Kolkata, India.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
            {["Full Stack Dev", "Mobile / Flutter", "AI Integration"].map((t) => (
              <span key={t} style={{
                fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase",
                padding: "5px 12px",
                border: "1px solid transparent",
                background: "linear-gradient(#080808,#080808) padding-box, linear-gradient(90deg,#2563eb,#7c3aed) border-box",
                color: "#888",
              }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div data-anim style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
          <a
            href="#projects"
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "linear-gradient(135deg, #2563eb, #7c3aed)",
              color: "#fff", fontSize: 12, fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", padding: "15px 32px", textDecoration: "none",
              transition: "opacity 0.2s, transform 0.2s", borderRadius: 2,
              boxShadow: "0 0 32px rgba(37,99,235,0.25)",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
          >
            View Work →
          </a>

          <a href="#contact" className="arrow-link">
            Get in touch <span>→</span>
          </a>

          <div style={{ width: 1, height: 28, background: "#1e1e1e", margin: "0 4px" }} />

          <a href="https://github.com/SohamBhattacharjee2003" target="_blank" rel="noreferrer"
            style={{ color: "#333", display: "flex", transition: "color 0.2s, transform 0.2s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#f2f2f2"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#333"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
            <SiGithub size={22} />
          </a>
          <a href="https://linkedin.com/in/sohambhattacharjee84" target="_blank" rel="noreferrer"
            style={{ color: "#333", display: "flex", transition: "color 0.2s, transform 0.2s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#2563eb"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#333"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
            <SiLinkedin size={22} />
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: 0.25 }}>
        <span style={{ fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "#666" }}>Scroll</span>
        <div style={{ width: 1, height: 36, background: "linear-gradient(to bottom, #2563eb, transparent)", animation: "scroll-line 2s ease infinite" }} />
      </div>

      <style>{`
        .orb { position:absolute; border-radius:50%; filter:blur(100px); pointer-events:none; animation:float 12s ease-in-out infinite; }
        .orb-blue   { width:520px; height:520px; background:radial-gradient(circle,rgba(37,99,235,0.18) 0%,transparent 70%); animation-delay:0s; }
        .orb-purple { width:440px; height:440px; background:radial-gradient(circle,rgba(124,58,237,0.15) 0%,transparent 70%); animation-delay:-4s; }
        .orb-cyan   { width:280px; height:280px; background:radial-gradient(circle,rgba(6,182,212,0.12) 0%,transparent 70%); animation-delay:-8s; }
        @keyframes float { 0%,100%{transform:translateY(0) scale(1);} 50%{transform:translateY(-40px) scale(1.05);} }
        @keyframes pulse-dot { 0%,100%{opacity:1;box-shadow:0 0 8px #22c55e;} 50%{opacity:0.6;box-shadow:0 0 16px #22c55e;} }
        @keyframes blink { 0%,100%{opacity:1;} 50%{opacity:0;} }
        @keyframes scroll-line { 0%{opacity:0;transform:scaleY(0);transform-origin:top;} 50%{opacity:1;transform:scaleY(1);} 100%{opacity:0;transform:scaleY(1);transform-origin:bottom;} }
      `}</style>
    </section>
  );
}
