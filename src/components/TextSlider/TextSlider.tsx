"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface TextSliderProps {
    sentences: string[];
    duration?: number; // seconds for the cursor to traverse
    delayBetweenSentences?: number; // ms before next sentence
    className?: string; // text class
    cursorClassName?: string; // vertical bar style
    parentClassName?: string;
}

export default function TextSlider({
    sentences,
    duration = 1,
    delayBetweenSentences = 3000,
    className = "",
    cursorClassName = "bg-gray-500",
    parentClassName = "",
}: TextSliderProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const el = containerRef.current;
        const cursor = cursorRef.current;
        if (!el || !cursor) return;

        const nextSentence = () => {
            const nextIndex = (currentIndex + 1) % sentences.length;
            const currentText = el.textContent || "";
            const nextText = sentences[nextIndex];

            // Wrap each character in a span
            const maxLength = Math.max(currentText.length, nextText.length);
            el.innerHTML = "";
            for (let i = 0; i < maxLength; i++) {
                const span = document.createElement("span");
                span.textContent = currentText[i] || " ";
                el.appendChild(span);
            }
            const spans = Array.from(el.children) as HTMLSpanElement[];

            // Measure exact width of nextText
            const measure = document.createElement("span");
            measure.style.visibility = "hidden";
            measure.style.position = "absolute";
            measure.style.whiteSpace = "pre";
            measure.textContent = nextText;
            el.appendChild(measure);
            const textWidth = measure.offsetWidth;
            el.removeChild(measure);

            // Reset cursor to start
            gsap.set(cursor, { left: 0, opacity: 1 });

            // Animate cursor across exact text width while updating text
            gsap.to(cursor, {
                left: textWidth,
                duration: duration,
                ease: "linear",
                onUpdate: () => {
                    const cursorPos = gsap.getProperty(cursor, "left") as number;
                    const visibleChars = Math.floor((cursorPos / textWidth) * maxLength);
                    for (let i = 0; i < maxLength; i++) {
                        spans[i].textContent = i < visibleChars ? nextText[i] || " " : currentText[i] || " ";
                    }
                },
                onComplete: () => {
                    spans.forEach((span, i) => {
                        span.textContent = nextText[i] || " ";
                    });
                    // Hide cursor at the end
                    gsap.set(cursor, { opacity: 0 });
                    setCurrentIndex(nextIndex);
                },
            });
        };

        // Initially hide cursor
        gsap.set(cursor, { opacity: 0 });

        const interval = setInterval(nextSentence, delayBetweenSentences);
        return () => clearInterval(interval);
    }, [currentIndex, sentences, duration, delayBetweenSentences]);

    return (
        <div className={`relative inline-block overflow-hidden ${parentClassName}`}>
            <div ref={containerRef} className={`relative z-10 ${className}`}>
                {sentences[currentIndex]}
            </div>
            <div
                ref={cursorRef}
                className={`absolute top-0 h-full w-[2px] ${cursorClassName}`}
                style={{ left: 0 }}
            ></div>
        </div>
    );
}
