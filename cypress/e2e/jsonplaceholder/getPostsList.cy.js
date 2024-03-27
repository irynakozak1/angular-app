import postKeys from '../../fixtures/jsonPlaceholder.json'

describe('Json placeholder', {
  env : {
    API_URL: 'https://jsonplaceholder.typicode.com/'
  }
} ,()=>{
  it('should return posts list', () => {
    cy.api({
      url: `${Cypress.env('API_URL')}/posts`
    }).its('body').should('not.be.empty').each(post => {
      expect(post).to.have.all.keys(postKeys);
    });
  });
})


