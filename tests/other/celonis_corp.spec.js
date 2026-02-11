const {test, expect} = require('@playwright/test')


test('Celonis Academy launch', async ({ page }) => {
  await page.goto('https://academy.celonis.com/');


});