const { Given, When, Then } = require('@cucumber/cucumber');
const productListing = require('./../pom/productlisting');
const { expect } = require('@playwright/test');


When ('User is on the product listing page', async function () {
    const productPage = new productListing(this.page);
    await productPage.clickTheMenCategory();
});

When('User clicks the {string} category', async function (categoryName) {
    const productPage = new productListing(this.page);
    await productPage.clickCategory(categoryName);
});

Then ('All products belonging to the {string} category should be displayed', async function (categoryName) {
      const productPage = new productListing(this.page);
      const isCorrect = await productPage.verifyPageTitleContainsCategory(categoryName);
      expect(isCorrect).toBe.true;
});

Given('User click on product: {string} in search result', async function (item) {
        await this.plp.clickAnyItem(item)
  });