"use client";
import { useEffect, useRef, useState } from "react";
import { SiGithub } from "react-icons/si";

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <style>{`
        .m-bar { transition: transform 0.25s ease, opacity 0.25s ease; transform-origin: center; }
      `}</style>
      {open ? (
        <>
          <line className="m-bar" x1="3" y1="3" x2="13" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <line className="m-bar" x1="13" y1="3" x2="3" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </>
      ) : (
        <>
          <line className="m-bar" x1="3" y1="5" x2="13" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <line className="m-bar" x1="3" y1="8" x2="13" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <line className="m-bar" x1="3" y1="11" x2="13" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </>
      )}
    </svg>
  );
}

const NAV = ["About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark]         = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef                 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") { setDark(false); document.documentElement.setAttribute("data-theme", "light"); }
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onClickOut(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    }
    if (menuOpen) document.addEventListener("mousedown", onClickOut);
    return () => document.removeEventListener("mousedown", onClickOut);
  }, [menuOpen]);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    if (next) { document.documentElement.removeAttribute("data-theme"); localStorage.setItem("theme", "dark"); }
    else      { document.documentElement.setAttribute("data-theme", "light"); localStorage.setItem("theme", "light"); }
  }

  const circle: React.CSSProperties = {
    width: 40, height: 40, borderRadius: "50%",
    border: "1px solid var(--border)",
    background: "var(--bg-elevated)",
    display: "flex", alignItems: "center", justifyContent: "center",
    color: "var(--text-muted)", cursor: "none", flexShrink: 0,
    transition: "color 0.2s, border-color 0.2s, background-color 0.2s",
  };

  function hoverOn(e: React.MouseEvent) {
    const el = e.currentTarget as HTMLElement;
    el.style.color = "var(--text)";
    el.style.borderColor = "var(--text)";
  }
  function hoverOff(e: React.MouseEvent) {
    const el = e.currentTarget as HTMLElement;
    el.style.color = "var(--text-muted)";
    el.style.borderColor = "var(--border)";
  }

  return (
    <nav ref={menuRef} style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: scrolled ? "10px 0" : "18px 0",
      borderBottom: `1px solid ${scrolled ? "var(--nav-border)" : "transparent"}`,
      background: scrolled ? "var(--nav-bg)" : "transparent",
      backdropFilter: scrolled ? "blur(14px)" : "none",
      transition: "padding 0.35s, background-color 0.35s, border-color 0.35s",
    }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo — italic serif */}
        <a href="#hero" style={{
          textDecoration: "none",
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: 30,
          color: "var(--text)",
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}>
          SB
        </a>

        {/* Right controls */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>

          {/* Inline nav links — laptop & tablet only */}
          <div className="nav-links">
            {NAV.map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`} className="nav-link">{n}</a>
            ))}
            <span className="nav-sep" />
          </div>

          {/* Theme */}
          <button onClick={toggleTheme} title={dark ? "Light mode" : "Dark mode"} style={circle}
            onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* GitHub */}
          <a href="https://github.com/SohamBhattacharjee2003" target="_blank" rel="noreferrer"
            style={{ ...circle, textDecoration: "none" }} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
            <SiGithub size={15} />
          </a>

          {/* Menu — mobile only */}
          <button className="nav-burger" onClick={() => setMenuOpen(o => !o)} style={circle}
            onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>

      <style>{`
        .nav-links { display: flex; align-items: center; gap: 26px; margin-right: 10px; }
        .nav-link {
          font-size: 11px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--text-muted); text-decoration: none; transition: color 0.2s;
        }
        .nav-link:hover { color: var(--text); }
        .nav-sep { width: 1px; height: 20px; background: var(--border); }
        .nav-burger { display: none !important; }

        /* Mobile: hide inline links, show hamburger */
        @media (max-width: 720px) {
          .nav-links { display: none; }
          .nav-burger { display: flex !important; }
        }
      `}</style>

      {/* Dropdown */}
      <div style={{
        overflow: "hidden",
        maxHeight: menuOpen ? 300 : 0,
        borderBottom: menuOpen ? "1px solid var(--nav-border)" : "1px solid transparent",
        background: "var(--nav-bg)",
        backdropFilter: "blur(16px)",
        transition: "max-height 0.3s ease, border-color 0.3s",
      }}>
        <div className="container" style={{ paddingTop: 8, paddingBottom: 8 }}>
          {NAV.map((n) => (
            <a key={n} href={`#${n.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block", padding: "10px 0",
                fontSize: 11, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase",
                color: "var(--text-muted)", textDecoration: "none",
                borderBottom: "1px solid var(--border-2)",
                transition: "color 0.2s, padding-left 0.2s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--text)"; (e.currentTarget as HTMLElement).style.paddingLeft = "8px"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; (e.currentTarget as HTMLElement).style.paddingLeft = "0"; }}>
              {n}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
