"use client"
import Footer from "@/components/Footer/Footer";
import Loading from "@/components/Loading/Loading";
import Navbar from "@/components/Navbar/Navbar";
import { useEffect, useState } from "react";
import Container from "../Common/Container";
import { Toaster } from "react-hot-toast";

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
        <div className="relative min-h-screen ">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            {/* Moving Grid Background */}
            <div className="absolute inset-0 -z-10 bg-animated-grid"></div>

            {/* Main Content */}
            <div className=" bg-primary-light/70 dark:bg-primary-dark/70 text-primary-dark dark:text-primary-light pb-3 relative z-10 backdrop-blur-[2px]">
                <Container className=" sticky top-4 z-[999]">
                    <Navbar className="backdrop-blur-3xl" />
                </Container>
                <main className="min-h-[calc(100vh-228px)] mt-5">
                    {children}
                </main>
                <Container>
                    <Footer />
                </Container>
            </div>
        </div>
    )
}
