const { expect } = require('@playwright/test');

class createAccount {
    constructor(page) {
        this.page = page;
    }

async clickJoinUs() {
    await this.page.locator('button', { hasText: 'JOIN US' }).click();
}

async clickSignUp() {
    this.signUpButton = this.page.locator('button:has-text("SIGN UP")');
    const banner = this.page.locator('//span[contains(., "Free YETI Gift with Purchase!")]');
    if (await banner.isVisible()) {
        await banner.waitFor({ state: 'hidden', timeout: 10000 });
    }
    await this.signUpButton.scrollIntoViewIfNeeded();
    await this.signUpButton.waitFor({ state: 'visible', timeout: 10000 });
    await this.signUpButton.click();
}
async scrollToElement(locator) {
    let isVisible = await locator.isVisible();
    const scrollStep = 300;
    const maxScrollTimeout = 10000;
    const maxAttempts = 50;
    let attempts = 0;
    while (!isVisible) {
        await this.page.evaluate((step) => window.scrollBy(0, step), scrollStep);
        isVisible = await locator.isVisible();
        attempts++;
        const reachedBottom = await this.page.evaluate(
            () => window.scrollY + window.innerHeight >= document.body.scrollHeight
        );
        if (reachedBottom || attempts >= maxAttempts || Date.now() > maxScrollTimeout) {
            throw new Error(`Element ${locator.toString()} not visible after scrolling`);
        }
        await this.page.waitForTimeout(200);
    }
}

async assertFieldError(fieldName, expectedErrorMessage) {
    const fieldLocator = this.page.locator(`input[name="${fieldName}"]`).first();
    const errorLocator = fieldLocator.locator('..').locator('p.text-rose-600.pt-1');
    await this.scrollToElement(fieldLocator);
    await errorLocator.waitFor({ state: 'visible', timeout: 5000 });
    await expect(errorLocator).toHaveText(expectedErrorMessage);
}

async assertAllFieldsErrors() {
    const fields = [
        { fieldName: 'firstname', errorMessage: 'Enter your First Name.' },
        // Skipping lastname validation
        //{ fieldName: 'lastname', errorMessage: 'Enter your Last Name.' },
        { fieldName: 'phone', errorMessage: 'Enter your Phone Number.' },
        { fieldName: 'email', errorMessage: 'Enter your Email Address.' },
        { fieldName: 'password', errorMessage: 'Please Enter more than 8 character.' },
        { fieldName: 'address1', errorMessage: 'Enter your Address Line 1' },
        // Skipping zipcode validation
        //{ fieldName: 'zipcode', errorMessage: 'Enter your Zip Code.' },
        { fieldName: 'city', errorMessage: 'Enter your City.' },
        { fieldName: 'jobTitle', errorMessage: 'Enter your Job Title' }
    ];
    for (const { fieldName, errorMessage } of fields) {
        await this.assertFieldError(fieldName, errorMessage);
    }
}

}
module.exports = createAccount;