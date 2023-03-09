// @ts-check
const { test, expect } = require('@playwright/test');

test('Has Test Score title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Test Score/);
  await expect(page.getByRole('button', { name: 'Add Test' })).toHaveCount(1)
});

test('Can create and delete score', async ({ page }) => {
    //page.on('console', msg => console.log(msg))
    await page.goto('http://localhost:3000/');
    await expect(page.getByRole('button', { name: 'Add Test' })).toHaveCount(1)
    console.log('Add Test button loaded')

    const TestName = `Test_${(Math.random() + 1).toString(36).substring(7)}`;
    const Score = Math.floor(Math.random() * 100);
    const Weight = Math.floor(Math.random() * 100)
    await page.getByLabel(/Test Name/).fill(TestName);
    await page.getByLabel(/Score/).fill(`${Score}`);
    await page.getByLabel(/Weight/).fill(`${Weight}`);
    await page.getByRole('button', { name: 'Add Test' }).click()
    console.log(`Submitted Test ${TestName}`)

    const TestRow = page.getByRole('table', {}).locator(`tr:has-text('${TestName}')`)
    await expect(TestRow).toHaveCount(1);
    console.log(`Table Row found with name ${TestName}`)

    const TDList = await TestRow.locator('td').all()
    await expect(TDList[0]).toContainText(TestName)
    await expect(TDList[1]).toContainText(String(Score))
    await expect(TDList[2]).toContainText(String(Weight))
    await expect(TDList[3]).toContainText(String("Delete"))
    console.log("Table Row data matches created")

    await TestRow.getByRole('button', { name: "Delete"}).click()
    await expect(page.locator(`tr:has-text('${TestName}')`)).toHaveCount(0);
    console.log(`Deleted Test ${TestName}`)
  });
