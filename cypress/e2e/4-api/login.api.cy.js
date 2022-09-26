/// <reference types="cypress" />

describe('Funcionalidade: Login via API', () => {

    it('Deve fazer o Login com sucesso', () => {
        cy.request({
            method: 'Post',
            url: '/api/auth',
            body: {
                "email": "tobgsilva@gmail.com",
                "password": "123456"
            }
        }).should((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('jwt')
        })

    });


    it('Deve buscar o usuario com sucesso', () => {
        cy.fixture("login").then((user) => {
            const token = cy.gerarToken(user.email, user.senha)
            //cy.setCookie('jwt', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMyMTBiOGM3NTAxNWUwMDE1NjkxNzNhIn0sImlhdCI6MTY2MzExNDIzMywiZXhwIjoxNjYzMTE3ODMzfQ.pAt1YWnYQBj_da2l86BUZi-IMLu48Pzn-IRtn8zVe6c')
            cy.request({
                method: 'Get',
                url: '/api/auth',
                headers: {
                    cookie: token
                }
            }).should((response) => {
                expect(response.status).to.equal(200)
                expect(response.body).to.have.property('email').to.equal(user.email)
            })
        })
    });

    it('Deve selecionar o usuario com sucesso', () => {
        cy.fixture("login").then((user) => {
            const token = cy.gerarToken(user.email, user.senha)
            //cy.setCookie('jwt', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMyMTBiOGM3NTAxNWUwMDE1NjkxNzNhIn0sImlhdCI6MTY2MzExNDIzMywiZXhwIjoxNjYzMTE3ODMzfQ.pAt1YWnYQBj_da2l86BUZi-IMLu48Pzn-IRtn8zVe6c')
            cy.request({
                method: 'Get',
                url: '/api/profile/me',
                headers: {
                    cookie: token
                }
            }).should((response) => {
                expect(response.status).to.equal(200)
                expect(response.body).to.have.property('errors')
            })
        })

    });

});