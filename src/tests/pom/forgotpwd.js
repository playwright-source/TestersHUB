const { expect } = require('@playwright/test')

class Forgotpwd {

    constructor(page){
        this.page = page
    }
    
    async forgotpwdfunction(linkText){
        await this.page.getByRole('button', { name : 'login'}).click();
        await expect(this.page.getByText('Sign in to Your')).toBeVisible()
        await this.page.getByRole('').click();
 
        
       
    }
    
}
module.exports = Forgotpwd;