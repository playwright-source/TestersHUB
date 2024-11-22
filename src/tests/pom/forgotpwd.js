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

    async passwordChange(){
        await this.page.locator('.overflow-hidden.flex.items-center.w-6.h-6.cursor-pointer').nth(0).click();
        await this.page.locator("//button[@name='EditMessage']").click();
        await this.page.fill('//input[@id="Current Password"]', 'Test@1234');
        await this.page.locator("//button[@name='CHANGE']").click();  
         
    }

    async setPwdToDefault(){
        const popup = await this.page.locator('div.relative.px-4.w-full.max-w-2xl.h-fullborder.border-neutral-200.inline-block.h-auto');
        await popup.waitFor({ state: 'visible' });
        const closeButton = await this.page.locator('button.text-gray-400.bg-transparent.hover\\:bg-gray-200.hover\\:text-gray-900.rounded-lg.text-sm.p-1\\.5.ml-auto.inline-flex.items-center svg.w-5.h-5');
        await closeButton.click(); 
        await this.page.locator('.overflow-hidden.flex.items-center.w-6.h-6.cursor-pointer').nth(0).click();
        await this.page.locator("//button[@name='EditMessage']").click();
        await this.page.fill('//input[@id="Current Password"]', 'Test@123');
        await this.page.locator("//button[@name='CHANGE']").click(); 
    }

}
module.exports = Forgotpwd;