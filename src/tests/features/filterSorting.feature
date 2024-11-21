@FilterSorting
Feature: Validate all search functionality

#@TC-21
#Scenario: Filter Products by Specific Attributes
    #Given User launches the website
    #When User clicks on 'Men' category
    #And User apply this filter
        #| size | xs |
        #| brand | adidas |
        #| caregory | backpacks |
    #Then the product list should contains item related to 'pen'

@TC-23
Scenario: Sort Products Based on Selected Criteria
    Given User launches the website
    And User search an item 'Adidas'
    And User clicks on sort option 
    When the User selects a sort option as 'Price: (Low to High)'
    Then the products should be sorted in 'Price: (Low to High)' order
    

