@viewEditCart @smoke @regression
Feature: View and Edit Cart

  
  Scenario: User views the cart
    Given I have added a product to the cart
    When I view the cart
    Then I should see the product in the cart

  @cartQuantity
  Scenario: User updates the quantity of a product in the cart
    Given I have added a product to the cart
    When I view the cart
    And I update the quantity of the product
    Then the total should be updated

  @cartRemoval
  Scenario: User removes a product from the cart
    Given I have added a product to the cart
    When I view the cart
    And I remove the product
    Then the cart should be empty

