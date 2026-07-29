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
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-4">
        <Link href="/" className="font-serif text-base text-ink">
          Jason Grant-Rowles
        </Link>
        <ul className="flex flex-wrap gap-x-5 gap-y-1 text-xs uppercase tracking-[0.08em]">
          {navItems.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={
                    isActive
                      ? "border-b border-accent text-ink"
                      : "text-muted hover:text-ink"
                  }
                >
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
