
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

    async validateCartCount(count){
        await this.page.waitForLoadState('domcontentloaded')
        const cartCount = this.page.locator('a[href="/cart/IndexNew.html"]>span')
        await this.page.waitForTimeout(12000)
        await expect(cartCount).toHaveText(count)
        //const qty =await cartCount.innerText();
       // expect(qty).toEqual(count)
        
    }
}

module.exports = Cart