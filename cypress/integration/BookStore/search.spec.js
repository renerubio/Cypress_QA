/// <reference types="Cypress" />
import { searchPage } from "../../page-objects/";

describe("Search input UI", () => {
  it("should display the search input with placeholder Type to search", () => {
    searchPage.open();
    searchPage.searchBox.should("be.visible");
    searchPage.searchBox.should(
      "have.attr",
      "placeholder",
      searchPage.placeholder
    );
  });
  it(`when user types '${searchPage.deText}' on search input, should refresh the books list with 4 rows`, () => {
    searchPage.searchBox.type(searchPage.deText);
    searchPage.reactTable.should("be.visible");
    searchPage.reactTableTextLink.should("contain.text", "Git Pocket Guide");
    searchPage.reactTableTextLink.should(
      "contain.text",
      "Learning JavaScript Design Patterns"
    );
    searchPage.reactTableTextLink.should(
      "contain.text",
      "Designing Evolvable Web APIs with ASP.NET"
    );
    searchPage.reactTableTextLink.should(
      "contain.text",
      "Understanding ECMAScript 6"
    );
  });
  it("when user types '  ' on search input, should refresh the books list with message 'No rows found'", () => {
    searchPage.searchBox.clear().type("  ");
    searchPage.reactTable.should("contain.text", "No rows found");
  });
  it("when user types the special character '👾' on search input, should refresh the books list with message 'No rows found'", () => {
    searchPage.searchBox.clear().type(searchPage.emojiText);
    searchPage.reactTable.should("contain.text", "No rows found");
  });
});
