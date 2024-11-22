Feature: Create New Customer Account functionality

@TC-03
Scenario: Validate Mandatory Fields During Registration
    Given User launches the website
    And User is on the login page
    When User clicks the JOIN US button and navigates to the registration page
    When User leaves one or more mandatory fields empty and attempts to submit the registration form
    Then Error messages should be displayed for all mandatory fields