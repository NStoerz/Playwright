import { test, expect } from '@playwright/test';

//This will ignore the authentication, allowing us to test the login page without being logged in
test.use({ storageState: { cookies: [], origins: [] } });

test.beforeEach('Open test site', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
});

test('Login page is visible', async ({ page }) => {
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
});

test('Locked out user cannot login', async ({ page }) => {
    await page.locator('[data-test="username"]').fill('locked_out_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[class="error-message-container error"]')).toContainText('Epic sadface: Sorry, this user has been locked out.');
});