/// <reference types="cypress" />


const faker = require('faker-br')

const email = faker.internet.email()

context('Cadastro', () => {
    beforeEach(() =>{
        cy.visit('/login')

    })

    afterEach(() => {
        cy.viewport(1280, 720)
        cy.screenshot()
    });

    it('Devo validar login com sucesso', () => {
     
        cy.get('[data-test="login-email"]').should('exist')

        cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('tobgsilva@gmail.com')
        cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('123456')
        cy.get('[data-test="login-submit"]').click()
        cy.get('[data-test="dashboard-welcome"]').should('contain','Bem-vindo')
    })

    it('Devo validar login sem sucesso', () => {
     
        cy.get('[data-test="login-email"]').should('exist')

        cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('tobgsilva@gmail.com')
        cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('xxxxxx')
        cy.get('[data-test="login-submit"]').click()
        cy.get('[data-test="alert"]').should('contain','Credenciais inválidas')
    })



})