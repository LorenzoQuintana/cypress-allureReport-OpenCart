
class LoginPage {
    visit() {
      cy.visit('/index.php?route=account/login');
    }
  
    fillEmail(email) {
      cy.get('#input-email').type(email);
    }
  
    fillPassword(password) {
      cy.get('#input-password').type(password);
    }
  
    submit() {
      cy.get('form').contains('Login').click();
    }
  
    verifySuccessfulLogin() {
      cy.url().should('include', 'account/account');
      cy.get('.alert').should('not.exist');
    }
  
    verifyErrorMessage(expectedMessage) {
      cy.get('.alert').should('be.visible').and('contain', expectedMessage);
    }
  
    verifyAnyErrorMessage(expectedMessages) {
      cy.get('.alert').should('be.visible').then(($alert) => {
        const alertText = $alert.text();
        const matchedMessage = expectedMessages.find(message => alertText.includes(message));
        if (matchedMessage) {
          expect(alertText).to.contain(matchedMessage);
        } else {
          throw new Error('Unexpected error message');
        }
      });
    }
  }
  
  export default LoginPage;
  