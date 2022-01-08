class loginPageClass {
  get correctUserName() {
    return "testtest";
  }
  get correctPassword() {
    return "Test123!";
  }
  get wrongUserName() {
    return "wrong user name";
  }
  get wrongPassword() {
    return "wrong password";
  }
  get welcome() {
    return "Welcome,";
  }

  open() {
    cy.visit("https://demoqa.com/books");
  }

  clearUserPassFields() {
    cy.get("#userName").clear();
    cy.get("#password").clear();
  }

  submitLogin() {
    cy.get("#login").click();
  }
  clearUserField() {
    cy.get("#userName").clear();
  }
  clearPasswordField() {
    cy.get("#password").clear();
  }
  fillUser(value) {
    cy.get("#userName").clear().type(value);
  }
  fillPassword(value) {
    cy.get("#password").clear().type(value);
  }

  get login() {
    return cy.get("#login");
  }
  get userForm() {
    return cy.get("#userForm");
  }
  get userFormTitle() {
    return cy.get("#userForm h2");
  }
  get userName() {
    return cy.get("#userName");
  }
  get password() {
    return cy.get("#password");
  }
  get output() {
    return cy.get("#output");
  }
  get userNameValue() {
    return cy.get("#userName-value");
  }
}
export const loginPage = new loginPageClass();
