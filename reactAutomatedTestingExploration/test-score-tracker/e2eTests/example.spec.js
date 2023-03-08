// @ts-check
const { test, expect } = require('@playwright/test');

test('Has Test Score title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Test Score/);
  await expect(page.getByRole('button', { name: 'Add Test' })).toHaveCount(1)
});

test('homepage has Playwright in title and get started link linking to the intro page', async ({ request}) => {

    const resp = await request.get('https://playwright.dev')
    await resp.body()
  })

test('Can create score', async ({ page }) => {
    page.on('console', msg => console.log(msg))
    await page.goto('http://localhost:3000/');
    await expect(page.getByRole('button', { name: 'Add Test' })).toHaveCount(1)
    //const theRequest = await page.waitForRequest(/crudcrud.com/)
    const TestName = `Test_${(Math.random() + 1).toString(36).substring(7)}`;
    const Score = Math.floor(Math.random() * 100);
    const Weight = Math.floor(Math.random() * 100)
    await page.getByLabel(/Test Name/).fill(TestName);
    await page.getByLabel(/Score/).fill(`${Score}`);
    await page.getByLabel(/Weight/).fill(`${Weight}`);
    
    const theButton= page.getByRole('button', { name: 'Add Test' })
    await theButton.waitFor()
    
    
    await theButton.click()
    console.log(await theButton.innerHTML())
    //console.log(theRequest)
    //await page.waitForResponse(/crudcrud.com/);

    await expect(page.getByRole('table', {})).toContainText(TestName)
    await expect(page.getByRole('table', {})).toContainText(String(Score))
    await expect(page.getByRole('table', {})).toContainText(String(TestName))
  });
