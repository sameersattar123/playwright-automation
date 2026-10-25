import { test, expect } from "@playwright/test";

test("Simple Alert Test", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  page.on("dialog", async (dialog) => {
    await expect(dialog.type()).toBe("alert");
    await expect(dialog.message()).toBe("I am an alert box!");
    await dialog.accept();
  });

  await page.click("//button[@id='alertBtn']");
  await page.waitForTimeout(5000);
});

test("Confirmation Alert Test", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  page.on("dialog", async (dialog) => {
    await expect(dialog.type()).toBe("confirm");
    await expect(dialog.message()).toBe("Press a button!");
    await dialog.accept(); // for ok button
    //  await dialog.dismiss();  // for cancel button
  });

  await page.click("//button[@id='confirmBtn']");

  await expect(page.locator("//p[@id='demo']")).toHaveText("You pressed OK!");

  await page.waitForTimeout(5000);
});

test("Prompt Alert Test", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  page.on("dialog", async (dialog) => {
    await expect(dialog.type()).toBe("prompt");
    await expect(dialog.message()).toBe("Please enter your name:");
    await expect(dialog.defaultValue()).toBe("Harry Potter");
    await dialog.accept("Sameer Sattar");
  });

  await page.click("//button[@id='promptBtn']");

  await expect(page.locator("//p[@id='demo']")).toHaveText(
    "Hello Sameer Sattar! How are you today?",
  );

  await page.waitForTimeout(5000);
});
