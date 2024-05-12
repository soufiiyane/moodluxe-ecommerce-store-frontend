Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

Cypress.Commands.add('login', (email, password) => {
    cy.visit('/login');
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);

    cy.intercept('POST', 'http://localhost:8080/api/v1/auth/login').as('login');

    cy.get('input[type="submit"]').click();

    cy.wait('@login').then((interception) => {
        expect(interception.request.method).to.eq('POST');
        expect(interception.response?.statusCode).to.eq(200);
    });
});
