class swaggerPageClass {
  open() {
    cy.visit("https://demoqa.com/swagger/#/BookStore/BookStoreV1BooksGet");
  }
  submitTryItOut() {
    cy.get<HTMLLIElement>(
      "#operations-BookStore-BookStoreV1BooksGet .btn.try-out__btn"
    ).click();
  }
  submitExecute() {
    cy.get<HTMLLIElement>("#operations-BookStore-BookStoreV1BooksGet .btn.execute").click();
  }
  submitTryOutCancel() {
    cy.get<HTMLLIElement>(
      "#operations-BookStore-BookStoreV1BooksGet .btn.try-out__btn.cancel"
    ).click();
  }
  get url(): string {
    return "https://demoqa.com/BookStore/v1/Books";
  }

  get tryOutBtn(): object {
    return cy.get<HTMLLIElement>(
      "#operations-BookStore-BookStoreV1BooksGet .btn.try-out__btn"
    );
  }
  get tryOutCancelBtn(): object {
    return cy.get<HTMLLIElement>(
      "#operations-BookStore-BookStoreV1BooksGet .btn.try-out__btn.cancel"
    );
  }

  get executeBtn(): object {
    return cy.get<HTMLLIElement>("#operations-BookStore-BookStoreV1BooksGet .btn.execute");
  }

  get requestURL(): object {
    return cy.get<HTMLLIElement>(
      "#operations-BookStore-BookStoreV1BooksGet .request-url .microlight"
    );
  }
  get requestResponseStatus(): object {
    return cy.get<HTMLLIElement>(
      "#operations-BookStore-BookStoreV1BooksGet .responses-table .response-col_status"
    );
  }
  get requestResponseBody(): object {
    return cy.get<HTMLLIElement>(
      "#operations-BookStore-BookStoreV1BooksGet .responses-table .response-col_description .microlight"
    );
  }
}

export const swaggerPage: any = new swaggerPageClass();
