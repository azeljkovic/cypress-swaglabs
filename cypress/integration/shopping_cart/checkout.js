/// <reference types="cypress" />

describe('Checkout bought products', () => {
    it('Verifies that products are checked out successfully.', () => {
        cy.log("*** Given ***")
        cy.window().then((win) => {
          sessionStorage.setItem("cart-contents","[4,0,1]")
        })
        cy.visit('https://www.saucedemo.com/inventory.html')
        cy.get('#shopping_cart_container')
          .click()
        cy.xpath('//*[@class="cart_footer"]/a[2]')
          .click()
        cy.get('#first-name')
          .type('Hernan')
        cy.get('#last-name')
          .type('Cattaneo')
        cy.get('#postal-code')
          .type('21000')
        cy.get('.btn_primary')
          .click()

        cy.log("*** When ***")
        cy.get('.btn_action')
          .click()

        cy.log("*** Then ***")
        cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER')
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-complete.html')
        Cypress.Commands.add('getSessionStorage', (key) => {
            cy.window().then((window) => window.sessionStorage.getItem(key))
          })
        cy.getSessionStorage('cart-contents').should('eq', null)
  })
})