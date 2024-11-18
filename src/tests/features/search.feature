@search
Feature: Validate all search functionality

Scenario: Verify user can able to search an item
   Given User launches the website
   When User search an item 'bag'
   Then User should see result for 'bag'
