import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'

Given('{int} posts in the system', (n) => {
  cy.insertList('post', n)
})

Then('I see {int} posts', (n) => {
  cy.get('[data-testid=postCard]').should('have.length', n)
})

When('I scroll to the {string}', (position) => {
  cy.scrollTo(position)
})
