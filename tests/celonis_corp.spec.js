const {test, expect} = require('@playwright/test')


test('SauceDemo login and logout', async ({ page }) => {
  await page.goto('https://academy.celonis.com/');


});