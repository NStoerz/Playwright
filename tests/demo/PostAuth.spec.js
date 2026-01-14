import { test } from '@playwright/test';

test('PostAuth test', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/login');
});