const { expect } = require('@playwright/test')
class Home {

    constructor(page){
        this.page = page
    }

    async loadHomePage(){
        await this.page.goto(process.env.URL);
    }

    async clickLogin(){
        this.element = await this.page.locator("//button[@title='Login' and contains(@class, 'text-primary-hover')]");
        await this.element.click();
    }

    async enterUserNameandPwd(){
        await this.page.fill('input[name="email"]', process.env.USER_NAME);
        await this.page.fill('input[name="password"]', process.env.PASSWORD);
    }

    async clickSignIn(){
        this.signInButton = await this.page.locator('button:has-text("SIGN IN")');
        await this.signInButton.click();
    }

    async verifyLandingPage(){
        await expect(this.page).toHaveURL(/www.corporategear/); 
    }

    async discoverOurBrands(){
        this.discoverOurBrands = await this.page.locator('//*[@id="div1"]/section/div/div/div/div/div/div[1]/div/div/div/div/div/div[3]/a/span');
        await this.discoverOurBrands.click();
    }

    /*async invalidError(expectedMessage) {
        // Locate the error message element with specified text
        const errorMessage = await page.locator('.mb-4.text-center', { hasText: 'User name and password invalid.' });
    
        // Get the actual text content of the error message element
        const actualMessage = await errorMessage.textContent();
    
        // Assert that the actual message matches the expected message
        expect(actualMessage.trim()).toBe(expectedMessage);
    }*/


}

module.exports = Home