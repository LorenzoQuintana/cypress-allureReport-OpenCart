
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import credentials from '../../support/credentials.js';
import alerts from '../../support/alerts.js';
import RegisterPage from '../../pageObjects/RegisterPage';

const registerPage = new RegisterPage();

Given('I am on the registration page', () => {
  registerPage.visit();
});

When('I enter valid registration details', () => {
  registerPage.fillFirstName(credentials.valid.firstName);
  registerPage.fillLastName(credentials.valid.lastName);
  registerPage.fillEmail(credentials.valid.email);
  registerPage.fillTelephone(credentials.valid.telephone);
  registerPage.fillPassword(credentials.valid.password);
  registerPage.fillConfirmPassword(credentials.valid.password);
  registerPage.agreeToTerms();
});

When('I enter invalid registration details', () => {
  registerPage.fillFirstName(credentials.invalid.firstName);
  registerPage.fillLastName(credentials.invalid.lastName);
  registerPage.fillEmail(credentials.invalid.email);
  registerPage.fillTelephone(credentials.invalid.telephone);
  registerPage.fillPassword(credentials.invalid.password);
  registerPage.fillConfirmPassword(credentials.invalid.password);
  registerPage.agreeToTerms();
});

When('I submit the registration form', () => {
  registerPage.submit();
});

Then('I should be registered successfully', () => {
  registerPage.verifySuccessfulRegistration();
});

Then('I should see a registration error message', () => {
  registerPage.verifyErrorMessage(alerts.basic.alreadyRegisteredEmail);
});


