"use client";
import { useEffect, useState } from "react";

export default function Loader() {
  const [count, setCount] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [done, setDone] = useState(false);

  // Count 0 → 100
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const DURATION = 1500; // ms to reach 100

    const tick = (now: number) => {
      const p = Math.min((now - start) / DURATION, 1);
      // ease-out so the numbers decelerate near the end
      const eased = 1 - Math.pow(1 - p, 2);
      setCount(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setLeaving(true);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Lock scroll while the loader is on screen
  useEffect(() => {
    document.body.style.overflow = done ? "" : "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [done]);

  // Remove from the DOM after the curtain finishes lifting
  useEffect(() => {
    if (!leaving) return;
    const t = setTimeout(() => setDone(true), 900);
    return () => clearTimeout(t);
  }, [leaving]);

  if (done) return null;

  return (
    <div className={`loader ${leaving ? "loader-leaving" : ""}`} aria-hidden={leaving}>
      <div className="loader-inner">
        <div className="loader-label">Portfolio</div>

        <div className="loader-name">
          Soham <span className="loader-name-serif">Bhattacharjee</span>
        </div>

        <div className="loader-bar">
          <div className="loader-bar-fill" style={{ width: `${count}%` }} />
        </div>

        <div className="loader-meta">
          <span>Loading experience</span>
          <span className="loader-count">{String(count).padStart(3, "0")}</span>
        </div>
      </div>

      <style>{`
        .loader {
          position: fixed; inset: 0; z-index: 10000;
          display: flex; align-items: center; justify-content: center;
          background: var(--bg);
          transition: opacity 0.6s ease;
        }
        .loader-leaving { animation: loaderLift 0.9s cubic-bezier(0.76,0,0.24,1) forwards; }
        @keyframes loaderLift {
          0%   { clip-path: inset(0 0 0 0); }
          100% { clip-path: inset(0 0 100% 0); }
        }

        .loader-inner {
          width: min(520px, 82vw);
          display: flex; flex-direction: column; gap: 22px;
          animation: loaderIn 0.7s ease both;
        }
        @keyframes loaderIn { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }

        .loader-label {
          font-size: 10px; font-weight: 700; letter-spacing: 0.4em;
          text-transform: uppercase; color: var(--accent);
        }
        .loader-name {
          font-family: var(--font-sans); font-weight: 700;
          font-size: clamp(30px, 6vw, 56px); line-height: 1;
          letter-spacing: -0.03em; color: var(--text);
        }
        .loader-name-serif {
          font-family: var(--font-serif); font-style: italic; font-weight: 500;
          background: linear-gradient(110deg, var(--accent), var(--accent-3), var(--accent-2));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }

        .loader-bar {
          width: 100%; height: 2px; background: var(--border);
          border-radius: 2px; overflow: hidden; margin-top: 6px;
        }
        .loader-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent), var(--accent-3), var(--accent-2));
          transition: width 0.12s linear;
        }

        .loader-meta {
          display: flex; align-items: baseline; justify-content: space-between;
          font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase;
          color: var(--text-muted);
        }
        .loader-count {
          font-family: var(--font-sans); font-weight: 700;
          font-size: 13px; color: var(--text); letter-spacing: 0.1em;
          font-variant-numeric: tabular-nums;
        }

        @media (prefers-reduced-motion: reduce) {
          .loader-inner { animation: none; }
          .loader-leaving { animation-duration: 0.3s; }
        }
      `}</style>
    </div>
  );
}
