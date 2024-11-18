@Filter&Sorting
Feature: Validate all search functionality

@TC-21
Scenario: Filter Products by Specific Attributes
    Given User is on a product listing page with multiple filter options.
    When the User selects a filter option for brand as 'Adidas' color as 'Green' size as 'XS' and price range as '$25.00-$49.99'
    Then product list updates to display only items matching the selected filter criteria

@TC-23
Scenario: Sort Products Based on Selected Criteria
    Given User launches the website
    And  User searcn an item 'pen'
    Given User is on a product listing page with sorting options
    When the User selects a sort option as 'Price: (Low to High)'
    Then product list rearranges according to the selected sorting criterion