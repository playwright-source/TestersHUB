@ProductListings
Feature: Validate all Product Listing functionality

@TC-12
Scenario: Display Products Under Respective Categories
    Given User launches the website
    And User is on the product listing page
    When User clicks the "T-Shirts" category
    Then All products belonging to the "T-Shirts" category should be displayed


