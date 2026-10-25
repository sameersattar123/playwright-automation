import { test , expect } from "@playwright/test"

test("Locators Test" , async ({page}) => {

    await page.goto("https://langleyretail.com/sw15b?testmode=true");

    // locator using css selector

    // await page.locator("button[class='btn-scroll hide-floating-btn']").click();
       await page.click("button[class='btn-scroll hide-floating-btn']");

    // await page.locator("button[class='btn-select active mb-3']").click();
       await page.click("button[class='btn-select active mb-3']");

    // await page.locator('#fields_fname').fill("Jenifer");
    // await page.fill('#fields_fname', "Jenifer");
       await page.type('#fields_fname', "Jenifer");

    // await page.locator('#fields_lname').fill("Smith");
    // await page.fill('#fields_lname' , "Smith");
       await page.type('#fields_lname' , "Smith");

    // await page.locator('#fields_email').fill("testman34@mcctest.xyz");
    // await page.fill('#fields_email',"testman34@mcctest.xyz");
       await page.type('#fields_email',"testman34@mcctest.xyz");

    // await page.locator('#fields_phone').fill("3242342423");
    // await page.fill('#fields_phone' , "3242342423");
       await page.type('#fields_phone' , "3242342423");

       await page.close();

})