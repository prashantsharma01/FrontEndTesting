import { Given, When, Then } from "@cucumber/cucumber";
import urlPage from '../pageobjects/url.page'
import actionPage from '../pageobjects/action.page'


Given(/^user is on the borrow page/, async ()=>{
    await urlPage.openHomePage()
})

When(/^user selects application type single/, async ()=>{
    await actionPage.selectApplicationTypeSingle()
})
When(/^user selects dependants as zero/, async ()=>{
    await actionPage.selectDependent()
})
When(/^user selects Buying a home to live in/, async ()=>{
    await actionPage.selectPropertyTypeHome()
})
When(/^user enters income of (.+)$/, async (income)=>{
    await actionPage.enterAnnualIncomeBeforetax(income)
})
When(/^user enters Other income (.+)$/, async (otherIncome)=>{
    await actionPage.enterAnnualOtherIncome(otherIncome)
})
When(/^user enters living expenses (.+)$/, async (LivingExpenses)=>{
    await actionPage.enterMonthlyLivingExpense(LivingExpenses)
})
When(/^user enters current home loan repayments (.+)$/, async (homeLoanRepayment)=>{
    await actionPage.enterCurrentHomeLoanMonthlyRepayments(homeLoanRepayment)
})
When(/^user enters other loan repayments (.+)$/, async (otherLoan)=>{
    await actionPage.enterOtherLoansMonthlyRepayments(otherLoan)
})
When(/^user enters other commitments (.+)$/, async (otherCommitments)=>{
    await actionPage.enterOtherMonthlyCommitments(otherCommitments)
})
When(/^user enters and total credit card limits (.+)$/, async (creditLimit)=>{
    await actionPage.enterCreditLimit(creditLimit)
})
When(/^user click on calculate button/, async ()=>{
    await actionPage.clickCalculateButton()
    await browser.pause(1000)
})

Then(/^displayed amount should be (.+)$/, async (expectedResult) => {
    await actionPage.getResultAmount(expectedResult)
    await browser.pause(1000)
})
Then(/^user clicks on start over/, async () => {
    await actionPage.clickStartOverButton()
    await browser.pause(1000)
})
