"use client";
import { useEffect, useRef } from "react";
import {
  SiReact, SiTypescript, SiJavascript, SiNodedotjs, SiPython,
  SiFlutter, SiMongodb, SiMysql, SiFirebase, SiSupabase,
  SiDocker, SiGit, SiTailwindcss, SiFlask, SiFastapi,
  SiExpress, SiPostman, SiWebrtc, SiC, SiCplusplus,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import type { IconType } from "react-icons";

type Skill = { name: string; Icon: IconType; color: string };

const row1: Skill[] = [
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript,  color: "#3178C6" },
  { name: "React.js",   Icon: SiReact,       color: "#61DAFB" },
  { name: "Node.js",    Icon: SiNodedotjs,   color: "#539E43" },
  { name: "Python",     Icon: SiPython,      color: "#F7CC42" },
  { name: "Java",       Icon: FaJava,        color: "#E76F00" },
  { name: "Flutter",    Icon: SiFlutter,     color: "#54C5F8" },
  { name: "C++",        Icon: SiCplusplus,   color: "#00599C" },
  { name: "C",          Icon: SiC,           color: "#A8B9CC" },
  { name: "Tailwind",   Icon: SiTailwindcss, color: "#06B6D4" },
];

const row2: Skill[] = [
  { name: "MongoDB",    Icon: SiMongodb,   color: "#47A248" },
  { name: "MySQL",      Icon: SiMysql,     color: "#4479A1" },
  { name: "Firebase",   Icon: SiFirebase,  color: "#FFCA28" },
  { name: "Supabase",   Icon: SiSupabase,  color: "#3ECF8E" },
  { name: "AWS",        Icon: FaAws,       color: "#FF9900" },
  { name: "Docker",     Icon: SiDocker,    color: "#2496ED" },
  { name: "Git",        Icon: SiGit,       color: "#F05032" },
  { name: "Flask",      Icon: SiFlask,     color: "#e2e2e2" },
  { name: "FastAPI",    Icon: SiFastapi,   color: "#009688" },
  { name: "Express.js", Icon: SiExpress,   color: "#e2e2e2" },
  { name: "Postman",    Icon: SiPostman,   color: "#FF6C37" },
  { name: "WebRTC",     Icon: SiWebrtc,    color: "#6366f1" },
];

function SkillPill({ name, Icon, color }: Skill) {
  return (
    <div
      style={{
        display: "flex", alignItems: "center", gap: 10,
        padding: "10px 20px", marginRight: 12,
        background: "#0d0d0d",
        border: "1px solid #1a1a1a",
        borderRadius: 8, flexShrink: 0, whiteSpace: "nowrap",
        transition: "border-color 0.25s, background 0.25s, box-shadow 0.25s",
        cursor: "default",
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = color + "55";
        el.style.background = "#111";
        el.style.boxShadow = `0 0 20px ${color}22`;
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "#1a1a1a";
        el.style.background = "#0d0d0d";
        el.style.boxShadow = "none";
      }}
    >
      <Icon style={{ fontSize: 20, color, flexShrink: 0, filter: `drop-shadow(0 0 4px ${color}66)` }} />
      <span style={{ fontSize: 13, fontWeight: 500, color: "#aaa" }}>{name}</span>
    </div>
  );
}

function MarqueeRow({ skills, reverse }: { skills: Skill[]; reverse?: boolean }) {
  const doubled = [...skills, ...skills];
  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <div className={reverse ? "marquee-reverse" : "marquee"} style={{ display: "flex", width: "max-content" }}>
        {doubled.map((s, i) => <SkillPill key={i} {...s} />)}
      </div>
    </div>
  );
}

export default function Skills() {
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

  return (
    <section id="skills" ref={ref} className="reveal" style={{ padding: "72px 0", position: "relative", overflow: "hidden" }}>

      <div style={{ position: "absolute", bottom: "-30%", left: "-10%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle,rgba(6,182,212,0.05) 0%,transparent 70%)", pointerEvents: "none" }} />

      <div className="container" style={{ marginBottom: 36 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
          <div style={{ width: 28, height: 2, background: "linear-gradient(90deg,#2563eb,#06b6d4)" }} />
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "#2563eb" }}>Capabilities</span>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <h2 style={{ fontSize: "clamp(34px, 5vw, 60px)", fontWeight: 800, lineHeight: 0.92, letterSpacing: "-0.02em" }}>
            <span style={{ background: "linear-gradient(110deg,#f2f2f2 40%,#2563eb 70%,#06b6d4 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              MY SKILLS.
            </span>
          </h2>
          <p style={{ fontSize: 13, color: "#444", maxWidth: 300, lineHeight: 1.6 }}>Languages · Frameworks · Databases · Cloud · Tools</p>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <MarqueeRow skills={row1} />
        <MarqueeRow skills={row2} reverse />
      </div>
    </section>
  );
}
