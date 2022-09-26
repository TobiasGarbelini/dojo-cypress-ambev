/// <reference types="cypress" />

import user from '../../fixtures/login.json'

describe('funcionalidade Perfil via API', () => {
    let token

    beforeEach(() => {
        cy.gerarToken(user.email, user.senha).then((tkn) => {
            token = tkn

        })
    });

    it('[GET] deve consultar o perfil do usuario, usando token dinamico', () => {
        cy.request({
            method: 'Get',
            url: '/api/profile/me',
            headers: {
                cookie: token
            }
        }).its('body').then((response) => {
            expect(response.company).to.equal('ambev')
            expect(response.bio).to.equal('analista de testes')
        })

    });

    it('[PUT] Dev adicionar experiencia profissional do usuario', () => {
        cy.request({
            method: 'PUT',
            url: '/api/profile/experience',
            headers: {
                Cookie: token
            },
            body : {
                title: 'QA Especialista',
                "company": 'ambev',
                from: '2021-11-16'
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
        })

    });



})