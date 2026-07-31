import { describe, expect, test, vi, beforeEach } from "vitest"
import { render, screen } from "@testing-library/react"

const { usePathname } = vi.hoisted(() => ({ usePathname: vi.fn() }))

vi.mock("next/navigation", () => ({
  usePathname,
}))

import Nav from "@/components/Nav"

describe("Nav", () => {
  beforeEach(() => {
    usePathname.mockReset()
  })

  test("renders a link for every nav item", () => {
    usePathname.mockReturnValue("/")
    render(<Nav />)

    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /publications/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /advisory & practice/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /cv/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /contact/i })).toBeInTheDocument()
  })

  test("marks Home active only on the exact root path", () => {
    usePathname.mockReturnValue("/")
    render(<Nav />)

    expect(screen.getByRole("link", { name: /home/i })).toHaveClass("bg-accent")
    expect(screen.getByRole("link", { name: /publications/i })).not.toHaveClass("bg-accent")
  })

  test("does not mark Home active on nested paths", () => {
    usePathname.mockReturnValue("/publications/2024")
    render(<Nav />)

    expect(screen.getByRole("link", { name: /home/i })).not.toHaveClass("bg-accent")
    expect(screen.getByRole("link", { name: /publications/i })).toHaveClass("bg-accent")
  })

  test("marks a section active via startsWith for nested routes", () => {
    usePathname.mockReturnValue("/advisory-practice/some-sub-page")
    render(<Nav />)

    expect(screen.getByRole("link", { name: /advisory & practice/i })).toHaveClass("bg-accent")
  })

  test("marks no item active on an unrelated path", () => {
    usePathname.mockReturnValue("/studio")
    render(<Nav />)

    const activeLinks = screen
      .getAllByRole("link")
      .filter((link) => link.className.split(" ").includes("bg-accent"))
    expect(activeLinks).toHaveLength(0)
  })

  test("brand link always points home", () => {
    usePathname.mockReturnValue("/cv")
    render(<Nav />)

    expect(screen.getByRole("link", { name: /jason grant-rowles/i })).toHaveAttribute("href", "/")
  })
})
