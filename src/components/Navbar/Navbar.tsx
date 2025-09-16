
import NavLogo from "./NavLogo"
import { ThemeToggle } from "../ThemeToggle/ThemeToggle"
import Container from "../Common/Container"
import NavLinks from "./NavLinks"
import NavMenu from "./NavMenu"

export default function Navbar({ className }: { className?: string }) {

  return (
    <Container
      className={`flex justify-between items-center px-3 py-2 text-[#1e2832] border-white dark:border-secondary-dark border-2 rounded-full sticky top-4 bg-opacity-80 backdrop-blur-xl z-50 ${className}`}
    >
      <NavLogo />
      <div className="flex items-center gap-2">
        <div className="gap-1.5 lg:gap-4  hidden md:flex items-center dark:text-white">
          <NavLinks />
        </div>
        <NavMenu className="md:hidden flex items-center" />

        <ThemeToggle />
      </div>
    </Container>
  )
}
