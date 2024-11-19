@search
Feature: Validate all search functionality

@TC-18
Scenario: Verify user can able to search an item
   Given User launches the website
   When User search an item 'bag'
   Then User should see result for 'bag'

@TC-19
Scenario: Verify correct error is displayed for Invalid or Nonsensical Queries
   Given User launches the website
   When User search an invalid item 'test123'
   Then User should see error message 'We're sorry, no results found for "test123"