const { Given, When, Then } = require('@cucumber/cucumber');

  When('User is on the login page', async function() {
    await this.forgotpwd.openSignInPopup();
  });

  When("User clicks the 'Forgot Password' link", async function () {
    await this.forgotpwd.clickForgotPwdLink();
  });

  When('User enters a registered email address', async function () {
    await this.forgotpwd.enterEmail();
  });

  Then("User clicks the 'Forgot Password' button", async function () {
    await this.forgotpwd.clickForgotPwdBtn();
  });

  Then("User should see the confirmation message", async function () {
    await this.forgotpwd.errorAssert();
  });
