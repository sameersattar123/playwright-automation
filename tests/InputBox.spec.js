import { test, expect } from "@playwright/test";

test("Input Box Test", async ({ page }) => {
  await page.goto("https://langleyretail.com/sw15b?testmode=true");

  await page.click("button[class='btn-scroll hide-floating-btn']");

  await page.click("button[class='btn-select active mb-3']");

  const firstNameInput = page.locator("#fields_fname");
  await expect(firstNameInput).toBeVisible();
  await expect(firstNameInput).toBeEnabled();
  await expect(firstNameInput).toBeEmpty();
  await expect(firstNameInput).toBeEditable();
  await firstNameInput.type("Jenifer");

  const lastNameInput = page.locator("#fields_lname");
  await expect(lastNameInput).toBeVisible();
  await expect(lastNameInput).toBeEnabled();
  await expect(lastNameInput).toBeEmpty();
  await expect(lastNameInput).toBeEditable();
  await lastNameInput.type("Smith");

  const emailInput = page.locator("#fields_email");
  await expect(emailInput).toBeVisible();
  await expect(emailInput).toBeEnabled();
  await expect(emailInput).toBeEmpty();
  await expect(emailInput).toBeEditable();
  await emailInput.type("testman34@mcctest.xyz");

  const phoneInput = page.locator("#fields_phone");
  await expect(phoneInput).toBeVisible();
  await expect(phoneInput).toBeEnabled();
  await expect(phoneInput).toBeEmpty();
  await expect(phoneInput).toBeEditable();
  await phoneInput.type("3242342423");

  await page.close();
});
