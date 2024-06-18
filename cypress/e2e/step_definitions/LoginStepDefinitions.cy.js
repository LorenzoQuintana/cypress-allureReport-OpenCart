
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import credentials from '../../support/credentials.js';
import alerts from '../../support/alerts.js';
import LoginPage from '../../pageObjects/LoginPage';

const loginPage = new LoginPage();

Given('I am on the login page', () => {
  loginPage.visit();
});

When('I enter valid login credentials', () => {
  loginPage.fillEmail(credentials.basic.email);
  loginPage.fillPassword(credentials.basic.password);
});

When('I enter invalid login credentials', () => {
  loginPage.fillEmail(credentials.invalid.email);
  loginPage.fillPassword(credentials.invalid.password);
});

When('I submit the login form', () => {
  loginPage.submit();
});

Then('I should be logged in successfully', () => {
  loginPage.verifySuccessfulLogin();
});

Then('I should see an invalid login error message', () => {
  loginPage.verifyAnyErrorMessage([
    alerts.basic.noEmailPassMatch,
    alerts.basic.tooManyLoginAttempts
  ]);
});



