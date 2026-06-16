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

  useEffect(() => {
    const word  = roles[roleIdx];
    const speed = deleting ? 40 : 85;
    const t = setTimeout(() => {
      if (!deleting && displayed === word) { setTimeout(() => setDeleting(true), 2200); return; }
      if (deleting && displayed === "")   { setDeleting(false); setRoleIdx(i => (i + 1) % roles.length); return; }
      setDisplayed(deleting ? word.slice(0, displayed.length - 1) : word.slice(0, displayed.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [displayed, deleting, roleIdx]);

  useEffect(() => {
    const els = containerRef.current?.querySelectorAll<HTMLElement>("[data-anim]");
    els?.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = `opacity 0.7s ease ${i * 0.1}s, transform 0.7s ease ${i * 0.1}s`;
      setTimeout(() => { el.style.opacity = "1"; el.style.transform = "translateY(0)"; }, 50);
    });
  }, []);

  return (
    <section id="hero" ref={containerRef} style={{ minHeight:"100vh", display:"flex", alignItems:"center", position:"relative", overflow:"hidden", background:"var(--bg)" }}>

      {/* Orbs */}
      <div style={{ position:"absolute", top:"-10%", left:"-5%", width:600, height:600, borderRadius:"50%", filter:"blur(130px)", background:"radial-gradient(circle,var(--orb-blue) 0%,transparent 70%)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:"-20%", right:"-5%", width:500, height:500, borderRadius:"50%", filter:"blur(130px)", background:"radial-gradient(circle,var(--orb-purple) 0%,transparent 70%)", animation:"hFloat 18s ease-in-out infinite reverse", pointerEvents:"none" }} />

      {/* Grid bg */}
      <div style={{ position:"absolute", inset:0, pointerEvents:"none", backgroundImage:"linear-gradient(var(--grid-line) 1px,transparent 1px),linear-gradient(90deg,var(--grid-line) 1px,transparent 1px)", backgroundSize:"64px 64px" }} />

      {/* Left accent bar */}
      <div style={{ position:"absolute", left:0, top:"25%", width:3, height:"45%", background:"linear-gradient(to bottom,transparent,var(--accent),transparent)", pointerEvents:"none" }} />

      <div className="container" style={{ position:"relative", zIndex:1, paddingTop:100, paddingBottom:80 }}>
        <div className="h-grid">

          {/* ── TEXT ── */}
          <div className="h-left">
            <div data-anim className="h-status">
              <span className="h-dot" />
              <span>Available for Work · 2026</span>
            </div>

            <div data-anim className="h-name">
              <div className="h-name-line h-name-white">SOHAM</div>
              <div className="h-name-line h-name-grad">BHATTACHARJEE</div>
            </div>

            <div data-anim className="h-role">
              {displayed}<span className="h-cursor" />
            </div>

            <p data-anim className="h-bio">
              Building across web, mobile &amp; AI — WebRTC collaborative IDEs, OpenAI-powered chatbots, cross-platform Flutter apps. Hackathon finalist. Kolkata, India.
            </p>

            <div data-anim className="h-tags">
              {["Full Stack Dev", "Mobile / Flutter", "AI Integration"].map(t => (
                <span key={t} className="h-tag">{t}</span>
              ))}
            </div>

            <div data-anim className="h-ctas">
              <a href="#projects" className="h-btn">View Work →</a>
              <a href="#contact" className="arrow-link">Get in touch <span>→</span></a>
              <div className="h-sep" />
              <a href="https://github.com/SohamBhattacharjee2003" target="_blank" rel="noreferrer" className="h-icon">
                <SiGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/sohambhattacharjee84" target="_blank" rel="noreferrer" className="h-icon h-icon-li">
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>

          {/* ── PHOTO ── */}
          <div data-anim className="h-photo-section">
            <div className="h-photo-wrap">
              {/* Spinning rings — inside the wrap, sized 100% */}
              <div className="h-ring h-ring-1" />
              <div className="h-ring h-ring-2" />
              <div className="h-arc" />
              <div className="h-img">
                <Image src="/profile.png" alt="Soham Bhattacharjee" fill style={{ objectFit:"cover", objectPosition:"center top" }} priority />
              </div>
            </div>
            <div className="h-badge">
              <span className="h-badge-dot" />
              <span>Open to Work</span>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll */}
      <div style={{ position:"absolute", bottom:24, left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:6, opacity:0.25, pointerEvents:"none" }}>
        <span style={{ fontSize:8, letterSpacing:"0.35em", textTransform:"uppercase", color:"var(--text-muted)" }}>Scroll</span>
        <div style={{ width:1, height:30, background:"linear-gradient(to bottom,var(--accent),transparent)", animation:"hLine 2s ease infinite" }} />
      </div>

      <style>{`
        @keyframes hFloat  { 0%,100%{transform:translateY(0);}    50%{transform:translateY(-24px);}  }
        @keyframes hSpin   { to{transform:rotate(360deg);}                                            }
        @keyframes hSpinR  { to{transform:rotate(-360deg);}                                           }
        @keyframes hArc    { to{transform:rotate(360deg);}                                            }
        @keyframes hPulse  { 0%,100%{opacity:1;} 50%{opacity:0.4;}                                   }
        @keyframes hBlink  { 0%,100%{opacity:1;} 50%{opacity:0;}                                     }
        @keyframes hLine   { 0%{opacity:0;transform:scaleY(0);transform-origin:top;} 50%{opacity:1;transform:scaleY(1);} 100%{opacity:0;} }

        /* ── Two-column grid ── */
        .h-grid {
          display: grid;
          grid-template-columns: minmax(0,1fr) 280px;
          gap: 56px;
          align-items: center;
        }
        .h-left { display:flex; flex-direction:column; min-width:0; }

        /* Status */
        .h-status {
          display:inline-flex; align-items:center; gap:10px; margin-bottom:24px;
          font-size:11px; font-weight:600; letter-spacing:0.28em; text-transform:uppercase;
          color:var(--text-muted);
        }
        .h-dot {
          width:7px; height:7px; border-radius:50%; flex-shrink:0;
          background:var(--accent-green); box-shadow:0 0 8px var(--accent-green);
          animation:hPulse 2s ease infinite;
        }

        /* Name — key fix: overflow hidden + nowrap on the container, let font scale */
        .h-name { display:flex; flex-direction:column; line-height:0.88; font-weight:900; letter-spacing:-0.03em; margin-bottom:20px; overflow:hidden; }
        .h-name-line { white-space:nowrap; font-size:clamp(32px,5.2vw,88px); }
        .h-name-white { color:var(--text); }
        .h-name-grad  {
          background:linear-gradient(110deg,#2563eb 0%,#06b6d4 50%,#7c3aed 100%);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
        }

        /* Role */
        .h-role {
          display:flex; align-items:center; min-height:26px; margin-bottom:20px;
          font-size:15px; font-weight:400; color:var(--text-muted); letter-spacing:0.02em;
        }
        .h-cursor {
          display:inline-block; width:2px; height:17px; background:var(--accent);
          margin-left:2px; animation:hBlink 0.9s step-end infinite;
        }

        /* Bio */
        .h-bio {
          font-size:14px; color:var(--text-muted); line-height:1.8;
          max-width:100%; margin-bottom:24px;
        }

        /* Tags */
        .h-tags { display:flex; gap:8px; flex-wrap:wrap; margin-bottom:32px; }
        .h-tag {
          font-size:10px; font-weight:600; letter-spacing:0.12em; text-transform:uppercase;
          padding:5px 12px; border:1px solid var(--border); background:var(--bg-card); color:var(--text-muted);
        }

        /* CTAs */
        .h-ctas { display:flex; align-items:center; gap:14px; flex-wrap:wrap; }
        .h-btn {
          display:inline-flex; align-items:center; gap:8px;
          background:linear-gradient(135deg,#2563eb,#7c3aed); color:#fff;
          font-size:11px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase;
          padding:12px 24px; text-decoration:none; border-radius:3px;
          box-shadow:0 0 28px rgba(37,99,235,0.3); transition:opacity 0.2s,transform 0.2s;
          white-space:nowrap;
        }
        .h-btn:hover { opacity:0.85; transform:translateY(-2px); }
        .h-sep { width:1px; height:22px; background:var(--border); flex-shrink:0; }
        .h-icon { color:var(--text-faint); display:flex; transition:color 0.2s,transform 0.2s; }
        .h-icon:hover { color:var(--text); transform:translateY(-2px); }
        .h-icon-li:hover { color:#0a66c2 !important; }

        /* ── Photo section ── */
        .h-photo-section {
          position:relative; display:flex; flex-direction:column; align-items:center;
        }
        .h-photo-wrap {
          position:relative; width:280px; height:280px;
          display:flex; align-items:center; justify-content:center;
        }
        .h-ring {
          position:absolute; border-radius:50%;
        }
        .h-ring-1 {
          inset:0; border:1px solid var(--border);
          animation:hSpin 32s linear infinite;
        }
        .h-ring-2 {
          inset:10%; border:1px dashed rgba(37,99,235,0.3);
          animation:hSpinR 20s linear infinite;
        }
        .h-arc {
          position:absolute; inset:8%; border-radius:50%;
          background:conic-gradient(from 200deg,transparent 0%,rgba(37,99,235,0.5) 15%,rgba(124,58,237,0.4) 30%,transparent 31%);
          animation:hArc 5s linear infinite; filter:blur(3px);
        }
        .h-img {
          position:relative; width:64%; height:64%; border-radius:50%; overflow:hidden; z-index:2;
          border:2.5px solid var(--border);
          box-shadow:0 0 0 5px var(--bg), 0 0 40px rgba(37,99,235,0.2), 0 0 80px rgba(124,58,237,0.1);
        }
        .h-badge {
          margin-top:16px;
          background:linear-gradient(135deg,#2563eb,#7c3aed); border-radius:20px;
          padding:7px 16px; display:flex; align-items:center; gap:8px;
          box-shadow:0 4px 20px rgba(37,99,235,0.3); border:1px solid rgba(255,255,255,0.1);
        }
        .h-badge-dot {
          width:6px; height:6px; border-radius:50%; flex-shrink:0;
          background:#22c55e; box-shadow:0 0 6px #22c55e; animation:hPulse 2s ease infinite;
        }
        .h-badge span:last-child {
          font-size:10px; font-weight:700; color:#fff; letter-spacing:0.1em; text-transform:uppercase;
        }

        /* ── Responsive ── */
        @media (max-width:820px) {
          .h-grid { grid-template-columns:1fr; gap:40px; }
          .h-photo-section { margin:0 auto; }
          .h-photo-wrap { width:220px; height:220px; }
          .h-name-line { font-size:clamp(36px,9vw,72px); white-space:normal; }
        }
        @media (max-width:480px) {
          .h-photo-wrap { width:180px; height:180px; }
          .h-name-line { font-size:clamp(30px,11vw,56px); }
          .h-ctas { gap:10px; }
        }
      `}</style>
    </section>
  );
}
