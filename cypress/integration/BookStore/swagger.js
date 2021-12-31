/// <reference types="Cypress" />

describe("Swagger API BookStoreV1BooksGet", () => {
  it("should open BookStore in BooksGet section", () => {
    cy.visit("https://demoqa.com/swagger/#/BookStore/BookStoreV1BooksGet");
  });
  it("should display Try it out", () => {
    cy.BookStoreTryOutBtn().should("be.visible");
  });
  it("when clicks on 'Try it out' button, display 'Execute' button", () => {
    cy.BookStoreTryOutBtn().click();
    cy.BookStoreExecuteBtn().should("be.visible");
  });
  it("when clicks on 'Execute' button, display a new Response, status 200 and Response Body", () => {
    cy.BookStoreExecuteBtn().click();
    cy.BookStoreRequestURL()
      .contains("https://demoqa.com/BookStore/v1/Books");
    cy.BookStoreRequestResponseStatus().contains("200"),
      cy.BookStoreRequestResponseBody().contains("books");
  });
  it("when clicks on 'Cancel' button, remove 'Execute' button", () => {
    cy.BookStoreTryOutCancelBtn().click();
    cy.BookStoreExecuteBtn().should("not.exist");
  });
});