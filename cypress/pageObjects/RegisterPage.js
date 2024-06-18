
class RegisterPage {
    visit() {
      cy.visit('/index.php?route=account/register');
    }
  
    fillFirstName(firstName) {
      cy.get('#input-firstname').type(firstName);
    }
  
    fillLastName(lastName) {
      cy.get('#input-lastname').type(lastName);
    }
  
    fillEmail(email) {
      cy.get('#input-email').type(email);
    }
  
    fillTelephone(telephone) {
      cy.get('#input-telephone').type(telephone);
    }
  
    fillPassword(password) {
      cy.get('#input-password').type(password);
    }
  
    fillConfirmPassword(password) {
      cy.get('#input-confirm').type(password);
    }
  
    agreeToTerms() {
      cy.get('input[name="agree"]').check();
    }
  
    submit() {
      cy.get('input[value="Continue"]').focus().click();
    }
  
    verifySuccessfulRegistration() {
      cy.url().should('include', 'account/success');
    }
  
    verifyErrorMessage(expectedMessage) {
      cy.url().should('include', 'account/register');
      cy.get('.alert-danger').should('be.visible').and('contain', expectedMessage);
    }
  }
  
  export default RegisterPage;
  