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
        <>
            <Navbar />
            <main className="min-h-[calc(100vh-136px)] ">
                {children}
            </main>
            <Footer />
        </>
    )
}
