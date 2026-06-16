"use client";
import { useEffect, useState } from "react";

const NAV = ["About", "Projects", "Skills", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: scrolled ? "16px 0" : "28px 0",
        borderBottom: scrolled ? "1px solid #141414" : "1px solid transparent",
        background: scrolled ? "rgba(8,8,8,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all 0.4s ease",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#hero" style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.15em", color: "#f2f2f2", textDecoration: "none" }}>
          SB<span style={{ color: "#2563eb" }}>.</span>
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
          {NAV.map((n) => (
            <a
              key={n}
              href={`#${n.toLowerCase()}`}
              style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#555", textDecoration: "none", transition: "color 0.25s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f2f2f2")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
            >
              {n}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase",
              padding: "10px 22px",
              background: "#2563eb", color: "#fff",
              textDecoration: "none",
              transition: "background 0.25s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#1d4ed8")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#2563eb")}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
