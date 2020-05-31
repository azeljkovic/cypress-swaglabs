describe('Invalid login', () => {
    it('Verifies that login will fail when wrong password is used', () => {
        cy.visit('/')
        cy.get('#user-name')
          .type('standard_user')
        cy.get('#password')
          .type('wrong_pass')
        cy.get('[class="btn_action"]')
          .click()

        cy.get('[class="error-button"]')
          .should('exist')
        cy.get('[data-test="error"]')
            .should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    })
  })