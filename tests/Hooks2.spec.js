import { test, expect } from "@playwright/test";

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  // login
  await page.goto("https://demoblaze.com/");

  await page.click("//a[@id='login2']");

  await page.fill("//input[@id='loginusername']", "pavanol");

  await page.fill("//input[@id='loginpassword']", "test@123");

  await page.click("//button[@onclick='logIn()']");
});

test.afterAll(async () => {
  // logout
  await page.click("//a[@id='logout2']");
  await page.close();
});

test("Count Products", async () => {
  //   // count products
  const products = page.locator(".hrefch");
  await expect(products).toHaveCount(9);
});

test("Add to cart product", async () => {
  // Add to cart
  await page.click("//a[@class='hrefch' and text()='Nokia lumia 1520']");

  await page.click("//a[normalize-space()='Add to cart']");

  page.on("dialog", async (dialog) => {
    await expect(dialog.message()).toContain("Product added.");
    await dialog.accept(); // for ok button
  });

  await page.waitForTimeout(5000);
});
