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
    const speed = deleting ? 45 : 90;
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
      el.style.transform = "translateY(24px)";
      el.style.transition = `opacity 0.8s ease ${i * 0.12}s, transform 0.8s ease ${i * 0.12}s`;
      setTimeout(() => { el.style.opacity = "1"; el.style.transform = "translateY(0)"; }, 60);
    });
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      style={{ minHeight:"100vh", display:"flex", alignItems:"center", position:"relative", overflow:"hidden", paddingTop:96, paddingBottom:72, background:"var(--bg)" }}
    >
      {/* Orbs */}
      <div style={{ position:"absolute", top:"-15%", left:"-8%", width:600, height:600, borderRadius:"50%", filter:"blur(120px)", background:"radial-gradient(circle,var(--orb-blue) 0%,transparent 70%)", animation:"hFloat 14s ease-in-out infinite", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:"-20%", right:"-5%", width:500, height:500, borderRadius:"50%", filter:"blur(120px)", background:"radial-gradient(circle,var(--orb-purple) 0%,transparent 70%)", animation:"hFloat 18s ease-in-out infinite reverse", pointerEvents:"none" }} />

      {/* Grid */}
      <div style={{ position:"absolute", inset:0, pointerEvents:"none", backgroundImage:"linear-gradient(var(--grid-line) 1px,transparent 1px),linear-gradient(90deg,var(--grid-line) 1px,transparent 1px)", backgroundSize:"64px 64px" }} />

      {/* Left accent bar */}
      <div style={{ position:"absolute", left:0, top:"30%", width:3, height:"36%", background:"linear-gradient(to bottom,transparent,var(--accent),transparent)", pointerEvents:"none" }} />

      <div className="container" style={{ position:"relative", zIndex:1 }}>
        <div className="hero-grid">

          {/* ── LEFT ── */}
          <div className="hero-text">

            {/* Status pill */}
            <div data-anim className="hero-status">
              <span className="hero-dot" />
              <span>Available for Work · 2026</span>
            </div>

            {/* Name */}
            <div data-anim className="hero-name">
              <span className="hero-name-white">SOHAM</span>
              <span className="hero-name-grad">BHATTACHARJEE</span>
            </div>

            {/* Role typewriter */}
            <div data-anim className="hero-role">
              <span>{displayed}</span>
              <span className="hero-cursor" />
            </div>

            {/* Bio */}
            <p data-anim className="hero-bio">
              Building across web, mobile &amp; AI — WebRTC collaborative IDEs,
              OpenAI-powered chatbots, cross-platform Flutter apps.
              Hackathon finalist. Kolkata, India.
            </p>

            {/* Tags row */}
            <div data-anim className="hero-tags">
              {["Full Stack Dev", "Mobile / Flutter", "AI Integration"].map(t => (
                <span key={t} className="hero-tag">{t}</span>
              ))}
            </div>

            {/* CTAs */}
            <div data-anim className="hero-ctas">
              <a href="#projects" className="hero-btn-primary">View Work →</a>
              <a href="#contact" className="arrow-link">Get in touch <span>→</span></a>
              <div className="hero-divider" />
              <a href="https://github.com/SohamBhattacharjee2003" target="_blank" rel="noreferrer" className="hero-icon-link">
                <SiGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/sohambhattacharjee84" target="_blank" rel="noreferrer" className="hero-icon-link hero-linkedin">
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>

          {/* ── RIGHT: photo ── */}
          <div data-anim className="hero-photo-wrap">
            {/* Rings — sized relative to the container */}
            <div className="hero-ring hero-ring-outer" />
            <div className="hero-ring hero-ring-mid" />
            {/* Arc glow */}
            <div className="hero-arc" />
            {/* Photo */}
            <div className="hero-photo">
              <Image src="/profile.png" alt="Soham Bhattacharjee" fill style={{ objectFit:"cover", objectPosition:"center top" }} priority />
            </div>
            {/* Badge */}
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              <span>Open to Work</span>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll hint */}
      <div style={{ position:"absolute", bottom:28, left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:6, opacity:0.25, pointerEvents:"none" }}>
        <span style={{ fontSize:8, letterSpacing:"0.35em", textTransform:"uppercase", color:"var(--text-muted)" }}>Scroll</span>
        <div style={{ width:1, height:32, background:"linear-gradient(to bottom,var(--accent),transparent)", animation:"hScrollLine 2s ease infinite" }} />
      </div>

      <style>{`
        /* ── Animations ── */
        @keyframes hFloat      { 0%,100%{transform:translateY(0);}         50%{transform:translateY(-28px);} }
        @keyframes hSpin       { to{transform:rotate(360deg);}                                               }
        @keyframes hSpinRev    { to{transform:rotate(-360deg);}                                              }
        @keyframes hPulse      { 0%,100%{opacity:1;box-shadow:0 0 8px var(--accent-green);}  50%{opacity:0.5;box-shadow:0 0 16px var(--accent-green);} }
        @keyframes hBlink      { 0%,100%{opacity:1;} 50%{opacity:0;}                                        }
        @keyframes hArc        { to{transform:rotate(360deg);}                                               }
        @keyframes hScrollLine { 0%{opacity:0;transform:scaleY(0);transform-origin:top;} 50%{opacity:1;transform:scaleY(1);} 100%{opacity:0;transform:scaleY(1);transform-origin:bottom;} }

        /* ── Layout ── */
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 64px;
          align-items: center;
        }
        .hero-text { display:flex; flex-direction:column; gap:0; }

        /* Status */
        .hero-status {
          display: inline-flex; align-items: center; gap: 10px;
          margin-bottom: 28px;
          font-size: 11px; font-weight: 600; letter-spacing: 0.3em; text-transform: uppercase;
          color: var(--text-muted);
        }
        .hero-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--accent-green);
          box-shadow: 0 0 8px var(--accent-green);
          animation: hPulse 2s ease infinite;
          flex-shrink: 0;
        }

        /* Name */
        .hero-name {
          display: flex; flex-direction: column;
          line-height: 0.88; font-weight: 900; letter-spacing: -0.03em;
          margin-bottom: 24px;
        }
        .hero-name-white {
          font-size: clamp(48px, 6.5vw, 100px);
          color: var(--text);
        }
        .hero-name-grad {
          font-size: clamp(48px, 6.5vw, 100px);
          background: linear-gradient(110deg, #2563eb 0%, #06b6d4 50%, #7c3aed 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }

        /* Typewriter */
        .hero-role {
          display: flex; align-items: center; gap: 2px;
          min-height: 28px; margin-bottom: 24px;
          font-size: 16px; color: var(--text-muted); font-weight: 400; letter-spacing: 0.03em;
        }
        .hero-cursor {
          display: inline-block; width: 2px; height: 18px;
          background: var(--accent);
          animation: hBlink 0.9s step-end infinite;
          margin-left: 2px;
        }

        /* Bio */
        .hero-bio {
          font-size: 15px; color: var(--text-muted); line-height: 1.8;
          max-width: 460px; margin-bottom: 28px;
        }

        /* Tags */
        .hero-tags {
          display: flex; gap: 8px; flex-wrap: wrap;
          margin-bottom: 36px;
        }
        .hero-tag {
          font-size: 10px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase;
          padding: 5px 12px;
          border: 1px solid var(--border);
          background: var(--bg-card);
          color: var(--text-muted);
        }

        /* CTAs */
        .hero-ctas {
          display: flex; align-items: center; gap: 16px; flex-wrap: wrap;
        }
        .hero-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          color: #fff; font-size: 11px; font-weight: 700; letter-spacing: 0.18em;
          text-transform: uppercase; padding: 13px 26px; text-decoration: none;
          border-radius: 3px; box-shadow: 0 0 28px rgba(37,99,235,0.3);
          transition: opacity 0.2s, transform 0.2s;
        }
        .hero-btn-primary:hover { opacity: 0.85; transform: translateY(-2px); }
        .hero-divider { width:1px; height:24px; background:var(--border); }
        .hero-icon-link {
          color: var(--text-faint); display:flex; transition: color 0.2s, transform 0.2s;
        }
        .hero-icon-link:hover { color: var(--text); transform: translateY(-2px); }
        .hero-linkedin:hover { color: #2563eb !important; }

        /* ── Photo section ── */
        .hero-photo-wrap {
          position: relative;
          width: 340px; height: 340px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .hero-ring {
          position: absolute; border-radius: 50%;
        }
        .hero-ring-outer {
          width: 100%; height: 100%;
          border: 1px solid var(--border);
          animation: hSpin 36s linear infinite;
          /* tick marks on the ring */
          background: conic-gradient(
            from 0deg,
            transparent 0deg 89deg, var(--border) 89deg 91deg,
            transparent 91deg 179deg, var(--border) 179deg 181deg,
            transparent 181deg 269deg, var(--border) 269deg 271deg,
            transparent 271deg 359deg, var(--border) 359deg 360deg
          );
          border: none;
          mask: radial-gradient(farthest-side, transparent calc(100% - 1px), black calc(100% - 1px));
          -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 1px), black calc(100% - 1px));
        }
        .hero-ring-mid {
          width: 88%; height: 88%;
          border: 1px dashed color-mix(in srgb, var(--accent) 30%, transparent);
          animation: hSpinRev 22s linear infinite;
        }
        .hero-arc {
          position: absolute;
          width: 76%; height: 76%;
          border-radius: 50%;
          background: conic-gradient(from 200deg, transparent 0%, rgba(37,99,235,0.5) 15%, rgba(124,58,237,0.4) 30%, transparent 31%);
          animation: hArc 5s linear infinite;
          filter: blur(4px);
        }
        .hero-photo {
          position: relative;
          width: 62%; height: 62%;
          border-radius: 50%; overflow: hidden;
          border: 2px solid var(--border);
          box-shadow: 0 0 0 4px var(--bg), 0 0 40px rgba(37,99,235,0.2), 0 0 80px rgba(124,58,237,0.12);
          z-index: 2;
        }
        .hero-badge {
          position: absolute; bottom: 18px; right: -4px;
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          border-radius: 20px; padding: 6px 14px;
          display: flex; align-items: center; gap: 7px;
          box-shadow: 0 4px 20px rgba(37,99,235,0.35);
          z-index: 3; border: 1px solid rgba(255,255,255,0.1);
        }
        .hero-badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #22c55e; box-shadow: 0 0 6px #22c55e;
          animation: hPulse 2s ease infinite;
          flex-shrink: 0;
        }
        .hero-badge span:last-child {
          font-size: 10px; font-weight: 700; color: #fff;
          letter-spacing: 0.1em; text-transform: uppercase;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .hero-photo-wrap {
            width: 260px; height: 260px;
            margin: 0 auto;
          }
          .hero-name-white, .hero-name-grad { font-size: clamp(44px, 10vw, 80px); }
        }
        @media (max-width: 600px) {
          .hero-photo-wrap { width: 220px; height: 220px; }
          .hero-name-white, .hero-name-grad { font-size: clamp(36px, 12vw, 64px); }
          .hero-ctas { gap: 12px; }
          .hero-tags { gap: 6px; }
        }
      `}</style>
    </section>
  );
}
