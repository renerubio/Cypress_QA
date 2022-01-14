class loginPageClass {
  get correctUserName(): string {
    return "testtest";
  }
  get correctPassword(): string {
    return "Test123!";
  }
  get wrongUserName(): string {
    return "wrong user name";
  }
  get wrongPassword(): string {
    return "wrong password";
  }
  get welcome(): string {
    return "Welcome,";
  }

  open() {
    cy.visit("https://demoqa.com/books");
  }

  clearUserPassFields() {
    cy.get<HTMLLIElement>("#userName").clear();
    cy.get<HTMLLIElement>("#password").clear();
  }

  submitLogin() {
    cy.get<HTMLLIElement>("#login").click();
  }
  clearUserField() {
    cy.get<HTMLLIElement>("#userName").clear();
  }
  clearPasswordField() {
    cy.get<HTMLLIElement>("#password").clear();
  }
  fillUser(value:string) {
    cy.get<HTMLLIElement>("#userName").clear().type(value);
  }
  fillPassword(value:string) {
    cy.get<HTMLLIElement>("#password").clear().type(value);
  }

  get login(): object {
    return cy.get<HTMLLIElement>("#login");
  }
  get userForm(): object {
    return cy.get<HTMLLIElement>("#userForm");
  }
  get userFormTitle(): object {
    return cy.get<HTMLLIElement>("#userForm h2");
  }
  get userName(): object {
    return cy.get<HTMLLIElement>("#userName");
  }
  get password(): object {
    return cy.get<HTMLLIElement>("#password");
  }
  get output(): object {
    return cy.get<HTMLLIElement>("#output");
  }
  get userNameValue(): object {
    return cy.get<HTMLLIElement>("#userName-value");
  }
}
export const loginPage: any = new loginPageClass();
