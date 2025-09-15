import Link from "next/link"
import NavLogo from "./NavLogo"
import { ThemeToggle } from "../ThemeToggle/ThemeToggle"
import Container from "../Common/Container"

export default function Navbar({ className }: { className?: string }) {
  return (
    <Container className={`flex justify-between items-center px-4 py-2 text-[#1e2832] border-[#ececec] border-2 rounded-full my-4 sticky top-4  bg-opacity-80 backdrop-blur-xl z-50 ${className}`}>
      <NavLogo />
      <div className=" gap-4 hidden md:flex items-center dark:text-white">
        <Link href={'/'}>Home</Link>
        <Link href={'/project'}>Project</Link>
        <Link href={'/about-me'}>About me</Link>
        <Link target="_blank" href={'/contact'}>Contact</Link>
        <a target="_blank" href="">Resume</a>
        <ThemeToggle />
      </div>
    </Container>
  )
}
