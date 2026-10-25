import { test, expect } from "@playwright/test";

test("Handle Dropdowns Test", async ({ page }) => {
  await page.goto("https://qa-automation-practice.netlify.app/dropdowns.html");

  // await page.locator("//select[@id='dropdown-menu']").selectOption({ label: "Afghanistan" });
  // await page.locator("//select[@id='dropdown-menu']").selectOption("India");
  // await page.locator("//select[@id='dropdown-menu']").selectOption({index: 3});
  // await page.locator("//select[@id='dropdown-menu']").selectOption({value : "India"});
  // await page.selectOption("//select[@id='dropdown-menu']" , "India");

  // Multi select dropdown
  // await page.selectOption("//select[@id='multi-select-dropdown']", ["India" ,"Afghanistan" , "Pakistan"]);

  // Print all options in the dropdown
  //   const options = await page.$$("//select[@id='dropdown-menu']/option");
  //   await expect(options.length).toBe(247);

  //   const options = await page
  //     .locator("//select[@id='dropdown-menu']/option")
  //     .all();
  //   await expect(options.length).toBe(247);

  //   for (const option of options) {
  //     console.log(await option.textContent());
  //   }

  await page.waitForTimeout(5000);
});
