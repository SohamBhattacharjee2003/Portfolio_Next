"use client";
import { useEffect, useRef } from "react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { HiMail, HiPhone } from "react-icons/hi";

const links = [
  { label:"Email",    value:"sohambhattacharjee84@gmail.com",       href:"mailto:sohambhattacharjee84@gmail.com",       Icon:HiMail,        color:"#2563eb" },
  { label:"GitHub",   value:"github.com/SohamBhattacharjee2003",    href:"https://github.com/SohamBhattacharjee2003",   Icon:SiGithub,      color:"var(--text)" },
  { label:"LinkedIn", value:"linkedin.com/in/sohambhattacharjee84",  href:"https://linkedin.com/in/sohambhattacharjee84", Icon:FaLinkedinIn,  color:"#0a66c2" },
  { label:"Phone",    value:"+91 98323 05604",                       href:"tel:+919832305604",                           Icon:HiPhone,       color:"#22c55e" },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("in"); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const inputStyle: React.CSSProperties = {
    width:"100%", background:"transparent", border:"none",
    borderBottom:"1px solid var(--input-border)", padding:"14px 0",
    fontSize:14, color:"var(--input-color)", outline:"none",
    transition:"border-color 0.25s", fontFamily:"inherit",
  };

  const labelStyle: React.CSSProperties = {
    fontSize:10, fontWeight:700, letterSpacing:"0.25em",
    textTransform:"uppercase" as const, color:"var(--text-faint)", display:"block",
  };

  return (
    <section id="contact" ref={ref} className="reveal" style={{ padding:"72px 0 60px", background:"var(--bg-2)", position:"relative", overflow:"hidden" }}>

      {/* Orbs */}
      <div style={{ position:"absolute", bottom:"-20%", left:"-10%", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle,var(--orb-blue) 0%,transparent 70%)", filter:"blur(80px)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", top:"10%", right:"-5%", width:300, height:300, borderRadius:"50%", background:"radial-gradient(circle,var(--orb-purple) 0%,transparent 70%)", filter:"blur(70px)", pointerEvents:"none" }} />

      {/* SVG wavy decoration */}
      <svg style={{ position:"absolute", top:30, right:60, opacity:0.04, pointerEvents:"none" }} width="160" height="160" viewBox="0 0 160 160" fill="none">
        <rect x="20" y="20" width="120" height="120" stroke="var(--accent)" strokeWidth="1" rx="12" strokeDasharray="6 4"/>
        <rect x="40" y="40" width="80" height="80" stroke="var(--accent-2)" strokeWidth="1" rx="8"/>
        <circle cx="80" cy="80" r="20" stroke="var(--accent-3)" strokeWidth="1"/>
      </svg>

      <div className="container">
        <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:40 }}>
          <div style={{ width:28, height:2, background:"linear-gradient(90deg,var(--accent),var(--accent-2))" }} />
          <span style={{ fontSize:11, fontWeight:600, letterSpacing:"0.3em", textTransform:"uppercase", color:"var(--accent)" }}>Contact</span>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"start" }}>

          {/* Left */}
          <div>
            <h2 style={{ fontSize:"clamp(34px,5vw,60px)", fontWeight:800, lineHeight:0.9, letterSpacing:"-0.02em", marginBottom:28 }}>
              <span style={{ color:"var(--text)" }}>LET&apos;S</span><br />
              <span style={{ background:"linear-gradient(110deg,var(--accent),var(--accent-2))", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>WORK</span><br />
              <span style={{ color:"var(--text)" }}>TOGETHER.</span>
            </h2>

            <p style={{ fontSize:14, color:"var(--text-muted)", lineHeight:1.85, maxWidth:340, marginBottom:40 }}>
              Open to full-time roles, freelance projects &amp; collaborations. Based in Kolkata — available remotely. Usually respond within 24 hours.
            </p>

            {/* Contact links */}
            <div style={{ display:"flex", flexDirection:"column", gap:4 }}>
              {links.map(({ label, value, href, Icon, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  style={{ display:"flex", alignItems:"center", gap:14, padding:"12px 16px", textDecoration:"none", borderRadius:8, transition:"background-color 0.2s" }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.backgroundColor = "var(--bg-elevated)";
                    const val = el.querySelector(".cval") as HTMLElement;
                    if (val) val.style.color = color;
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.backgroundColor = "transparent";
                    const val = el.querySelector(".cval") as HTMLElement;
                    if (val) val.style.color = "var(--text-muted)";
                  }}
                >
                  <div style={{ width:36, height:36, borderRadius:8, background:"var(--bg-elevated)", border:"1px solid var(--border)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <Icon style={{ fontSize:16, color }} />
                  </div>
                  <div>
                    <div style={{ fontSize:9, fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--text-faint)", marginBottom:2 }}>{label}</div>
                    <div className="cval" style={{ fontSize:12, color:"var(--text-muted)", transition:"color 0.2s" }}>{value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={e => e.preventDefault()} style={{ display:"flex", flexDirection:"column", gap:28 }}>
            {[
              { id:"name",  label:"Name",  type:"text",  placeholder:"Your name" },
              { id:"email", label:"Email", type:"email", placeholder:"your@email.com" },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id}>
                <label htmlFor={id} style={labelStyle}>{label}</label>
                <input id={id} type={type} placeholder={placeholder}
                  style={{ ...inputStyle, marginTop:8 }}
                  onFocus={e => (e.currentTarget.style.borderBottomColor = "var(--accent)")}
                  onBlur={e => (e.currentTarget.style.borderBottomColor = "var(--input-border)")} />
              </div>
            ))}
            <div>
              <label htmlFor="message" style={labelStyle}>Message</label>
              <textarea id="message" rows={4} placeholder="Tell me about your project or opportunity..."
                style={{ ...inputStyle, resize:"none", marginTop:8 }}
                onFocus={e => (e.currentTarget.style.borderBottomColor = "var(--accent)")}
                onBlur={e => (e.currentTarget.style.borderBottomColor = "var(--input-border)")} />
            </div>
            <button type="submit"
              style={{
                display:"inline-flex", alignItems:"center", gap:10, alignSelf:"flex-start",
                background:"linear-gradient(135deg,#2563eb,#7c3aed)", color:"#fff",
                fontSize:12, fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase",
                padding:"15px 32px", border:"none", cursor:"none", borderRadius:4,
                transition:"opacity 0.2s, transform 0.2s", fontFamily:"inherit",
                boxShadow:"0 0 24px rgba(37,99,235,0.2)",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity="0.85"; (e.currentTarget as HTMLElement).style.transform="translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity="1"; (e.currentTarget as HTMLElement).style.transform="translateY(0)"; }}>
              Send Message →
            </button>
          </form>
        </div>

        {/* Footer */}
        <div style={{ marginTop:72, paddingTop:24, borderTop:"1px solid var(--border-2)", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <span style={{ fontSize:11, color:"var(--footer-text)", letterSpacing:"0.15em", textTransform:"uppercase" }}>© 2026 Soham Bhattacharjee</span>
          <span style={{ fontSize:11, color:"var(--footer-text)", letterSpacing:"0.15em", textTransform:"uppercase" }}>Kolkata, India · Available for Work</span>
        </div>
      </div>
    </section>
  );
}
