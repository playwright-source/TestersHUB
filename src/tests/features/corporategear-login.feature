Feature: Corporate Gear Website Add To Cart Flow
@signup
Scenario: User browses brands and adds product to cart
    Given User launches the website
    When  Login with username as 'cypresstest28@gmail.com' and password as 'Test@123'
    Then the user should be redirected to the landing home page
   # When the user clicks on the "Login" button
    #When the user enters their email and password
    #When the user clicks on the "SIGN IN" button
   # When the user clicks on the "Discover Our Brands" button

@search
Scenario: Verify user can able to search an item
   Given User launches the website
   When User searcn an item 'bag'
   Then User should see result for 'bag'
  
    