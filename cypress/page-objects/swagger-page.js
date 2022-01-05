class swaggerPageClass {
  open() {
    cy.visit("https://demoqa.com/swagger/#/BookStore/BookStoreV1BooksGet");
  }
  get url() {
    return "https://demoqa.com/BookStore/v1/Books";
  }

  get getBooks() {
    cy.request({
      method: "GET",
      url: "https://demoqa.com/BookStore/v1/Books",
    });
  }

  get tryOutBtn() {
    return cy.get(
      "#operations-BookStore-BookStoreV1BooksGet .btn.try-out__btn"
    );
  }
  get tryOutCancelBtn() {
    return cy.get(
      "#operations-BookStore-BookStoreV1BooksGet .btn.try-out__btn.cancel"
    );
  }

  get executeBtn() {
    return cy.get("#operations-BookStore-BookStoreV1BooksGet .btn.execute");
  }

  get requestURL() {
    return cy.get(
      "#operations-BookStore-BookStoreV1BooksGet .request-url .microlight"
    );
  }
  get requestResponseStatus() {
    return cy.get(
      "#operations-BookStore-BookStoreV1BooksGet .responses-table .response-col_status"
    );
  }
  get requestResponseBody() {
    return cy.get(
      "#operations-BookStore-BookStoreV1BooksGet .responses-table .response-col_description .microlight"
    );
  }
}

export const swaggerPage = new swaggerPageClass();
