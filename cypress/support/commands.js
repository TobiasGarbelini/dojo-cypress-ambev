// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, senha) => {
    cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
    cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
    cy.get('[data-test="login-submit"]').click()
})

Cypress.Commands.add('loginRapido', () => {
    cy.fixture('login').then((user) => {
        cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type(user.email)
        cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type(user.senha)
        cy.get('[data-test="login-submit"]').click()
    })
})

Cypress.Commands.add('cadastro', () => {
    cy.fixture('perfil').then((perfil) => {
        cy.get('#mui-component-select-status').click()
        cy.get('.MuiList-root').contains(perfil.status).click()
        cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type(perfil.empresa)
        cy.get('[data-test="profile-webSite"]').type(perfil.website)
        cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type(perfil.localizacao)
        cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type(perfil.conhecimentos)
        cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type(perfil.git)
        cy.get('[data-test="profile-bio"] > .MuiInputBase-root').type(perfil.bio)
        cy.get('[data-test="profile-submit"]').click()
    })
})

Cypress.Commands.add("gerarToken", (email,senha) => {
    cy.request({
        method: 'Post',
        url: '/api/auth',
        body: {
            "email": email,
            "password": senha
        }
    }).then((response) => {
        return response.body.jwt
    })
    
})