import { test, expect } from "@playwright/test";

test("Locators Built-in Test", async ({ page }) => {

  await page.goto("https://langleyretail.com/sw15b?testmode=true");

  const logo = page.getByAltText("product-image");
  await expect(logo).toBeVisible();

  await page.getByRole('button', { name: /SELECTED/i }).click();

  await page.getByPlaceholder("First Name *").type("Jenifer");
  await page.getByPlaceholder("Last Name *").type("Smith");
  await page.getByPlaceholder("Email *").type("jenifer.smith@example.com");
  await page.getByPlaceholder("Phone *").type("123-456-7890");

  await page.close();
});
