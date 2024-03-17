export default class SmartTable {
  _url = '/pages/tables/smart-table'

  _addButtonSelector = '.nb-plus'

  _idInputSelector = 'input[ng-reflect-name="id"]'
  _firstNameInputSelector = 'input[ng-reflect-name="firstName"]'
  _lastNameInputSelector = 'input[ng-reflect-name="lastName"]'
  _userNameInputSelector = 'input[ng-reflect-name="username"]'
  _emailInputSelector = 'input[ng-reflect-name="email"]'
  _ageInputSelector = 'input[ng-reflect-name="age"]'

  _checkmarkSelector = '.nb-checkmark'

  _idResultSelector = '.ng2-smart-row.selected.ng-star-inserted td:nth-child(2)'
  _fistNameResultSelector = '.ng2-smart-row.selected.ng-star-inserted td:nth-child(3)'
  _lastNameResultSelector = '.ng2-smart-row.selected.ng-star-inserted td:nth-child(4)'
  _userNameResultSelector = '.ng2-smart-row.selected.ng-star-inserted td:nth-child(5)'
  _emailResultSelector = '.ng2-smart-row.selected.ng-star-inserted td:nth-child(6)'
  _ageResultSelector = '.ng2-smart-row.selected.ng-star-inserted td:nth-child(7)'

  navigate (){
    cy.visit(this._url)
  }

  fillUserData ({id, firstName, lastName, userName, email, age}){
    this.idInput.type(id)
    this.firstNameInput.type(firstName)
    this.lastNameInput.type(lastName)
    this.userNameInput.type(userName)
    this.emailInput.type(email)
    this.ageInput.type(age)
  }

  clearUserData ({id, firstName, lastName, userName, email, age}){
    this.idInput.clear(id)
    this.firstNameInput.clear(firstName)
    this.lastNameInput.clear(lastName)
    this.userNameInput.clear(userName)
    this.emailInput.clear(email)
    this.ageInput.clear(age)
  }

  shouldCompareData ({id, firstName, lastName, userName, email, age}){
    this.idResult.should("have.text", id)
    this.firstNameResult.should("have.text", firstName)
    this.lastNameResult.should("have.text", lastName)
    this.userNameResult.should("have.text", userName)
    this.emailResult.should("have.text", email)
    this.ageResult.should("have.text", age)
  }

  selectEditButton (rowId){
    return cy.get(`tbody tr:nth-child(${rowId}) .nb-edit`)
  }

  selectRow (rowId){
    return cy.get(`tbody tr:nth-child(${rowId})`)
  }

  get addButton(){
    return cy.get(this._addButtonSelector)
  }

  get editButton(){
    return cy.get(this._editButtonSelector)
  }

  get idInput(){
    return cy.get(this._idInputSelector)
  }

  get firstNameInput(){
    return cy.get(this._firstNameInputSelector)
  }

  get lastNameInput(){
    return cy.get(this._lastNameInputSelector)
  }

  get userNameInput(){
    return cy.get(this._userNameInputSelector)
  }

  get emailInput(){
    return cy.get(this._emailInputSelector)
  }

  get ageInput(){
    return cy.get(this._ageInputSelector)
  }

  get checkmark(){
    return cy.get(this._checkmarkSelector)
  }

  get idResult(){
    return cy.get(this._idResultSelector)
  }

  get firstNameResult(){
    return cy.get(this._fistNameResultSelector)
  }

  get lastNameResult(){
    return cy.get(this._lastNameResultSelector)
  }

  get userNameResult(){
    return cy.get(this._userNameResultSelector)
  }

  get emailResult(){
    return cy.get(this._emailResultSelector)
  }

  get ageResult(){
    return cy.get(this._ageResultSelector)
  }

  get editedRow(){
    return cy.get(this._editedRowSelector)
  }

}
