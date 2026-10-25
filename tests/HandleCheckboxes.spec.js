import { test, expect } from "@playwright/test";

test("Handle Checkboxes Test", async ({ page }) => {
  await page.goto("https://qa-automation-practice.netlify.app/checkboxes.html");

  const checkBox1 = page.locator("//input[@id='checkbox1']");
  const checkBox2 = page.locator("//input[@id='checkbox2']");
  const checkBox3 = page.locator("//input[@id='checkbox3']");

  await expect(checkBox1).not.toBeChecked();
  await expect(checkBox2).not.toBeChecked();
  await expect(checkBox3).not.toBeChecked();

  await checkBox1.check();
  await expect(checkBox1).toBeChecked();
  await expect(checkBox2).not.toBeChecked();
  await expect(checkBox3).not.toBeChecked();

  await checkBox2.check();
  await expect(checkBox1).toBeChecked();
  await expect(checkBox2).toBeChecked();
  await expect(checkBox3).not.toBeChecked();

  await checkBox3.check();
  await expect(checkBox1).toBeChecked();
  await expect(checkBox2).toBeChecked();
  await expect(checkBox3).toBeChecked();

  const allCheckBoxes = [checkBox1, checkBox2, checkBox3];

  for (const checkBox of allCheckBoxes) {
    if (await checkBox.isChecked()) {
      await checkBox.uncheck();
      await expect(checkBox).not.toBeChecked();
    }
  }

  await page.waitForTimeout(5000);

  for (const checkBox of allCheckBoxes) {
    if (!(await checkBox.isChecked())) {
      await checkBox.check();
      await expect(checkBox).toBeChecked();
    }
  }

  await page.waitForTimeout(5000);
});
