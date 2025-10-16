"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeaturedProjectCard from "./FeaturedProjectCard";
import projects from "./projects"
import Container from "../Common/Container";
import Title from "../Common/Title";
const FeaturedProjects = () => {
    const wrapperRef = useRef(null);


    useEffect(() => {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {

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
        }, wrapperRef);

        return () => {
            // Clean up the context and ScrollTrigger
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            ctx.revert();
        };
    }, []);

    return (
        <>

            {/* Featured Projects Section */}
            <div className="w-full bg-gradient-to-b from-white/50 dark:from-black/50 to-transparent py-16 md:py-20 lg:py-24" id="projects">
                <Container>
                    <Title title="Featured Projects" subtitle="Showcasing innovative ideas brought to life through design and development." />

                    {/* Projects List */}
                    {projects.slice(0,2).map((project) => (
                        <FeaturedProjectCard key={project?.name} project={project} />
                    ))}

                    {/* TODO: See More button */}
                </Container>
            </div>
        </>
    );
};

export default FeaturedProjects;
