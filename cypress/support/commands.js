Cypress.Commands.add('fillMandatatoryFieldsAndsSubmit', function() {
    cy.get('#firstName').type('Valter')
    cy.get('#lastName').type('Ribeiro')
    cy.get('#email').type('Exemplo@e.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()
})
