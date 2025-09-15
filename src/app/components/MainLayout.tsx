"use client"
import Container from "@/components/Common/Container";
import Footer from "@/components/Footer/Footer";
import Loading from "@/components/Loading/Loading";
import Navbar from "@/components/Navbar/Navbar";
import { ThemeProvider } from "@/components/Provider/theme-provider";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const timeOut = setTimeout(() => {
            setLoading(false)
        }, 2000);
        return () => clearTimeout(timeOut)
    }, [])

    if (loading) return <Loading />
    return (
        <div className="px-2">
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <Navbar />
                <main className="min-h-[calc(100vh-136px)] px-2 sm:px-4 lg:px-6">
                    {children}
                </main>
                <Container><Footer /></Container>
            </ThemeProvider >
        </div>
    )
}
