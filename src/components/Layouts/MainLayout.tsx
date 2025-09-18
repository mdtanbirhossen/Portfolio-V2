"use client"

import Footer from "@/components/Footer/Footer";
import Loading from "@/components/Loading/Loading";
import Navbar from "@/components/Navbar/Navbar";
import { useEffect, useState } from "react";
import Particles from "@/components/Particles/Particles"; // adjust import path

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setLoading(false)
        }, 2000);
        return () => clearTimeout(timeOut)
    }, [])

    if (loading) return <Loading />

    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            {/* Background Particles */}
            <div className="fixed inset-0 -z-10">
                 <Particles
                 className=" bg-primary-light dark:bg-primary-dark"
                    particleColors={['#0000', '#0000']}
                    particleCount={1200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={200}
                    moveParticlesOnHover={false}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>

            {/* Main Content */}
            <div className="px-2 
                            text-primary-dark dark:text-primary-light  relative z-10">
                <Navbar />
                <main className="min-h-[calc(100vh-144px)]">
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    )
}
