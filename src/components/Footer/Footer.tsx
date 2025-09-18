import Container from "../Common/Container";
import NavLogo from "../Navbar/NavLogo";

export default function Footer() {
  return (
    <Container className="flex  items-center justify-around w-full h-20 border-2 border-secondary-light dark:border-secondary-dark rounded-lg">
      <NavLogo />
      <div>navs or others</div>
      <div>Copyright © 2023</div>
    </Container>
  )
}
