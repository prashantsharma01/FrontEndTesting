import elementsPage from "./elements.page"
import allureReporter from '@wdio/allure-reporter'

class actionPage{

    async selectApplicationTypeSingle(){
        (await elementsPage.applicationTypeSingle).click()
    }
    async selectApplicationTypeJoint(){
        (await elementsPage.applicationTypeJoint).click()
    }
    async selectDependent(){
        (await elementsPage.dependent).selectByIndex(0)
    }
    async selectPropertyTypeHome(){
        (await elementsPage.propertyTypeHome).click()
    }
    async selectPropertyTypeResidentia(){
        (await elementsPage.propertyTypeResidential).click()
    }
    async enterAnnualIncomeBeforetax(income){
        (await elementsPage.annualIncomeBeforetax).addValue(income)
    }
    async enterAnnualOtherIncome(otherIncome){
        (await elementsPage.annualOtherIncome).addValue(otherIncome)
    }
    async enterSecondApplicantAnnualIncome(secondApplicantIncome){
        (await elementsPage.secondApplicantAnnualIncome).addValue(secondApplicantIncome)
    }
    async enterSecondApplicantOtherIncome(secondApplicantOtherIncome){
        (await elementsPage.secondApplicantOtherIncome).addValue(secondApplicantOtherIncome)
    }
    async enterMonthlyLivingExpense(LivingExpenses){
        (await elementsPage.monthlyLivingExpense).addValue(LivingExpenses)
    }
    async enterCurrentHomeLoanMonthlyRepayments(homeLoanRepayment){
        (await elementsPage.currentHomeLoanMonthlyRepayments).addValue(homeLoanRepayment)
    }
    async enterOtherLoansMonthlyRepayments(otherLoan){
        (await elementsPage.otherLoansMonthlyRepayments).addValue(otherLoan)
    }
    async enterOtherMonthlyCommitments(otherCommitments){
        (await elementsPage.otherMonthlyCommitments).addValue(otherCommitments)
    }
    async enterCreditLimit(creditLimit){
        (await elementsPage.creditLimit).addValue(creditLimit)
    }
    async clickCalculateButton(){
        (await elementsPage.calculateButton).click()
    }
    async getResultAmount(expectedResult){
        await elementsPage.resultAmount.waitForDisplayed()
        await browser.pause(1000)
        const result = await elementsPage.resultAmount.getText()
        console.log(expectedResult);
        console.log(result);

        if(expectedResult === result){
            console.log(`expected data ( ${expectedResult} ) is same as actual result ( ${result} )`);
            allureReporter.addStep(`expected data ( ${expectedResult} ) is same as actual result ( ${result} )`,'','passed')
        }else{
            console.log(`expected data is ( ${expectedResult} ) and result is ( ${result} ) please verify the input data again`);
            allureReporter.addStep(`expected data is ( ${expectedResult} ) and result is ( ${result} ) please verify the input data again`,'','failed')
        }

    }
    async getErrorMessage(){

    }
    async clickStartOverButton(){
        (await elementsPage.startOverButton).click()
    }
    
}
export default new actionPage