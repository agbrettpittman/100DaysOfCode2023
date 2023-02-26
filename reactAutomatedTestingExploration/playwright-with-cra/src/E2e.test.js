// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/React/);
});

test('get started link', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Click the get started link.
  const myButton = page.getByRole('button', { name: /My Button/ })
  await myButton.click()

  // Expects the URL to contain intro.
  console.log(myButton)
  await expect(myButton).toHaveText("My Button 1")
});
