"use client"
import Container from "@/components/Common/Container";
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
        <div className="px-2 bg-primary-light dark:bg-primary-dark text-primary-dark dark:text-primary-light pb-3">
                <Navbar />
                <main className="min-h-[calc(100vh-150px)] ">
                    {children}
                </main>
                <Footer />
        </div>
    )
}
