describe('Json placeholder', {
  env : {
    API_URL: 'https://jsonplaceholder.typicode.com/'
  }
} ,()=>{
  it('should delete post', () => {
    cy.api({
      method: 'DELETE',
      url: `${Cypress.env('API_URL')}/posts/1`,
    }).its('body').should('be.empty')
  });
})
