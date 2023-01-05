describe("Check Customer sign up with  OTP", () => {
  it("successfully loads", () => {
    cy.once("uncaught:exception", () => false);
    cy.visit("https://digiaccel.in/");
    //cy.get("button").click();
    cy.get("#nav_one-one_counselling").click();

    cy.get('input[placeholder="Name"]').type("Jane doe");
    cy.get('input[placeholder="Email"]').type("username@gmail.com");
    cy.get('input[placeholder="Phone Number"]').type("7428723247");
    cy.get('[type="radio"]').check("Others");
    cy.get("#submitbutton").click();

    cy.get("textarea[tabindex=1]").type(1);
    cy.get("textarea[tabindex=2]").type(2);
    cy.get("textarea[tabindex=3]").type(3);
    cy.get("textarea[tabindex=4]").type(4);
    cy.get("textarea[tabindex=5]").type(5);
    cy.get("textarea[tabindex=6]").type(6);
    cy.get('button[type="submit"]').click();
  });
});
