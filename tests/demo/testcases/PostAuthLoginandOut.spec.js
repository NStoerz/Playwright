//Test cases for post authentication login, validating that user is logged in, logging out

import { test, expect } from '@playwright/test';
const xlsx = require('xlsx');

test.beforeEach('Open test site', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');
});

test('PostAuth test, pre logged in', async ({ page }) => {
    await expect(page.locator('[data-test="title"]')).toBeVisible();
});

test('Log out', async ({ page }) => {
    await page.locator('#react-burger-menu-btn').click();
    await page.locator('#logout_sidebar_link').click();
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
});


// Read and process the exported Excel file, summing up a specific column
// const XLSX = require('xlsx');

// const workbook = XLSX.readFile('export.xlsx');
// const sheetName = workbook.SheetNames[0];
// const worksheet = workbook.Sheets[sheetName];
// const data = XLSX.utils.sheet_to_json(worksheet);

// const totalAmount = data.reduce((sum, row) => {
//   return sum + (Number(row.Amount) || 0);
// }, 0);

// console.log('Total Amount:', totalAmount);