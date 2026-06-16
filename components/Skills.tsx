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
  { name: "Flask",      Icon: SiFlask,     color: "#ffffff" },
  { name: "FastAPI",    Icon: SiFastapi,   color: "#009688" },
  { name: "Express.js", Icon: SiExpress,   color: "#ffffff" },
  { name: "Postman",    Icon: SiPostman,   color: "#FF6C37" },
  { name: "WebRTC",     Icon: SiWebrtc,    color: "#333333" },
];

function SkillPill({ name, Icon, color }: Skill) {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 20px",
      marginRight: 14,
      background: "#0f0f0f",
      border: "1px solid #1a1a1a",
      borderRadius: 6,
      flexShrink: 0,
      whiteSpace: "nowrap",
    }}>
      <Icon style={{ fontSize: 20, color, flexShrink: 0 }} />
      <span style={{ fontSize: 13, fontWeight: 500, color: "#cccccc", letterSpacing: "0.01em" }}>{name}</span>
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
    <section id="skills" ref={ref} className="reveal" style={{ padding: "120px 0" }}>
      <div className="container" style={{ marginBottom: 56 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
          <div style={{ width: 28, height: 2, background: "#2563eb" }} />
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "#2563eb" }}>
            Capabilities
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <h2 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 800, lineHeight: 0.92, color: "#f2f2f2", letterSpacing: "-0.02em" }}>
            MY SKILLS<span style={{ color: "#2563eb" }}>.</span>
          </h2>
          <p style={{ fontSize: 13, color: "#444", maxWidth: 320, lineHeight: 1.6 }}>
            Languages · Frameworks · Databases · Cloud · Tools
          </p>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <MarqueeRow skills={row1} />
        <MarqueeRow skills={row2} reverse />
      </div>
    </section>
  );
}
