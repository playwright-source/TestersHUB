require('dotenv').config();

const caps = {
    "os" : "Windows",
    "osVersion" : "11",
    "browser": "chrome",
    "browser_version" : "latest",
    "project" : "Corporate Gear",
    "name" : "playwright test",
    "build": "Test_"+new Date().toDateString().replace(/ /gi,"_"),
    "browserstack.username": process.env.BROWSERSTACK_USERNAME || "<USERNAME>",
    "browserstack.accessKey": process.env.BROWSERSTACK_ACCESS_KEY || "<ACCESS_KEY>",
    'browserstack.local': 'false',
    'browserstack.localIdentifier': 'local_connection_name',
    'browserstack.playwrightVersion': '1.latest',
    'client.playwrightVersion': '1.latest',
    'browserstack.debug': 'false',  // enabling visual logs
    'browserstack.console': 'info', // Enabling Console logs for the test
    'browserstack.networkLogs': 'false' , // Enabling network logs for the test
    'browserstack.interactiveDebugging': 'false',
}

module.exports = caps
