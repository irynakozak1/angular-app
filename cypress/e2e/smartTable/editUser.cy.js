import SmartTable from "../../pageObjects/SmartTable";

describe("Smart Table", ()=>{
  const smartTable = new SmartTable()

  beforeEach(()=>{
    smartTable.navigate()
  })

  it('should edit user under respective rowId (with POM)', () => {
    const rowId = 4
    const userData = {
      id: "5",
      firstName: "Ira2",
      lastName: "Kozak2",
      userName: "ikozak2",
      email: "ikozak2@test.com",
      age: "28"
    }

    smartTable.selectEditButton(rowId).click()
    smartTable.clearUserData(userData)
    smartTable.fillUserData(userData)
    smartTable.checkmark.click()

    if (rowId === 1) {
      smartTable.selectRow(rowId).click()
    }

    smartTable.shouldCompareData(userData)
  });
})
