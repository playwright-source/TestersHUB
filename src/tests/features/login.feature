@login
Feature: Validate all scenario functionality

Scenario: Login with valid credentials
    Given User launches the website
    When  Login with username as 'cypresstest28@gmail.com' and password as 'Test@123'
    Then the user should be redirected to the landing home page