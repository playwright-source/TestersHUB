const { expect } = require('@playwright/test')

class Filtersorting {

    constructor(page){
        this.page = page
    }
    
    async clickSortOption() {
        const sortSpan = this.page.locator("//button[contains(@class, 'group') and .//span[contains(., 'Sort:')]]");
        await sortSpan.scrollIntoViewIfNeeded(); 
        await sortSpan.waitFor({ state: 'visible', timeout: 10000 });
        await sortSpan.click();
    }

    async selectSortOption(sortOption) {
        const sortLocator = this.page.locator(`//span[contains(text(), '${sortOption}')]`);
        await sortLocator.scrollIntoViewIfNeeded();
        await sortLocator.waitFor({ state: 'visible', timeout: 5000 });
        await sortLocator.click();
        await this.page.waitForTimeout(10000); 
    }

    async assertProductsSorted(order = 'Price: (Low to High)') {
        const productPrices = await this.page.locator('//div[contains(@class, "text-medium-text")]/span/span').allTextContents();
        const priceNumbers = productPrices.map(price => parseFloat(price.replace(/[^0-9.]/g, '')));

        if (order === 'Price: (Low to High)') {
            for (let i = 0; i < priceNumbers.length - 1; i++) {
                if (priceNumbers[i] > priceNumbers[i + 1]) {
                    throw new Error(`Products are not sorted: ${priceNumbers[i]} > ${priceNumbers[i + 1]}`);
                }
             }
             console.log('Products are correctly sorted from low to high!');
            } 
            else if (order === 'Price: (High to Low)') {
            for (let i = 0; i < priceNumbers.length - 1; i++) {
                if (priceNumbers[i] < priceNumbers[i + 1]) {
                     throw new Error(`Products are not sorted: ${priceNumbers[i]} < ${priceNumbers[i + 1]}`);
                }
            }
            console.log('Products are correctly sorted from high to low!');
            } else {
                throw new Error('Invalid sort order. Use "Price: (Low to High)" or "Price: (High to Low)".');
            }
    }


}
module.exports = Filtersorting;