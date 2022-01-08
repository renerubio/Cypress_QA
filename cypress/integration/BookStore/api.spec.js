/// <reference types="Cypress" />
import { apiPage } from "../../page-objects/";

describe("API REST Books endpoint", () => {
  let res = {};
  before(() => apiPage.getBooks.then((result) => (res = result)));
  it("should return 8 books", () => {
    expect(res.body.books.length).to.eq(8);
  });
  it("should contain 'title' and 'author'", () => {
    cy.wrap(res.body.books).each(($el, $i) => {
      expect($el).to.have.property("title");
      expect($el).to.have.property("author");
    });
  });
});
