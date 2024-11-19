const  caps  = require('./../../../browserStackCaps')
const { chromium } = require('@playwright/test')


async function getBrowser(browserName, testCaseName){
    let browser = null

    if(process.env.CLOUD === 'true'){
        //overidde the browser and test case name
        caps.name = testCaseName
        caps.browser = browserName

        browser = await chromium.connect({
            wsEndpoint: `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(JSON.stringify(caps))}`,
          });
    }else{
        browser = await chromium.launch({ headless: false });  // Launching the browser
    }

     return browser
     
}

module.exports = getBrowser
