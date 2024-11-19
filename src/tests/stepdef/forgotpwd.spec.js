const { Given, When, Then } = require('@cucumber/cucumber');

  Given('User is on the login page', async function () {
    await this.home.loadHomePage();
  });


  When('User clicks the {string} link', async function(string) {
    await this.forgotpwd.forgotpwdfunction(string);
  });


  Then('User enters a registered email address', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


  Then('User clicks the {string} button and sent the reset request', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


  Then('A password reset email should be sent to the provided email address with instructions', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });
