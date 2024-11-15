// Import Playwright
const { chromium } = require('playwright');
const { expect } = require('@playwright/test');

(async () => {
  // Launch the browser
  const browser = await chromium.launch({ headless: false }); // Set to `true` for headless mode
  const context = await browser.newContext();
  const page = await context.newPage();

  // try code snippet over there
  const count = page.locator("//span[contains(.,'Total')]/span")
  await expect(count).toBeVisible({ timeout: 10000 })
  await page.waitForLoadState('domcontentloaded')
  const result = await count.textContent()
  const number = parseInt(result.match(/\d+/)[0], 10);

  await page.waitForTimeout(3000)
  page.locator("//span[contains(.,'Total')]/span")
expect(number).toBeGreaterThanOrEqual(1)
  
})();