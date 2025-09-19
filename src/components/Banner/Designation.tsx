"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Designation() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const sentences = [
      "Full Stack Developer",
      "Backend Engineer",
      "Problem Solver",
      "Tech Enthusiast",
    ];

    let currentIndex = 0;

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    const durationPerChar = 0.05; // typing speed
    const scrambleDuration = 0.3; // scramble effect time

    const showSentence = (sentence: string, onComplete: () => void) => {
      const el = textRef.current!;
      el.textContent = "";

      const tl = gsap.timeline({ onComplete });

      // simulate typing with decryption/scramble
      sentence.split("").forEach((char, i) => {
        const placeholder = document.createElement("span");
        placeholder.textContent = "";
        el.appendChild(placeholder);

        tl.to(
          placeholder,
          {
            duration: scrambleDuration,
            textContent: () => {
              // random scramble sequence before final char
              const randomChar =
                chars[Math.floor(Math.random() * chars.length)];
              return randomChar;
            },
            repeat: 3,
            yoyo: true,
            onComplete: () => {
              placeholder.textContent = char;
            },
          },
          i * durationPerChar
        );
      });

      // small pause after sentence finished
      tl.to({}, { duration: 1 });
    };

    const cycleSentences = () => {
      showSentence(sentences[currentIndex], () => {
        currentIndex = (currentIndex + 1) % sentences.length;
        cycleSentences();
      });
    };

    cycleSentences();
  }, []);

  return (
    <div className="text-2xl font-bold text-primary-dark dark:text-primary-light">
      <div ref={textRef}></div>
    </div>
  );
}
