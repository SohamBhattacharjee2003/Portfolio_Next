"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot.current) {
        dot.current.style.left = mouseX + "px";
        dot.current.style.top = mouseY + "px";
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ring.current) {
        ring.current.style.left = ringX + "px";
        ring.current.style.top = ringY + "px";
      }
      raf = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      if (dot.current) { dot.current.style.width = "18px"; dot.current.style.height = "18px"; }
      if (ring.current) { ring.current.style.width = "56px"; ring.current.style.height = "56px"; ring.current.style.opacity = "0.4"; }
    };
    const onLeave = () => {
      if (dot.current) { dot.current.style.width = "10px"; dot.current.style.height = "10px"; }
      if (ring.current) { ring.current.style.width = "36px"; ring.current.style.height = "36px"; ring.current.style.opacity = "0.6"; }
    };

    document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor" />
      <div ref={ring} className="cursor-ring" />
    </>
  );
}
