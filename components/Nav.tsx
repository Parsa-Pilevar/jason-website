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
    <nav className="sticky top-0 z-10 border-b border-hairline bg-paper/90 backdrop-blur-sm">
      <div className="h-[3px] bg-accent-gold" aria-hidden="true" />
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-4 lg:max-w-4xl lg:px-10 xl:max-w-5xl xl:px-16">
        <Link href="/" className="flex items-center gap-2 font-serif text-base text-ink">
          <span className="h-2 w-2 rounded-full bg-accent-gold" aria-hidden="true" />
          Jason Grant-Rowles
        </Link>
        <ul className="flex flex-wrap gap-x-2 gap-y-2 text-xs uppercase tracking-[0.08em]">
          {navItems.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)

            return (
              <li key={item.href}>
                <Link href={item.href} className={isActive ? "rounded-full bg-accent px-3 py-1 text-paper" : "rounded-full px-3 py-1 text-muted transition-colors duration-150 hover:bg-accent-wash hover:text-ink"}>
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
