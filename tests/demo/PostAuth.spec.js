import { test, expect } from '@playwright/test';
const xlsx = require('xlsx');

test('PostAuth test, pre logged in', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('[data-test="title"]')).toBeVisible();
});

test('Add item to cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toContainText('1');
});


// Read and process the exported Excel file, summing up a specific column
const XLSX = require('xlsx');

const workbook = XLSX.readFile('export.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const data = XLSX.utils.sheet_to_json(worksheet);

const totalAmount = data.reduce((sum, row) => {
  return sum + (Number(row.Amount) || 0);
}, 0);

console.log('Total Amount:', totalAmount);