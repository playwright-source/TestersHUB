@forgotpwd
Feature: Validate all Forgot Password functionality

@TC-09
Scenario: Initiate Password Reset Process
    Given User launches the website
    And User is on the login page
    And User clicks the 'Forgot Password' link
    And User enters a registered email address
    Then User clicks the 'Forgot Password' button
    Then the user see "Email sent successfully" message

#@TC-10 @WIP
#Scenario: Verify Expiration of Password Reset Link
    #Given User has received a password reset email
    #When User clicks on the password reset link after the predefined expiration period
    #Then The link should be invalid
    #Then An error message should indicate that the link has expired

@TC-11
Scenario: Change Password After Logging In
    Given User launches the website
    When Login with username as 'cypresstest28@gmail.com' and password as 'Test@123'
    And User clicks on 'Account Settings' option
    And User 'Change' password
    Then the user see 'Password updated successfully' message
    And User set password to default

