@addtocart
Feature: Validate all cart to functionality

@TC-24
Scenario: User browses brands and adds a product to the cart
    Given User launches the website
    When Login with username as 'cypresstest28@gmail.com' and password as 'Test@123'
    Then the user should be redirected to the landing home page
    When the user clicks on "Discover Our Brands"
    When the user navigates to the 'Peter Millar' brand page
    When the user clicks on the 'Peter Millar' product
    When the user clicks on the "START ORDER" button
    Then select the SIZE 'MD' with QTY '5'
    Then select the SIZE 'LG' with QTY '7'
    Then the user clicks the add to cart button

@TC-25
Scenario: Validate user add to cart the same product multiple times
Given User launches the website
And User search an item 'MF24EZ11-NAV'
And User click on product: '1' in search result
When the user clicks on the "START ORDER" button
And select the SIZE 'MD' with QTY '5'
And select the SIZE 'LG' with QTY '7'
And  the user clicks the add to cart button
And User search an item 'MF24EZ11-NAV'
And User click on product: '1' in search result
When the user clicks on the "START ORDER" button
And select the SIZE 'MD' with QTY '5'
And select the SIZE 'LG' with QTY '7'
And  the user clicks the add to cart button
Then the cart should have '24' items

