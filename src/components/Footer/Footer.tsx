import Container from "../Common/Container";
import NavLogo from "../Navbar/NavLogo";

export default function Footer() {
  return (
    <footer className="flex p-2 py-3 items-center justify-between w-full  border-2 border-secondary-light dark:border-secondary-dark rounded-lg">
      <NavLogo />
      {/* social links */}
      <div></div>
      <div>Copyright © 2023</div>
    </footer>
  )
}
