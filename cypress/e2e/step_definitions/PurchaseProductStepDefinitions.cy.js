import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import credentials from '../../support/credentials.js';
import alerts from '../../support/alerts.js';

Given('I am logged in as a user', () => {
  cy.visit('/index.php?route=account/login');
  
  cy.get('#input-email').type(credentials.basic.email);
  cy.get('#input-password').type(credentials.basic.password);
  cy.get('form').contains('Login').click();
  
  cy.url().should('include', 'account/account');
  cy.get('.alert-success').should('not.exist');
});

Given('I have added a {string} to the cart', (product) => {
  cy.visit('/');
  
  cy.get('.product-thumb').should('be.visible');
  
  cy.get('.product-thumb').contains(product)
    .parents('.product-thumb')
    .find('button[onclick*="cart.add"]').click();
});

When('I proceed to checkout', () => {
  cy.get('#cart').click();
  cy.contains('Checkout').click();
});

When('I complete the purchase', () => {
  cy.get('#button-payment-address').should('be.visible').click();

  cy.get('#button-shipping-address').should('be.visible').click();

  cy.get('#button-shipping-method').should('be.visible').click();

  cy.get('input[name="agree"]').check();
  cy.get('#button-payment-method').should('be.visible').click();
  
  cy.get('#button-confirm').scrollIntoView().should('be.visible').click();
});

Then('I should see a confirmation message', () => {
  cy.url().should('include', 'checkout/success');
});

