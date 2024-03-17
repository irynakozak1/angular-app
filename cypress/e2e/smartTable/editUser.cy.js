import SmartTable from "../../pageObjects/SmartTable";

describe("Smart Table", ()=>{
  const smartTable = new SmartTable()

  beforeEach(()=>{
    smartTable.navigate()
  })

  it('should edit 1st user (with POM)', () => {
    const userData = {
      id: "2",
      firstName: "Ira2",
      lastName: "Kozak2",
      userName: "ikozak2",
      email: "ikozak2@test.com",
      age: "28"
    }

    smartTable.editButton.click()
    smartTable.clearUserData(userData)
    smartTable.fillUserData(userData)
    smartTable.checkmark.click()

    smartTable.editedRow.click()

    smartTable.shouldCompareData(userData)
  });
})
