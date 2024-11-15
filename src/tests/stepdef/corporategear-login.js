const { Given, When, Then } = require('@cucumber/cucumber');

// Step 1: Navigate to Corporate Gear website
Given('the user navigates to the Corporate Gear website', async function () {
    await this.home.loadHomePage();
});

// Step 2: Click on the Login button
When('the user clicks on "Login"', async function () {
    await this.home.clickLogin();
});

// Step 3: Enter email and password
When('the user enters their email and password', async function () {
    await this.home.enterUserNameandPwd();
});

// Step 4: Click on the SIGN IN button
When('the user clicks on the "SIGN IN" button', async function () {
    await this.home.clickSignIn();
});

// Step 5: Verify landing on the home page
Then('the user should be redirected to the landing home page', async function () {
    await this.home.verifyLandingPage();
});

// Step 6: Click on Discover Our Brands
When('the user clicks on "Discover Our Brands"', async function () {
    await this.home.discoverOurBrands();
});

// Step 7: Navigate to Peter Millar brand page
When('the user navigates to the Peter Millar brand page', async function () {
    await this.home.navigateToPeterMillarBrand();
});

// Step 8: Verify navigation to Peter Millar brand page
Then('the user should be on the Peter Millar brand page', async function () {
    const currentURL = await this.home.page.url();
    if (currentURL !== 'https://www.corporategear.com/peter-millar.html') {
        throw new Error('Navigation failed: Incorrect page URL');
    }
});

// Step 9: Click on a specific product
When('the user clicks on the "Peter Millar Men\'s Iron Fade Half-Zip" product', async function () {
    await this.home.clickOnProduct();
});

// Step 10: Click on the Start Order button
When('the user clicks on the "START ORDER" button', async function () {
    await this.home.clickStartOrder();
});

// Step 11: select the product size
Then('Select the product size {string}', async function (size) {
    await this.home.selectProductSize(size);
});







