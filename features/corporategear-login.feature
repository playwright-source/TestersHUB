Feature: Corporate Gear Website Login

  Scenario: User logs in with valid credentials
    Given the user navigates to the Corporate Gear website
    When the user clicks on the "Login" button
    And the user enters their email and password
    And the user clicks on the "SIGN IN" button
    Then the user should be redirected to the landing home page