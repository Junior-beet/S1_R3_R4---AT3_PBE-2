export class Cliente {
    #id;
    #idCategoria;
    #nome;
    #valor;
    #caminhoImagem;
    #dataCad;

    constructor(id, idCategoria, nome, valor, caminhoImagem) {
        this.id = id;
        this.idCategoria = idCategoria;
        this.nome = nome;
        this.valor = valor;
        this.caminhoImagem = caminhoImagem;
        this.#dataCad = new Date();
    }

    get id() {
        return this.#id;
    }

    get idCategoria() {
        return this.#idCategoria;
    }

    get nome() {
        return this.#nome;
    }

    get valor() {
        return this.#valor;
    }

    get caminhoImagem() {
        return this.#caminhoImagem;
    }

    get dataCad() {
        return this.#dataCad;
    }

    set id(value) {
        this.#validarId(value);
        this.#id = value;
    }

    set idCategoria(value) {
        this.#validarIdCategoria(value);
        this.#idCategoria = value;
    }

    set nome(value) {
        this.#validarNome(value);
        this.#nome = value;
    }

    set valor(value) {
        this.#validarValor(value);
        this.#valor = value;
    }

    set caminhoImagem(value) {
        this.#validarCaminhoImagem(value);
        this.#caminhoImagem = value;
    }

    #validarId(value) {
        if (!value || value <= 0) {
            throw new Error("ID inválido");
        }
    }

    #validarIdCategoria(value) {
        if (!value || value <= 0) {
            throw new Error("Id da categoria inválido");
        }
    }

    #validarNome(value) {
        if (!value ) {
            throw new Error("Nome inválido (mínimo 3 caracteres)");
        }
    }

    #validarValor(value) {
        if (!value || value <= 0) {
            throw new Error("Valor inválido");
        }
    }

    #validarCaminhoImagem(value) {
        if (!value || !value.includes(".")) {
            throw new Error("Caminho da imagem inválido");
        }
    }

    static criar(dados){
        return new Cliente(dados.nome, dados.cpf, null)
    }
}