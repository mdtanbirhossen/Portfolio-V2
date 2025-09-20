"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Calendar, MapPin, Briefcase, Code, ChevronDown, ExternalLink, ArrowRight, Globe } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const experiences = [
    {
      company: "Appify Devs",
      location: "Dhaka, Bangladesh",
      position: "Software Engineer",
      jobType: "Remote",
      duration: "Dec 2024 - Present",
      color: "from-blue-500 to-purple-600",
      icon: "🌟",
      responsibilities: ["Developing both client frontend nd their interactive dashboard", "Contributing to both frontend and backend"],
      projects: ["Contributed to multiple AI product", "Built AI platform echogpt.live"],
    },
    {
      company: "Boom Software UK",
      location: "Buckinghamshire, UK",
      position: "Frontend Developer",
      jobType: "Remote",
      duration: "Aug 2024 - Oct 2024",
      color: "from-blue-500 to-indigo-600",
      icon: "💻",
      responsibilities: ["Leading frontend team", "Worked on web & mobile apps"],
      projects: ["React apps", "React Native apps"],
    },
  ]

  const toggleExpand = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline items animation
      gsap.utils.toArray<HTMLElement>(".exp-item").forEach((item, i) => {
        gsap.fromTo(
          item,
          { autoAlpha: 0, y: i % 2 === 0 ? 100 : -100, scale: 0.9 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1,
            delay: i * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        )
      })

      // Timeline dots bounce
      gsap.utils.toArray<HTMLElement>(".exp-dot").forEach((dot) => {
        gsap.fromTo(
          dot,
          { scale: 0, autoAlpha: 0 },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.6,
            ease: "elastic.out(1,0.5)",
            scrollTrigger: {
              trigger: dot,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        )
      })

      // Section heading animation
      gsap.fromTo(
        ".exp-heading",
        { y: -50, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".exp-heading",
            start: "top 85%",
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-24">
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="exp-heading text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Work Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">My professional journey building digital experiences</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-300 via-purple-300 to-pink-300"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`exp-item relative mb-16 ${index % 2 === 0 ? "md:pr-12 md:text-right md:ml-0 md:mr-auto" : "md:pl-12 md:ml-auto md:mr-0"} md:w-1/2 w-full`}
            >
              {/* Timeline dot */}
              <div
                className={`exp-dot absolute top-0 md:top-2 ${index % 2 === 0 ? "right-0 md:-right-4" : "left-0 md:-left-4"} w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center z-10`}
              >
                <span className="text-xl">{exp.icon}</span>
              </div>

              {/* Experience card */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300">
                <div className={`h-2 bg-gradient-to-r ${exp.color}`} />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900">{exp.company}</h3>
                  <p className="text-xl text-gray-700 font-medium">{exp.position}</p>
                  <p className="text-gray-600 mt-2">{exp.duration} • {exp.location}</p>
                  <button
                    onClick={() => toggleExpand(index)}
                    className="flex items-center justify-between w-full mt-4 py-2 text-gray-800 font-medium"
                  >
                    <span className="flex items-center">
                      <Briefcase className="w-5 h-5 mr-2" />
                      Responsibilities & Projects
                    </span>
                    <ChevronDown className={`w-5 h-5 transform transition-transform ${activeIndex === index ? "rotate-180" : ""}`} />
                  </button>
                  {activeIndex === index && (
                    <div className="mt-4 space-y-4">
                      <ul className="pl-6 list-disc text-gray-700">
                        {exp.responsibilities.map((r, i) => (
                          <li key={i}>{r}</li>
                        ))}
                      </ul>
                      <ul className="pl-6 list-disc text-gray-700">
                        {exp.projects.map((p, i) => (
                          <li key={i}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:scale-105 transition-transform"
          >
            Let's Work Together
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Experience
