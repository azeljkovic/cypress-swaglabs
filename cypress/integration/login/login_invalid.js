describe('Login invalid credentials', () => {
    it('Verifies that login fails with invalid credentials', () => {
        //Given
        cy.visit('/')
        cy.get('#user-name')
          .type('standard_user')
        cy.get('#password')
          .type('invalid_pass')

        //When
        cy.get('[class="btn_action"]')
          .click()
          
        //Then
        cy.get('[class="error-button"]')
          .should('exist')
        cy.get('[data-test="error"]')
            .should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    })
  })