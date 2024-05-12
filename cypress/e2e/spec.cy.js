describe('template spec', () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it('passes 1', () => {
    cy.contains("Home");
  });

  it('passes 2', () => {
    cy.contains('Contact us').click();
    cy.url().should('include', '/contact-us');
  });
});
