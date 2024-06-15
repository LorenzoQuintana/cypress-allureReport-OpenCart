import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I have added a product to the cart', () => {
  cy.visit('/');
  cy.get('button[onclick*="cart.add"]').first().click();
});

When('I view the cart', () => {
  cy.get('#cart-total').click();
  cy.contains('View Cart').click();
});

Then('I should see the product in the cart', () => {
  cy.get('.table-responsive').should('contain', 'Product Name');
});

When('I update the quantity of the product', () => {
  cy.get(':nth-child(4) > .input-group > .form-control').clear().type('2');
  cy.get('.btn-primary > .fa').first().click();
});

Then('the total should be updated', () => {
  cy.get('.alert-success').should('be.visible').and('contain', 'Success: You have modified your shopping cart!');
});

When('I remove the product', () => {
  cy.get('button[data-original-title="Remove"]').click(); 
});

Then('the cart should be empty', () => {
  cy.get('.table-responsive').should('not.exist');
  cy.get('#content').should('contain', 'Your shopping cart is empty!');
});

