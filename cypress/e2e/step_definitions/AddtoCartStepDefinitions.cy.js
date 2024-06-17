import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import alerts from '../../support/alerts.js';

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
  cy.get('.alert-success').contains(alerts.basic.successAdded).should('be.visible');
});