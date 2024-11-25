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

  //@TC-11

  When("User 'Change' password", async function () {
    await this.forgotpwd.passwordChange();
  });

  Then("User set password to default", async function () {
    await this.forgotpwd.setPwdToDefault();
  });
