"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

const roles = ["Full-Stack Developer", "Mobile Engineer", "AI Builder", "Open Source Contributor"];

export default function Hero() {
  const [typed, setTyped]  = useState("");
  const [roleIdx, setRole] = useState(0);
  const [del, setDel]      = useState(false);

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
    <section id="hero" style={{ background: "var(--bg)" }}>

      {/* ── BANNER ── */}
      <div className="container" style={{ paddingTop: 92 }}>
        <div className="hero-banner" style={{
          height: 230,
          borderRadius: 18,
          overflow: "hidden",
          position: "relative",
          background: "linear-gradient(150deg, #050a14 0%, #0c1628 30%, #0a1f35 56%, #100726 82%, #040609 100%)",
        }}>
          <div style={{ position:"absolute", top:-80, right:80, width:380, height:380, borderRadius:"50%", background:"radial-gradient(circle,rgba(37,99,235,0.30) 0%,transparent 70%)", filter:"blur(56px)", animation:"bFloat 13s ease-in-out infinite" }} />
          <div style={{ position:"absolute", bottom:-70, right:240, width:280, height:280, borderRadius:"50%", background:"radial-gradient(circle,rgba(124,58,237,0.34) 0%,transparent 70%)", filter:"blur(46px)", animation:"bFloat 18s ease-in-out infinite reverse" }} />
          <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(rgba(255,255,255,0.05) 1px,transparent 1px)", backgroundSize:"26px 26px", pointerEvents:"none" }} />

          <svg style={{ position:"absolute", right:56, top:"50%", transform:"translateY(-50%)", opacity:0.1, animation:"bSpin 60s linear infinite" }} width="230" height="230" viewBox="0 0 230 230" fill="none">
            <circle cx="115" cy="115" r="110" stroke="white" strokeWidth="0.5"/>
            <circle cx="115" cy="115" r="78"  stroke="white" strokeWidth="0.5" strokeDasharray="3 10"/>
            <circle cx="115" cy="115" r="46"  stroke="white" strokeWidth="0.5"/>
            <circle cx="115" cy="115" r="18"  stroke="white" strokeWidth="1.2"/>
            <line x1="5" y1="115" x2="225" y2="115" stroke="white" strokeWidth="0.4"/>
            <line x1="115" y1="5" x2="115" y2="225" stroke="white" strokeWidth="0.4"/>
          </svg>

          {/* Banner heading — sits in the empty right space, original treatment */}
          <div style={{ position:"absolute", top:40, left:44, maxWidth:"60%" }}>
            <div style={{ fontSize:10, fontWeight:700, letterSpacing:"0.38em", textTransform:"uppercase", color:"rgba(255,255,255,0.4)", marginBottom:14 }}>
              Software Engineer
            </div>
            <div style={{ fontFamily:"var(--font-serif)", fontStyle:"italic", fontWeight:400, fontSize:"clamp(26px,3.4vw,46px)", lineHeight:1.05, color:"rgba(255,255,255,0.92)" }}>
              I build things<br/>for the web &amp; beyond.
            </div>
          </div>

          {([
            { t:"{ }",  top:"20%", right:"34%", op:0.06, fs:18 },
            { t:"</>",  top:"66%", left:"30%",  op:0.05, fs:15 },
            { t:"=>",   top:"30%", right:"22%", op:0.06, fs:16 },
          ] as { t:string; top:string; right?:string; left?:string; op:number; fs:number }[]).map(({ t, top, right, left, op, fs }) => (
            <div key={t} style={{ position:"absolute", top, right, left, color:"#fff", opacity:op, fontSize:fs, fontFamily:"monospace", fontWeight:700, pointerEvents:"none" }}>{t}</div>
          ))}
        </div>
      </div>

      {/* ── IDENTITY ROW: photo + name inline ── */}
      <div className="container">
        <div className="hero-id">
          <div className="hero-photo">
            <Image src="/profile.png" alt="Soham Bhattacharjee" fill style={{ objectFit:"cover", objectPosition:"center top" }} priority />
          </div>
          <div className="hero-id-text">
            <h1 className="hero-name">SOHAM BHATTACHARJEE</h1>
            <div className="hero-type">
              <span style={{ width:6, height:6, borderRadius:"50%", background:"var(--accent-green)", boxShadow:"0 0 8px var(--accent-green)", flexShrink:0, display:"inline-block" }} />
              <span>{typed}<span className="hero-caret" /></span>
            </div>
          </div>
        </div>
      </div>

      {/* ── LOWER: two columns to kill vertical stretch ── */}
      <div className="container" style={{ paddingBottom: 64 }}>
        <div className="hero-grid">

          {/* Left — statement + bio + CTAs */}
          <div>
            <h2 className="hero-statement">
              Building <span className="hero-serif">scalable</span> digital products <span className="hero-dim">end&nbsp;to&nbsp;end.</span>
            </h2>

            <p className="hero-bio">
              Full-stack engineer &amp; hackathon finalist shipping across web, mobile and AI — WebRTC collaborative IDEs, OpenAI-powered platforms, cross-platform mobile apps. I care about clean architecture and production-ready code.
            </p>

            <div className="hero-ctas">
              <a href="#projects" className="hero-btn-solid"
                onMouseEnter={e => hOn(e, { opacity:"0.82" })} onMouseLeave={e => hOn(e, { opacity:"1" })}>
                View Projects →
              </a>
              <a href="#contact" className="hero-btn-ghost"
                onMouseEnter={e => hOn(e, { color:"var(--text)", borderColor:"var(--text)" })}
                onMouseLeave={e => hOn(e, { color:"var(--text-muted)", borderColor:"var(--border)" })}>
                Get in Touch
              </a>
              <a href="https://github.com/SohamBhattacharjee2003" target="_blank" rel="noreferrer" className="hero-icon"
                onMouseEnter={e => hOn(e, { color:"var(--text)", borderColor:"var(--text)" })}
                onMouseLeave={e => hOn(e, { color:"var(--text-muted)", borderColor:"var(--border)" })}>
                <SiGithub size={15} />
              </a>
              <a href="https://linkedin.com/in/sohambhattacharjee84" target="_blank" rel="noreferrer" className="hero-icon"
                onMouseEnter={e => hOn(e, { color:"#0a66c2", borderColor:"#0a66c2" })}
                onMouseLeave={e => hOn(e, { color:"var(--text-muted)", borderColor:"var(--border)" })}>
                <FaLinkedinIn size={14} />
              </a>
            </div>
          </div>

          {/* Right — compact meta card */}
          <aside className="hero-meta">
            <div className="hero-meta-row">
              <span className="hero-meta-k">Location</span>
              <span className="hero-meta-v">Kolkata, India</span>
            </div>
            <div className="hero-meta-row">
              <span className="hero-meta-k">Status</span>
              <span className="hero-meta-v hero-meta-live">
                <span className="hero-live-dot" />
                Available for work
              </span>
            </div>
            <div className="hero-meta-row" style={{ borderBottom:"none" }}>
              <span className="hero-meta-k">Focus</span>
              <span className="hero-meta-v">Web · Mobile · AI</span>
            </div>
          </aside>
        </div>
      </div>

      <style>{`
        @keyframes bFloat { 0%,100%{transform:translateY(0)}  50%{transform:translateY(-20px)} }
        @keyframes bSpin  { to{transform:translateY(-50%) rotate(360deg)} }
        @keyframes bBlink { 0%,100%{opacity:1} 50%{opacity:0} }

        /* identity row */
        .hero-id { display:flex; align-items:flex-end; gap:24px; margin-top:-52px; position:relative; z-index:5; }
        .hero-photo {
          width:122px; height:122px; border-radius:50%; overflow:hidden; position:relative; flex-shrink:0;
          border:5px solid #ffffff; box-shadow:0 0 0 1px var(--border), 0 8px 30px rgba(0,0,0,0.3);
        }
        .hero-id-text { padding-bottom:8px; min-width:0; }
        .hero-name {
          font-family:var(--font-sans); font-weight:700; font-size:clamp(32px,4.8vw,62px);
          letter-spacing:-0.025em; line-height:1; color:var(--text); margin-bottom:12px;
        }
        .hero-type { display:flex; align-items:center; gap:9px; font-size:13px; color:var(--text-muted); min-height:18px; }
        .hero-caret { display:inline-block; width:2px; height:13px; background:var(--accent); margin-left:2px; vertical-align:middle; animation:bBlink 0.9s step-end infinite; }

        /* lower grid */
        .hero-grid { display:grid; grid-template-columns:minmax(0,1fr) 280px; gap:48px; align-items:start; margin-top:36px; }
        .hero-statement {
          font-family:var(--font-sans); font-weight:700; font-size:clamp(28px,3.6vw,52px);
          line-height:1.08; letter-spacing:-0.025em; color:var(--text); margin-bottom:22px;
        }
        .hero-serif { font-family:var(--font-serif); font-style:italic; font-weight:500; background:linear-gradient(110deg,var(--accent),var(--accent-3),var(--accent-2)); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .hero-dim { color:var(--text-muted); }
        .hero-bio { font-size:14px; color:var(--text-muted); line-height:1.8; max-width:540; margin-bottom:30px; }
        .hero-ctas { display:flex; align-items:center; gap:10px; flex-wrap:wrap; }
        .hero-btn-solid { display:inline-flex; align-items:center; gap:8px; background:var(--text); color:var(--bg); font-size:11px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; padding:12px 26px; border-radius:40px; text-decoration:none; transition:opacity 0.2s; }
        .hero-btn-ghost { display:inline-flex; align-items:center; font-size:11px; font-weight:600; letter-spacing:0.12em; text-transform:uppercase; color:var(--text-muted); text-decoration:none; border:1px solid var(--border); padding:12px 26px; border-radius:40px; transition:color 0.2s,border-color 0.2s; }
        .hero-icon { width:37px; height:37px; border-radius:50%; border:1px solid var(--border); display:flex; align-items:center; justify-content:center; color:var(--text-muted); text-decoration:none; transition:color 0.2s,border-color 0.2s; flex-shrink:0; }

        /* meta card */
        .hero-meta {
          position:relative; border:1px solid var(--border); border-radius:16px;
          padding:6px 22px; overflow:hidden;
          background:linear-gradient(160deg, var(--bg-elevated) 0%, var(--bg-card) 100%);
          box-shadow:0 1px 0 rgba(255,255,255,0.03) inset, 0 10px 30px rgba(0,0,0,0.12);
        }
        .hero-meta::before {
          content:""; position:absolute; top:0; left:0; right:0; height:3px;
          background:linear-gradient(90deg,var(--accent),var(--accent-3),var(--accent-2));
          opacity:0.85;
        }
        .hero-meta-row { display:flex; justify-content:space-between; align-items:center; padding:15px 0; border-bottom:1px solid var(--border-2); gap:12px; }
        .hero-meta-k { font-size:10px; font-weight:700; letter-spacing:0.18em; text-transform:uppercase; color:var(--text-muted); }
        .hero-meta-v { font-size:13px; color:var(--text); font-weight:600; text-align:right; }
        .hero-meta-live { display:inline-flex; align-items:center; gap:7px; color:var(--accent-green); }
        .hero-live-dot { width:7px; height:7px; border-radius:50%; background:var(--accent-green); box-shadow:0 0 8px var(--accent-green); animation:bBlink 1.6s ease-in-out infinite; }

        @media (max-width:820px) {
          .hero-grid { grid-template-columns:1fr; gap:32px; }
          .hero-id { flex-direction:column; align-items:flex-start; gap:14px; }
        }
      `}</style>
    </section>
  );
}
