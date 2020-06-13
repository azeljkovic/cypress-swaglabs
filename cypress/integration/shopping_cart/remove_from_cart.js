/// <reference types="cypress" />

describe('Remove products from cart', () => {
    it('Verifies that products are removed from cart.', () => {
        cy.log("*** Given ***")
        cy.window().then((win) => {
          sessionStorage.setItem("cart-contents","[4,0,1]")
        })
        cy.visit('https://www.saucedemo.com/inventory.html')
        cy.xpath('//*[@class="inventory_item"][1]//button')
          .click()
        cy.xpath('//*[@class="inventory_item"][3]//button')
          .click()
        cy.get('#item_0_title_link')
          .click({force: true})
        cy.xpath('//*[@class="inventory_details_desc_container"]//button')
          .click()

        cy.log("*** When ***")
        cy.xpath('//*[@class="inventory_details"]/button')
        .click()

        cy.log("*** Then ***")
        cy.get('.fa-layers-counter').should('not.exist')
        Cypress.Commands.add('getSessionStorage', (key) => {
            cy.window().then((window) => window.sessionStorage.getItem(key))
          })
        cy.getSessionStorage('cart-contents').should('eq', '[]')
  })
})