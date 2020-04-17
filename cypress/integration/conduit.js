describe('the conduit application', () => {
  it('shows some posts', () => {
        cy.visit('/')
        cy.get('.article-preview').should('have.length',10)
    })
   it('shows the first posts', () => {
        cy.server()
        // we set the response to be the activites.json fixture
        cy.route('GET', 'api/articles*', 'fixture:posts.json')
        cy.visit('/')
        cy.get(':nth-child(1) > .article-preview').contains('test-moh')
    })
    it('should handle an empty database', () => {
        cy.server()
        cy.route('GET', '/api/articles*', 'fixture:no_posts.json')
        cy.visit('/')
        cy.contains('No articles are here... yet.')
  })
})