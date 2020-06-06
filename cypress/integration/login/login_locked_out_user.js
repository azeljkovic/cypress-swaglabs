describe('Locked out user login', () => {
    it('Verifies that login will fail when locked out user tries to login', () => {
        //Given
        cy.visit('/')
        cy.get('#user-name')
          .type('locked_out_user')
        cy.get('#password')
          .type('secret_sauce')

        //When
        cy.get('.btn_action')
          .click()

        //Then
        cy.get('.error-button')
          .should('exist')
        cy.get('[data-test="error"]')
            .should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
    })
  })