"use client";

import { useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const NavLogo = () => {
    const leftLogoRef = useRef<HTMLDivElement | null>(null);
    const rightLogoRef = useRef<HTMLDivElement | null>(null);
    const textRef = useRef<HTMLDivElement | null>(null);
    const tl = useRef<gsap.core.Timeline | null>(null);

    const handleMouseEnter = () => {
        if (!tl.current) {
            tl.current = gsap.timeline({ paused: true });

            //detecting screen size
            const isSmall = window.innerWidth < 640;
            const xValue = isSmall ? 145 : 190;

            tl.current
                .to(
                    leftLogoRef.current, {
                    // x: -40,
                    y: -5,
                    duration: 0.1,
                    ease: "power2.out",
                })
                .to(
                    rightLogoRef.current,
                    {
                        y: 5,
                        duration: 0.1,
                        ease: "power2.out",
                    },
                    "<"
                )
                .to(
                    rightLogoRef.current,
                    {
                        x: xValue,
                        delay: 0.1,
                        duration: 0.5,
                        ease: "power2.out",
                    },
                )
                .fromTo(
                    textRef.current,
                    { opacity: 0, x: -20 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.5,
                        ease: "power2.out",
                    },
                    "-=0.2" // overlap slightly
                );
        }
        tl.current.play();
    };

    const handleMouseLeave = () => {
        tl.current?.reverse();
    };

    return (
        <div
            className="flex flex-col items-center cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="flex items-center space-x-2">
                {/* Left Logo */}
                <div ref={leftLogoRef} >
                    <Image
                        className="hidden dark:block relative h-[16px] w-[32px] sm:h-[20px] sm:w-[40px] top-0.5"
                        src={"/assets/left-white-logo.png"}
                        height={20}
                        width={40}
                        alt="left white image"
                    />

                    <Image
                        className="dark:hidden relative h-[16px] w-[32px] sm:h-[20px] sm:w-[40px] top-0.5"
                        src={"/assets/left-black-logo.png"}
                        height={20}
                        width={40}
                        alt="left black image"
                    />
                </div>

                {/* Middle Text (hidden at first) */}
                <div ref={textRef} className="font-bold opacity-0 dark:text-white whitespace-nowrap">
                    <span className="flex sm:hidden text-sm">Tanbir Hossen</span>
                    <span className="hidden sm:flex">Md Tanbir Hossen</span>
                </div>

                {/* Right Logo */}
                <div ref={rightLogoRef}>
                    <Image
                        className="hidden dark:block relative h-[16px] w-[32px] sm:h-[20px] sm:w-[40px] right-[142px] sm:right-[195px] bottom-0.5"
                        src={"/assets/right-white-logo.png"}
                        height={20}
                        width={40}
                        alt="right white image"
                    />
                    <Image
                        className="dark:hidden relative h-[16px] w-[32px] sm:h-[20px] sm:w-[40px] right-[142px] sm:right-[195px] bottom-0.5"
                        src={"/assets/right-black-logo.png"}
                        height={20}
                        width={40}
                        alt="right black image"
                    />
                </div>
            </div>
        </div>
    );
};

export default NavLogo;
