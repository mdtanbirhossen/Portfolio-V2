"use client";

import { JSX, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Skill, skillsData } from './skill-data'
import Container from "../Common/Container";



// Helper for fallback icon placeholder
export const getIconPlaceholder = (): JSX.Element => {
    return (
        <svg
            className="w-full h-full"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

const SkillsSection: React.FC = () => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const [activeCategory, setActiveCategory] = useState<string>("frontend");
    const [borderPosition, setBorderPosition] = useState<number>(0);
    const autoRotateTimerRef = useRef<NodeJS.Timeout | null>(null);

    // Animated border effect
    useEffect(() => {
        const interval = setInterval(() => {
            setBorderPosition(prevPos => (prevPos + 1) % 100);
        }, 50);

        return () => clearInterval(interval);
    }, []);

    // Auto-rotate through categories
    useEffect(() => {
        const categories = Object.keys(skillsData);

        const startAutoRotate = () => {
            // Clear any existing timer
            if (autoRotateTimerRef.current) {
                clearInterval(autoRotateTimerRef.current);
            }

            // Set up auto-rotation timer
            autoRotateTimerRef.current = setInterval(() => {
                setActiveCategory((prevCategory) => {
                    const currentIndex = categories.indexOf(prevCategory);
                    const nextIndex = (currentIndex + 1) % categories.length;
                    return categories[nextIndex];
                });
            }, 4000); // Change every 3 seconds
        };

        startAutoRotate();

        // Clean up timer on unmount
        return () => {
            if (autoRotateTimerRef.current) {
                clearInterval(autoRotateTimerRef.current);
            }
        };
    }, []);

    useEffect(() => {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Create animation that will be triggered on scroll
            gsap.fromTo(
                '[data-animation="text"]',
                {
                    opacity: 0,
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                    y: 30,
                },
                {
                    opacity: 1,
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                    y: 0,
                    duration: 1,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: wrapperRef.current,
                        start: "top 90%",
                        once: true,
                    },
                }
            );

            // Animate category buttons
            gsap.fromTo(
                ".category-btn",
                {
                    opacity: 0,
                    y: 20,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "back.out(1.2)",
                    scrollTrigger: {
                        trigger: ".categories-container",
                        start: "top 85%",
                        once: true,
                    },
                }
            );
        }, wrapperRef);

        return () => {
            // Clean up the context and ScrollTrigger
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            ctx.revert();
        };
    }, []);

    // Animate skills when category changes
    useEffect(() => {
        // Only animate if we're mounted (not on first render)
        if (wrapperRef.current) {
            // Reset existing animations
            gsap.killTweensOf(".skills-row-item");

            // Animate skill items with alternating directions
            document.querySelectorAll(".skills-row").forEach((row, rowIndex) => {
                const direction = rowIndex % 2 === 0 ? 1 : -1; // Alternate direction
                const items = row.querySelectorAll(".skills-row-item");

                // Set initial positions
                gsap.set(items, {
                    x: direction > 0 ? -20 : 20,
                    opacity: 0,
                });

                // Animate items
                gsap.to(items, {
                    x: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: {
                        each: 0.1,
                        from: direction > 0 ? "start" : "end",
                    },
                    ease: "power2.out",
                });
            });
        }
    }, [activeCategory]);

    const handleCategoryChange = (category: string): void => {
        // Clear auto-rotate timer when user selects a category
        if (autoRotateTimerRef.current) {
            clearInterval(autoRotateTimerRef.current);
        }

        if (category === activeCategory) return;

        // Set new category
        setActiveCategory(category);
    };

    // Function to split skills into rows
    const getSkillRows = (): Skill[][] => {
        const skills = skillsData[activeCategory];
        const itemsPerRow = 6; // 6 items per row
        const rows: Skill[][] = [];

        for (let i = 0; i < skills.length; i += itemsPerRow) {
            rows.push(skills.slice(i, i + itemsPerRow));
        }

        return rows;
    };

    // Render skill icon (either as Image or fallback SVG)
    const renderSkillIcon = (skill: Skill): JSX.Element => {
        if (skill.icon.startsWith('/')) {
            try {
                return (
                    <div className="w-6 h-6 mr-2 grayscale opacity-70">
                        <Image
                            src={skill.icon}
                            alt={`${skill.name} icon`}
                            width={24}
                            height={24}
                            className="w-full h-full object-contain"
                        />
                    </div>
                );
                //eslint-disable-next-line  @typescript-eslint/no-unused-vars
            } catch (error) {
                return (
                    <div className="w-6 h-6 mr-2 grayscale opacity-70">
                        {getIconPlaceholder()}
                    </div>
                );
            }
        }

        // Fallback to placeholder
        return (
            <div className="w-6 h-6 mr-2 grayscale opacity-70">
                {getIconPlaceholder()}
            </div>
        );
    };

    return (
        <section ref={wrapperRef} className="min-h-[800px] sm:min-h-[750px] lg:min-h-[650px]  py-10 md:py-20 bg-gradient-to-b from-white/50 to-transparent dark:from-secondary-dark/50 dark:to-transparent overflow-x-hidden">
            <Container className=" " >
                <div className=" rounded-lg relative z-10">
                    <div className="flex flex-col justify-center w-full space-y-2 md:space-y-4 mb-12">
                        <h2
                            ref={titleRef}
                            className="bottom-clipped relative inline-block overflow-hidden text-center font-anek text-4xl font-normal text-raisin-black sm:text-5xl lg:text-6xl"
                            data-animation="text"
                        >
                            <span className="relative ">Skills & Expertise</span>
                        </h2>
                        <p
                            className="bottom-clipped inline-block overflow-hidden text-center mx-auto w-full font-work text-base font-normal text-gray-600 sm:text-lg lg:max-w-3xl"
                            data-animation="text"
                        >
                            A comprehensive overview of my technical expertise across
                            different domains of software development and technology
                        </p>
                    </div>

                    <div className="categories-container grid  grid-cols-3 sm:grid-cols-4 text-center mx-auto w-full items-center justify-between sm:justify-center  gap-3 mb-8">
                        {Object.keys(skillsData).map((category) => (
                            <button
                                key={category}
                                onClick={() => handleCategoryChange(category)}
                                className={`category-btn px-2.5 py-2.5 md:px-4 md:py-3 rounded-lg  font-medium transition-all relative ${activeCategory === category
                                        ? "text-gray-800"
                                        : "bg-gray-50 text-gray-600 border border-gray-200 hover:border-gray-300"
                                    }`}
                            >
                                {activeCategory === category && (
                                    <div
                                        className="absolute inset-0 rounded-lg"
                                        style={{
                                            border: '1px solid transparent',
                                            backgroundImage: 'linear-gradient(90deg, #f3f4f6, #9ca3af, #1f2937, #9ca3af, #f3f4f6)',
                                            backgroundSize: '500% 100%',
                                            backgroundPosition: `${borderPosition}% 0`,
                                            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                            WebkitMaskComposite: 'xor',
                                            maskComposite: 'exclude',
                                            padding: '1px',
                                        }}
                                    ></div>
                                )}
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </button>
                        ))}
                    </div>

                    <div className="skills-container space-y-4 relative p-3 md:p-6 bg-white hover:shadow-md transition-shadow duration-300 rounded-lg">

                        {getSkillRows().map((row, rowIndex) => (
                            <div
                                key={rowIndex}
                                className={`skills-row grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3`}
                            >
                                {row.map((skill, skillIndex) => (
                                    <div
                                        key={`${skill.name}-${skillIndex}`}
                                        className="skills-row-item bg-gray-50 px-1 py-1.5 md:px-3 md:py-2.5 rounded-lg flex items-center border border-gray-200 hover:border-indigo-200 hover:bg-indigo-50 transition-colors duration-300"
                                    >
                                        {renderSkillIcon(skill)}
                                        <span className=" text-gray-700 text-nowrap">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default SkillsSection;