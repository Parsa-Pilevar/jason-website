import { test, expect } from "@playwright/test"

const routes = [
  { href: "/", label: "Home", heading: null as string | null },
  { href: "/publications", label: "Publications", heading: "Publications" },
  { href: "/advisory-practice", label: "Advisory & Practice", heading: "Advisory & Practice" },
  { href: "/cv", label: "CV", heading: "CV" },
  { href: "/contact", label: "Contact", heading: "Contact" },
]

test.describe("primary navigation", () => {
  for (const route of routes) {
    test(`nav link "${route.label}" navigates to ${route.href}`, async ({ page }) => {
      await page.goto("/")
      await page.getByRole("navigation").getByRole("link", { name: route.label, exact: true }).click()
      await expect(page).toHaveURL(new RegExp(`${route.href}$`))

      if (route.heading) {
        await expect(page.getByRole("heading", { level: 1 })).toHaveText(route.heading)
      }
    })
  }

  test("clicking the active nav link highlights it", async ({ page }) => {
    await page.goto("/cv")
    const cvLink = page.getByRole("navigation").getByRole("link", { name: "CV", exact: true })
    await expect(cvLink).toHaveClass(/bg-accent/)

    const homeLink = page.getByRole("navigation").getByRole("link", { name: "Home", exact: true })
    await expect(homeLink).not.toHaveClass(/bg-accent(?!-)/)
  })

  test("brand link in the nav returns to the home page", async ({ page }) => {
    await page.goto("/cv")
    await page.getByRole("link", { name: /jason grant-rowles/i }).click()
    await expect(page).toHaveURL(/\/$/)
  })

  test("nav bar persists across all routes", async ({ page }) => {
    for (const route of routes) {
      await page.goto(route.href)
      await expect(page.getByRole("navigation")).toBeVisible()
      await expect(page.getByRole("navigation").getByRole("link", { name: "Home", exact: true })).toBeVisible()
    }
  })
})
