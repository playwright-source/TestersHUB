const { expect } = require('@playwright/test')

class productDetails {

    constructor(page){
        this.page = page
    }

    async clickOnAnyItem(itemName) {
        const item = this.page.locator(`a:has-text("${itemName}")`);
        await item.waitFor({ state: 'visible' });
        await item.click();
    }

    async verifyPageTitleContainsItem(itemName) {
        const pageTitle = await this.page.title();
        return pageTitle.includes(itemName);
    }

    async activateZoomFeature(action) {
        const img = this.page.locator('img.iiz__img');
        if (action === 'dblclick') {
            await img.scrollIntoViewIfNeeded();
            await img.dblclick({ button: 'left', force: true });
            await this.page.waitForTimeout(1000);
            const styleAttribute = await img.getAttribute('style');
            //expect(styleAttribute).toContain('transition: opacity linear 150ms, visibility linear 150ms');
            expect(styleAttribute).toContain('transition: opacity linear');
                           expect(styleAttribute).toContain('visibility linear');
        } else {
            throw new Error(`Unknown action: ${action}`);
        }
    }

    async scrollToYouMayAlsoLikeSection() {
        const sectionHeading = this.page.locator('h4.description-title', { hasText: 'YOU MAY ALSO LIKE' });
        await sectionHeading.waitFor({ state: 'visible', timeout: 10000 });
        await sectionHeading.scrollIntoViewIfNeeded();
    }

    async verifyYouMayAlsoLikeProducts(itemName) {
        const sectionHeading = this.page.locator('h4:has-text("YOU MAY ALSO LIKE")');
        await sectionHeading.waitFor({ state: 'visible', timeout: 5000 });
        await sectionHeading.scrollIntoViewIfNeeded();
        const relatedProductsLocator = this.page.locator('.slick-slide a.text-anchor');
        const productCount = await relatedProductsLocator.count();
        if (productCount === 0) {
            throw new Error('No products found in the "You May Also Like" section.');
        }
        for (let i = 0; i < productCount; i++) {
            const product = relatedProductsLocator.nth(i);
            const productName = await product.innerText();
            if (!productName || productName.trim() === "") {
                throw new Error(`Product ${i + 1} in the "You May Also Like" section is missing`);
            }
            if (!(await product.isVisible())) {
                throw new Error(`Product "${productName}" is not visible.`);
            }
        }
        return true;
    }

}
module.exports = productDetails;