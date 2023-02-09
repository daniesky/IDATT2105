describe('template spec', () => {
  it('site loads', () => {
    cy.visit('/contactform')
  })

  it("Submit button is disabled on invalid input", () => {
    cy.visit("/contactform")
    cy.get("input[name = fname]").type("Daniel")
    cy.get("input[name = lname]").type("Skymoen")
    cy.get("input[name = email]").type("123") //invalid
    //Message blank is also invalid. 
    cy.get(".submit").should("be.disabled")
  })

  it("Form submits successfully", () => {
    cy.visit("/contactform")
    cy.get("input[name = fname]").type("Daniel")
    cy.get("input[name = lname]").type("Skymoen")
    cy.get("input[name = email]").type("danielskymoen02@gmail.com")
    cy.get("input[name = message]").type("Hello World!")
    cy.get(".submit").click();
    cy.get(".mosha__toast.default", {timeout:2000}).should("be.visible");
    
  })

  it("State saves properly", () => {
    cy.visit("/contactform")
    cy.get("input[name = fname]").type("Daniel")
    cy.get("input[name = lname]").type("Skymoen")
    cy.get("input[name = email]").type("danielskymoen02@gmail.com")
    cy.get("input[name = message]").type("Hello World!")
    cy.get(".submit").click();
    cy.get(".mosha__toast.default", {timeout:2000}).should("be.visible");
    cy.get("#routeHome").click();
    cy.get("#routeForm").click();
    cy.get("input[name = fname]").should("have.value", "Daniel")
    cy.get("input[name = lname]").should("have.value", "Skymoen")
    cy.get("input[name = email]").should("have.value", "danielskymoen02@gmail.com")
  })
})