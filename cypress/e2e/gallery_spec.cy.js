import example from "../fixtures/example.json";
describe("Rancid Tomatillos page load behavior", () => {
  beforeEach(() => {
    cy.loadPage();
  });

  it("Should be able to visit homepage and view title and all movies", () => {
    cy.wait('@loadMovies').then((intercept) => {
      cy.get("h1").contains("Rancid Tomatillos");
      cy.get(".cards-container").find(".card-details").should("have.length", 40);
      cy.get(".card-details").first().contains("h3", "Black Adam");
      cy.get(".card-details").last().contains("h3", "X");
    });
  });
});

describe("Should be able to click one movie and show additional details about that movie", () => {
  beforeEach(() => {
    cy.loadPage();
    cy.getSingleFirstView();
  });

  it("Should show movie title, tagline, and back button", () => {
    cy.wait('@loadSelectedMovie').then((intercept) => {
      cy.get("main")
        .get("h2").contains("Black Adam")
        .get("h3").contains("The world needed a hero. It got Black Adam.");
      cy.get("main").find("button").contains("Go Back")
    });
  });

  it("Should show a list of movie details", () => {
    cy.wait('@loadSelectedMovie').then((intercept) => {
      cy.get("main")
        .get(".movie-details").children().should("have.length", 5)
        .get("p").first().contains(
          "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world."
        )
        .get("p").last().contains("Runtime: 125 min");
    });
  });
});

describe("Navigation between pages", () => {
  beforeEach(() => {
    cy.loadPage();
  });

  it("Should load correct URL for homepage", () => {
    cy.wait('@loadMovies').then((intercept) => {
      cy.url().should("eq", "http://localhost:3000/");
    });
  });

  it("When the user clicks on a movie the correct URL is shown", () => {
    cy.getSingleFirstView();
    cy.wait('@loadSelectedMovie').then((intercept) => {
      cy.url().should("eq", "http://localhost:3000/436270");
    });
  });

  it("When the user clicks on a the back button correct URL is shown", () => {
    cy.getSingleFirstView().get("button").click();
    cy.url().should("eq", "http://localhost:3000/");
  });
  
  it("When the user clicks on a the Rancid Tomatillos logo correct URL is shown", () => {
    cy.getSingleFirstView().get("button").click();
    cy.wait('@loadSelectedMovie').then((intercept) => {
      cy.url().should("eq", "http://localhost:3000/");
    });
  });
});

describe("Error page navigation", () => {
  it("Should show error page when there is a 400-level error", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      {
        statusCode: 404
      }
    ).as('404Error');
    cy.visit("http://localhost:3000")
    cy.wait('@404Error').then((intercept) => {
      cy.url().should("eq", "http://localhost:3000/error");
      cy.get("h1").contains("Oops... Something went wrong!");
    });
  });

  it("Should show error page when there is a 500-level error", () => {
    cy.simulate500Error();
    cy.visit("http://localhost:3000");
    cy.wait('@500Error').then((intercept) => {
      cy.url().should("eq", "http://localhost:3000/error");
      cy.get("h1").contains("Oops... Something went wrong!");
    })
  });

  it("Should be able to navigate from error page to home page on button click", () => {
    cy.simulate500Error()
      .visit("http://localhost:3000/")
    cy.wait('@500Error').then((intercept) => {
    cy.get("button")
      .click()
      .url().should("eq", "http://localhost:3000/");
    })
  });
});
