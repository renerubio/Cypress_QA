/// <reference types="Cypress" />
import { swaggerPage } from "../../page-objects/";

describe("Swagger API BookStoreV1BooksGet", () => {
  it("should open BookStore in BooksGet section", () => {
    swaggerPage.open();
  });
  it("should display Try it out", () => {
    swaggerPage.tryOutBtn.should("be.visible");
  });
  it("when clicks on 'Try it out' button, display 'Execute' button", () => {
    swaggerPage.tryOutBtn.click();
    swaggerPage.executeBtn.should("be.visible");
  });
  it("when clicks on 'Execute' button, display a new Response, status 200 and Response Body", () => {
    swaggerPage.executeBtn.click();
    swaggerPage.requestURL.contains(swaggerPage.url);
    swaggerPage.requestResponseStatus.contains("200"),
      swaggerPage.requestResponseBody.contains("books");
  });
  it("when clicks on 'Cancel' button, remove 'Execute' button", () => {
    swaggerPage.tryOutCancelBtn.click();
    swaggerPage.executeBtn.should("not.exist");
  });
});
