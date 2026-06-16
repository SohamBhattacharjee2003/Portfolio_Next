"use client";
import { useEffect, useRef } from "react";

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
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid #1e1e1e",
    padding: "14px 0",
    fontSize: 14,
    color: "#f2f2f2",
    outline: "none",
    transition: "border-color 0.25s",
    fontFamily: "inherit",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "0.25em",
    textTransform: "uppercase" as const,
    color: "#444",
    display: "block",
    marginBottom: 0,
  };

  const links = [
    { label: "Email",    value: "sohambhattacharjee84@gmail.com",     href: "mailto:sohambhattacharjee84@gmail.com" },
    { label: "GitHub",   value: "github.com/SohamBhattacharjee2003",  href: "https://github.com/SohamBhattacharjee2003" },
    { label: "LinkedIn", value: "linkedin.com/in/sohambhattacharjee84", href: "https://linkedin.com/in/sohambhattacharjee84" },
    { label: "Phone",    value: "+91 98323 05604",                     href: "tel:+919832305604" },
  ];

  return (
    <section id="contact" ref={ref} className="reveal" style={{ padding: "72px 0 60px", background: "#050505" }}>
      <div className="container">

        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
          <div style={{ width: 28, height: 2, background: "#2563eb" }} />
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "#2563eb" }}>
            Contact
          </span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>

          {/* Left */}
          <div>
            <h2 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 800, lineHeight: 0.9, letterSpacing: "-0.02em", color: "#f2f2f2", marginBottom: 32 }}>
              LET&apos;S<br />
              <span style={{ color: "#2563eb" }}>WORK</span><br />
              TOGETHER<span style={{ color: "#2563eb" }}>.</span>
            </h2>

            <p style={{ fontSize: 14, color: "#555", lineHeight: 1.8, maxWidth: 340, marginBottom: 48 }}>
              Open to full-time roles, freelance projects, and collaborations. Based in Kolkata, West Bengal — available remotely. I typically respond within 24 hours.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {links.map(({ label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  style={{ display: "flex", alignItems: "center", gap: 16, textDecoration: "none" }}
                  onMouseEnter={(e) => {
                    const line = e.currentTarget.querySelector(".link-line") as HTMLElement;
                    const val = e.currentTarget.querySelector(".link-val") as HTMLElement;
                    if (line) { line.style.width = "40px"; line.style.background = "#2563eb"; }
                    if (val) val.style.color = "#2563eb";
                  }}
                  onMouseLeave={(e) => {
                    const line = e.currentTarget.querySelector(".link-line") as HTMLElement;
                    const val = e.currentTarget.querySelector(".link-val") as HTMLElement;
                    if (line) { line.style.width = "24px"; line.style.background = "#2a2a2a"; }
                    if (val) val.style.color = "#555";
                  }}
                >
                  <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2a2a2a", width: 64, flexShrink: 0 }}>{label}</span>
                  <span className="link-line" style={{ height: 1, width: 24, background: "#2a2a2a", flexShrink: 0, transition: "all 0.25s" }} />
                  <span className="link-val" style={{ fontSize: 12, color: "#555", transition: "color 0.25s" }}>{value}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {[
              { id: "name",  label: "Name",  type: "text",  placeholder: "Your name" },
              { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id}>
                <label htmlFor={id} style={labelStyle}>{label}</label>
                <input
                  id={id} type={type} placeholder={placeholder}
                  style={{ ...inputStyle, marginTop: 8 }}
                  onFocus={(e) => (e.currentTarget.style.borderBottomColor = "#2563eb")}
                  onBlur={(e) => (e.currentTarget.style.borderBottomColor = "#1e1e1e")}
                />
              </div>
            ))}

            <div>
              <label htmlFor="message" style={labelStyle}>Message</label>
              <textarea
                id="message" rows={4} placeholder="Tell me about your project or opportunity..."
                style={{ ...inputStyle, resize: "none", marginTop: 8 }}
                onFocus={(e) => (e.currentTarget.style.borderBottomColor = "#2563eb")}
                onBlur={(e) => (e.currentTarget.style.borderBottomColor = "#1e1e1e")}
              />
            </div>

            <button
              type="submit"
              style={{
                display: "inline-flex", alignItems: "center", gap: 10, alignSelf: "flex-start",
                background: "#2563eb", color: "#fff",
                fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase",
                padding: "16px 32px", border: "none", cursor: "none",
                transition: "background 0.25s", fontFamily: "inherit",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#1d4ed8")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#2563eb")}
            >
              Send Message →
            </button>
          </form>
        </div>

        <div style={{ marginTop: 100, paddingTop: 24, borderTop: "1px solid #141414", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 11, color: "#2a2a2a", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            © 2026 Soham Bhattacharjee
          </span>
          <span style={{ fontSize: 11, color: "#2a2a2a", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Kolkata, West Bengal · Available for Work
          </span>
        </div>
      </div>
    </section>
  );
}
