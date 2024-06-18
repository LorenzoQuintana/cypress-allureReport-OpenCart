
class CartPage {
    viewCart() {
      cy.get('#cart-total').click();
      cy.contains('View Cart').click();
    }
  
    getProductTable() {
      return cy.get('.table.table-bordered');
    }
  
    updateProductQuantity(quantity) {
      cy.get('.table-responsive > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(4) > div:nth-child(1) > input:nth-child(1)')
        .clear()
        .type(quantity);
      cy.get('.fa-refresh').first().click();
    }
  
    getSuccessAlert() {
      return cy.get('.alert-success');
    }
  
    removeProduct() {
      cy.get('div.input-group.btn-block span.input-group-btn button.btn.btn-danger').click();
    }
  
    getCartContent() {
      return cy.get('#content');
    }
  
    getProductTableResponsive() {
      return cy.get('.table-responsive');
    }
  }
  
  export default new CartPage();
  