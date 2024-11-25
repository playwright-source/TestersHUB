@login
Feature: Validate all scenario functionality

@TC-05
Scenario: Login with valid credentials
    Given User launches the website
    When  Login with username as 'cypresstest28@gmail.com' and password as 'Test@123'
    Then the user should be redirected to the landing home page

@TC-06
Scenario: Prevent Login with Invalid Credentials
    Given User launches the website
    When  Login with username as 'invaliduser28@gmail.com' and password as 'InvalidPwd'
    Then the user see "User name and password invalid." message

@TC-08
Scenario: Verify Successful Logout
    Given User launches the website
    When Login with username as 'cypresstest28@gmail.com' and password as 'Test@123'
    Then the user should be redirected to the landing home page
    And the user clicks on "Discover Our Brands"
    Then the user navigates to the 'Peter Millar' brand page
    And the user clicks on the 'Peter Millar' product
    And the user clicks on the "START ORDER" button
    And select the SIZE 'MD' with QTY '5'
    And select the SIZE 'LG' with QTY '7'
    And the user clicks the add to cart button
    And User clicks on 'Sign Out' option
    Then User redirects to 'Home' page
