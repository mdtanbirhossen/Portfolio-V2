"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

export const CometCard = ({
  rotateDepth = 17.5,
  translateDepth = 20,
  className,
  children,
}: {
  rotateDepth?: number;
  translateDepth?: number;
  className?: string;
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = ref.current;
    const glare = glareRef.current;
    if (!card || !glare) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPct = x / rect.width - 0.5;
    const yPct = y / rect.height - 0.5;

    // Card 3D rotation and translation
    gsap.to(card, {
      rotateX: yPct * -rotateDepth,
      rotateY: xPct * rotateDepth,
      x: xPct * translateDepth,
      y: yPct * -translateDepth,
      z: 50,
      scale: 1.05,
      duration: 0.4,
      ease: "power3.out",
    });

    // Glare effect
    gsap.to(glare, {
      background: `radial-gradient(circle at ${xPct * 100 + 50}% ${yPct * 100 + 50}%, rgba(255,255,255,0.9) 10%, rgba(255,255,255,0.75) 20%, rgba(255,255,255,0) 80%)`,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    const card = ref.current;
    const glare = glareRef.current;
    if (!card || !glare) return;

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      x: 0,
      y: 0,
      z: 0,
      scale: 1,
      duration: 0.5,
      ease: "power3.out",
    });

    gsap.to(glare, {
      background:
        "radial-gradient(circle at 50% 50%, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 100%)",
      duration: 0.5,
      ease: "power3.out",
    });
  };

  return (
    <div className={cn("perspective-distant transform-3d", className)}>
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative rounded-2xl shadow-lg"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {children}
        <div
          ref={glareRef}
          className="pointer-events-none absolute inset-0 z-50 h-full w-full rounded-[16px] mix-blend-overlay opacity-60"
        />
      </div>
    </div>
  );
};
