/// <reference types="cypress" />


const faker = require('faker-br')

const email = faker.internet.email()

context('Cadastro', () => {
    beforeEach(() =>{
        cy.visit('/cadastrar')

    })

    afterEach(() => {
        cy.viewport(1280, 720)
        cy.screenshot()
    });


    const email = faker.internet.email()

    it('Cadastro com sucesso', () => {
        

        cy.get('[data-test="register-login"]').should('exist')
        cy.get('.large').should('exist').and('contain', 'Cadastrar')
        cy.get('[data-test="register-name"]').type('Tobias')
        cy.get('[data-test="register-email"]').type(email)
        cy.get('[data-test="register-password"]').type('123456')
        cy.get('[data-test="register-password2"]').type('123456')
        cy.get('[data-test="register-submit"]').click()

        cy.wait(1000)
        cy.get('[data-test="dashboard-welcome"]').should('be.visible')
    })

    it('Devo validar mensagem de erro preenchido', () => {
     
        cy.get('[data-test="register-login"]').should('exist')

        cy.get('[data-test="register-name"]').type('Tobias')
        cy.get('[data-test="register-email"]').type('tobgsilva@gmail.com')
        cy.get('[data-test="register-password"]').type('123456')
        cy.get('[data-test="register-password2"]').type('123456')
        cy.get('[data-test="register-submit"]').click()
        cy.wait(1000)
        cy.get('[data-test="alert"]').should('contain','Usuário já registrado')
    })

    
    it('Devo validar o não preenchimento dos campos obrigatórios', () => {
     
        cy.get('[data-test="register-submit"]').click()
        cy.get('[data-test="register-name"] > .MuiFormHelperText-root').should('contain','Email é obrigatório')
        cy.get('[data-test="register-email"] > .MuiFormHelperText-root').should('contain','Email é obrigatório')
        cy.get('[data-test="register-password"] > .MuiFormHelperText-root').should('contain','Senha é obrigatória')
        cy.get('[data-test="register-password2"] > .MuiFormHelperText-root').should('contain','Confirmar senha é obrigatória')
    })

})