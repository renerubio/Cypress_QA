class apiPageClass {
  get getBooks() {
    return cy.request({
      method: "GET",
      url: "https://demoqa.com/BookStore/v1/Books",
    });
  }

  get BookStoreTryOutBtn() {
    return cy.get(
      "#operations-BookStore-BookStoreV1BooksGet .btn.try-out__btn"
    );
  }
  get BookStoreTryOutCancelBtn() {
    return cy.get(
      "#operations-BookStore-BookStoreV1BooksGet .btn.try-out__btn.cancel"
    );
  }
  get BookStoreExecuteBtn() {
    return cy.get("#operations-BookStore-BookStoreV1BooksGet .btn.execute");
  }

  get BookStoreRequestURL() {
    return cy.get(
      "#operations-BookStore-BookStoreV1BooksGet .request-url .microlight"
    );
  }
  get BookStoreRequestResponseStatus() {
    return cy.get(
      "#operations-BookStore-BookStoreV1BooksGet .responses-table .response-col_status"
    );
  }
  get BookStoreRequestResponseBody() {
    return cy.get(
      "#operations-BookStore-BookStoreV1BooksGet .responses-table .response-col_description .microlight"
    );
  }
}

export const apiPage = new apiPageClass();
