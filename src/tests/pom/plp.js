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

    async navigateToBrand(brand){
        this.brand =  this.page.locator(`//img[contains(@alt,'Custom ${brand}')]`).nth(0).click();
        await expect(this.page.getByRole('link', { name: brand })).toBeVisible()
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