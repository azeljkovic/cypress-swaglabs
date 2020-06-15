/// <reference types="cypress" />

describe('About', () => {
    it('Verifies that app redirects to About page.', () => {
        cy.log("*** Given ***")
        cy.visit('/inventory.html')
        cy.get('.bm-burger-button')
          .click()

        cy.log("*** When ***")
        cy.get('#about_sidebar_link')
          .click()

        cy.log("*** Then ***")
        cy.url().should('eq', 'https://www.saucelabs.com')
        cy.get('#user-name')
          .should('exist')
        cy.get('#password')
          .should('exist')
        cy.get('.btn_action')
          .should('exist')
  })
})