describe('Json placeholder', {
  env : {
    API_URL: 'https://jsonplaceholder.typicode.com/'
  }
} ,()=>{
  it('should update post', () => {
    const requestBody = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    }

    cy.api({
      method: 'PUT',
      url: `${Cypress.env('API_URL')}/posts/1`,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: requestBody
    }).as('updatePost')

    cy.get('@updatePost').its('body').should('contain', requestBody)
    cy.get('@updatePost').its('body.id').should('eq', 1)
  });
})
