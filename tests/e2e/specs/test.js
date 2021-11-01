// https://docs.cypress.io/api/introduction/api.html

describe("ToDo", () => {
  it("Visits the app root url and check for visability", () => {
    // @ts-ignore
    cy.visit("/");
    // @ts-ignore
    cy.get("#app").should("be.visible");
  });

  it("Enter text and create new task", () => {
    // @ts-ignore
    cy.get("input[name='new-task']").type("Testing task").type("{enter}");
    // @ts-ignore
    cy.get("input[name='new-task']").type("New task").type("{enter}");
  });

  it("Delete task", () => {
    // @ts-ignore
    cy.get("label").contains("Testing task").siblings("button").click();
  });

  it("Check task", () => {
    // @ts-ignore
    cy.get("label").contains("New task").click();
  });

  it("Filter tasks", () => {
    // @ts-ignore
    cy.get("label").contains("All").click();
    // @ts-ignore
    cy.get("label").contains("Active").click();
    // @ts-ignore
    cy.get("label").contains("Complete").click();
  });

  //it("Display tasks amount", () => {
  //  // @ts-ignore
  //  cy.get("span").contains("left").siblings("span").contains("{}");
  //});
});
