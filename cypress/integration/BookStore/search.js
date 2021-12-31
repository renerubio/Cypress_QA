/// <reference types="Cypress" />

describe("Search input UI", () => {
  it("should display the search input with placeholder Type to search", () => {
    cy.visit("https://demoqa.com/books");
    cy.get("#searchBox").should("be.visible");
    cy.get("#searchBox").should("have.attr", "placeholder", "Type to search");
  });
  it("when user types 'de' on search input, should refresh the books list with 4 rows", () => {
    cy.get("#searchBox").type("de");
    cy.get(".ReactTable").should("be.visible");
    cy.get(".ReactTable .rt-tbody .mr-2 a").contains("Git Pocket Guide");
    cy.get(".ReactTable .rt-tbody .mr-2 a").contains(
      "Learning JavaScript Design Patterns"
    );
    cy.get(".ReactTable .rt-tbody .mr-2 a").contains(
      "Designing Evolvable Web APIs with ASP.NET"
    );
    cy.get(".ReactTable .rt-tbody .mr-2 a").contains(
      "Understanding ECMAScript 6"
    );
  });
  it("when user types '  ' on search input, should refresh the books list with message 'No rows found'", () => {
    cy.get("#searchBox").type("  ");
    cy.get(".ReactTable").should("be.visible");
  });
});
