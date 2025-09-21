"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, CalendarClock, MapPin } from "lucide-react"
import Link from "next/link"
import Title from "../Common/Title"
import Image from "next/image"
import Container from "../Common/Container"
import { ExperienceTabs } from "./ExperienceTabs"

gsap.registerPlugin(ScrollTrigger)

const Experience = () => {
  // const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // const experiences = [
  //   {
  //     company: "Appify Devs",
  //     location: "Dhaka, Bangladesh",
  //     position: "Software Engineer",
  //     jobType: "Remote",
  //     duration: "Dec 2024 - Present",
  //     color: "from-blue-500 to-purple-600",
  //     icon: "🌟",
  //     responsibilities: ["Developing both client frontend nd their interactive dashboard", "Contributing to both frontend and backend"],
  //     projects: ["Contributed to multiple AI product", "Built AI platform echogpt.live"],
  //   },

  // ]

  // const toggleExpand = (index: number) => {
  //   setActiveIndex(activeIndex === index ? null : index)
  // }

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     // Timeline items animation
  //     gsap.utils.toArray<HTMLElement>(".exp-item").forEach((item, i) => {
  //       gsap.fromTo(
  //         item,
  //         { autoAlpha: 0, y: i % 2 === 0 ? 100 : -100, scale: 0.9 },
  //         {
  //           autoAlpha: 1,
  //           y: 0,
  //           scale: 1,
  //           duration: 1,
  //           delay: i * 0.2,
  //           ease: "power3.out",
  //           scrollTrigger: {
  //             trigger: item,
  //             start: "top 80%",
  //             toggleActions: "play none none reverse",
  //           },
  //         }
  //       )
  //     })

  //     // Timeline dots bounce
  //     gsap.utils.toArray<HTMLElement>(".exp-dot").forEach((dot) => {
  //       gsap.fromTo(
  //         dot,
  //         { scale: 0, autoAlpha: 0 },
  //         {
  //           scale: 1,
  //           autoAlpha: 1,
  //           duration: 0.6,
  //           ease: "elastic.out(1,0.5)",
  //           scrollTrigger: {
  //             trigger: dot,
  //             start: "top 85%",
  //             toggleActions: "play none none reverse",
  //           },
  //         }
  //       )
  //     })

  //     // Section heading animation
  //     gsap.fromTo(
  //       ".exp-heading",
  //       { y: -50, autoAlpha: 0 },
  //       {
  //         y: 0,
  //         autoAlpha: 1,
  //         duration: 1,
  //         ease: "power4.out",
  //         scrollTrigger: {
  //           trigger: ".exp-heading",
  //           start: "top 85%",
  //         },
  //       }
  //     )
  //   }, containerRef)

  //   return () => ctx.revert()
  // }, [])

  return (
    <section ref={containerRef} className="relative bg-gradient-to-b from-white/50 to-transparent py-24">
      <Container className="">
        {/* title and subtitle */}
        <Title title="Professional Experience" subtitle="My professional journey building digital experiences" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-2xl bg-primary-light dark:bg-primary-dark p-1">
          {/* company name and intro */}
          <div className=" grid-cols-1 p-5 rounded-2xl flex flex-col  items-center">
            <Image src={'/assets/appifydevs.svg'} height={250} width={250} alt="Appify Devs logo" />
            <h2 className="text-xl sm:text-2xl xl:text-3xl font-bold  mt-4">Software Engineer</h2>
            <p className="flex gap-1 items-center text-secondary-dark dark:text-secondary-light-text mt-2"><CalendarClock /> Mar 2025 - Sep 2025</p>
            <p className="flex gap-1 items-center text-secondary-dark dark:text-secondary-light-text mt-2"><MapPin /> Dhaka, Bangladesh</p>

          </div>
          <div className=" grid-cols-1 lg:col-span-2 bg-secondary-light/50 dark:bg-secondary-dark/50 rounded-2xl">
            <ExperienceTabs />
          </div>
        </div>


        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:scale-105 transition-transform"
          >
            {/* TODO: need to update button animation */}
            Let&apos;s Work Together
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default Experience
