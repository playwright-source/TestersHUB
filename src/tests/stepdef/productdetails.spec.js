const { Given, When, Then } = require('@cucumber/cucumber');
const ProductDetails = require('../pom/productdetails');
const { expect } = require('@playwright/test');

When('User clicks the {string} in listing page', async function (itemName) {
    this.productDetails = new ProductDetails(this.page);
    await this.productDetails.clickOnAnyItem(itemName);
});

Then ('User is on the {string} detail page of a selected product', async function (itemName) {
    const isCorrect = await this.productDetails.verifyPageTitleContainsItem(itemName);
    expect(isCorrect).toBe.true;
});

When('User hovers over or clicks on the image to activate the zoom feature', async function () {
    const action = 'dblclick';
    await this.productDetails.activateZoomFeature(action);
});

When('User scrolls to the You May Also Like section', async function () {
    await this.productDetails.scrollToYouMayAlsoLikeSection();
});

Then('Products related to the current product {string} should be displayed', async function (itemName) {
    await this.productDetails.verifyYouMayAlsoLikeProducts(itemName);
});