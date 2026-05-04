export class Endereco {
    #id;
    #cep;
    #logradouro;
    #numero;
    #complemento;
    #bairro;
    #cidade;
    #estado;

    constructor(id, cep, logradouro, numero, complemento, bairro, cidade, estado) {
        this.id = id;
        this.cep = cep;
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    get id() {
        return this.#id;
    }

    get cep() {
        return this.#cep;
    }

    get logradouro() {
        return this.#logradouro;
    } 

    get numero() {
        return this.#numero;
    }

    get complemento() {
        return this.#complemento;
    }

    get bairro() {
        return this.#bairro;
    }

    get cidade() {
        return this.#cidade;
    }

    get estado() {
        return this.#estado;
    }

     set id(value) {
        this.#id = value;
    }

    set cep(value) {
        this.#id = value;
    }

    set logradouro(value) {
        this.#id = value;
    }

    set numero(value) {
        this.#validarNumero(value);
        this.#numero = value;
    }

    set complemento(value) {
        this.#id = value;
    }

    set bairro(value) {
        this.#id = value;
    }

    set cidade(value) {
        this.#id = value;
    }

    set estado(value) {
        this.#id = value;
    }

    #validarNumero(value) {
        if (!value.trim() ){
        }throw new Error("Numero inválido");
    }   

    static criar(dados){
        return new Endereco(dados.cep, dados.logradouro, dados.complemento, dados.municipio, dados.uf, dados.numero, null)

    }
}

