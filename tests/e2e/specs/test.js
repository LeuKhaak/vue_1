// @ts-nocheck
// https://docs.cypress.io/api/introduction/api.html

describe("ToDo", () => {
  it("Visits the app root url and check for visability", () => {
    cy.visit("/");
    cy.get("#app").should("be.visible");
  });

  it("Enter text and create new task", () => {
    cy.get("input[name='new-task']").type("Testing task").type("{enter}");
    cy.get("input[name='new-task']").type("New task").type("{enter}");
    cy.get("[data-tasks]>label").should("have.length", 3);
  });

  it("Delete task", () => {
    cy.get("label").contains("Testing task").siblings("button").click();
    cy.get("[data-tasks]>label").should("have.length", 2);
  });

  it("Check task and Display tasks amount", () => {
    cy.get("span").contains("0/2 left").should("be.visible");
    cy.get("label").contains("New task").click();
    cy.get("span").contains("1/2 left").should("be.visible");
  });

  it("Filter tasks", () => {
    cy.get("label").contains("Active").click();
    cy.get("label").contains("Task").should("be.visible");
    cy.get("label").contains("New task").should("not.exist");
    cy.get("label").contains("Complete").click();
    cy.get("label").contains("New task").should("be.visible");
    cy.get("label").contains("Task").should("not.exist");
    cy.get("label").contains("All").click();
    cy.get("label").contains("New task").should("be.visible");
    cy.get("label").contains("Task").should("be.visible");
  });

  it("Display warning NO TASKS", () => {
    cy.get("label").contains("New task").siblings("button").click();
    cy.get("label").contains("Task").siblings("button").click();
    cy.get("div").contains("NO TASKS").should("be.visible");
  });
});
