describe('teste de API', () => {
    var dojo = {
        aula: "API",
        duracao: 3,
        professor: "Renato"
    }

    it('validar dojo', () => {
        expect(dojo.aula).to.equal("API")
        expect(dojo.duracao).to.equal(3)
        expect(dojo.professor).to.equal("Renato")
    });
    
    const alunos = [
        { usuario: "William", cargo: "qa"},
        { usuario: "Graciane", cargo: "qa"},
    ]
    
    it('validar aluno', () => {
        expect(alunos[0].usuario).to.equal("William")
        expect(alunos[0].cargo).to.equal("qa")
        expect(alunos[1].usuario).to.equal("Graciane")
        expect(alunos[1].cargo).to.equal("qa")
    });
    

});