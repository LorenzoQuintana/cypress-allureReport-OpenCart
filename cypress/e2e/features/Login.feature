@userLogin 
Feature: User Login

  @smoke @regression
  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter valid login credentials
    And I submit the login form
    Then I should be logged in successfully

  @smoke @regression
  Scenario: Unsuccessful login with invalid credentials
    Given I am on the login page
    When I enter invalid login credentials
    And I submit the login form
    Then I should see an invalid login error message
