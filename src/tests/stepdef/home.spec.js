const { Given, When, Then } = require('@cucumber/cucumber');

// Step 01: Navigate to Corporate Gear website
Given('User launches the website', async function () {
    await this.home.loadHomePage();
});

// Step 02: User Logs in with valid credentials
When('Login with username as {string} and password as {string}', async function (username, password) {
    await this.home.enterUserNameandPwd(username, password)
  });

// Step 03: User navigate to home page
Then('the user should be redirected to the landing home page', async function () {
    await this.home.verifyLandingPage();
});

// Step 04: user clicks on the "Discover Our Brands" button
When('the user clicks on "Discover Our Brands"', async function () {
    await this.home.discoverOurBrands();
});

// Step 05: Navigate to Peter Millar brand page
When('the user navigates to the {string} brand page', async function (name) {
    await this.home.navigateToPeterMillarBrand(name);
});

// Step 06: Click on a specific product
When('the user clicks on the {string} product', async function (name) {
    await this.home.clickOnProduct(name);
});

// Step 07: Click on the Start Order button
When('the user clicks on the "START ORDER" button', async function () {
    await this.home.clickStartOrder();
});

// Step 08 and Step 08: select the product sizes
Then('select the SIZE {string} with QTY {string}', async function (size, qty) {
    await this.home.selectProductSize(size, qty);
});

// Step 10: clicks the add to cart button
Then('the user clicks the add to cart button', async function () {
    const addToCartButton = this.page.locator('button:has-text("ADD TO CART")');
    await addToCartButton.click();
});








