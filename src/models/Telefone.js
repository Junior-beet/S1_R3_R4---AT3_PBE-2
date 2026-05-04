export class Telefone {
    #id;
    #cliente_id;
    #numero;
    #tipo;

    constructor(id, cliente_id, numero, tipo = 'celular') {
        this.id = id;
        this.cliente_id = cliente_id;
        this.numero = numero;
        this.tipo = tipo;
    }

    
    get id() {
        return this.#id;
    }

    get cliente_id() {
        return this.#cliente_id;
    }

    get numero() {
        return this.#numero;
    }

    get tipo() {
        return this.#tipo;
    }

   
    set id(value) {
        this.#id = value;
    }

    set cliente_id(value) {
        this.#validarClienteId(value);
        this.#cliente_id = value;
    }

    set numero(value) {
        this.#validarNumero(value);
        this.#numero = value;
    }

    set tipo(value) {
        this.#validarTipo(value);
        this.#tipo = value;
    }


    #validarClienteId(value) {
        if (!Number.isInteger(value) || value <= 0) {
            throw new Error("cliente_id inválido");
        }
    }

    #validarNumero(value) {
        if (!value || typeof value !== 'string') {
            throw new Error("Número inválido");
        }

        if (value.length !== 11 || isNaN(value)) {
            throw new Error("O número deve conter exatamente 11 dígitos numéricos");
        }
    }

    #validarTipo(value) {
        const tiposValidos = ['residencial', 'celular', 'comercial'];

        if (value && !tiposValidos.includes(value)) {
            throw new Error("Tipo inválido");
        }
    }

    static criar (dados){return new Telefone (dados.numero, null)}
}