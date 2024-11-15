# Corporategear-UI Test Automation framework

This repo consists of regression test scripts which is build with cucumber-js + Playwright + Javascript for UI automation

This repository provides a test automation framework that combines Playwright for end-to-end testing with Cucumber for behavior-driven development (BDD). The setup allows for clear test scenarios written in Gherkin syntax and is designed to be flexible, scalable, and compatible with modern web applications

## Table of Contents
  * Features
  * Project Structure
  * Setup and Installation
  * Running Tests
  * License


### Features
* **End-to-End Testing:** Automated UI testing for web applications using * * Playwright.
* **BDD Style:** Cucumber enables tests to be written in plain language using the Gherkin syntax.
* **Cross-Browser Testing:** Run tests across Chromium, Firefox, and WebKit browsers. - `WIP`
* **Custom Data loading:** load the data to framework as `JSON` file - `WIP`
* **Report Generation:** Generates reports for test results.

### Project Structure
The core directories and files are organized as follows:
```
playwright-cucumber-ts/
├── src/
│   ├── tests/features/             # Cucumber feature files
│   ├── tests/stepdef/              # Step definitions for Cucumber steps
│   ├── tests/pom/                  # Page Object Model (POM) classes
|   ├── setup/
|       ├── custom.world.js         # sharing the state across multiple step definition
|       ├── hook.js                 # code for setup and attach the screenshot for every failure
|── .env                            # Environment variables to set URL, BROWSER, TRACE and HEAD mode
├── package.json                    # Project dependencies and scripts
```

## Setup and Installation
### Prerequisites
* **Node.js:** Ensure Node.js is installed (v14 or later).
* **Playwright Browsers:** Playwright will automatically install necessary browsers.

### Installation
Clone the repository and install the dependencies:
```
git clone https://github.com/playwright-source/TestersHUB.git
cd TestersHUB
npm install
```

### Browser Setup
Run the following command to install the required browsers:
```
npx playwright install
```
## Running Tests
You can run the tests using the following commands:
* **Run All Tests:**
```
npm test
```
* **Run Tests with Tags:** 
`@login`, `@search`  - these tags are mapped in scearios of feature file, 
Update the `tags` value it will pick tagged scenario alone, for example 
```
"tags" : "@login"  --- execute login tagged scenario alone
"tags" : "@login or @search"  --- execute both login and search tagged scenarios
"tags" : "@login and @search"  --- each scenario should have both scenarios
"tags" " ""   -- execute all scenarios
```
Now run the test as
```
npm test                 
```

## Reporting
The html report can be found in the folder `./test-results/cucumber-report.html`, the file carries the information of test like Passed, Failed, Skipped, Screenshot, Traces and execution device information.

_**Currently the documentation is in progress**_


## License
This project is open-source and available under the MIT License.
