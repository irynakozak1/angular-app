describe('Json placeholder', {
  env : {
    API_URL: 'https://jsonplaceholder.typicode.com/'
  }
} ,()=>{
  it('should create post', () => {
    const requestBody = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    }

    cy.api({
      method: 'POST',
      url: `${Cypress.env('API_URL')}/posts`,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: requestBody
    }).as('createPost')

    cy.get('@createPost').its('body').should('contain', requestBody)
    cy.get('@createPost').its('body.id').should('eq', 101)
  });
})
