const { Given, When, Then } = require('@cucumber/cucumber');

// Step 1: Navigate to Corporate Gear website
Given('User launches the website', async function () {
    await this.home.loadHomePage();
});

When('Login with username as {string} and password as {string}', async function (username, password) {
    await this.home.enterUserNameandPwd(username, password)
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

// Step 5: user clicks on the "Discover Our Brands" button
When('the user clicks on the "Discover Our Brands" button', async function () {
    await this.home.discoverOurBrands();
});

// Step 5: the user selects the "Peter Millar" brand
When('the user selects the "Peter Millar" brand', async function () {
    await this.home.clickOnFirstBrand();
});

/*When('the user selects the "Peter Millar Mens Iron Fade Half Zip" product', async function () {
    await this.home.clickOnIronFade();
});*/








