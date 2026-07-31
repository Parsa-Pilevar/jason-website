import { test, expect } from "@playwright/test"

const pages = [
  { path: "/", title: /Jason Grant-Rowles/ },
  { path: "/publications", title: /Publications \| Jason Grant-Rowles/ },
  { path: "/advisory-practice", title: /Advisory & Practice \| Jason Grant-Rowles/ },
  { path: "/cv", title: /CV \| Jason Grant-Rowles/ },
  { path: "/contact", title: /Contact \| Jason Grant-Rowles/ },
]

test.describe("page smoke tests", () => {
  for (const { path, title } of pages) {
    test(`${path} loads with a 200 response, correct title, and no console errors`, async ({ page }) => {
      const consoleErrors: string[] = []
      page.on("console", (msg) => {
        if (msg.type() === "error") consoleErrors.push(msg.text())
      })
      page.on("pageerror", (err) => consoleErrors.push(err.message))

      const response = await page.goto(path)
      expect(response?.ok()).toBeTruthy()
      await expect(page).toHaveTitle(title)
      expect(consoleErrors, `console errors on ${path}:\n${consoleErrors.join("\n")}`).toEqual([])
    })
  }

  test("publications page renders at least one citation", async ({ page }) => {
    await page.goto("/publications")
    await expect(page.getByRole("heading", { level: 1, name: "Publications" })).toBeVisible()
  })

  test("advisory-practice page renders roles content", async ({ page }) => {
    await page.goto("/advisory-practice")
    await expect(page.getByRole("heading", { level: 1, name: "Advisory & Practice" })).toBeVisible()
  })

  test("cv page renders", async ({ page }) => {
    await page.goto("/cv")
    await expect(page.getByRole("heading", { level: 1, name: "CV" })).toBeVisible()
  })

  test("unknown route renders a not-found page instead of crashing", async ({ page }) => {
    const response = await page.goto("/this-route-does-not-exist")
    expect(response?.status()).toBe(404)
  })
})
