import '@testing-library/cypress';

describe('Splash Page', () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it('reads the banner', () => {
    cy.get(".banner").should("contain", "UNIT INVENTORY TRACKER");
  })
  it('should click through each tab on the navbar', () => {
    cy.get('.home').click();
    cy.url().should("include", "/");
    cy.get(".item").click();
    cy.url().should("include", "/items");
    cy.get(".checkout").click();
    cy.url().should("include", "/checkedout");
    cy.get(".resource").click();
    cy.url().should("include", "/resources");
    cy.get(".about").click();
    cy.url().should("include", "/about");
  })
  it('should type in a username and pick a base and squadron', () => {
    cy.get('.username').type('bob');
    cy.get(".base").select("Schriever SFB");
    cy.get(".squadron").select("2 SOPS");
    cy.get(".button").click();
  })
})