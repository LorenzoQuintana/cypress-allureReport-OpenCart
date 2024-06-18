
class CheckoutPage {
    proceedToCheckout() {
      cy.get('#cart').click();
      cy.contains('Checkout').click();
    }
  
    completePurchase() {
      cy.get('#button-payment-address').should('be.visible').click();
      cy.get('#button-shipping-address').should('be.visible').click();
      cy.get('#button-shipping-method').should('be.visible').click();
      cy.get('input[name="agree"]').check();
      cy.get('#button-payment-method').should('be.visible').click();
      cy.get('#button-confirm').scrollIntoView().should('be.visible').click();
    }
  
    verifyPurchase() {
      cy.url().should('include', 'checkout/success');
    }
  }
  
  export default new CheckoutPage();
  