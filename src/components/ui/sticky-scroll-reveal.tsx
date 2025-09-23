"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titlesRef = useRef<HTMLHeadingElement[]>([]);
  const descRef = useRef<HTMLParagraphElement[]>([]);

  const backgroundColors = [
    "#0f172a", // slate-900
    "#000000", // black
    "#171717", // neutral-900
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan → emerald
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink → indigo
    "linear-gradient(to bottom right, #f97316, #eab308)", // orange → yellow
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate each card fade in/out
      content.forEach((_, index) => {
        ScrollTrigger.create({
          trigger: titlesRef.current[index],
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveCard(index),
          onEnterBack: () => setActiveCard(index),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [content]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
    gsap.to(containerRef.current, {
      backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      duration: 0.5,
      ease: "power2.out",
    });
  }, [activeCard]);

  return (
    <div
      ref={containerRef}
      className="relative flex h-[30rem] justify-center space-x-10 overflow-y-hidden rounded-md p-10"
    >
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <h2
                ref={(el) => {
                  if (el) titlesRef.current[index] = el;
                }}
                className={`text-2xl font-bold text-slate-100 transition-opacity duration-500 ${
                  activeCard === index ? "opacity-100" : "opacity-30"
                }`}
              >
                {item.title}
              </h2>
              <p
                ref={(el) => {
                  if (el) descRef.current[index] = el;
                }}
                className={`text-kg mt-10 max-w-sm text-slate-300 transition-opacity duration-500 ${
                  activeCard === index ? "opacity-100" : "opacity-30"
                }`}
              >
                {item.description}
              </p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:block",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </div>
  );
};
