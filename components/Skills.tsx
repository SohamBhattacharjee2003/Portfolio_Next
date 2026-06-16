"use client";
import { useEffect, useRef } from "react";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer,
  SiThreedotjs, SiNodedotjs, SiPython, SiPostgresql, SiGraphql,
  SiRedis, SiOpenai, SiGit, SiDocker, SiVercel, SiFigma,
} from "react-icons/si";
import type { IconType } from "react-icons";

type Skill = { name: string; Icon: IconType; color: string };

const row1: Skill[] = [
  { name: "React",        Icon: SiReact,      color: "#61DAFB" },
  { name: "Next.js",      Icon: SiNextdotjs,  color: "#ffffff" },
  { name: "TypeScript",   Icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", Icon: SiTailwindcss,color: "#06B6D4" },
  { name: "Framer Motion",Icon: SiFramer,     color: "#C850C0" },
  { name: "Three.js",     Icon: SiThreedotjs, color: "#ffffff" },
  { name: "Node.js",      Icon: SiNodedotjs,  color: "#539E43" },
  { name: "Python",       Icon: SiPython,     color: "#F7CC42" },
];

const row2: Skill[] = [
  { name: "PostgreSQL",   Icon: SiPostgresql, color: "#4169E1" },
  { name: "GraphQL",      Icon: SiGraphql,    color: "#E535AB" },
  { name: "Redis",        Icon: SiRedis,      color: "#DC382D" },
  { name: "OpenAI",       Icon: SiOpenai,     color: "#10A37F" },
  { name: "Git",          Icon: SiGit,        color: "#F05032" },
  { name: "Docker",       Icon: SiDocker,     color: "#2496ED" },
  { name: "Vercel",       Icon: SiVercel,     color: "#ffffff" },
  { name: "Figma",        Icon: SiFigma,      color: "#A259FF" },
];

function SkillPill({ name, Icon, color }: Skill) {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 20px",
      marginRight: 16,
      background: "#0f0f0f",
      border: "1px solid #1a1a1a",
      borderRadius: 6,
      flexShrink: 0,
      whiteSpace: "nowrap",
    }}>
      <Icon style={{ fontSize: 22, color, flexShrink: 0 }} />
      <span style={{ fontSize: 14, fontWeight: 500, color: "#cccccc", letterSpacing: "0.01em" }}>
        {name}
      </span>
    </div>
  );
}

function MarqueeRow({ skills, reverse }: { skills: Skill[]; reverse?: boolean }) {
  const doubled = [...skills, ...skills];
  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <div
        className={reverse ? "marquee-reverse" : "marquee"}
        style={{ display: "flex", width: "max-content" }}
      >
        {doubled.map((s, i) => (
          <SkillPill key={i} {...s} />
        ))}
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
          <h2 style={{
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 800,
            lineHeight: 0.92,
            color: "#f2f2f2",
            letterSpacing: "-0.02em",
          }}>
            MY SKILLS<span style={{ color: "#2563eb" }}>.</span>
          </h2>
          <p style={{ fontSize: 13, color: "#444", maxWidth: 320, lineHeight: 1.6 }}>
            Tools and technologies I work with across the full stack.
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
