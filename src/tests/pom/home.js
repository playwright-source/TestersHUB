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
    
    async clickOnFirstBrand(){
        this.clickOnFirstBrand = await this.page.locator('#multipleBrands > div:nth-child(1) > div > div > a > img');
        await this.clickOnFirstBrand.click();
    }

    /*async clickOnIronFade(page){
        //const productLink = page.locator('a[title="Peter Millar Men\'s Iron Fade Half-Zip"][href="/peter-millar-fade-half-zip-iron-men-mf24ez28.html"]');
        // Wait for the first element to be visible
        const button = await page.getByRole('link', { name: "Peter Millar Men's Iron Fade Half-Zip" }); 
        await button.first().waitFor({ state: 'visible', timeout: 20000 });
        await button.first().click();
    }*/

}

module.exports = Home