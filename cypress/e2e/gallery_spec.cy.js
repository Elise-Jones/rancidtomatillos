import example from "../fixtures/example.json";
describe("Rancid Tomatillos page load behavior", () => {
  beforeEach(() => {
    cy.loadPage();
  });
  it("Should be able to visit homepage and view title", () => {
    cy.get('h1').contains("Rancid Tomatillos");
  });
  it("Should be able to visit homepage and view all movies", () => {
    cy.get(".cards-container")
      .find(".card-details")
      .should("have.length", 40)
      .get(".card-details")
      .first()
      .contains("h3", "Black Adam")
      .get(".card-details")
      .last()
      .contains("h3", "X");
  });
});

describe("Should be able to click one movie and show additional details about that movie", () => {
  beforeEach(() => {
    cy.loadPage();
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/1', {
      statusCode: 200,
      fixture: 'movie'
    })
    .visit('http://localhost:3000/')
  });
  it('Should click on movie title and see movie tagline', () => {
    cy.get('.cards-container')
    .get('.card-details')
    .first()
    .contains("h3", "Black Adam")
    .click()
    .get('.single-movie-container')
    .contains('h3', 'The world needed a hero. It got Black Adam.')
  })
  it('Should show a back button', () => {
    cy.getFirstMovieView()
    .find('button')
    .contains('go back')
  });
  it('Should show description of movie', () => {
    cy.getSingleMovieView()
    .children()
    .last()
    .contains(384571691)
  })
});
