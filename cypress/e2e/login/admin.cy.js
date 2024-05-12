describe('admin sign-in', () => {
    let adminEmail = '';
    let adminPassword = '';

    beforeEach(() => {
        cy.fixture('users.json').then((users) => {
            adminEmail = users["admin"][0];
            adminPassword = users["password"][0];
        });
    });

    it.skip('should successfully log in with valid credentials', () => {
        cy.login(adminEmail, adminPassword);
        cy.get('body').should('contain', 'Dashboard');
    });
});