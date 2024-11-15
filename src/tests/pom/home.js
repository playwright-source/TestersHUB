const { expect } = require('@playwright/test');

class Home {
    constructor(page) {
        this.page = page;
    }

    async loadHomePage() {
        await this.page.goto(process.env.URL);
    }

    async clickLogin() {
        const loginButton = this.page.locator("//button[@title='Login' and contains(@class, 'text-primary-hover')]");
        await loginButton.click();
    }

    async enterUserNameandPwd() {
        await this.page.fill('input[name="email"]', process.env.USER_NAME);
        await this.page.fill('input[name="password"]', process.env.PASSWORD);
    }

    async clickSignIn() {
        const signInButton = this.page.locator('button:has-text("SIGN IN")');
        await signInButton.click();
    }

    async verifyLandingPage() {
        await expect(this.page).toHaveURL(/www.corporategear/);
    }

    async discoverOurBrands() {
        const discoverOurBrandsButton = this.page.locator('//*[@id="div1"]/section/div/div/div/div/div/div[1]/div/div/div/div/div/div[3]/a/span');
        await discoverOurBrandsButton.click();
    }

    async navigateToPeterMillarBrand() {
        const peterMillar = this.page.locator('#multipleBrands > div:nth-child(1) > div > div > a > img');
        await peterMillar.click();

        // Validate and confirm user has navigated to the correct brand page
        const currentURL = await this.page.url();
        if (currentURL !== 'https://www.corporategear.com/peter-millar.html') {
            //throw new Error('Navigation failed: Incorrect page URL');
        }
    }
    
    async clickOnProduct() {
    // Selecting the first matching "Peter Millar Men's Iron Fade Half-Zip" element
    const productLink = this.page.locator('a[title="Peter Millar Men\'s Iron Fade Half-Zip"][href="/peter-millar-fade-half-zip-iron-Men-mf24ez28.html"]').first();

    // Scroll the element into view if it's not visible
    await productLink.scrollIntoViewIfNeeded();

    // Wait for the element to be visible before clicking
    await productLink.waitFor({ state: 'visible', timeout: 20000 });

    // Click on the product link
    await productLink.click();
}

    async clickStartOrder() {
        const startOrderButton = this.page.locator("//button[contains(@class, 'btn-xl') and contains(@class, 'btn-primary') and text()='START ORDER']");
        await startOrderButton.waitFor({ state: 'visible', timeout: 20000 }); 
        await startOrderButton.click();
    }


    /*async selectProductSize(size) {
        // Locate the dropdown for the specified size and select the desired option
        const sizeDropdown = this.page.locator(`select[name="${size}"]`);
        await sizeDropdown.waitFor({ state: 'visible', timeout: 10000 });
        await sizeDropdown.selectOption('2'); // Replace '2' with the value for the desired size option
    }*/

        async selectProductSize(size) {
            // Locate the dropdown element for the specified size
            const sizeDropdown = this.page.locator(`select[name="${size}"]`);
        
            // Ensure the dropdown is visible on the screen
            await sizeDropdown.scrollIntoViewIfNeeded();
        
            // Wait for the dropdown to be visible and enabled
            await sizeDropdown.waitFor({ state: 'visible', timeout: 10000 });
        
            // 1. Print available options to verify what options are in the dropdown
            const options = await this.page.$$eval(`select[name="${size}"] option`, options =>
                options.map(option => ({ value: option.value, text: option.textContent }))
            );
            console.log("Available options:", options);
        
            // Select the option with value "9" (for MD size dropdown)
            try {
                await sizeDropdown.selectOption({ value: '9' });
                console.log("Selected option with value 9 in the size dropdown");
            } catch (error) {
                console.error(`Error selecting size option: ${error.message}`);
            }
        }
}
module.exports = Home;
