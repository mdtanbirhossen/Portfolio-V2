"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
export default function Loading() {
    useGSAP(() => { gsap.from('.left-logo', { x: -50, y: -20, opacity: 0, duration: 1.5 }) }, [])
    useGSAP(() => { gsap.from('.right-logo', { x: 50, y: 20, opacity: 0, duration: 1.5 }) }, [])
    return (
        <div className="flex justify-center items-center h-screen bg-primary-light dark:bg-primary-dark">
            <Image className="relative left-8 top-1 left-logo hidden dark:block" src={'/assets/left-white-logo.png'} height={50} width={100} alt="left white image" />
            <Image className="relative left-8 top-1 left-logo dark:hidden" src={'/assets/left-black-logo.png'} height={50} width={100} alt="left black image" />
            <Image className="relative right-8 bottom-1 right-logo hidden dark:block" src={'/assets/right-white-logo.png'} height={50} width={100} alt="right white image" />
            <Image className="relative right-8 bottom-1 right-logo dark:hidden" src={'/assets/right-black-logo.png'} height={50} width={100} alt="right black image" />
        </div>
    )
}
