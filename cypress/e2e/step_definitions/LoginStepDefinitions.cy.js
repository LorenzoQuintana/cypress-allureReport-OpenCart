import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import credentials from '../../support/credentials.js';
import alerts from '../../support/alerts.js';

Given('I am on the login page', () => {
  cy.visit('/index.php?route=account/login');
});

When('I enter valid login credentials', () => {
  cy.get('#input-email').type(credentials.basic.email);
  cy.get('#input-password').type(credentials.basic.password);
});

When('I enter invalid login credentials', () => {
  cy.get('#input-email').type(credentials.invalid.email);
  cy.get('#input-password').type(credentials.invalid.password);
});

When('I submit the login form', () => {
  cy.get('form').contains('Login').click();
});

Then('I should be logged in successfully', () => {
  cy.url().should('include', 'account/account');
  cy.get('.alert').should('not.exist');
});

Then('I should see an invalid login error message', () => {
  cy.get('.alert').should('be.visible').then(($alert) => {
    const alertText = $alert.text();
    if (alertText.includes(alerts.basic.noEmailPassMatch)) {
      expect(alertText).to.contain(alerts.basic.noEmailPassMatch);
    } else if (alertText.includes(alerts.basic.tooManyLoginAttempts)) {
      expect(alertText).to.contain(alerts.basic.tooManyLoginAttempts);
    } else {
      throw new Error('Unexpected error message');
    }
  });
});


