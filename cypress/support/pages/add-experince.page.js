class ExperienciaPage {
    get #posicao() {return cy.get('[data-test="experience-title"]')}
    get #empresa() {return cy.get('[data-test="experience-company"]')}
    get #local() {return cy.get('[data-test="experience-location"]')}
    get #inicio() {return cy.get('#from')}
    get #ate() {return cy.get('#to')}
    get #desc() {return cy.get('[data-test="experience-description"]')}
    get #enviar() {return cy.get('[data-test="experience-submit"]')}
    get #atual() {return cy.get('.MuiTypography-root')}
    

    addExperiencia(posicao, empresa, local, inicio, ate, descricao){
        this.#posicao.type(posicao)
        this.#empresa.type(empresa)
        this.#local.type(local)
        this.#inicio.type(inicio)
        this.#ate.type(ate)
        this.#desc.type(descricao)
        this.#enviar.click()
    }
    addExperienciaAtual(posicao, empresa, local, inicio, descricao){
        this.#posicao.type(posicao)
        this.#empresa.type(empresa)
        this.#local.type(local)
        this.#inicio.type(inicio)
        this.#atual.click()
        this.#desc.type(descricao)
        this.#enviar.click()
    }
}
export default new ExperienciaPage;