import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import credentials from '../../support/credentials.js';
import alerts from '../../support/alerts.js';

Given('I am on the registration page', () => {
  cy.visit('/index.php?route=account/register');
});

When('I enter valid registration details', () => {
  cy.get('#input-firstname').type(credentials.valid.firstName);
  cy.get('#input-lastname').type(credentials.valid.lastName);
  cy.get('#input-email').type(credentials.valid.email);
  cy.get('#input-telephone').type(credentials.valid.telephone);
  cy.get('#input-password').type(credentials.valid.password);
  cy.get('#input-confirm').type(credentials.valid.password);
  cy.get('input[name="agree"]').check();
});

When('I enter invalid registration details', () => {
  cy.get('#input-firstname').type(credentials.invalid.firstName);
  cy.get('#input-lastname').type(credentials.invalid.lastName);
  cy.get('#input-email').type(credentials.invalid.email);
  cy.get('#input-telephone').type(credentials.invalid.telephone);
  cy.get('#input-password').type(credentials.invalid.password);
  cy.get('#input-confirm').type(credentials.invalid.password);
  cy.get('input[name="agree"]').check();
});

/*
When('I submit the registration form', () => {
  cy.get('.pull-right > .btn').contains('Continue').scrollIntoView().click();
});
*/


When('I submit the registration form', () => {
  cy.get('input[value="Continue"]').focus().click()
});


Then('I should be registered successfully', () => {
  cy.url().should('include', 'account/success');
});

Then('I should see a registration error message', () => {
  cy.url().should('include', 'account/register');
  cy.get('.alert-danger').should('be.visible').and('contain', alerts.basic.alreadyRegisteredEmail);
});

