describe("Check Customer sign up with  OTP", () => {
  it("successfully loads", () => {
    cy.once("uncaught:exception", () => false);
    cy.visit("https://digiaccel.in/");
    //cy.get("button").click();
    cy.get("#nav_one-one_counselling").click();

    cy.get('input[placeholder="Name"]').type("Jane doe");
    cy.get('input[placeholder="Email"]').type("username");
    cy.get('input[placeholder="Phone Number"]').type("7428723247");
    cy.get('[type="radio"]').check("Others");
    cy.get("#submitbutton").click();
  });
});
