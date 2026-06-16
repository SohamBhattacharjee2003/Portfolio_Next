"use client";
import { useEffect, useState } from "react";

const NAV = ["About", "Skills", "Projects", "Contact"];

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      setDark(false);
      document.documentElement.setAttribute("data-theme", "light");
    }
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: scrolled ? "14px 0" : "26px 0",
        borderBottom: `1px solid ${scrolled ? "var(--nav-border)" : "transparent"}`,
        background: scrolled ? "var(--nav-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "padding 0.4s ease, background-color 0.4s ease, border-color 0.4s ease",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#hero" style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.15em", color: "var(--text)", textDecoration: "none" }}>
          SB<span style={{ color: "var(--accent)" }}>.</span>
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {NAV.map((n) => (
            <a
              key={n}
              href={`#${n.toLowerCase()}`}
              style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.25s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {n}
            </a>
          ))}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            title={dark ? "Switch to light mode" : "Switch to dark mode"}
            style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              width: 34, height: 34,
              background: "var(--bg-elevated)",
              border: "1px solid var(--border)",
              borderRadius: "50%",
              color: "var(--text-muted)",
              cursor: "none",
              transition: "background-color 0.25s, border-color 0.25s, color 0.25s",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--accent)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
            }}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>

          <a
            href="#contact"
            style={{
              fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase",
              padding: "10px 22px",
              background: "var(--accent)", color: "#fff",
              textDecoration: "none",
              transition: "background-color 0.25s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#1d4ed8")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--accent)")}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
