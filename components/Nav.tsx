'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/publications", label: "Publications" },
  { href: "/practice", label: "Practice" },
  { href: "/advisory", label: "Advisory" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="border-b border-zinc-200">
      <ul className="mx-auto flex max-w-3xl flex-wrap gap-x-6 gap-y-2 px-6 py-4 text-sm">
        {navItems.map((item) => {
          const isActive =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={
                  isActive
                    ? "font-medium text-black"
                    : "text-zinc-500 hover:text-black"
                }
              >
                {item.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
