import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the homepage', () => {
  cy.visit('/');
});

When('I add a product to the cart', () => {
  cy.get('button[onclick*="cart.add"]').first().click();
});

Then('the product should be added to the cart', () => {
  cy.get('.alert-success').should('be.visible');
});

Then('a confirmation message should be displayed', () => {
  cy.get('.alert-success').contains('Success: You have added').should('be.visible');
});