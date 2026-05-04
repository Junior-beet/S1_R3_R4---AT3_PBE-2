export class Pedido{
    #id;
    #ClienteId;
    #subtotal;
    #status;
    #DataCad;

    // Construtor
    constructor(pCliente, pSubTotal, pStatus, pId){
    this.clienteId = pCliente;
    this.subTotal = pSubTotal;
    this.status = pStatus;
    this.id = pId;
    }

    get id(){
        return this.#id
    }

    get clienteid(){
        return this.#ClienteId
    }

    get subtotal(){
        return this.#subtotal
    }

    get status(){
        return this.#status
    }

    set id(value){
        this.#validarId(value)
        this.#id = value
    }

    set clienteid(value){
        this.#validarClienteId(value)
        this.#ClienteId = value
    }

    set subtotal(value){
        this.#validarSubtotal(value)
        this.#subtotal = value
    }

    set status(value){
        this.#validarId(value)
        this.#status = value
    }

    #validarId (value){
        if(value && value < 0){
            throw new Error("Verifique o ID informado")
        }
    }

    #validarClienteId (value){
        if(value && value <= 0){
            throw new Error("Verifique o ID do cliente informado")
        }
    }

    #validarSubtotal (value){
        if(!value || value <= 0){
            throw new Error("não foi possivel obter o subtotal")
        }
    }

    static criar(dados){
        return new Pedido(dados.clienteId,dados.subtotal,dados.status,null)
    }

    static editar(dados,id){
        return new Pedido(dados.clienteId,dados.subtotal,dados.status,id)
    }
}