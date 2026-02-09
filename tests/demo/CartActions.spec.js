import { test, expect } from '@playwright/test';

test('Add item to cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toContainText('1');
});