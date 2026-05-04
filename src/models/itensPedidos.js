export class Pedido{
    #id
    #PedidoId
    #ProdutoId
    #quantidade
    #valorItem

    constructor(pPedidoId,pProdutoId,pQuantidade,pValoritem,pId){
        this.pedidoId = pPedidoId
        this.produtoId = pProdutoId
        this.quantidade = pQuantidade
        this.valorItem = pValoritem
        this.id = pId 
    }


    get id(){
        return this.#id
    }

    get clienteid(){
        return this.#PedidoId
    }

    get subtotal(){
        return this.#ProdutoId
    }

    get status(){
        return this.#quantidade
    }

    get status(){
        return this.#valorItem
    }

    set id(value){
        this.#validarId(value)
        this.#id = value
    }

    set Pedidoid(value){
        this.#validarPedidoId(value)
        this.#PedidoId = value
    }

    set ProdutoId(value){
        this.#validarProdutoId(value)
        this.#ProdutoId = value
    }

    set status(value){
        this.#validarQuantidade(value)
        this.#quantidade = value
    }

    set status(value){
        this.#validarValorItem(value)
        this.#valorItem = value
    }

    #validarId (value){
        if(value && value < 0){
            throw new Error("Verifique o ID informado")
        }
    }

    #validarPedidoId (value){
        if(!value || value <= 0){
            throw new Error("Verifique o ID do pedido informado")
        }
    }

    #validarProdutoId (value){
        if(!value || value <= 0){
            throw new Error("Verifique o ID do produto informado")
        }
    }

    #validarQuantidade (value){
        if(!value || value <= 0){
            throw new Error("não foi possivel obter a quantidade")
        }
    }

    #validarValorItem (value){
        if(!value || value <= 0){
            throw new Error("não foi possivel obter o valor do item")
        }
    }


    static criar(dados){
        return new Pedido(dados.PedidoId,dados.ProdutoId,dados.quantidade,dados.valorItem,null)
    }

    static editar(dados,id){
        return new Pedido(dados.PedidoId,dados.ProdutoId,dados.quantidade,dados.valorItem,id)
    }
}