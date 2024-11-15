const { test } = require('@playwright/test');
const { expect } = require('@playwright/test');

test.only('Firts test', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.corporategear.com/');
    console.log(await page.title());
    //Profile icon on header before login
  const element = await page.locator("//button[@title='Login' and contains(@class, 'text-primary-hover')]");
  await element.click();
  // Entering Credentionls and Click the "SIGN IN" button and navigate to landing home page
  await page.fill('input[name="email"]', 'cypresstest28@gmail.com');
  await page.fill('input[name="password"]', 'Test@123');
  const signInButton = page.locator('button:has-text("SIGN IN")');
  await signInButton.click();
  await signInButton.click();
});
