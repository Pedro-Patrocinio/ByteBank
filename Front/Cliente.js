export class Cliente {
    get cpf() {
        return thid._cpf;
    }

    constructor(nome, cpf) {
        this.nome = nome;
        this._cpf = cpf;
    }
}