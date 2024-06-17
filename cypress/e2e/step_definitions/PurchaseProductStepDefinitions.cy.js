import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import credentials from '../../support/credentials.js';

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
  cy.contains('Checkout').click({ force: true });
  
  cy.get('#content').should('be.visible');
  cy.get('.nav > :nth-child(2) > .dropdown-toggle').should('be.visible');
});

When('I complete the purchase', () => {

  cy.get('#input-payment-firstname').type(credentials.basic.firstName, { force: true });
  cy.get('#input-payment-lastname').type(credentials.basic.lastName, { force: true });
  cy.get('#input-payment-address-1').type(credentials.basic.address.address1, { force: true });
  cy.get('#input-payment-city').type(credentials.basic.address.city, { force: true });
  cy.get('#input-payment-postcode').type(credentials.basic.address.postcode, { force: true });
  cy.get('#input-payment-country').select(credentials.basic.address.country, { force: true });
  cy.get('#input-payment-zone').select(credentials.basic.address.zone, { force: true });
  
  cy.get('#button-payment-address').should('be.visible').click({ force: true });

  cy.get('#button-shipping-address').should('be.visible').click({ force: true });
  
  cy.get('#button-shipping-method').should('be.visible').click({ force: true });

  cy.get('input[name="agree"]').check({ force: true });
  cy.get('#button-payment-method').should('be.visible').click({ force: true });
  cy.get('#button-confirm').should('be.visible').click({ force: true });
});

Then('I should see a confirmation message', () => {
  cy.get('.alert-success').should('be.visible').and('contain', 'Your order has been placed');
});

