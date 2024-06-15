import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

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
  cy.get('#button-payment-address').should('be.visible').click();
  cy.get('#button-shipping-address').should('be.visible').click();
  cy.get('#button-shipping-method').should('be.visible').click();
  cy.get('input[name="agree"]').check();
  cy.get('#button-payment-method').should('be.visible').click();
  cy.get('#button-confirm').should('be.visible').click();
});

Then('I should see a confirmation message', () => {
  cy.get('.alert-success').should('be.visible').and('contain', 'Your order has been placed');
});

