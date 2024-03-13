describe("Dialog", ()=>{
  it('should check modal window for entering name', () => {
    cy.visit("/pages/modal-overlays/dialog")
    cy.get('button').contains("Enter Name").click()

    cy.get('nb-dialog-container').should("be.visible").within(()=>{
      cy.get('nb-card-header').should("have.text", "Enter your name")
      cy.get('input').should("be.enabled").and("be.visible")
      cy.get('button[status="danger"]').should("be.enabled").and("have.text", "Cancel")
      cy.get('button[status="success"]').should("be.enabled").and("have.text", "Submit")
    })
  });
})
