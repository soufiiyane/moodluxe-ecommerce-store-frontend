declare namespace Cypress {
    interface Chainable<Subject = any> {
        login(name , password ): Chainable<any>;
    }
}