import { test } from '@playwright/test';

test('PostAuth test', async ({ page }) => {
    await page.goto('https://www.saucedemo.com//inventory.html');
});