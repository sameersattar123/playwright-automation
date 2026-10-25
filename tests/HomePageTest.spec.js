import { test , expect } from "@playwright/test"

test("Home Page Test" , async ({page}) => {

    await page.goto("https://langleyretail.com/sw15b?testmode=true");

    const pageTitle = await page.title();
    console.log("Page Title is: " + pageTitle);

    await expect(page).toHaveTitle("StopWatt - Stop Wasting Money On Dirty, Unstable Electricity");

    const pageURL = await page.url();
    console.log("Page URL is: " + pageURL);

    await expect(page).toHaveURL("https://langleyretail.com/sw15b?testmode=true");

    await page.close();

})


// to run playwright test cases terminal cammands: 
// npx playwright test  
// npm playwirght test file name 
// npm playwright test file name --headed
// npm playwright test file name --headed --debug 