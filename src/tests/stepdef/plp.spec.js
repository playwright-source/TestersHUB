const { Given, When, Then } = require('@cucumber/cucumber');

When('User search an item {string}', async function (item) {
    await this.plp.searchItem(item)
  });

  Then('User should see result for {string}', async function (string) {
     await this.plp.verifyResultCount()
  });