import pedidosRepository from "../repositories/pedidosRepository.js";

const pedidosController = {

    criar: async (req, res) => {
        try {
            const { clienteId } = req.body;

            const pedido = {
                clienteId,
                subTotal: 0,
                status: "aberto",
                dataCad: new Date()
            };

            const result = await pedidosRepository.criar(pedido);

            return res.status(201).json({
                message: "Pedido criado com sucesso",
                result
            });

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: "Erro ao criar pedido",
                error: error.message
            });
        }
    },

    atualizarStatus: async (req, res) => {
        try {
            const id = Number(req.params.id);
            const { status } = req.body;

            const pedido = {
                id,
                status
            };

            const result = await pedidosRepository.atualizarStatus(pedido);

            return res.status(200).json({
                message: "Status atualizado com sucesso",
                result
            });

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: "Erro ao atualizar status",
                error: error.message
            });
        }
    },

    adicionarItem: async (req, res) => {
        try {
            const pedidoId = Number(req.params.pedidoId);
            const { produtoId, quantidade } = req.body;

            const item = {
                pedidoId,
                produtoId,
                quantidade: Number(quantidade)
            };

            const result = await pedidosRepository.adicionarItem(item);

            return res.status(201).json({
                message: "Item adicionado com sucesso",
                result
            });

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: "Erro ao adicionar item",
                error: error.message
            });
        }
    },

    editarItem: async (req, res) => {
        try {
            const itemId = Number(req.params.itemId);
            const { quantidade } = req.body;

            const item = {
                id: itemId,
                quantidade: Number(quantidade)
            };

            const result = await pedidosRepository.editarItem(item);

            return res.status(200).json({
                message: "Item atualizado com sucesso",
                result
            });

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: "Erro ao atualizar item",
                error: error.message
            });
        }
    },

    removerItem: async (req, res) => {
        try {
            const itemId = Number(req.params.itemId);

            const result = await pedidosRepository.removerItem(itemId);

            return res.status(200).json({
                message: "Item removido com sucesso",
                result
            });

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: "Erro ao remover item",
                error: error.message
            });
        }
    }
};

export default pedidosController; 