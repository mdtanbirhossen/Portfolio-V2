"use client"

import { useEffect, useState, useRef } from "react"
import { FaGithub } from "react-icons/fa"
// import { Bar, Line } from "react-chartjs-2"
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Container from "../Common/Container"

// ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend)
gsap.registerPlugin(ScrollTrigger)

// Types
interface ContributionDay {
    date: string
    count: number
}

interface LanguageStat {
    name: string
    count: number
}

interface GithubStats {
    totalCommits: number
    repositories: number
    pullRequests: number
    stars: number
    languages: LanguageStat[]
    monthlyCommits: number[]
}

interface GithubContributionProps {
    username?: string
}

const GithubContribution: React.FC<GithubContributionProps> = ({ username = "mdtanbirhossen" }) => {
    const [contributions, setContributions] = useState<ContributionDay[]>([])
    const [displayedContributions, setDisplayedContributions] = useState<ContributionDay[]>([])
    const [totalContributions, setTotalContributions] = useState<number>(0)
    const [stats, setStats] = useState<GithubStats | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear())

    const containerRef = useRef<HTMLDivElement>(null)
    const headerRef = useRef<HTMLDivElement>(null)
    const statsRef = useRef<HTMLDivElement>(null)
    const chartRef = useRef<HTMLDivElement>(null)

    // Fetch contributions
    useEffect(() => {
        const fetchContributions = async () => {
            try {
                const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}`)
                if (!response.ok) throw new Error("Failed to fetch contributions")
                const data = await response.json()
            

                setContributions(data.contributions)
                updateDisplayedContributions(data.contributions, selectedYear)

                // Mock stats
                setStats({
                    totalCommits: (Object.values(data.total) as number[]).reduce(
                        (sum, commits) => sum + commits,
                        0
                    ),
                    repositories: 115,
                    pullRequests: 200,
                    stars: 15,
                    languages: [
                        { name: "JavaScript", count: 70 },
                        { name: "TypeScript", count: 65 },
                        { name: "Python", count: 12 },
                    ],
                    monthlyCommits: [30, 10, 7, 36, 45, 80, 100, 120, 170, 160, 220, 190],
                })
            } catch (err: any) {
                setError("Error fetching data: " + err.message)
                console.error("Error fetching data:", err)
            }
        }
        fetchContributions()
    }, [username, selectedYear])

    useEffect(() => {
        updateDisplayedContributions(contributions, selectedYear)
    }, [selectedYear, contributions])

    // GSAP Animations
    useEffect(() => {
        if (!containerRef.current) return

        const ctx = gsap.context(() => {
            gsap.from(headerRef.current, { opacity: 0, y: 30, duration: 0.6 })
            gsap.from(Array.from(statsRef.current?.children ?? []), {
                opacity: 0,
                y: 20,
                stagger: 0.2,
                duration: 0.6,
                scrollTrigger: { trigger: statsRef.current, start: "top 80%" },
            })
            gsap.from(Array.from(chartRef.current?.children ?? []), {
                opacity: 0,
                y: 30,
                stagger: 0.2,
                duration: 0.6,
                scrollTrigger: { trigger: chartRef.current, start: "top 80%" },
            })
        }, containerRef)

        return () => ctx.revert()
    }, [stats])

    const updateDisplayedContributions = (allContributions: ContributionDay[], year: number) => {
        const endDate = new Date(year, 11, 31)
        const startDate = new Date(endDate)
        startDate.setFullYear(startDate.getFullYear() - 1)
        startDate.setDate(startDate.getDate() + 1)

        const filteredContributions = allContributions
            .filter((day) => {
                const date = new Date(day.date)
                return date >= startDate && date <= endDate
            })
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

        setDisplayedContributions(filteredContributions)
        setTotalContributions(filteredContributions.reduce((sum, day) => sum + day.count, 0))
    }

    const getContributionColor = (count: number) => {
        if (count === 0) return "bg-gray-200"
        if (count < 5) return "bg-[#a7f3d0]"
        if (count < 10) return "bg-[#34d399]"
        if (count < 15) return "bg-[#10b981]"
        return "bg-[#047857]"
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    }

    const weeks: ContributionDay[][] = []
    for (let i = 0; i < displayedContributions.length; i += 7) {
        weeks.push(displayedContributions.slice(i, i + 7))
    }

    const months = Array.from(new Set(displayedContributions.map((d) => {
        const date = new Date(d.date)
        return date.toLocaleString("default", { month: "short" })
    })))

    // Chart Data
    const languageChartData = {
        labels: stats?.languages.map((lang) => lang.name) || [],
        datasets: [{ label: "Repositories", data: stats?.languages.map((lang) => lang.count) || [], backgroundColor: "rgba(59, 130, 246, 0.6)", borderColor: "#3b82f6", borderWidth: 1 }],
    }

    const contributionTrendData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{ label: "Commits", data: stats?.monthlyCommits || [], fill: true, backgroundColor: "rgba(192, 38, 211, 0.2)", borderColor: "#c026d3", tension: 0.4 }],
    }

    const chartOptions = {
        maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { backgroundColor: "#1f2937", titleColor: "#fff", bodyColor: "#fff" } },
        scales: { x: { ticks: { color: "#9ca3af" } }, y: { ticks: { color: "#9ca3af" }, grid: { color: "rgba(156, 163, 175, 0.2)" } } },
    }

    if (error) return <div className="text-center text-red-600 p-8">{error}</div>

    return (
        <section ref={containerRef} className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent to-transparent">
            <Container className="">
                <div className="relative  bg-transparent backdrop-blur-xl rounded-3xl shadow-2xl border border-secondary-dark overflow-hidden">
                    <div className="relative p-10">
                        <div ref={headerRef} className="flex items-center gap-4 mb-6">
                            <FaGithub className="w-10 h-10 " />
                            <div>
                                <h1 className="text-3xl font-extrabold">GitHub Contributions</h1>
                                <p className="text-sm text-secondary-dark dark:text-secondary-light-text mt-1">Coding the future, one commit at a time — @{username}</p>
                            </div>
                        </div>

                        {/* Stats */}
                        {stats && (
                            <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                {[{ label: "Commits", value: stats.totalCommits, icon: "📝" },
                                { label: "Repositories", value: stats.repositories, icon: "📂" },
                                { label: "Pull Requests", value: stats.pullRequests, icon: "🔄" },
                                { label: "Stars", value: stats.stars, icon: "⭐" }].map(stat => (
                                    <div key={stat.label} className="bg-gray-100/50 backdrop-blur-sm p-4 rounded-lg border border-gray-200/50 text-center">
                                        <div className="text-2xl mb-2">{stat.icon}</div>
                                        <div className="text-xl font-semibold text-gray-900">{stat.value}</div>
                                        <div className="text-sm text-gray-600">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Contribution Graph */}
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-semibold ">{totalContributions} Contributions</h2>
                            <select
                                className="bg-gray-100/80 backdrop-blur-sm text-gray-900 rounded-lg px-4 py-2 text-sm font-medium border border-gray-200/50 hover:bg-gray-200 transition-colors"
                                value={selectedYear}
                                onChange={(e) => setSelectedYear(Number(e.target.value))}
                            >
                                {[...Array(3)].map((_, i) => {
                                    const year = new Date().getFullYear() - i
                                    return <option key={year} value={year}>{year}</option>
                                })}
                            </select>
                        </div>

                        {/* Contributions Grid */}
                        <div className="overflow-x-auto md:overflow-hidden mb-8">
                            <div className="inline-flex flex-col min-w-full overflow-auto">
                                <div className="flex ml-[52px] justify-between w-[calc(100%-52px)] mb-3">
                                    {months.map((month, index) => (
                                        <div key={index} className="text-sm text-gray-600 font-medium w-[calc(100%/12)] text-center">{month}</div>
                                    ))}
                                </div>

                                <div className="flex">
                                    <div className="flex flex-col mr-3">
                                        {["Mon", "", "Wed", "", "Fri", ""].map((day, i) => (
                                            <div key={i} className="h-[14px] text-sm text-gray-600 leading-[14px] w-10 text-right pr-3 mb-[3px]">{day}</div>
                                        ))}
                                    </div>

                                    <div className="flex gap-[3px] flex-1 w-[calc(100%-52px)]">
                                        {weeks.map((week, weekIndex) => (
                                            <div key={weekIndex} className="flex flex-col gap-[3px] flex-1">
                                                {week.map(day => (
                                                    <div
                                                        key={day.date}
                                                        className={`w-[18.5px] h-[14px] transition-all duration-200 ${getContributionColor(day.count)}`}
                                                        style={{
                                                            clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)'
                                                        }}
                                                        title={`${day.count} contributions on ${formatDate(day.date)}`}
                                                    />

                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Charts */}
                        {stats && (
                            <div ref={chartRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                {/* <div className="bg-gray-100/50 backdrop-blur-sm p-6 rounded-lg border border-gray-200/50">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Languages</h3>
                  <div className="h-[200px]"><Bar data={languageChartData} options={chartOptions} /></div>
                </div>
                <div className="bg-gray-100/50 backdrop-blur-sm p-6 rounded-lg border border-gray-200/50">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Contribution Trend</h3>
                  <div className="h-[200px]"><Line data={contributionTrendData} options={chartOptions} /></div>
                </div> */}
                            </div>
                        )}

                        {/* Footer */}
                        <div className="flex justify-between items-center mt-6 text-sm text-gray-600">
                            <Link href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-profile#contributions" className="hover:text-gray-900 transition-colors">
                                Learn how we count contributions
                            </Link>
                            <div className="flex items-center gap-2">
                                <span>Less</span>
                                <div className="flex gap-[3px]">
                                    {[0, 4, 8, 12, 16].map(count => (
                                        <div key={count} style={{
                                            clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)'
                                        }} className={`w-[18.5px] h-[14px]   ${getContributionColor(count)}`} />
                                    ))}
                                </div>
                                <span>More</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default GithubContribution
