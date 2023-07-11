import example from '../fixtures/example.json'
describe('Rancid Tomatillos homepage view', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: 'example'
    })
    .visit('http://localhost:3000/');
  });
  it('Should be able to visit homepage and view title', () => {
    cy.get('h1').contains('Rancid Tomatillos');
  });
  it('Should be able to visit homepage and view all movies', () => {
    cy.get('.cards-container').find(".card-details").should('have.length', 40)
    .get('.card-details').first().contains('h3', 'Black Adam')
    .get('.card-details').last().contains('h3', 'X')
  });
});