describe('auth page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/auth')
  })

  it('test if page exists', () => {
  
    cy.get('.MuiPaper-root').should('exist')

  })

  it('test register', () => {
  
    cy.get('#mui-1').type('test')
    cy.get('#mui-2').type('test')
    cy.get('#mui-3').type('0729419868')
    cy.get('#mui-4').type('testt@yahoo.com')
    cy.get('#mui-5').type('test')
    cy.get('#mui-6').type('test')

    cy.get('.loginButton').click()
    cy.url().should('not.include', '/reservation')
  })

  it('test login', () => {
 
    cy.get(".swapAuth").click()
    cy.get('#mui-4').type('testt@yahoo.com')
    cy.get('#mui-5').type('test')
    cy.get('.loginButton').click()
    cy.url().should('include', '/reservation')

  })
 
})