import { test, expect } from "@playwright/test";

test("Mouse Actions Test", async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/");
 
  const pointMeBtn = page.locator("//button[normalize-space()='Point Me']");
  const laptopBtn = page.locator("//a[normalize-space()='Laptops']")

  // Mouse Hover Action
  await pointMeBtn.hover();
  await laptopBtn.hover();

  // Mouse Right Click Action
  await laptopBtn.click({ button: "right" });

  // Mouse Double Click Action
  const copyTextBtn = page.locator("//button[normalize-space()='Copy Text']");
  await copyTextBtn.dblclick();

  const feild2 = page.locator("//input[@id='field2']");
  await expect(feild2).toHaveValue("Hello World!");

  // Mouse drag and drop Action
  const box1 = page.locator("//div[@id='draggable']");
  const box2 = page.locator("//div[@id='droppable']");

  await box1.dragTo(box2);

  await expect(box2).toHaveText("Dropped!");


  await page.waitForTimeout(5000);

})