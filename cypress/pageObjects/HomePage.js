import alerts from "../support/alerts";

class HomePage {
    visit() {
      cy.visit('/');
    }
  
    addFirstProductToCart() {
      cy.get('button[onclick*="cart.add"]').first().click();
    }

    addProductToCart(product) {
        cy.get('.product-thumb').should('be.visible');
        cy.get('.product-thumb').contains(product)
          .parents('.product-thumb')
          .find('button[onclick*="cart.add"]').click();
      }
  
    getSuccessAlert() {
      return cy.get('.alert-success');
    }
  
    getSuccessAlertMessage() {
      return this.getSuccessAlert().contains(alerts.basic.successAdded);
    }
  }
  
  export default new HomePage();
  