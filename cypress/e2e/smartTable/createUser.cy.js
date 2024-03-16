import SmartTable from "../../pageObjects/SmartTable";

describe("Smart Table", ()=>{
  const smartTable = new SmartTable()

  beforeEach(()=>{
    smartTable.navigate()
  })

  it('should add new user (with POM)', () => {
    const userData = {
      id: "1",
      firstName: "Ira",
      lastName: "Kozak",
      userName: "ikozak",
      email: "ikozak@test.com",
      age: "27"
    }

    smartTable.addButton.click()
    smartTable.fillUserData(userData)
    smartTable.checkmark.click()

    smartTable.shouldCompareData(userData)
  });
})


