const {test, expect} = require('@playwright/test')

/* test('My first test', async ({page}) => {
        await page.goto('https://google.com')
        await expect(page).toHaveTitle('Google')
    }); */



test('SauceDemo login and logout', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill(process.env.LOGIN);
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill(process.env.PASSWORD);
  await page.locator('[data-test="login-button"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
});