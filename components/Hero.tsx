"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

const roles = ["Full-Stack Developer", "Mobile Engineer", "AI Builder", "Open Source Contributor"];

export default function Hero() {
  const [roleIdx, setRoleIdx]     = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting]   = useState(false);
  const containerRef              = useRef<HTMLElement>(null);

  /* typewriter */
  useEffect(() => {
    const word  = roles[roleIdx];
    const speed = deleting ? 45 : 90;
    const t = setTimeout(() => {
      if (!deleting && displayed === word) { setTimeout(() => setDeleting(true), 2000); return; }
      if (deleting && displayed === "")   { setDeleting(false); setRoleIdx(i => (i + 1) % roles.length); return; }
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
      style={{ minHeight:"100vh", display:"flex", alignItems:"center", position:"relative", overflow:"hidden", paddingTop:100, paddingBottom:80, background:"var(--bg)" }}
    >
      {/* ── Orbs ── */}
      <div style={{ position:"absolute", top:"-10%", left:"-5%", width:520, height:520, borderRadius:"50%", filter:"blur(100px)", background:"radial-gradient(circle,var(--orb-blue) 0%,transparent 70%)", animation:"heroFloat 12s ease-in-out infinite", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:"-15%", right:"-8%", width:440, height:440, borderRadius:"50%", filter:"blur(100px)", background:"radial-gradient(circle,var(--orb-purple) 0%,transparent 70%)", animation:"heroFloat 18s ease-in-out infinite reverse", pointerEvents:"none" }} />
      <div style={{ position:"absolute", top:"50%", right:"22%", width:280, height:280, borderRadius:"50%", filter:"blur(80px)", background:"radial-gradient(circle,var(--orb-cyan) 0%,transparent 70%)", animation:"heroFloat 22s ease-in-out infinite 3s", pointerEvents:"none" }} />

      {/* ── Grid ── */}
      <div style={{ position:"absolute", inset:0, pointerEvents:"none", backgroundImage:"linear-gradient(var(--grid-line) 1px,transparent 1px),linear-gradient(90deg,var(--grid-line) 1px,transparent 1px)", backgroundSize:"72px 72px" }} />

      {/* ── Accent bar ── */}
      <div style={{ position:"absolute", left:0, top:"28%", width:3, height:"38%", background:"linear-gradient(to bottom,transparent,var(--accent),transparent)", pointerEvents:"none" }} />

      {/* ── Floating SVG shapes ── */}
      <svg style={{ position:"absolute", bottom:80, left:40, opacity:0.06, animation:"heroDrift 8s ease-in-out infinite", pointerEvents:"none" }} width="100" height="100" viewBox="0 0 120 120" fill="none">
        <polygon points="60,5 115,95 5,95" stroke="var(--accent)" strokeWidth="1.5" fill="none"/>
        <polygon points="60,20 100,90 20,90" stroke="var(--accent-2)" strokeWidth="1" fill="none"/>
      </svg>

      <div className="container" style={{ position:"relative", zIndex:1, width:"100%" }}>

        {/* Two-column layout */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr auto", gap:60, alignItems:"center" }}>

          {/* ── LEFT: text ── */}
          <div>
            {/* Eyebrow */}
            <div data-anim style={{ display:"flex", alignItems:"center", gap:12, marginBottom:32 }}>
              <div style={{ width:8, height:8, background:"var(--accent-green)", borderRadius:"50%", boxShadow:"0 0 10px var(--accent-green)", animation:"heroPulse 2s ease infinite" }} />
              <span style={{ fontSize:11, fontWeight:600, letterSpacing:"0.32em", textTransform:"uppercase", color:"var(--text-muted)" }}>
                Available for Work · 2026
              </span>
            </div>

            {/* Name */}
            <div data-anim style={{ lineHeight:0.85, fontWeight:900, letterSpacing:"-0.03em", marginBottom:28 }}>
              <div style={{ fontSize:"clamp(52px,8vw,120px)", color:"var(--text)" }}>SOHAM</div>
              <div style={{ fontSize:"clamp(52px,8vw,120px)", background:"linear-gradient(110deg,#2563eb 0%,#06b6d4 50%,#7c3aed 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                BHATTACHARJEE
              </div>
            </div>

            {/* Typewriter */}
            <div data-anim style={{ marginBottom:32, minHeight:26 }}>
              <span style={{ fontSize:15, color:"var(--text-muted)", fontWeight:400, letterSpacing:"0.04em" }}>
                {displayed}
                <span style={{ borderRight:"2px solid var(--accent)", marginLeft:2, animation:"heroBlink 0.9s step-end infinite" }} />
              </span>
            </div>

            {/* Description */}
            <div data-anim style={{ marginBottom:40 }}>
              <p style={{ fontSize:15, color:"var(--text-muted)", lineHeight:1.8, maxWidth:480 }}>
                Building across web, mobile &amp; AI — WebRTC collaborative IDEs, OpenAI-powered chatbots, cross-platform Flutter apps. Hackathon finalist. Kolkata, India.
              </p>
            </div>

            {/* CTAs */}
            <div data-anim style={{ display:"flex", alignItems:"center", gap:20, flexWrap:"wrap" }}>
              <a
                href="#projects"
                style={{
                  display:"inline-flex", alignItems:"center", gap:10,
                  background:"linear-gradient(135deg,#2563eb,#7c3aed)",
                  color:"#fff", fontSize:12, fontWeight:700, letterSpacing:"0.18em",
                  textTransform:"uppercase", padding:"14px 28px", textDecoration:"none",
                  transition:"opacity 0.2s,transform 0.2s", borderRadius:2,
                  boxShadow:"0 0 32px rgba(37,99,235,0.25)",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity="0.85"; (e.currentTarget as HTMLElement).style.transform="translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity="1"; (e.currentTarget as HTMLElement).style.transform="translateY(0)"; }}
              >
                View Work →
              </a>

              <a href="#contact" className="arrow-link">Get in touch <span>→</span></a>

              <div style={{ width:1, height:28, background:"var(--border)", margin:"0 4px" }} />

              <a href="https://github.com/SohamBhattacharjee2003" target="_blank" rel="noreferrer"
                style={{ color:"var(--text-faint)", display:"flex", transition:"color 0.2s,transform 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color="var(--text)"; (e.currentTarget as HTMLElement).style.transform="translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color="var(--text-faint)"; (e.currentTarget as HTMLElement).style.transform="translateY(0)"; }}>
                <SiGithub size={22} />
              </a>
              <a href="https://linkedin.com/in/sohambhattacharjee84" target="_blank" rel="noreferrer"
                style={{ color:"var(--text-faint)", display:"flex", transition:"color 0.2s,transform 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color="#2563eb"; (e.currentTarget as HTMLElement).style.transform="translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color="var(--text-faint)"; (e.currentTarget as HTMLElement).style.transform="translateY(0)"; }}>
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          {/* ── RIGHT: profile image ── */}
          <div data-anim style={{ position:"relative", flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center" }}>

            {/* Outer spinning ring */}
            <div style={{
              position:"absolute",
              width:340, height:340,
              borderRadius:"50%",
              border:"1px solid var(--border)",
              animation:"heroSpin 30s linear infinite",
            }} />
            {/* Inner dashed ring */}
            <div style={{
              position:"absolute",
              width:300, height:300,
              borderRadius:"50%",
              border:"1px dashed var(--accent)",
              opacity:0.25,
              animation:"heroSpin 20s linear infinite reverse",
            }} />

            {/* Accent arc glow */}
            <div style={{
              position:"absolute",
              width:280, height:280,
              borderRadius:"50%",
              background:"conic-gradient(from 0deg, transparent 70%, rgba(37,99,235,0.35) 100%)",
              animation:"heroSpin 6s linear infinite",
            }} />

            {/* Profile image */}
            <div style={{
              position:"relative",
              width:256, height:256,
              borderRadius:"50%",
              overflow:"hidden",
              border:"2px solid var(--border)",
              boxShadow:"0 0 40px rgba(37,99,235,0.18), 0 0 80px rgba(124,58,237,0.1)",
              zIndex:1,
            }}>
              <Image
                src="/profile.png"
                alt="Soham Bhattacharjee"
                fill
                style={{ objectFit:"cover", objectPosition:"center top" }}
                priority
              />
            </div>

            {/* Corner badge */}
            <div style={{
              position:"absolute", bottom:16, right:-8,
              background:"linear-gradient(135deg,#2563eb,#7c3aed)",
              borderRadius:8, padding:"6px 14px",
              display:"flex", alignItems:"center", gap:6,
              boxShadow:"0 4px 20px rgba(37,99,235,0.3)",
              zIndex:2,
            }}>
              <div style={{ width:6, height:6, background:"#22c55e", borderRadius:"50%", boxShadow:"0 0 6px #22c55e" }} />
              <span style={{ fontSize:10, fontWeight:700, color:"#fff", letterSpacing:"0.1em", textTransform:"uppercase" }}>Open to Work</span>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll hint */}
      <div style={{ position:"absolute", bottom:32, left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:8, opacity:0.3 }}>
        <span style={{ fontSize:9, letterSpacing:"0.3em", textTransform:"uppercase", color:"var(--text-muted)" }}>Scroll</span>
        <div style={{ width:1, height:36, background:"linear-gradient(to bottom,var(--accent),transparent)", animation:"heroScrollLine 2s ease infinite" }} />
      </div>

      <style>{`
        @keyframes heroFloat      { 0%,100%{transform:translateY(0) scale(1);}    50%{transform:translateY(-40px) scale(1.05);} }
        @keyframes heroSpin       { to { transform: rotate(360deg); } }
        @keyframes heroPulse      { 0%,100%{opacity:1;} 50%{opacity:0.4;} }
        @keyframes heroBlink      { 0%,100%{opacity:1;} 50%{opacity:0;} }
        @keyframes heroDrift      { 0%,100%{transform:translateY(0) rotate(0deg);} 50%{transform:translateY(-16px) rotate(10deg);} }
        @keyframes heroScrollLine { 0%{opacity:0;transform:scaleY(0);transform-origin:top;} 50%{opacity:1;transform:scaleY(1);} 100%{opacity:0;transform:scaleY(1);transform-origin:bottom;} }
      `}</style>
    </section>
  );
}
