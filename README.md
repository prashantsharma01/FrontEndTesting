# Front End Testing using JavaScript

In project I used WebdriverIO automation framework, Cucumber BDD framework & Allure Reporter as a reporting tool

## NOTE
* Before running this program add URL in pageobjects/url.page.js
```bash
openHomePage = async()=> {
       await browser.url(AddUrlHere)
        
    }
```


## Installation

Use the package manager [npm](npmjs.com/) to install Dependencies.

```bash
$ npm install
```

## To run the project
type
```bash
$ npm run wdio
```

## To view allure report
type
```bash
$ npx allure generate allure-results/ --clean && npx allure open
```
this will generate allure result and open html file on browser