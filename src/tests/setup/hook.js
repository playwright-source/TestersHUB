
const { setDefaultTimeout, Before, After, Status  } = require('@cucumber/cucumber')
const { chromium } = require('@playwright/test')
const Home  = require('./../pom/home')

require('dotenv').config()

setDefaultTimeout(60 * 1000 * 2)

Before(async function () {
    this.browser = await chromium.launch({ headless: false });  // Launching the browser
    
    this.context = await this.browser.newContext(); // Creating a new context
    //testing purpose
    this.page = await this.context.newPage(); // Creating a new page
    this.home = new Home(this.page)
  });
  
After(async function ({ result, pickle }) {
    if (result?.status == Status.FAILED) {
        const img = await this.page.screenshot({
            path: `./test-results/screenshots/${pickle.name}.png`,
            type: 'png',
        })
        this.attach(img, 'image/png')
    }
    await this.page.close();  // Closing the page
    await this.browser.close();  // Closing the browser after the test
});
  