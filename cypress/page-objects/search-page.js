class searchPageClass {
  open() {
    cy.visit("https://demoqa.com/books");
  }

  get searchBox() {
    return cy.get("#searchBox");
  }
  get reactTable() {
    return cy.get(".ReactTable");
  }
  get reactTableTextLink() {
    return cy.get(".ReactTable .rt-tbody .mr-2 a");
  }

  get placeholder() {
    return "Type to search";
  }
  get deText() {
    return "de";
  }
  get emojiText() {
    return "👾";
  }
}

export const searchPage = new searchPageClass();
