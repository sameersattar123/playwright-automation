import { test, expect } from "@playwright/test";

test("Soft Assertions Test", async ({ page }) => {

  await page.goto("https://langleyretail.com/sw15b?testmode=true");

  await expect.soft(page).toHaveURL("https://langleyretail.co/sw15b?testmode=true");

  await expect.soft(page).toHaveTitle(
    "StopWatt - Stop Wasting Money On Dirty, Unstable Electricity",
  );
});
