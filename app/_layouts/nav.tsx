'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation'

export default function Nav() {
    const pathname = usePathname()
    const navLinks = [
        {
            "href": "/",
            "name": "Home"
        },
        {
            "href": "/about",
            "name": "About"
        }
    ]
    return (
        <nav className="flex">
            <ul className="flex">
                {navLinks.map((link) => {
                    const isActive = pathname === link.href
                    return (
                        <li className="pl-5" key={link.name}>
                            <Link
                                href={link.href}
                                className={isActive ? "text-blue-500 underline" : "text-black"}
                            >
                                {link.name}
                            </Link>
                        </li>
                    )
                }
                )
                }
            </ul>
        </nav>
    )
}