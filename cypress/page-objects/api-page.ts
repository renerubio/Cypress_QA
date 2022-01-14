class apiPageClass {
  get getBooks():any {
    return cy.request<any>({
      method: "GET",
      url: "https://demoqa.com/BookStore/v1/Books",
    });
  }

  get BookStoreTryOutBtn():object {
    return cy.get<HTMLLIElement>(
      "#operations-BookStore-BookStoreV1BooksGet .btn.try-out__btn"
    );
  }
  get BookStoreTryOutCancelBtn():object {
    return cy.get<HTMLLIElement>(
      "#operations-BookStore-BookStoreV1BooksGet .btn.try-out__btn.cancel"
    );
  }
  get BookStoreExecuteBtn():object {
    return cy.get<HTMLLIElement>("#operations-BookStore-BookStoreV1BooksGet .btn.execute");
  }

  get BookStoreRequestURL():object {
    return cy.get<HTMLLIElement>(
      "#operations-BookStore-BookStoreV1BooksGet .request-url .microlight"
    );
  }
  get BookStoreRequestResponseStatus():object {
    return cy.get<HTMLLIElement>(
      "#operations-BookStore-BookStoreV1BooksGet .responses-table .response-col_status"
    );
  }
  get BookStoreRequestResponseBody():object {
    return cy.get<HTMLLIElement>(
      "#operations-BookStore-BookStoreV1BooksGet .responses-table .response-col_description .microlight"
    );
  }
}

export const apiPage: any = new apiPageClass();
