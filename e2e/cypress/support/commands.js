Cypress.Commands.add("checkoutdb", () => {
  cy.request('POST', '/e2e/db/checkout').as('checkoutDb')
})

Cypress.Commands.add("checkindb", () => {
  cy.request('POST', '/e2e/db/checkin').as('checkinDb')
})
