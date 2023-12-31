// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
Cypress.Commands.add('loadPage', () => {
  cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: 'example'
    }).as('loadMovies')
    .visit('http://localhost:3000/');
})

Cypress.Commands.add('getSingleFirstView', () => {
  cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 200,
      fixture: 'movie'
    }).as('loadSelectedMovie')
    cy.get('.cards-container')
    .get('article').first().contains('h3', 'Black Adam')
    .click()
});

Cypress.Commands.add('simulate500Error', () => {
  cy.intercept(
    "GET",
    "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
    {
      statusCode: 500
    }
  ).as('500Error')
})
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })