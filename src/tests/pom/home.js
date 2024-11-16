const { expect } = require('@playwright/test')

class Home {

    constructor(page){
        this.page = page
    }
    
    async loadHomePage(){
        await this.page.goto(process.env.URL);
    }

    async enterUserNameandPwd(username, password){
        await this.page.getByRole('button', { name : 'login'}).click();
        await expect(this.page.getByText('Sign in to Your')).toBeVisible()
        await this.page.fill('input[name="email"]', username);
        await this.page.fill('input[name="password"]', password);
        this.signInButton =  this.page.locator('button:has-text("SIGN IN")');
        await this.signInButton.click();
    }

    async verifyLandingPage(){
        await expect(this.page.locator('a[title="My Account"]')).toBeVisible(); 
    }

    async discoverOurBrands(){
        this.discoverOurBrands = await this.page.locator('//*[@id="div1"]/section/div/div/div/div/div/div[1]/div/div/div/div/div/div[3]/a/span');
        await this.discoverOurBrands.click();
    }
    
    async navigateToPeterMillarBrand() {
        const peterMillar = this.page.locator('#multipleBrands > div:nth-child(1) > div > div > a > img');
        await peterMillar.click();
        const currentURL = await this.page.url();
        if (currentURL !== 'https://www.corporategear.com/peter-millar.html') {
        }
    }

    async clickOnProduct() {
        const productLink = this.page.locator('a[title="Peter Millar Men\'s Iron Fade Half-Zip"][href="/peter-millar-fade-half-zip-iron-Men-mf24ez28.html"]').first();
        await productLink.scrollIntoViewIfNeeded();
        await productLink.evaluate((element) => {
            element.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        });
        await productLink.waitFor({ state: 'visible', timeout: 20000 });
        await productLink.click();
    }

    async clickStartOrder() {
        const startOrderButton = this.page.locator("//button[contains(@class, 'btn-xl') and contains(@class, 'btn-primary') and text()='START ORDER']");
        await startOrderButton.waitFor({ state: 'visible', timeout: 50000 });
        await startOrderButton.click();
    }

    async selectProductSize(size, qty) {
        const sizeDropdown = this.page.locator(`select[name="${size}"]`);
        await sizeDropdown.selectOption(qty);
    }

    async clickAddToCart() {
        const addToCartButton = this.page.locator('button:has-text("ADD TO CART")');
        await addToCartButton.click();
    }
    
}
module.exports = Home;