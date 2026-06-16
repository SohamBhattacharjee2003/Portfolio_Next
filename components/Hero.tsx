"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

const roles = ["Full-Stack Developer", "Mobile Engineer", "AI Builder", "Open Source Contributor"];

export default function Hero() {
  const [typed, setTyped]   = useState("");
  const [roleIdx, setRole]  = useState(0);
  const [del, setDel]       = useState(false);

  useEffect(() => {
    const word  = roles[roleIdx];
    const speed = del ? 38 : 78;
    const t = setTimeout(() => {
      if (!del && typed === word) { setTimeout(() => setDel(true), 2000); return; }
      if (del  && typed === "")  { setDel(false); setRole(i => (i + 1) % roles.length); return; }
      setTyped(del ? word.slice(0, typed.length - 1) : word.slice(0, typed.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [typed, del, roleIdx]);

  function hOn(e: React.MouseEvent, s: Partial<CSSStyleDeclaration>) {
    Object.assign((e.currentTarget as HTMLElement).style, s);
  }

  return (
    <section id="hero" style={{ background: "var(--bg)", minHeight: "100vh", paddingBottom: 80 }}>

      {/* ── BANNER + PHOTO ── */}
      <div style={{ position: "relative" }}>

        {/* Banner */}
        <div style={{
          marginTop: 72,
          marginLeft: 20,
          marginRight: 20,
          height: 380,
          borderRadius: 20,
          overflow: "hidden",
          position: "relative",
          background: "linear-gradient(155deg, #050a14 0%, #0c1628 28%, #0a1f35 55%, #100726 80%, #040609 100%)",
        }}>
          {/* Blurred orbs */}
          <div style={{ position:"absolute", top:-90, right:60, width:420, height:420, borderRadius:"50%", background:"radial-gradient(circle,rgba(37,99,235,0.28) 0%,transparent 70%)", filter:"blur(60px)", animation:"bFloat 13s ease-in-out infinite" }} />
          <div style={{ position:"absolute", bottom:-80, right:260, width:320, height:320, borderRadius:"50%", background:"radial-gradient(circle,rgba(124,58,237,0.32) 0%,transparent 70%)", filter:"blur(50px)", animation:"bFloat 18s ease-in-out infinite reverse" }} />
          <div style={{ position:"absolute", top:"35%", right:"18%", width:180, height:180, borderRadius:"50%", background:"radial-gradient(circle,rgba(6,182,212,0.18) 0%,transparent 70%)", filter:"blur(36px)" }} />

          {/* Subtle dot grid */}
          <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(rgba(255,255,255,0.06) 1px,transparent 1px)", backgroundSize:"28px 28px", pointerEvents:"none" }} />

          {/* Geometric SVG — right side */}
          <svg style={{ position:"absolute", right:64, top:"50%", transform:"translateY(-50%)", opacity:0.1, animation:"bSpin 60s linear infinite" }} width="270" height="270" viewBox="0 0 270 270" fill="none">
            <circle cx="135" cy="135" r="128" stroke="white" strokeWidth="0.5"/>
            <circle cx="135" cy="135" r="92"  stroke="white" strokeWidth="0.5" strokeDasharray="3 10"/>
            <circle cx="135" cy="135" r="56"  stroke="white" strokeWidth="0.5"/>
            <circle cx="135" cy="135" r="22"  stroke="white" strokeWidth="1.2"/>
            <line x1="7"   y1="135" x2="263" y2="135" stroke="white" strokeWidth="0.4"/>
            <line x1="135" y1="7"   x2="135" y2="263" stroke="white" strokeWidth="0.4"/>
            <line x1="39"  y1="39"  x2="231" y2="231" stroke="white" strokeWidth="0.3" strokeDasharray="2 8"/>
            <line x1="231" y1="39"  x2="39"  y2="231" stroke="white" strokeWidth="0.3" strokeDasharray="2 8"/>
          </svg>

          {/* Code glyphs */}
          {([
            { t:"{ }",  top:"14%", left:"8%",  op:0.07, fs:22 },
            { t:"</>",  top:"62%", left:"28%", op:0.06, fs:17 },
            { t:"=>",   top:"22%", left:"52%", op:0.07, fs:19 },
            { t:"[ ]",  top:"70%", left:"65%", op:0.05, fs:16 },
            { t:"···",  top:"40%", left:"16%", op:0.06, fs:20 },
          ] as { t:string; top:string; left:string; op:number; fs:number }[]).map(({ t, top, left, op, fs }) => (
            <div key={t} style={{ position:"absolute", top, left, color:"#fff", opacity:op, fontSize:fs, fontFamily:"monospace", fontWeight:700, pointerEvents:"none" }}>
              {t}
            </div>
          ))}

          {/* Bottom label strip */}
          <div style={{ position:"absolute", bottom:0, left:0, right:0, height:64, background:"linear-gradient(to top,rgba(0,0,0,0.45),transparent)", display:"flex", alignItems:"flex-end", paddingBottom:18, paddingLeft:200, gap:12, pointerEvents:"none" }}>
            <span style={{ fontSize:9, fontWeight:700, letterSpacing:"0.35em", textTransform:"uppercase", color:"rgba(255,255,255,0.22)" }}>
              Full Stack · Mobile · AI · Open Source
            </span>
          </div>
        </div>

        {/* Profile photo — overlapping bottom of banner */}
        <div style={{
          position: "absolute",
          bottom: -65,
          left: 60,
          width: 130, height: 130,
          borderRadius: "50%",
          overflow: "hidden",
          border: "5px solid var(--bg)",
          boxShadow: "0 0 0 1px var(--border), 0 8px 32px rgba(0,0,0,0.3)",
          zIndex: 10,
          transition: "border-color 0.35s",
        }}>
          <Image src="/profile.png" alt="Soham Bhattacharjee" fill style={{ objectFit:"cover", objectPosition:"center top" }} priority />
        </div>
      </div>

      {/* ── TEXT ── */}
      <div className="container" style={{ paddingTop: 104, paddingBottom: 0 }}>

        {/* Name */}
        <h1 style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: "clamp(44px,5.8vw,84px)",
          lineHeight: 1.04,
          color: "var(--text)",
          letterSpacing: "-0.015em",
          marginBottom: 18,
        }}>
          Soham Bhattacharjee
        </h1>

        {/* Tagline — mixed serif + sans */}
        <div style={{ marginBottom: 28 }}>
          <div style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "clamp(22px,2.8vw,42px)",
            color: "var(--text-muted)",
            lineHeight: 1,
          }}>
            Building Scalable,
          </div>
          <div style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 700,
            fontSize: "clamp(28px,3.8vw,62px)",
            color: "var(--text)",
            lineHeight: 1.04,
            letterSpacing: "-0.025em",
          }}>
            Digital Products.
          </div>
        </div>

        {/* Typed role */}
        <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:24, minHeight:24 }}>
          <span style={{ width:6, height:6, borderRadius:"50%", background:"var(--accent-green)", boxShadow:"0 0 8px var(--accent-green)", flexShrink:0, display:"inline-block" }} />
          <span style={{ fontSize:13, color:"var(--text-muted)", fontWeight:400 }}>
            {typed}
            <span style={{ display:"inline-block", width:2, height:13, background:"var(--accent)", marginLeft:2, verticalAlign:"middle", animation:"bBlink 0.9s step-end infinite" }} />
          </span>
        </div>

        {/* Bio */}
        <p style={{ fontSize:15, color:"var(--text-muted)", lineHeight:1.85, maxWidth:600, marginBottom:36 }}>
          Full-stack engineer and hackathon finalist shipping across web, mobile &amp; AI. From WebRTC collaborative IDEs to OpenAI-powered platforms and cross-platform Flutter apps — I care about clean architecture, real-time systems, and production-ready code.
        </p>

        {/* CTAs + social icons */}
        <div style={{ display:"flex", alignItems:"center", gap:10, flexWrap:"wrap", marginBottom:52 }}>
          <a href="#projects"
            style={{ display:"inline-flex", alignItems:"center", gap:8, background:"var(--text)", color:"var(--bg)", fontSize:11, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", padding:"13px 28px", borderRadius:40, textDecoration:"none", transition:"opacity 0.2s" }}
            onMouseEnter={e => hOn(e, { opacity:"0.8" })} onMouseLeave={e => hOn(e, { opacity:"1" })}>
            View Projects →
          </a>
          <a href="#contact"
            style={{ display:"inline-flex", alignItems:"center", fontSize:11, fontWeight:600, letterSpacing:"0.12em", textTransform:"uppercase", color:"var(--text-muted)", textDecoration:"none", border:"1px solid var(--border)", padding:"13px 28px", borderRadius:40, transition:"color 0.2s,border-color 0.2s" }}
            onMouseEnter={e => { hOn(e, { color:"var(--text)", borderColor:"var(--text)" }); }}
            onMouseLeave={e => { hOn(e, { color:"var(--text-muted)", borderColor:"var(--border)" }); }}>
            Get in Touch
          </a>
          <div style={{ width:1, height:22, background:"var(--border)", margin:"0 4px" }} />
          <a href="https://github.com/SohamBhattacharjee2003" target="_blank" rel="noreferrer"
            style={{ width:38, height:38, borderRadius:"50%", border:"1px solid var(--border)", display:"flex", alignItems:"center", justifyContent:"center", color:"var(--text-muted)", textDecoration:"none", transition:"color 0.2s,border-color 0.2s" }}
            onMouseEnter={e => { hOn(e, { color:"var(--text)", borderColor:"var(--text)" }); }}
            onMouseLeave={e => { hOn(e, { color:"var(--text-muted)", borderColor:"var(--border)" }); }}>
            <SiGithub size={16} />
          </a>
          <a href="https://linkedin.com/in/sohambhattacharjee84" target="_blank" rel="noreferrer"
            style={{ width:38, height:38, borderRadius:"50%", border:"1px solid var(--border)", display:"flex", alignItems:"center", justifyContent:"center", color:"var(--text-muted)", textDecoration:"none", transition:"color 0.2s,border-color 0.2s" }}
            onMouseEnter={e => { hOn(e, { color:"#0a66c2", borderColor:"#0a66c2" }); }}
            onMouseLeave={e => { hOn(e, { color:"var(--text-muted)", borderColor:"var(--border)" }); }}>
            <FaLinkedinIn size={15} />
          </a>
        </div>

        {/* Location */}
        <div style={{ display:"flex", alignItems:"center", gap:8, fontSize:11, fontWeight:600, letterSpacing:"0.25em", textTransform:"uppercase", color:"var(--text-faint)" }}>
          <svg width="10" height="13" viewBox="0 0 10 13" fill="currentColor">
            <path d="M5 0C2.24 0 0 2.24 0 5c0 3.75 5 8 5 8s5-4.25 5-8c0-2.76-2.24-5-5-5zm0 6.5C4.17 6.5 3.5 5.83 3.5 5S4.17 3.5 5 3.5 6.5 4.17 6.5 5 5.83 6.5 5 6.5z"/>
          </svg>
          Kolkata, India · Available for Work
        </div>
      </div>

      <style>{`
        @keyframes bFloat { 0%,100%{transform:translateY(0)}  50%{transform:translateY(-22px)} }
        @keyframes bSpin  { to{transform:translateY(-50%) rotate(360deg)} }
        @keyframes bBlink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>
    </section>
  );
}
