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
    cy.getSingleFirstView();
  });
  it('Should show movie title', () => {
    cy.get('main')
      .get('h2').contains('Black Adam')
  })
  it('Should show movie tagline', () => {
    cy.get('main')
      .get('h3').contains('The world needed a hero. It got Black Adam.')
  })
  it('Should show a back button', () => {
    cy.get('main')
      .get('button').contains('go back')
  });
  it('Should show a list of movie details', () => {
    cy.get('main')
      .get('span')
      .get('.movie-details').children().should('have.length', 7)
  })
});
