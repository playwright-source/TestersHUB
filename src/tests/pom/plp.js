const { expect } = require('@playwright/test')
class PLP {

    constructor(page){
        this.page = page
    }

    async searchItem(item){
        await this.page.getByRole('button', { name: 'Search' }).click();
        await this.page.getByPlaceholder('Search').fill(item);
        await this.page.getByPlaceholder('Search').press('Enter');
        await expect(this.page.getByRole('heading', { name : item.toLowerCase() })).toBeVisible()
    }

    async assertionNoResults(invalidSearchTerm) {
        const messageLocator = this.page.locator('//section//div[contains(@class, "text-center") and contains(text(), "no results found")]');
        await messageLocator.waitFor({ state: 'visible', timeout: 5000 });
        const actualMessage = await messageLocator.textContent();
        const expectedMessage = `We're sorry, no results found for "${invalidSearchTerm}".`;

        if (actualMessage.trim() !== expectedMessage) {
            throw new Error(`Validation failed. Expected: "${expectedMessage}", Actual: "${actualMessage.trim()}"`);
        }
        console.log('VValidation successful:', actualMessage);
    }
    
    async verifyResultCount(){
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForTimeout(3000)
        this.count = this.page.locator("//span[contains(.,'Total')]/span")
        await expect(this.count).toBeVisible()

        await this.count.textContent().then(result =>{
                this.number = parseInt(result.match(/\d+/)[0], 10);
                expect(this.number).toBeGreaterThanOrEqual(1)
       })
    }

    async clickStartOrder() {
        const startOrderButton = this.page.locator("//button[contains(@class, 'btn-xl') and contains(@class, 'btn-primary') and text()='START ORDER']");
        await startOrderButton.waitFor({ state: 'visible', timeout: 50000 });
        await startOrderButton.click();
    }

    async navigateToBrand(brand) {
        const brandImage = this.page.locator(`//img[contains(@alt,'Custom ${brand}')]`).nth(0);
        await brandImage.scrollIntoViewIfNeeded();
        await brandImage.click();
        
        const brandLink = this.page.getByRole('link', { name: brand, exact: true });
        await brandLink.waitFor({ state: 'visible', timeout: 10000 });
        
        await expect(brandLink).toBeVisible();
    }

    async clickOnProduct(name) {
        const productLink = this.page.locator('a[title="Peter Millar Men\'s Iron Fade Half-Zip"][href="/peter-millar-fade-half-zip-iron-Men-mf24ez28.html"]').first();
        await productLink.scrollIntoViewIfNeeded();
        await productLink.evaluate((element) => {
            element.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        });
        await productLink.waitFor({ state: 'visible', timeout: 20000 });
        await productLink.click();
    }
}

module.exports = PLP