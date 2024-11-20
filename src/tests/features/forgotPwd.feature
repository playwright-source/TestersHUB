@forgotpwd
Feature: Validate all Forgot Password functionality

@TC-09
Scenario: Initiate Password Reset Process
    Given User launches the website
    And User is on the login page
    And User clicks the 'Forgot Password' link
    And User enters a registered email address
    Then User clicks the 'Forgot Password' button
    And User should see the confirmation message

#@TC-10 @WIP
#Scenario: Verify Expiration of Password Reset Link
    #Given User has received a password reset email
    #When User clicks on the password reset link after the predefined expiration period
    #Then The link should be invalid
    #Then An error message should indicate that the link has expired
