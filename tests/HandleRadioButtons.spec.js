import { test, expect } from "@playwright/test";

test("Handle Radio Buttons Test", async ({ page }) => {
  await page.goto(
    "https://qa-automation-practice.netlify.app/radiobuttons.html",
  );

  const radioBtn1 = page.locator("//input[@id='radio-button1']");
  const radioBtn2 = page.locator("//input[@id='radio-button2']");
  await expect(radioBtn1).not.toBeChecked();
  await expect(radioBtn2).not.toBeChecked();
  await radioBtn1.check();
  await expect(radioBtn1).toBeChecked();
  await expect(radioBtn2).not.toBeChecked();

  await page.waitForTimeout(5000);
});
