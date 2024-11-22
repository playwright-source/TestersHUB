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


