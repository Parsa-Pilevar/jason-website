import { describe, expect, test } from "vitest"
import { render, screen } from "@testing-library/react"
import RoleList from "@/components/RoleList"
import type { Role } from "@/lib/types"

describe("RoleList", () => {
  test("renders a title and org for each role", () => {
    const roles: Role[] = [
      { title: "Advisor", org: "Acme Corp" },
      { title: "Board Member", org: "Other Org" },
    ]
    render(<RoleList roles={roles} />)

    expect(screen.getByText("Advisor")).toBeInTheDocument()
    expect(screen.getByText("Acme Corp")).toBeInTheDocument()
    expect(screen.getByText("Board Member")).toBeInTheDocument()
    expect(screen.getByText("Other Org")).toBeInTheDocument()
  })

  test("renders org as a link when url is provided", () => {
    const roles: Role[] = [{ title: "Advisor", org: "Acme Corp", url: "https://acme.example" }]
    render(<RoleList roles={roles} />)

    const link = screen.getByRole("link", { name: "Acme Corp" })
    expect(link).toHaveAttribute("href", "https://acme.example")
    expect(link).toHaveAttribute("target", "_blank")
    expect(link).toHaveAttribute("rel", "noopener noreferrer")
  })

  test("renders org as plain text when url is absent", () => {
    const roles: Role[] = [{ title: "Advisor", org: "Acme Corp" }]
    render(<RoleList roles={roles} />)

    expect(screen.queryByRole("link")).not.toBeInTheDocument()
    expect(screen.getByText("Acme Corp").tagName).toBe("P")
  })

  test("renders nothing but an empty list for an empty array", () => {
    const { container } = render(<RoleList roles={[]} />)
    const list = container.querySelector("ul")
    expect(list).toBeInTheDocument()
    expect(list?.children.length).toBe(0)
  })

  test("renders one list item per role, in order", () => {
    const roles: Role[] = [
      { title: "First", org: "Org A" },
      { title: "Second", org: "Org B" },
      { title: "Third", org: "Org C" },
    ]
    const { container } = render(<RoleList roles={roles} />)
    const items = container.querySelectorAll("li")
    expect(items).toHaveLength(3)
    expect(items[0]).toHaveTextContent("First")
    expect(items[1]).toHaveTextContent("Second")
    expect(items[2]).toHaveTextContent("Third")
  })

  test("handles two roles that share the same title but different orgs", () => {
    const roles: Role[] = [
      { title: "Advisor", org: "Org A" },
      { title: "Advisor", org: "Org B" },
    ]
    expect(() => render(<RoleList roles={roles} />)).not.toThrow()
    expect(screen.getByText("Org A")).toBeInTheDocument()
    expect(screen.getByText("Org B")).toBeInTheDocument()
  })
})
