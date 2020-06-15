/// <reference types="cypress" />

describe('Reset app state', () => {
    it('Verifies that reset app button will reset the cart.', () => {
        cy.log("*** Given ***")
        cy.window().then((win) => {
            sessionStorage.setItem("cart-contents","[4,0,1]")
        })
        cy.visit('/inventory.html')
        cy.get('.bm-burger-button')
          .click()

        cy.log("*** When ***")
        cy.get('#reset_sidebar_link')
          .click()

        cy.log("*** Then ***")
        Cypress.Commands.add('getSessionStorage', (key) => {
            cy.window().then((window) => window.sessionStorage.getItem(key))
          })
        cy.getSessionStorage('cart-contents').should('eq', null)
        cy.xpath('//*[@id="shopping_cart_container"]/a/span').should('not.exist')
  })
})