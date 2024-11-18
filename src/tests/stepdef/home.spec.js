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









