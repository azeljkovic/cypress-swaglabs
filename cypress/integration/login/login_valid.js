describe('Login valid credentials', () => {
    it('Verifies that login suceed with valid credentials', () => {
        //Given
        cy.visit('/')
        cy.get('#user-name')
          .type('standard_user')
        cy.get('#password')
          .type('secret_sauce')

        //When
        cy.get('[class="btn_action"]')
          .click()

        //Then
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
        cy.get('[class="bm-burger-button"]')
          .should('exist')
        cy.get('[class="shopping_cart_container"]')
          .should('exist')
    })
  })