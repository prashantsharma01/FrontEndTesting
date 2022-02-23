class elementsPage{
    
    get applicationTypeSingle(){
        return $("//ul[@aria-labelledby='q1q1']/li[1]")
    }
    get applicationTypeJoint(){
        return $("//ul[@aria-labelledby='q1q1']/li[2]")
    }
    get dependent(){
        return $("//select[@title='Number of dependants']")
    }
    get propertyTypeHome(){
        return $("//ul[@aria-labelledby='q1q3']/li[1]")
    }
    get propertyTypeResidential(){
        return $("//ul[@aria-labelledby='q1q3']/li[2]")
    }
    get annualIncomeBeforetax(){
        return $("//input[@aria-labelledby='q2q1']")
    }
    get annualOtherIncome(){
        return $("//input[@aria-labelledby='q2q2']")
    }
    get secondApplicantAnnualIncome(){
        return $("//input[@aria-labelledby='q2q3']")
    }
    get secondApplicantOtherIncome(){
        return $("//input[@aria-labelledby='q2q4']")
    }
    get monthlyLivingExpense(){
        return $("//input[@aria-labelledby='q3q1']")
    }
    get currentHomeLoanMonthlyRepayments(){
        return $("#homeloans")
    }
    get otherLoansMonthlyRepayments(){
        return $("#otherloans")
    }
    get otherMonthlyCommitments(){
        return $("//input[@aria-labelledby='q3q4']")
    }
    get creditLimit(){
        return $("//input[@aria-labelledby='q3q5']")
    }
    get calculateButton(){
        return $("#btnBorrowCalculater")
    }
    get resultAmount(){
        return $("#borrowResultTextAmount")
    }
    get errorMessage(){
        return $("div.borrow__error__text")
    }
    get startOverButton(){
        return $("//span[@class='icon icon_restart'][1]")
    }
}
export default new elementsPage()