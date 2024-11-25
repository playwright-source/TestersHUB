const { Given, When, Then } = require('@cucumber/cucumber');

Then('select the SIZE {string} with QTY {string}', async function (size, qty) {
    await this.cart.selectProductSize(size, qty);
});

Then('the user clicks the add to cart button', async function () {
   await this.cart.clickAddToCart()
});

Then('the cart should have {string} items', async function (count) {
    // Write code here that turns the phrase above into concrete actions
   await this.cart.validateCartCount(count)
  });


