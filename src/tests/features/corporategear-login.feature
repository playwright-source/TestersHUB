Feature: Corporate Gear Website Add To Cart Flow
@signup
Scenario: User browses brands and adds product to cart
    Given User launches the website
    When  Login with username as 'cypresstest28@gmail.com' and password as 'Test@123'
    Then the user should be redirected to the landing home page


@search
Scenario: Verify user can able to search an item
   Given User launches the website
   When User searcn an item 'bag'
   Then User should see result for 'bag'

