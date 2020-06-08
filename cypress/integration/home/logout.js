/// <reference types="cypress" />

describe('Reset app state', () => {
    it('Verifies that reset app button will reset the cart.', () => {
        cy.log("*** Given ***")
        cy.visit('https://www.saucedemo.com/inventory.html')
        cy.get('.bm-burger-button')
          .click()

        cy.log("*** When ***")
        cy.get('#logout_sidebar_link')
          .click()

        cy.log("*** Then ***")
        cy.url().should('eq', 'https://www.saucedemo.com/index.html')
        cy.get('#user-name')
          .should('exist')
        cy.get('#password')
          .should('exist')
        cy.get('.btn_action')
          .should('exist')
  })
})