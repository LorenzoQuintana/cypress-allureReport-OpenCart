@addToCart
Feature: Add to Cart

  @smoke @regression
  Scenario: User adds a product to the cart
    Given I am on the homepage
    When I add a product to the cart
    Then the product should be added to the cart
    And a confirmation message should be displayed
