const { Given, When, Then } = require('@cucumber/cucumber');

When('User clicks the JOIN US button and navigates to the registration page', async function () {
    await this.createaccount.clickJoinUs();
});

When('User leaves one or more mandatory fields empty and attempts to submit the registration form', async function () {
    await this.createaccount.clickSignUp();
});

Then('Error messages should be displayed for all mandatory fields', async function () {
    await this.createaccount.assertAllFieldsErrors();
});