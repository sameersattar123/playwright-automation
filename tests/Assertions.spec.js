import { test, expect } from "@playwright/test";

test("Locators Built-in Test", async ({ page }) => {

  await page.goto("https://langleyretail.com/sw15b?testmode=true");

  await expect(page).toHaveURL("https://langleyretail.com/sw15b?testmode=true");

  await expect(page).toHaveTitle(
    "StopWatt - Stop Wasting Money On Dirty, Unstable Electricity",
  );
  
  const logo = page.getByAltText("product-image"); 
  await expect(logo).toBeVisible();

  await page.click("button[class='btn-scroll hide-floating-btn']");
  
  await page.click("button[class='btn-select active mb-3']");

  const selectedButton = await page.getByText('SELECTED', { exact: true });
  await expect(selectedButton).toBeEnabled();
  await expect(selectedButton).toHaveAttribute('class', 'buttonText');
  await expect(selectedButton).toHaveText('SELECTED');
  await expect(selectedButton).toContainText('SELECT');

  const totalCountriesCount = await page.locator('#fields_state option')
  await expect(totalCountriesCount).toHaveCount(62);
  await expect(totalCountriesCount).not.toHaveCount(632);
  
  
  await page.close();

});
