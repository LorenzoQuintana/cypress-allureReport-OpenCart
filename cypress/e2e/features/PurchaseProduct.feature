@smoke @regression
Feature: Purchase Product

  @smoke
  Scenario Outline: User buys a product
    Given I am logged in as a user
    And I have added a "<product>" to the cart
    When I proceed to checkout
    And I complete the purchase
    Then I should see a confirmation message

    Examples:
      | product           |
      | iPhone            |
      | MacBook           |


