const { expect } = require('@playwright/test')

class Forgotpwd {

    constructor(page){
        this.page = page
    }
    
    async openSignInPopup(){
        await this.page.getByRole('button', { name : 'login'}).click()
        await expect(this.page.getByText('Sign in to Your')).toBeVisible()
    }
    
    async clickForgotPwdLink(){
        await this.page.locator('button[data-modal-toggle="Login1Modal"]').click();
    }    

    async enterEmail(){
        await this.page.locator('input[placeholder="Enter Your Email Address"]').fill('cypresstest28@gmail.com');
    }

    async clickForgotPwdBtn(){
        await this.page.locator('button[type="button"]:has-text("Forgot Password")').click();
    }

    async errorAssert() {
        const successMessageLocator = this.page.locator('div.mb-4.text-center');
        await successMessageLocator.waitFor({ state: 'visible', timeout: 5000 });
        await expect(successMessageLocator).toHaveText('Email sent successfully');
    }

}
module.exports = Forgotpwd;