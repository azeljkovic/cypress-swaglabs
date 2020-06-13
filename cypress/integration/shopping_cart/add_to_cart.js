/// <reference types="cypress" />

describe('Add products to cart', () => {
    it('Verifies that products are added to cart.', () => {
        cy.log("*** Given ***")
        cy.visit('https://www.saucedemo.com/inventory.html')
        cy.xpath('//*[@class="inventory_item"][1]//button')
          .click()
        cy.xpath('//*[@class="inventory_item"][3]//button')
          .click()
        cy.xpath('//*[@class="inventory_item"][5]//button')
          .click()
        cy.get('#item_0_title_link')
          .click({force: true})
        cy.xpath('//*[@class="inventory_details_desc_container"]//button')
          .click()

        cy.log("*** When ***")
        cy.xpath('//*[@class="inventory_details"]/button')
        .click()

        cy.log("*** Then ***")
        cy.get('.fa-layers-counter').should('have.text', '4')
        Cypress.Commands.add('getSessionStorage', (key) => {
            cy.window().then((window) => window.sessionStorage.getItem(key))
          })
        cy.getSessionStorage('cart-contents').should('eq', '[4,1,2,0]')
  })
})