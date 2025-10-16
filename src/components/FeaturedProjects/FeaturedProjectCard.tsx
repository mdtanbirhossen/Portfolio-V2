// Featured Project Component
"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";

type ProjectType = {
    name: string;
    featuredImage?: string;
    tags: string[];
    description: string;
    link?: string;
    client_repo_link?: string | null;
    server_repo_link?: string | null;
};

type ProjectCardType = {
    project: ProjectType;
};

function FeaturedProjectCard({ project }: ProjectCardType) {
    const {
        name,
        description,
        tags,
        featuredImage,
        link,
        client_repo_link,
        server_repo_link,
    } = project;

    const wrapperRef = useRef(null);
    const [isStaticImage, setIsStaticImage] = useState(false);
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        let cleanup: (() => void) | undefined;

        const setupAnimations = (isStatic: boolean) => {
            const ctx = gsap.context(() => {
                // Always animate the wrapper
                gsap.to(wrapperRef.current, {
                    scrollTrigger: {
                        trigger: wrapperRef.current,
                        start: "top bottom",
                    },
                    y: 0,
                    duration: 2,
                });

                // Only animate the image if it's not static and there's a featured image
                if (!isStatic && featuredImage) {
                    gsap.to('[data-animation="website-img"]', {
                        scrollTrigger: {
                            trigger: wrapperRef.current,
                            start: "top bottom",
                            end: "top 50%",
                            scrub: 1,
                        },
                        y: 0,
                    });
                }
            }, wrapperRef);

            cleanup = () => ctx.revert();
        };

        const checkImageHeight = () => {
            if (imageRef.current && featuredImage) {
                const imgHeight = imageRef.current.naturalHeight;
                // If image height is less than 600px, make it static with padding
                const shouldBeStatic = imgHeight < 600;
                setIsStaticImage(shouldBeStatic);
                setupAnimations(shouldBeStatic);
            } else {
                // No image or no ref, just animate wrapper
                setupAnimations(true);
            }
        };

        // Set up animations based on image loading state
        if (featuredImage && imageRef.current) {
            if (imageRef.current.complete && imageRef.current.naturalHeight > 0) {
                checkImageHeight();
            } else {
                imageRef.current.onload = checkImageHeight;
                // Fallback: if image fails to load, still set up basic animations
                imageRef.current.onerror = () => setupAnimations(true);
            }
        } else {
            // No featured image, just set up wrapper animation
            setupAnimations(true);
        }

        return () => {
            if (cleanup) cleanup();
        };
    }, [featuredImage]);

    return (
        <div
            className="w-full px-4 translate-y-60 py-14 max-w-7xl mx-auto"
            ref={wrapperRef}
        >
            <div className="centered-block flex h-full flex-col items-center gap-10 lg:flex-row">
                <div className="relative w-full overflow-hidden lg:w-1/2">
                    <div className="absolute right-0 top-0 z-20 h-[calc(100%-15px)] w-[12%] "></div>
                    <div className="absolute left-0 top-0 z-20 h-[calc(100%-15px)] w-[12%] "></div>
                    <Image
                        src="/assets/macbook-screen.png"
                        alt="Screen mockup"
                        width={800}
                        height={500}
                        priority
                        className="relative z-30 h-full w-full object-contain [transform-style:preserve-3d] [transform:translateZ(1000px)]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute left-0 top-1 z-10 h-[calc(100%-15px)] w-full overflow-hidden">
                        {featuredImage && (
                            <Image
                                ref={imageRef}
                                data-animation="website-img"
                                src={featuredImage}
                                width={700}
                                height={400}
                                alt={name || "Project screenshot"}
                                className={`absolute left-0 right-0 top-1 z-10 mx-auto h-auto w-[78%] object-contain will-change-transform ${isStaticImage
                                    ? "static-image-padding translate-y-0"
                                    : "-translate-y-64"
                                    }`}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        )}
                    </div>
                </div>
                <div className="flex w-full flex-col justify-start gap-3 lg:w-1/2">
                    <h2
                        data-animation="text"
                        className="mr-1 font-anek-bangla text-[26px] font-medium text-raisin-black"
                    >
                        {name}
                    </h2>
                    <div className="mb-2 flex flex-wrap gap-3">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-md bg-gray-200 px-3 py-2 font-anek-bangla text-sm text-neutral-600 duration-500 hover:cursor-default hover:bg-gray-600 hover:text-white hover:drop-shadow-md sm:text-base"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <p className="text-base text-neutral-600 sm:text-lg">{description}</p>

                    <div className="flex gap-4">
                        {link && (
                            <a
                                data-animation="text"
                                href={link}
                                target="_blank"
                                rel="nofollow"
                                className="flex gap-1 text-base text-neutral-600 sm:text-lg"
                            >
                                <span>Visit Website</span>
                            </a>
                        )}
                        {client_repo_link && (
                            <a
                                data-animation="text"
                                href={client_repo_link}
                                target="_blank"
                                rel="nofollow"
                                className="flex gap-1 text-base text-neutral-600 sm:text-lg"
                            >
                                <span>Client Side Repo</span>
                            </a>
                        )}
                        {server_repo_link && (
                            <a
                                data-animation="text"
                                href={server_repo_link}
                                target="_blank"
                                rel="nofollow"
                                className="flex gap-1 text-base text-neutral-600 sm:text-lg"
                            >
                                <span>Server Side Repo</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedProjectCard