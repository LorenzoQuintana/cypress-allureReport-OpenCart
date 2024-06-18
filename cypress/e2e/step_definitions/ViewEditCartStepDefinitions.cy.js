
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../pageObjects/HomePage';
import CartPage from '../../pageObjects/CartPage';
import alerts from '../../support/alerts.js';
import credentials from '../../support/credentials.js';

Given('I have added a product to the cart', () => {
  HomePage.visit();
  HomePage.addFirstProductToCart();
});

When('I view the cart', () => {
  CartPage.viewCart();
});

Then('I should see the product in the cart', () => {
  CartPage.getProductTable().should('contain', 'Product Name');
});

When('I update the quantity of the product', () => {
  CartPage.updateProductQuantity(2);
});

Then('the total should be updated', () => {
  CartPage.getSuccessAlert().should('be.visible').and('contain', alerts.basic.modifyCartSuccess);
});

When('I remove the product', () => {
  CartPage.removeProduct();
});

Then('the cart should be empty', () => {
  CartPage.getProductTableResponsive().should('not.exist');
  CartPage.getCartContent().should('contain', alerts.basic.emptyCart);
});

