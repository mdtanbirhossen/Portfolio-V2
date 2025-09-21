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
import { Button } from "../ui/button"

gsap.registerPlugin(ScrollTrigger)

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null)


  return (
    <section ref={containerRef} className="relative bg-gradient-to-b from-white/50 dark:from-black/50 to-transparent py-24">
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
            className=""
          >
            {/* TODO: need to update button animation */}
            <Button>
              Let&apos;s Work Together
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default Experience
