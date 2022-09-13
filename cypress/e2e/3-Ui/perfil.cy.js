/// <reference types="cypress" />


describe('funcionalidade: login', () => {
    beforeEach(() => {
        cy.visit('/login')
        cy.loginRapido()
        cy.get('[data-test="dashboard-createProfile"]').click()
    });

    it('Deve cadastrar o perfil com sucesso', () => {
        cy.get('#mui-component-select-status').click()
        cy.get('.MuiList-root').contains('Especialista em QA').click()
    })

    it('Deve criar um perfil utilizando comando personalizado para otimizar o cadastro', () => {
        cy.cadastro()
        cy.get('[data-test="dashboard-welcome"]').should('contain', `Bem-vindo Tobias`)        
    })

    it('Deve validar mensagem de erro ao preencher o campo de site errado', () => {
        cy.get('[data-test="profile-webSite"]').type("site")
        cy.get('[data-test="profile-submit"]').click()
        cy.get('.MuiFormHelperText-root').should('contain', `Digite uma url válida`) 
    })

})