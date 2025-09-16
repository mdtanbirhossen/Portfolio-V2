import gsap from 'gsap';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useRef } from 'react'

export const navLinks = [
    { label: 'home', ariaLabel: 'Home', href: '/' },
    { label: 'project', ariaLabel: 'Project', href: '/project' },
    { label: 'about me', ariaLabel: 'About me', href: '/about-me' },
    { label: 'contact', ariaLabel: 'Contact', href: '/contact' },
    { label: 'resume', ariaLabel: 'Resume', href: '/resume' },
]

export default function NavLinks() {
    const pathname = usePathname();

    // Store refs for all links
    const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);



    // Hover animation
    const handleMouseEnter = (index: number) => {
        const el = linkRefs.current[index];
        if (el) {
            gsap.to(el, {
                y: -3,
                scale: 1.1,
                duration: 0.3,
                ease: "power3.out",
            });
        }
    };

    const handleMouseLeave = (index: number) => {
        const el = linkRefs.current[index];
        if (el) {
            gsap.to(el, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: "power3.out",
            });
        }
    };
    return (
        <>
            {
                navLinks.map((item, index) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        ref={(el) => {
                            linkRefs.current[index] = el;
                        }}
                        className={`whitespace-nowrap ${pathname === item.href ? 'active border-2 border-secondary-light dark:border-secondary-dark' : ''} px-2 py-1 rounded-md`}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    >
                        {item.ariaLabel}
                    </Link>
                ))
            }
        </>
    )
}
