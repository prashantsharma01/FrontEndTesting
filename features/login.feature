Feature: Loan Calculator

  Scenario: user calculating his Elegibility for Loan

    Given user is on the borrow page
    When user selects application type single
    And user selects dependants as zero
    And user selects Buying a home to live in
    And user enters income of "80,000"
    And user enters Other income "10,000"
    And user enters living expenses "500"
    And user enters current home loan repayments "0"
    And user enters other loan repayments "100"
    And user enters other commitments "0"
    And user enters and total credit card limits "10,000"
    And user click on calculate button
    Then displayed amount should be $482,000
    And user clicks on start over