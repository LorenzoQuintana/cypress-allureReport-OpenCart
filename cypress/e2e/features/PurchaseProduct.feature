@smoke @regression
Feature: Purchase Product

  Scenario Outline: User buys a product
    Given I have added a "<product>" to the cart
    When I proceed to checkout
    And I complete the purchase
    Then I should see a confirmation message

    Examples:
      | product               |
      | iPhone                |
      | Apple Cinema 30       |

