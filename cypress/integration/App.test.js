import { createPublicKey } from "crypto";

describe("Supermarket List", () => {
  beforeEach(function() {
    cy.visit("http://localhost:3000");
    cy.contains("Loading..");
  });

  it("should contains an empty list", () => {
    cy.contains("List is empty");
  });

  it("should open modal form", () => {
    cy.get(".app-body__add-item").click();
    cy.contains("Add Item");
  });

  it("should close modal form", () => {
    cy.get(".app-body__add-item").click({ multiple: true });
    cy.get(".form-container__button").click({ multiple: true, force: true });
  });

  it("should add an item ", () => {
    cy.get(".app-body__add-item").click({ multiple: true });
    cy.get(".form-container__form-input").type("Hello, World");
    cy.get(".form-container__button--submit").click({
      multiple: true,
      force: true
    });
    cy.contains("Hello, World");
  });

  it("should delete an item ", () => {
    cy.get(".app-body__add-item").click({ multiple: true });
    cy.get(".form-container__form-input").type("Hello, Cypress");
    cy.get(".form-container__button--submit").click({
      multiple: true,
      force: true
    });
    cy.contains("Hello, Cypress");
    cy.get(".container-item__del-btn").click({
      multiple: true,
      force: true
    });
    cy.contains("List is empty");
  });
});
