/// <reference types="Cypress" />

describe("Login UI", () => {
  it("should display the login input", () => {
    cy.visit("https://demoqa.com/books");
    cy.get("#login").should("be.visible");
  });
  it("when user click on login button, displays Login form", () => {
    cy.get("#login").click();
    cy.get("#userForm").should("be.visible");
    cy.get("#userForm h2").contains("Welcome");    
  });
  it("when user is logged", () => {
    cy.get("#userName").type("testtest");
    cy.get("#password").type("Test123!");
    cy.get("#login").click();
    cy.get("#userName-label").should("be.visible");
    cy.get("#userName-value").contains("testtest");
  });
});