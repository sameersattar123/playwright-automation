import { test, expect } from "@playwright/test";

test("Keyboard Actions Test", async ({ page }) => {
    
  await page.goto("https://testautomationpractice.blogspot.com/");

  const nameInp = page.locator("//input[@id='name']");
  const emailInp = page.locator("//input[@id='email']");

  await nameInp.type("test@gmail.com");

  await nameInp.press("Control+A");
  await nameInp.press("Control+C");

  await nameInp.press("Tab");

  await emailInp.press("Control+V");

  await page.waitForTimeout(5000);
});
