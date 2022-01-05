/// <reference types="Cypress" />
import { loginPage } from "../../page-objects/";

describe("Login UI", () => {
  it("should display the login input", () => {
    loginPage.open();
    loginPage.login.should("be.visible");
  });
  it("when user click on login button, displays Login form", () => {
    loginPage.login.click();
    loginPage.userForm.should("be.visible");
    loginPage.userFormTitle.should("contain.text", loginPage.welcome);
  });
  it("when user tries to login without username and password", () => {
    loginPage.userName.clear();
    loginPage.password.clear();
    loginPage.login.click();
    loginPage.userName.should("have.class", "is-invalid");
    loginPage.password.should("have.class", "is-invalid");
  });
  it("when user tries to login without password", () => {
    loginPage.userName.type(loginPage.correctUserName);
    loginPage.password.clear();
    loginPage.login.click();
    loginPage.password.should("have.class", "is-invalid");
  });
  it("when user tries to login without username", () => {
    loginPage.userName.clear();
    loginPage.password.type(loginPage.correctPassword);
    loginPage.login.click();
    loginPage.userName.should("have.class", "is-invalid");
  });
  it("when user tries to login with wrong username", () => {
    loginPage.userName.clear().type(loginPage.wrongUserName);
    loginPage.password.clear().type(loginPage.correctPassword);
    loginPage.login.click();
    loginPage.output.should("contain.text", "Invalid username or password!");
  });
  it("when user tries to login with wrong password", () => {
    loginPage.userName.clear().type(loginPage.correctUserName);
    loginPage.password.clear().type(loginPage.wrongPassword);
    loginPage.login.click();
    loginPage.output.should("contain.text", "Invalid username or password!");
  });
  it("when user is logged", () => {
    loginPage.userName.clear().type(loginPage.correctUserName);
    loginPage.password.clear().type(loginPage.correctPassword);
    loginPage.login.click();
    loginPage.userNameValue.should("contain.text", loginPage.correctUserName);
  });
});
