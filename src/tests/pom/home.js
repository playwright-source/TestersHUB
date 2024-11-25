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

    async verifyLandingPage() {
    const accountLink = this.page.locator('//div[contains(@class, "flex") and contains(@class, "relative")]//a[@title="My Account" and contains(@class, "text-primary")]');
    try {
        await accountLink.waitFor({ state: 'visible', timeout: 10000 });
        await expect(accountLink).toBeVisible();
        } catch (error) {
        console.error("Element not found or not visible");
        console.log(await this.page.content()); 
         await this.page.screenshot({ path: 'error.png', fullPage: true });
        throw error; 
        }
    }

    async discoverOurBrands(){
        this.discoverOurBrands = await this.page.locator('//*[@id="div1"]/section/div/div/div/div/div/div[1]/div/div/div/div/div/div[3]/a/span');
        await this.discoverOurBrands.click();
    }

    async assertErrorMessage(expectedMessage) {
        const errorMessageLocator = this.page.locator('div.mb-4.text-center');
        await errorMessageLocator.waitFor({ state: 'visible' });
        const actualMessage = await errorMessageLocator.textContent();
        if (actualMessage.trim() !== expectedMessage) {
          throw new Error(`Expected message: "${expectedMessage}", but got: "${actualMessage.trim()}"`);
        }
    }

    async profileOptions(options) {
        const svgElement = await this.page.locator('svg').nth(6); // Update this selector to target the correct SVG container
        await svgElement.hover();
        const productLinks = await this.page.getByLabel('Top').getByTitle(`${options}`);
        await productLinks.waitFor({ state: 'visible', timeout: 20000 });
        await productLinks.click();
    }

    async verifyUserRedirectsToHome() {
        await expect(this.page).toHaveURL('https://www.corporategear.com/');
    }

    

}
module.exports = Home;