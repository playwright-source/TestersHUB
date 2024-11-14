const { Given, When, Then } = require('@cucumber/cucumber');

// Step 1: Navigate to Corporate Gear website
Given('the user navigates to the Corporate Gear website', async function () {
    await this.home.loadHomePage();
});

// Step 2: Click on the Login button
When('the user clicks on the "Login" button', async function () {
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

// Step 5: Verify landing on the brand page
When('the user clicks on the "Discover Our Brands" button', async function () {
    await this.home.discoverOurBrands();
});


