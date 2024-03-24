describe('Json placeholder', {
  env : {
    API_URL: 'https://jsonplaceholder.typicode.com/'
  }
} ,()=>{
  it('should return post by id', () => {
    cy.api({
      url: `${Cypress.env('API_URL')}/posts/1`
    }).as('getPost')

    cy.get('@getPost').its('status').should('eq', 200)
    cy.get('@getPost').its('body.id').should('eq', 1)
    cy.get('@getPost').its('body.title').should('contain', 'sunt')
  });

  it('should return 404 error for invalid post id', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env('API_URL')}/posts/101`,
      failOnStatusCode: false
    }).its('status').should('eq', 404)
  });
})
