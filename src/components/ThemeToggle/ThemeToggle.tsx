
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import gsap from "gsap"


export function ThemeToggle() {
  const { setTheme } = useTheme()
  const sunRef = React.useRef<SVGSVGElement | null>(null)

const handleMouseEnter = () => {
  if (sunRef.current && !gsap.isTweening(sunRef.current)) {
    gsap.to(sunRef.current, {
      rotation: "+=360",
      duration: 1,
      ease: "none",
      repeat: -1,
      transformOrigin: "50% 50%"
    })
  }
}

const handleMouseLeave = () => {
  if (sunRef.current) {
    // gsap.killTweensOf(sunRef.current)
    // gsap.to(sunRef.current, {
    //   rotation: 0,
    //   duration: 0.5,
    //   ease: "power2.out",
    // })
  }
}

  return (
    <div className=" bg-secondary-light text-secondary-dark dark:text-secondary-light dark:bg-secondary-dark rounded-full p-1.5 cursor-pointer ">
      <Sun 
      // ref={sunRef}
      onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} onClick={() => setTheme("dark")} className="h-[1.2rem] w-[1.2rem] animate-spin rounded-full dark:scale-0 dark:-rotate-90 dark:hidden" />
      <Moon onClick={() => setTheme("light")} className=" h-[1.2rem] w-[1.2rem] animate-pulse dark:scale-100 dark:rotate-0 hidden dark:block" />
    </div>
  )
}
