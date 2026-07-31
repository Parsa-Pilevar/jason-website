import { test, expect } from "@playwright/test"

test.describe("home page", () => {
  test("renders the site title and a name heading", async ({ page }) => {
    await page.goto("/")
    await expect(page).toHaveTitle(/Jason Grant-Rowles/)
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible()
  })

  test("renders an 'About me' section with body text", async ({ page }) => {
    await page.goto("/")
    await expect(page.getByRole("heading", { name: "About me" })).toBeVisible()
  })

  test("external profile links open in a new tab safely", async ({ page }) => {
    await page.goto("/")
    const externalLinks = page.locator('main a[target="_blank"]')
    const count = await externalLinks.count()

    for (let i = 0; i < count; i++) {
      const link = externalLinks.nth(i)
      await expect(link).toHaveAttribute("rel", /noopener/)
      await expect(link).toHaveAttribute("rel", /noreferrer/)
      await expect(link).toHaveAttribute("href", /^https?:\/\//)
    }
  })

  test("mailto link, if present, uses a mailto: href", async ({ page }) => {
    await page.goto("/")
    const mailLink = page.locator('main a[href^="mailto:"]')
    if (await mailLink.count()) {
      await expect(mailLink.first()).toHaveAttribute("href", /^mailto:.+@.+/)
    }
  })
})
