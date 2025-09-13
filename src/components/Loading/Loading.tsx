"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
export default function Loading() {
    useGSAP(() => { gsap.from('.left-logo', { x: -50, y: -20, opacity: 0, duration: 1.5 }) }, [])
    useGSAP(() => { gsap.from('.right-logo', { x: 50, y: 20, opacity: 0, duration: 1.5 }) }, [])
    return (
        <div className="flex justify-center items-center h-screen bg-black">
            <Image className="relative left-8 top-1 left-logo" src={'/assets/left-white-logo.png'} height={50} width={100} alt="left white image" />
            <Image className="relative right-8 bottom-1 right-logo" src={'/assets/right-white-logo.png'} height={50} width={100} alt="left white image" />
        </div>
    )
}
