import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import alerts from '../../support/alerts.js';
import credentials from '../../support/credentials.js';

Given('I have added a product to the cart', () => {
  cy.visit('/');
  cy.get('button[onclick*="cart.add"]').first().click();
});

When('I view the cart', () => {
  cy.get('#cart-total').click();
  cy.contains('View Cart').click();
});

Then('I should see the product in the cart', () => {
  cy.get('.table.table-bordered').should('contain', 'Product Name');
});

When('I update the quantity of the product', () => {
  cy.get('.table-responsive > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(4) > div:nth-child(1) > input:nth-child(1)')
    .clear()
    .type('2');
  cy.get('.fa-refresh').first().click();
});

Then('the total should be updated', () => {
  cy.get('.alert-success').should('be.visible').and('contain', alerts.basic.modifyCartSuccess);
});

When('I remove the product', () => {
  cy.get('div.input-group.btn-block span.input-group-btn button.btn.btn-danger').click(); 
});

Then('the cart should be empty', () => {
  cy.get('.table-responsive').should('not.exist');
  cy.get('#content').should('contain', alerts.basic.emptyCart);
});

