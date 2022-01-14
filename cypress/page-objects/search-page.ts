class searchPageClass {
  open(){
    cy.visit("https://demoqa.com/books");
  }

  fillSearchBox(value: string) {
    const searchField: any = cy.get<HTMLLIElement>("#searchBox");
    searchField.clear();
    searchField.type(value);
  }

  get searchBox(): object {
    return cy.get<HTMLLIElement>("#searchBox");
  }
  get reactTable(): object {
    return cy.get<HTMLLIElement>(".ReactTable");
  }
  get reactTableTextLink(): object {
    return cy.get<HTMLLIElement>(".ReactTable .rt-tbody .mr-2 a");
  }
  get placeholder(): string {
    return "Type to search";
  }
  get deText(): string {
    return "de";
  }
  get emojiText(): string {
    return "👾";
  }
}

export const searchPage: any = new searchPageClass();
