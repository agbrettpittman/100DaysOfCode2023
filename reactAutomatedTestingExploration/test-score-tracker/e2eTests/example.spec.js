// @ts-check
const { test, expect } = require('@playwright/test');

test('Has Test Score title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Test Score/);
});

test('Can create score', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    const TestName = `Test_${(Math.random() + 1).toString(36).substring(7)}`;
    const Score = Math.floor(Math.random() * 100);
    const Weight = Math.floor(Math.random() * 100)

    await page.getByLabel(/Test Name/).fill(TestName);
    await page.getByLabel(/Score/).fill(`${Score}`);
    await page.getByLabel(/Weight/).fill(`${Weight}`);
    
    await page.click("button:text('Add Test')")

    // Expect a title "to contain" a substring.
    await expect(page.getByRole('table', {})).toContainText(TestName)
    await expect(page.getByRole('table', {})).toContainText(String(Score))
    await expect(page.getByRole('table', {})).toContainText(String(TestName))
  });
/*
test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
*/
