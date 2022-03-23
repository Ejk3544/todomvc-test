/// <reference types="cypress" />

it ('should be able to add a new todo to the list', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/?')
    
    cy.get('.new-todo', {timeout: 50000}).type("Clear room{enter}")
    cy.get('.toggle').click()
cy.contains('Clear').click()
})


