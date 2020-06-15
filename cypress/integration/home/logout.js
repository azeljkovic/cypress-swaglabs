/// <reference types="cypress" />

describe('Logout', () => {
    it('Verifies that user can successfully logout from application.', () => {
        cy.log("*** Given ***")
        cy.visit('/inventory.html')
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