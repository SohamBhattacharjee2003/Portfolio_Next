"use client";
import { useEffect, useRef } from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { HiMail, HiPhone } from "react-icons/hi";

const links = [
  { label: "Email",    value: "sohambhattacharjee84@gmail.com",      href: "mailto:sohambhattacharjee84@gmail.com", Icon: HiMail,      color: "#2563eb" },
  { label: "GitHub",   value: "github.com/SohamBhattacharjee2003",   href: "https://github.com/SohamBhattacharjee2003", Icon: SiGithub,   color: "#f2f2f2" },
  { label: "LinkedIn", value: "linkedin.com/in/sohambhattacharjee84", href: "https://linkedin.com/in/sohambhattacharjee84", Icon: SiLinkedin, color: "#0a66c2" },
  { label: "Phone",    value: "+91 98323 05604",                      href: "tel:+919832305604", Icon: HiPhone,     color: "#22c55e" },
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
    width: "100%", background: "transparent", border: "none",
    borderBottom: "1px solid #1e1e1e", padding: "14px 0",
    fontSize: 14, color: "#f2f2f2", outline: "none",
    transition: "border-color 0.25s", fontFamily: "inherit",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 10, fontWeight: 700, letterSpacing: "0.25em",
    textTransform: "uppercase" as const, color: "#333", display: "block",
  };

  return (
    <section id="contact" ref={ref} className="reveal" style={{ padding: "72px 0 60px", background: "#050505", position: "relative", overflow: "hidden" }}>

      {/* bg orbs */}
      <div style={{ position: "absolute", bottom: "-20%", left: "-10%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(37,99,235,0.07) 0%,transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "10%", right: "-5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle,rgba(124,58,237,0.06) 0%,transparent 70%)", pointerEvents: "none" }} />

      <div className="container">
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 40 }}>
          <div style={{ width: 28, height: 2, background: "linear-gradient(90deg,#2563eb,#7c3aed)" }} />
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "#2563eb" }}>Contact</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>

          {/* Left */}
          <div>
            <h2 style={{ fontSize: "clamp(34px, 5vw, 60px)", fontWeight: 800, lineHeight: 0.9, letterSpacing: "-0.02em", marginBottom: 28 }}>
              <span style={{ color: "#f2f2f2" }}>LET&apos;S</span><br />
              <span style={{ background: "linear-gradient(110deg,#2563eb,#7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>WORK</span><br />
              <span style={{ color: "#f2f2f2" }}>TOGETHER.</span>
            </h2>

            <p style={{ fontSize: 14, color: "#444", lineHeight: 1.85, maxWidth: 340, marginBottom: 40 }}>
              Open to full-time roles, freelance projects &amp; collaborations. Based in Kolkata — available remotely. Usually respond within 24 hours.
            </p>

            {/* Contact links */}
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {links.map(({ label, value, href, Icon, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 16px", textDecoration: "none", borderRadius: 8, transition: "background 0.2s" }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "#0d0d0d";
                    const val = el.querySelector(".cval") as HTMLElement;
                    if (val) val.style.color = color;
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "transparent";
                    const val = el.querySelector(".cval") as HTMLElement;
                    if (val) val.style.color = "#444";
                  }}
                >
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: "#111", border: "1px solid #1e1e1e", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon style={{ fontSize: 16, color }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#333", marginBottom: 2 }}>{label}</div>
                    <div className="cval" style={{ fontSize: 12, color: "#444", transition: "color 0.2s" }}>{value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={e => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {[
              { id: "name",  label: "Name",  type: "text",  placeholder: "Your name" },
              { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id}>
                <label htmlFor={id} style={labelStyle}>{label}</label>
                <input id={id} type={type} placeholder={placeholder}
                  style={{ ...inputStyle, marginTop: 8 }}
                  onFocus={e => (e.currentTarget.style.borderBottomColor = "#2563eb")}
                  onBlur={e => (e.currentTarget.style.borderBottomColor = "#1e1e1e")} />
              </div>
            ))}
            <div>
              <label htmlFor="message" style={labelStyle}>Message</label>
              <textarea id="message" rows={4} placeholder="Tell me about your project or opportunity..."
                style={{ ...inputStyle, resize: "none", marginTop: 8 }}
                onFocus={e => (e.currentTarget.style.borderBottomColor = "#2563eb")}
                onBlur={e => (e.currentTarget.style.borderBottomColor = "#1e1e1e")} />
            </div>
            <button type="submit"
              style={{
                display: "inline-flex", alignItems: "center", gap: 10, alignSelf: "flex-start",
                background: "linear-gradient(135deg,#2563eb,#7c3aed)", color: "#fff",
                fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase",
                padding: "15px 32px", border: "none", cursor: "none", borderRadius: 4,
                transition: "opacity 0.2s, transform 0.2s", fontFamily: "inherit",
                boxShadow: "0 0 24px rgba(37,99,235,0.2)",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
              Send Message →
            </button>
          </form>
        </div>

        {/* Footer */}
        <div style={{ marginTop: 72, paddingTop: 24, borderTop: "1px solid #111", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 11, color: "#222", letterSpacing: "0.15em", textTransform: "uppercase" }}>© 2026 Soham Bhattacharjee</span>
          <span style={{ fontSize: 11, color: "#222", letterSpacing: "0.15em", textTransform: "uppercase" }}>Kolkata, India · Available for Work</span>
        </div>
      </div>
    </section>
  );
}
