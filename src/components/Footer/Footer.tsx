
import NavLogo from "../Navbar/NavLogo";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { PiWhatsappLogo } from "react-icons/pi";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="flex flex-col lg:flex-row p-2 py-3 items-center lg:justify-between w-full  border-2 border-secondary-light dark:border-secondary-dark rounded-lg">
      <NavLogo className="hidden lg:flex" />
      {/* social links */}
      <div className="flex gap-3 text-lg md:text-xl lg:text-2xl ">
        <Link target="_blank" className=" p-2 md:p-3 bg-primary-dark text-primary-light dark:bg-primary-light dark:text-primary-dark hover:bg-primary-light hover:text-primary-dark dark:hover:bg-primary-dark dark:hover:text-primary-light border-2 border-primary-dark dark:border-primary-light duration-300 rounded-full" href={'https://github.com/mdtanbirhossen'}><FiGithub /></Link>
        <Link target="_blank" className=" p-2 md:p-3 bg-primary-dark text-primary-light dark:bg-primary-light dark:text-primary-dark hover:bg-primary-light hover:text-primary-dark dark:hover:bg-primary-dark dark:hover:text-primary-light border-2 border-primary-dark dark:border-primary-light duration-300 rounded-full" href={'https://www.linkedin.com/in/md-tanbir-hossen/'}><FiLinkedin /></Link>
        <Link target="_blank" className=" p-2 md:p-3 bg-primary-dark text-primary-light dark:bg-primary-light dark:text-primary-dark hover:bg-primary-light hover:text-primary-dark dark:hover:bg-primary-dark dark:hover:text-primary-light border-2 border-primary-dark dark:border-primary-light duration-300 rounded-full" href={'https://x.com/Mdtanbirhosen81'}><FaXTwitter /></Link>
        <Link target="_blank" className=" p-2 md:p-3 bg-primary-dark text-primary-light dark:bg-primary-light dark:text-primary-dark hover:bg-primary-light hover:text-primary-dark dark:hover:bg-primary-dark dark:hover:text-primary-light border-2 border-primary-dark dark:border-primary-light duration-300 rounded-full" href={'https://wa.me/8801888156886'}><PiWhatsappLogo /></Link>
      </div>
      <div>© 2025. All rights reserved.</div>
    </footer>
  )
}
