/// <reference types="Cypress" />
import { loginPage } from "../../page-objects";

describe("Login UI", () => {
  it("should display the login input", () => {
    loginPage.open();
    loginPage.login.should("be.visible");
  });
  it("when user click on login button, displays Login form", () => {
    loginPage.submitLogin();
    loginPage.userForm.should("be.visible");
    loginPage.userFormTitle.should("contain.text", loginPage.welcome);
  });
  it("when user tries to login without username and password", () => {
    loginPage.clearUserPassFields();
    loginPage.submitLogin();
    loginPage.userName.should("have.class", "is-invalid");
    loginPage.password.should("have.class", "is-invalid");
  });
  it("when user tries to login without password", () => {
    loginPage.fillUser(loginPage.correctUserName);
    loginPage.clearPasswordField();
    loginPage.submitLogin();
    loginPage.password.should("have.class", "is-invalid");
  });
  it("when user tries to login without username", () => {
    loginPage.userName.clear();
    loginPage.fillPassword(loginPage.correctPassword);
    loginPage.submitLogin();
    loginPage.userName.should("have.class", "is-invalid");
  });
  it("when user tries to login with wrong username", () => {
    loginPage.fillUser(loginPage.wrongUserName);
    loginPage.fillPassword(loginPage.correctPassword);
    loginPage.submitLogin();
    loginPage.output.should("contain.text", "Invalid username or password!");
  });
  it("when user tries to login with wrong password", () => {
    loginPage.fillUser(loginPage.correctUserName);
    loginPage.fillPassword(loginPage.wrongPassword);
    loginPage.submitLogin();
    loginPage.output.should("contain.text", "Invalid username or password!");
  });
  it("when user tries to login with wrong user and password", () => {
    loginPage.fillUser(loginPage.wrongUserName);
    loginPage.fillPassword(loginPage.wrongPassword);
    loginPage.submitLogin();
    loginPage.output.should("contain.text", "Invalid username or password!");
  });
  it("when user tries to loggin with correct user and pass", () => {
    loginPage.fillUser(loginPage.correctUserName);
    loginPage.fillPassword(loginPage.correctPassword);
    loginPage.submitLogin();
    loginPage.userNameValue.should("contain.text", loginPage.correctUserName);
  });
});
