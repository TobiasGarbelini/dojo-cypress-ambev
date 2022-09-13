/// <reference types="cypress" />


describe('funcionalidade: login', () => {
    beforeEach(() => {
        cy.visit('/login')
        cy.loginRapido()
        cy.get('[data-test="dashboard-createProfile"]').click()
    });
    
    it.only('Deve acessar o menu QA e visualizar o primeiro perfil listado', () => {
        cy.get('[data-test="navbar-QAs"]').click()
        cy.get('[data-test="profile-6079995ece40e5001512cdce"] > div > [data-test="profile-viewMore"]').click()
        cy.get('[data-test="profileTop-name"]').should('contain', `Pedro Guerra`) 
    })
})