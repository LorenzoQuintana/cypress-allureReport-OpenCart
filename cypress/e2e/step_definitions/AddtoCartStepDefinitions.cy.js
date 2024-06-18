
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../pageObjects/HomePage';

Given('I am on the homepage', () => {
  HomePage.visit();
});

When('I add a product to the cart', () => {
  HomePage.addFirstProductToCart();
});

Then('the product should be added to the cart', () => {
  HomePage.getSuccessAlert().should('be.visible');
});

Then('a confirmation message should be displayed', () => {
  HomePage.getSuccessAlertMessage().should('be.visible');
});
