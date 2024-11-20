@ProductDetails
Feature: Validate all Product Details functionality

#@TC-15
#Scenario: Display Accurate Product Details
   # Given User launches the website
    #And  User search an item 'pen'
    #When User clicks any item in listing page
    #And User is on the product detail page of a selected product
    #When User reviews the product information
    #Then User should see below details
    #|name|
    #|description|
    #|price|
   # |images|

@TC-16
Scenario: Verify Zoom Functionality on Product Images
    Given User launches the website
    And User search an item 'bag'
    When User clicks the "YETI Navy Camino 35 Carryall Tote Bag" in listing page
    Then User is on the "Product" detail page of a selected product
    When User hovers over or clicks on the image to activate the zoom feature

@TC-17
Scenario: Suggest Related Products Appropriately
    Given User launches the website
    And User search an item 'bag'
    When User clicks the "YETI Navy Camino 35 Carryall Tote Bag" in listing page
    Then User is on the "Product" detail page of a selected product
    When User scrolls to the You May Also Like section
    Then Products related to the current product "bag" should be displayed


