import { test, expect } from "@playwright/test"

test.describe("contact page", () => {
  test("renders a heading and intro text", async ({ page }) => {
    await page.goto("/contact")
    await expect(page.getByRole("heading", { level: 1, name: "Contact" })).toBeVisible()
  })

  test("form posts to the configured Formspree endpoint", async ({ page }) => {
    await page.goto("/contact")
    const form = page.locator("form")
    await expect(form).toHaveAttribute("action", "https://formspree.io/f/mjgndnka")
    await expect(form).toHaveAttribute("method", /post/i)
  })

  test("has name, email, and message fields", async ({ page }) => {
    await page.goto("/contact")
    await expect(page.getByLabel("Name")).toBeVisible()
    await expect(page.getByLabel("Email")).toHaveAttribute("type", "email")
    await expect(page.getByLabel("Message")).toBeVisible()
  })

  test("has a hidden honeypot field to deter spam bots", async ({ page }) => {
    await page.goto("/contact")
    const honeypot = page.locator('input[name="_gotcha"]')
    await expect(honeypot).toHaveAttribute("type", "hidden")
  })

  test("fields accept user input", async ({ page }) => {
    await page.goto("/contact")
    await page.getByLabel("Name").fill("Ada Lovelace")
    await page.getByLabel("Email").fill("ada@example.com")
    await page.getByLabel("Message").fill("Hello, I'd like to get in touch.")

    await expect(page.getByLabel("Name")).toHaveValue("Ada Lovelace")
    await expect(page.getByLabel("Email")).toHaveValue("ada@example.com")
    await expect(page.getByLabel("Message")).toHaveValue("Hello, I'd like to get in touch.")
  })

  test("submit button is present and enabled", async ({ page }) => {
    await page.goto("/contact")
    const submit = page.getByRole("button", { name: "Send" })
    await expect(submit).toBeVisible()
    await expect(submit).toBeEnabled()
  })
})
