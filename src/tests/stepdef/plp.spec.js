const { Given, When, Then } = require('@cucumber/cucumber');

When('User search an item {string}', async function (item) {
    await this.plp.searchItem(item)
  });

Then('User should see result for {string}', async function (string) {
     await this.plp.verifyResultCount()
  });


When('the user navigates to the {string} brand page', async function (name) {
   await this.plp.navigateToBrand(name);
});

When('the user clicks on the {string} product', async function (name) {
   await this.plp.clickOnProduct(name);
});

When('the user clicks on the "START ORDER" button', async function () {
   await this.plp.clickStartOrder();
});
