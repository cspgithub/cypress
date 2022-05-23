/// <reference types="cypress" />

const logoText = Cypress.env("logoText");

/* describe("first try", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.fixture('example').as('user')
  });


  it('fixture test',()=>{

    cy.get('dahdg').type()
  })

  //cy.findAllByTitle(`${logoText}`).should("exist");
}); */

describe("Login", function () {
  beforeEach(function () {
    cy.visit("/");
    cy.fixture("homelocators").as("user");
  });
  it("Sign in", function () {
    //cy.findAllByTitle(`${logoText}`).should("exist");
    //cy.get("li[id*=menu-item]").eq(0).should("be.visible")
    cy.get("li[id*='menu-item'] a")
      .eq(1)
      .trigger("mouseover")
      .click({ force: true });
    cy.url("https://www.browserstack.com/automate").should("exist");
    cy.go("back");
  });

  it.skip("Interact with links or button using partial text", () => {
    cy.get('span:contains("App Automate")') // similar to partial link text
      .click();
    cy.get("h1:contains('Automated Mobile App Testing')").should("be.visible");
    cy.go("back");
  });
  it.skip("Interact with links or button using partial text- XPATH", () => {
    cy.xpath("//span[text()='Responsive']/..").click();
    cy.xpath("//div[@class='text-center']/h1", { timeout: 10 * 1000 }).should(
      "be.visible"
    );
    cy.go("back");
  });

  it.skip("verify first item from list having attibute and its value", () => {
    cy.get("[class='horizontal-list footer-menu social-menu'] li")
      .find("a")
      .eq(0)
      .should("have.attr", "title", "Twitter");
  });

  it.only("Validate all the Socail icons in footer", function () {
    cy.get("[class='horizontal-list footer-menu social-menu'] li a").each(
      ($el, index) => {
        // cy.get('a').eq(index).should("have.attr", "title", this.user.socialFooter[index]);
        cy.get($el).should("have.attr", "title", this.user.socialFooter[index]);
        //.then(attrValue => cy.log(attrValue))
      }
    );
  });
});
