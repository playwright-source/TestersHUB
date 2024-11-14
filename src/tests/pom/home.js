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

    async invalidEmailPwd(){
        await this.page.fill('input[name="email"]', 'invalid user');
        await this.page.fill('input[name="password"]', 'invalid');
    }
}

module.exports = Home