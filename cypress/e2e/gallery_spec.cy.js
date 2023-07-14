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
      .find('button').contains('Go Back')
  });
  it('Should show a list of movie details', () => {
    cy.get('main')
      .get('.movie-details').children().should('have.length', 5)
      .get('p').first().contains('Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.')
      .get('p').last().contains('Runtime: 125 min')

  })
});
