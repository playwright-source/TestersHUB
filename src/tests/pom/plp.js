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
}

module.exports = PLP