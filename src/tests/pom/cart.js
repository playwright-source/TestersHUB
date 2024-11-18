
const { expect } = require('@playwright/test')

class Cart {

    constructor(page){
        this.page = page
    }

    async clickAddToCart() {
        const addToCartButton = this.page.locator('button:has-text("ADD TO CART")');
        await addToCartButton.click();
    }

    async selectProductSize(size, qty) {
        const sizeDropdown = this.page.locator(`select[name="${size}"]`);
        await sizeDropdown.selectOption(qty);
    }
}

module.exports = Cart