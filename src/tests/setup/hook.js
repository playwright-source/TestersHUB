
const { setDefaultTimeout, Before, After, Status, setWorldConstructor  } = require('@cucumber/cucumber')
const { chromium } = require('@playwright/test')
const  getBrowser  = require('./browser')

const CustomWorld = require('./../setup/custom.world')

require('dotenv').config()

setWorldConstructor(CustomWorld)
setDefaultTimeout(60 * 1000 * 2)

Before(async function ({ pickle }) {
    let browserName = process.env.BROWSER || 'chrome'
    this.browser = await getBrowser(browserName, pickle.name)  // Launching the browser
    this.context = await this.browser.newContext(); // Creating a new context
    this.page = await this.context.newPage(); // Creating a new page
    await this.initSetUp(this.page)
  });
  
After(async function ({ result, pickle }) {
    if (result?.status == Status.FAILED) {
        const img = await this.page.screenshot({
            path: `./test-results/screenshots/${pickle.name}.png`,
            type: 'png',
        })
        this.attach(img, 'image/png') 
    }

    if(process.env.CLOUD === 'true'){
        await this.page.evaluate(_ => {}, `browserstack_executor: ${JSON.stringify({action: 'setSessionStatus', arguments: {status: result.status.toLowerCase(), reason: result.exception ? result.exception.message : "Successfully executed"}})}`);
    }
    await this.page.close();  // Closing the page
    await this.browser.close();  // Closing the browser after the test
});
  