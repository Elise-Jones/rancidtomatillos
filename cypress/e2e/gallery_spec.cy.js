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
  });
  it('Should view a title', () => {
    cy.get('h1').contains("Rancid Tomatillos");
  });
  // it('Should show a back button', () => {
  //   cy.get('.single-movie-container').should('have.a.button') 
  // })
});
