describe('test all menu routes', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })


  it('test if page exists', () => {
    cy.get('.containerHome').should('exist')
    cy.get(".css-78trlr-MuiButtonBase-root-MuiIconButton-root").click()
  })

  it('test if route of  ritual page is good', () => {
    cy.get(".css-78trlr-MuiButtonBase-root-MuiIconButton-root").click()
    cy.get("#ritual").click()
    cy.url().should('include', '/ritual')
  })

  it('test if route of housing page is good', () => {
    cy.get(".css-78trlr-MuiButtonBase-root-MuiIconButton-root").click()
    cy.get("#cazare").click()
    cy.url().should('include', '/housing')
  })



it('test if route of relaxation page is good', () => {
  cy.get(".css-78trlr-MuiButtonBase-root-MuiIconButton-root").click()
  cy.get("#relaxare").click()
  cy.url().should('include', '/relaxation')
})



it('test if route of prices page is good', () => {
  cy.get(".css-78trlr-MuiButtonBase-root-MuiIconButton-root").click()
  cy.get("#tarife").click()
  cy.url().should('include', '/prices')
})




it('test if route of questions page is good', () => {
  cy.get(".css-78trlr-MuiButtonBase-root-MuiIconButton-root").click()
  cy.get("#intrebari").click()
  cy.url().should('include', '/frequent-questions')
})


it('test if route of contact page is good', () => {
  cy.get(".css-78trlr-MuiButtonBase-root-MuiIconButton-root").click()
  cy.get("#contact").click()
  cy.url().should('include', '/contact')
})


it('test if route of photos page is good', () => {
  cy.get(".css-78trlr-MuiButtonBase-root-MuiIconButton-root").click()
  cy.get("#galerie").click()
  cy.url().should('include', '/photos')

})

})