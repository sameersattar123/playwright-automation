import { test, expect } from "@playwright/test";


test.beforeAll(async ()=>{
    console.log("Before All");
})

test.afterAll(async ()=>{
    console.log("After All");
});

test.beforeEach(async ()=>{
    console.log("Before Each");
});

test.afterEach(async ()=>{
    console.log("After Each");
});

test.describe("Group 1", () => {
  test("Test:01", async ({ page }) => {
    console.log("test: 01");
  });
  test("Test:02", async ({ page }) => {
    console.log("test: 02");
  });
});

test.describe("Group 2", () => {
  test("Test:03", async ({ page }) => {
    console.log("test: 03");
  });
  test("Test:04", async ({ page }) => {
    console.log("test: 04");
  });
});
