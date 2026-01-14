import { test as setup, expect } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, '..', '..', 'playwright', '.auth', 'user.json');

setup('authenticate', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto('https://practice.expandtesting.com/login');
  await page.locator('[id="username"]').click();
  await page.locator('[id="username"]').fill(process.env.LOGIN);
  await page.locator('[id="password"]').click();
  await page.locator('[id="password"]').fill(process.env.PASSWORD);
  await page.locator('[id="submit-login"]').click();
  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  await page.waitForURL('**/secure');
  // Alternatively, you can wait until the page reaches a state where all cookies are set.
  // await expect(page.getByRole('title', { name: 'Products' })).toBeVisible();

  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});