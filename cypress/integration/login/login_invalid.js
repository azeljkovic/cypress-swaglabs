/// <reference types="cypress" />

describe('Login invalid credentials', () => {
    it('Verifies that login fails with invalid credentials', () => {
        cy.log("*** Given ***")
        cy.visit('/')
        cy.get('#user-name')
          .type('standard_user')
        cy.get('#password')
          .type('invalid_pass')

        cy.log("*** When ***")
        cy.get('.btn_action')
          .click()
          
        cy.log("*** Then ***")
        cy.get('.error-button')
          .should('exist')
        cy.get('[data-test="error"]')
            .should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    })
  })