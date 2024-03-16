describe('Login', ()=>{
  beforeEach(()=>{
    cy.visit('/auth/login')
  })

  it('should login (with custom commands)', () => {
    const userData = {
      email: 'ikozak@test.com',
      password: 'qwerty123',
      rememberMe: true
    }
    cy.login(userData)
  });
})
