
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../pageObjects/LoginPage.js';
import HomePage from '../../pageObjects/HomePage';
import CheckoutPage from '../../pageObjects/CheckoutPage';
import credentials from '../../support/credentials.js';

const loginPage = new LoginPage();

Given('I am logged in as a user', () => {
  loginPage.visit();
  loginPage.fillEmail(credentials.basic.email);
  loginPage.fillPassword(credentials.basic.password);
  loginPage.submit();
  loginPage.verifySuccessfulLogin();
});

Given('I have added a {string} to the cart', (product) => {
  HomePage.visit();
  HomePage.addProductToCart(product);
});

When('I proceed to checkout', () => {
  CheckoutPage.proceedToCheckout();
});

When('I complete the purchase', () => {
  CheckoutPage.completePurchase();
});

Then('I should see a confirmation message', () => {
  CheckoutPage.verifyPurchase();
});
