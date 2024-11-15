Feature: Corporate Gear Website Add To Cart Flow

   @signup
  Scenario: User browses brands and adds a product to the cart
    Given the user navigates to the Corporate Gear website
    When the user clicks on "Login"
    When the user enters their email and password
    When the user clicks on the "SIGN IN" button
    Then the user should be redirected to the landing home page
    When the user clicks on "Discover Our Brands"
    When the user navigates to the Peter Millar brand page
    Then the user should be on the Peter Millar brand page
    When the user clicks on the "Peter Millar Men's Iron Fade Half-Zip" product
    When the user clicks on the "START ORDER" button
    Then Select the product size "SM"
