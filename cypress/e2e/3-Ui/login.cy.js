/// <reference types="cypress" />


describe('funcionalidade: login', () => {
    beforeEach(() => {
        cy.visit('/login')

    });

    it('Devo validar login com sucesso', () => {

        cy.fixture('login').then((user) => {
            cy.login(user.email, user.senha)
            cy.get('[data-test="dashboard-welcome"]').should('contain', `Bem-vindo ${user.nome}`)
        })
    })

    it('Devo validar login sem sucesso', () => {
            cy.login('tobgsilva@gmail.com', 'xxxxxxx')
            cy.get('[data-test="alert"]').should('contain', 'Credenciais inválidas')
    })



})