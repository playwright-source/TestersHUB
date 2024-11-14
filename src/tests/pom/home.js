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

    async clickSignIn(){
       
    }


    async verifyLandingPage(){
        await expect(this.page.locator('a[title="My Account"]')).toBeVisible(); 
    }

    async discoverOurBrands(){
        this.discoverOurBrands = await this.page.locator('//*[@id="div1"]/section/div/div/div/div/div/div[1]/div/div/div/div/div/div[3]/a/span');
        await this.discoverOurBrands.click();
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