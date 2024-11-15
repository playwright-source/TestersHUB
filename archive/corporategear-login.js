const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { chromium } = require('playwright');

Before(async function () {
  this.browser = await chromium.launch();  // Launching the browser
  this.context = await this.browser.newContext(); // Creating a new context
  this.page = await this.context.newPage(); // Creating a new page
});

After(async function () {
  await this.page.close();  // Closing the page
  await this.browser.close();  // Closing the browser after the test
});

// Step 1: Navigate to Corporate Gear website
Given('the user navigates to the Corporate Gear website', async function () {
  await this.page.goto('https://www.corporategear.com/');
  console.log(await this.page.title());
});

// Step 2: Click on the Login button
When('the user clicks on the "Login" button', async function () {
  this.element = await this.page.locator("//button[@title='Login' and contains(@class, 'text-primary-hover')]");
  await this.element.click();
});

// Step 3: Enter email and password
When('the user enters their email and password', async function () {
  await this.page.fill('input[name="email"]', 'cypresstest28@gmail.com');
  await this.page.fill('input[name="password"]', 'Test@123');
});

// Step 4: Click on the SIGN IN button
When('the user clicks on the "SIGN IN" button', async function () {
  this.signInButton = await this.page.locator('button:has-text("SIGN IN")');
  await this.signInButton.click();
});

// Step 5: Verify landing on the home page
Then('the user should be redirected to the landing home page', async function () {
  // Update the URL check
  await expect(this.page).toHaveURL("https://www.corporategear.com/");  // Consider improving this URL check
});