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
    
}
module.exports = Home;