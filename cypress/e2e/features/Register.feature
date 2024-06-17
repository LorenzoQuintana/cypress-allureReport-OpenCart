@smoke @regression
Feature: User Registration

  @smoke
  Scenario: Successful registration with valid details
    Given I am on the registration page
    When I enter valid registration details
    And I submit the registration form
    Then I should be registered successfully

  @regression
  Scenario: Unsuccessful registration with invalid details
    Given I am on the registration page
    When I enter invalid registration details
    And I submit the registration form
    Then I should see a registration error message
