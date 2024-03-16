describe("Stepper", ()=>{
  it("should work" , ()=>{
    const stepInsertedIcon = "step ng-star-inserted"
    const firstStepSelectedIcon = "step selected ng-star-inserted"
    const otherStepSelectedIcon = "step ng-star-inserted selected"
    const stepCompletedIcon = "step ng-star-inserted completed"

    cy.visit("/pages/layout/stepper")
    cy.get('nb-stepper[orientation="horizontal"]').as("container")

    cy.get("@container").find('button').contains("prev").as("prevButton")
    cy.get("@container").find('button').contains("next").as("nextButton")
    cy.get("@container").find('h3').as("stepContent")
    cy.get("@container").find('.step').filter(':contains("First step")').as("firstStepIcon")
    cy.get("@container").find('.step').filter(':contains("Second step")').as("secondStepIcon")
    cy.get("@container").find('.step').filter(':contains("Third step")').as("thirdStepIcon")
    cy.get("@container").find('.step').filter(':contains("Fourth step")').as("fourthStepIcon")

    cy.get("@firstStepIcon").should("have.class", firstStepSelectedIcon)
    cy.get("@secondStepIcon").should("have.class", stepInsertedIcon)
    cy.get("@thirdStepIcon").should("have.class", stepInsertedIcon)
    cy.get("@fourthStepIcon").should("have.class", stepInsertedIcon)

    cy.get("@prevButton").should("be.disabled")
    cy.get("@nextButton").click()
    cy.get("@stepContent").should("have.text", "Step content #2")

    cy.get("@firstStepIcon").should("have.class", stepCompletedIcon)
    cy.get("@secondStepIcon").should("have.class", otherStepSelectedIcon)

    cy.get("@prevButton").should("be.enabled")
    cy.get("@nextButton").click()
    cy.get("@stepContent").should("have.text", "Step content #3")

    cy.get("@secondStepIcon").should("have.class", stepCompletedIcon)
    cy.get("@thirdStepIcon").should("have.class", otherStepSelectedIcon)

    cy.get("@prevButton").should("be.enabled")
    cy.get("@nextButton").click()
    cy.get("@stepContent").should("have.text", "Step content #4")

    cy.get("@thirdStepIcon").should("have.class", stepCompletedIcon)
    cy.get("@fourthStepIcon").should("have.class", otherStepSelectedIcon)

    cy.get("@prevButton").should("be.enabled")
    cy.get("@nextButton").should("be.disabled")
  })
})
