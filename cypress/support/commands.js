/// <reference types="Cypress" />

Cypress.Commands.add("getBooks", () => {
  cy.request({
    method: "GET",
    url: "https://demoqa.com/BookStore/v1/Books",
  });
});
Cypress.Commands.add("BookStoreTryOutBtn", ()=>{
  cy.get("#operations-BookStore-BookStoreV1BooksGet .btn.try-out__btn");
})
Cypress.Commands.add("BookStoreTryOutCancelBtn", () => {
  cy.get("#operations-BookStore-BookStoreV1BooksGet .btn.try-out__btn.cancel");
});

Cypress.Commands.add("BookStoreExecuteBtn", () => {
  cy.get("#operations-BookStore-BookStoreV1BooksGet .btn.execute");
});

Cypress.Commands.add("BookStoreRequestURL", () => {
  cy.get(
    "#operations-BookStore-BookStoreV1BooksGet .request-url .microlight"
  );
});
Cypress.Commands.add("BookStoreRequestResponseStatus", () => {
  cy.get(
    "#operations-BookStore-BookStoreV1BooksGet .responses-table .response-col_status"
  );
});
Cypress.Commands.add("BookStoreRequestResponseBody", () => {
  cy.get(
    "#operations-BookStore-BookStoreV1BooksGet .responses-table .response-col_description .microlight"
  );
});


