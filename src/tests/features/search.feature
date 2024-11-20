@search
Feature: Validate all search functionality

@TC-18
Scenario: Verify user can able to search an item
   Given User launches the website
   When User search an item 'Adidas'
   Then User should see result for 'Adidas'

@TC-19
Scenario: Verify correct error is displayed for Invalid or Nonsensical Queries
   Given User launches the website
   When User search an invalid item 'test123343434'
   Then We're sorry, no results found for "test123343434" error is displayed

@TC-20
Scenario: User searches with special characters
   Given User launches the website
   When User search an invalid item "!@#"
   Then We're sorry, no results found for "!@#" error is displayed