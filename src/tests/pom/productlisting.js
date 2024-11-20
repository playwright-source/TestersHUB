const { expect } = require('@playwright/test')

class productListing {
    constructor(page){
        this.page = page
    }
    async loadHomePage(){
        await this.page.goto(process.env.URL);
    }
    async clickTheMenCategory() {
        const menCategory = this.page.locator('//div[@class="pt-[10px] lg:pt-[30px] pb-[10px] lg:pb-[30px]" and contains(@title, "Men")]');
        await menCategory.click()
    }
    async clickCategory(categoryName) {
        const categoryLocator = this.page.locator(`//div[contains(@class, 'flex items-center') and contains(text(), '${categoryName}')]`);
        await categoryLocator.waitFor({ state: 'visible', timeout: 5000 });
        await categoryLocator.click();
    }
    async verifyPageTitleContainsCategory(categoryName) {
        const pageTitle = await this.page.title();
        return pageTitle.includes(categoryName);
    }
}
module.exports = productListing;