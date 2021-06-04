import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

let post
let postGlobalId

Given('a post as below', (table) => {
  const content = table.rawTable[1][0]
  cy.insert('post', { content }).then((entry) => {
    post = entry

    cy.toGlobalId('Post', post.id).then((globalId) => {
      postGlobalId = globalId
    })
  })
})

Given('I am on the post page', () => {
  cy.visit(`/post/${postGlobalId}`)
})

Then('I see the post detail', () => {
  cy.the('postContent').contains(post.content)
})
