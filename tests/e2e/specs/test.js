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
    // @ts-ignore
    cy.get("[data-tasks]>label").should("have.length", 3);
  });

  it("Delete task", () => {
    // @ts-ignore
    cy.get("label").contains("Testing task").siblings("button").click();
    // @ts-ignore
    cy.get("[data-tasks]>label").should("have.length", 2);
  });

  it("Check task and Display tasks amount", () => {
    // @ts-ignore
    cy.get("span").contains("0/2 left").should("be.visible");
    // @ts-ignore
    cy.get("label").contains("New task").click();
    // @ts-ignore
    cy.get("span").contains("1/2 left").should("be.visible");
  });

  it("Filter tasks", () => {
    // @ts-ignore
    cy.get("label").contains("Active").click();
    // @ts-ignore
    cy.get("label").contains("Task").should("be.visible");
    // @ts-ignore
    cy.get("label").contains("New task").should("not.exist");
    // @ts-ignore
    cy.get("label").contains("Complete").click();
    // @ts-ignore
    cy.get("label").contains("New task").should("be.visible");
    // @ts-ignore
    cy.get("label").contains("Task").should("not.exist");
    // @ts-ignore
    cy.get("label").contains("All").click();
    // @ts-ignore
    cy.get("label").contains("New task").should("be.visible");
    // @ts-ignore
    cy.get("label").contains("Task").should("be.visible");
  });

  it("Display warning NO TASKS", () => {
    // @ts-ignore
    cy.get("label").contains("New task").siblings("button").click();
    // @ts-ignore
    cy.get("label").contains("Task").siblings("button").click();
    // @ts-ignore
    cy.get("div").contains("NO TASKS").should("be.visible");
  });
});
