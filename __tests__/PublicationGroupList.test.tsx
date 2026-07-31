import { describe, expect, test } from "vitest"
import { render, screen } from "@testing-library/react"
import PublicationGroupList from "@/components/PublicationGroupList"
import type { PublicationGroup } from "@/lib/types"

describe("PublicationGroupList", () => {
  test("renders a heading for each group", () => {
    const groups: PublicationGroup[] = [
      { heading: "Journal Articles", publications: [{ citation: "Citation A" }] },
      { heading: "Conference Papers", publications: [{ citation: "Citation B" }] },
    ]
    render(<PublicationGroupList groups={groups} />)

    expect(screen.getByText("Journal Articles")).toBeInTheDocument()
    expect(screen.getByText("Conference Papers")).toBeInTheDocument()
  })

  test("renders every citation within its group", () => {
    const groups: PublicationGroup[] = [
      {
        heading: "Journal Articles",
        publications: [{ citation: "Citation A" }, { citation: "Citation B" }],
      },
    ]
    render(<PublicationGroupList groups={groups} />)

    expect(screen.getByText("Citation A")).toBeInTheDocument()
    expect(screen.getByText("Citation B")).toBeInTheDocument()
  })

  test("renders nothing for an empty groups array", () => {
    const { container } = render(<PublicationGroupList groups={[]} />)
    const root = container.querySelector(".mt-6.flex.flex-col.gap-10")
    expect(root?.children.length).toBe(0)
  })

  test("renders a group with zero publications without crashing", () => {
    const groups: PublicationGroup[] = [{ heading: "Empty Section", publications: [] }]
    render(<PublicationGroupList groups={groups} />)

    expect(screen.getByText("Empty Section")).toBeInTheDocument()
  })

  test("preserves group and citation order", () => {
    const groups: PublicationGroup[] = [
      { heading: "First", publications: [{ citation: "One" }, { citation: "Two" }] },
      { heading: "Second", publications: [{ citation: "Three" }] },
    ]
    const { container } = render(<PublicationGroupList groups={groups} />)
    const headings = Array.from(container.querySelectorAll("h2")).map((h) => h.textContent)
    expect(headings).toEqual(["First", "Second"])

    const firstGroupCitations = Array.from(
      container.querySelectorAll("div > div:first-child ul li")
    ).map((li) => li.textContent)
    expect(firstGroupCitations).toEqual(["One", "Two"])
  })
})
