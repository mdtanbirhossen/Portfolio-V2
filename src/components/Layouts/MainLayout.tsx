"use client"
import Footer from "@/components/Footer/Footer";
import Loading from "@/components/Loading/Loading";
import Navbar from "@/components/Navbar/Navbar";
import { useEffect, useState } from "react";

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
        <div className="relative min-h-screen overflow-hidden">
            {/* Moving Grid Background */}
            <div className="absolute inset-0 -z-10 bg-animated-grid-light dark:bg-animated-grid-dark"></div>

            {/* Main Content */}
            <div className="px-2 bg-primary-light/70 dark:bg-primary-dark/70 text-primary-dark dark:text-primary-light pb-3 relative z-10 backdrop-blur-[2px]">
                <Navbar />
                <main className="min-h-[calc(100vh-145px)]">
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    )
}
