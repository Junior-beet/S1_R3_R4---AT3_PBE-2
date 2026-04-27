import clienteRepository from "../repositories/clientesRepository.js";
import { cliente } from "../models/Cliente.js";
import { telefone } from "../models/Telefone.js";
import { endereco } from "../models/Endereco.js";
import {limparNumero } from "../utils/limparNumero.js";
import { validarCpf } from "../utils/validarCpf.js";

const clienteController = {

    criar: async (req, res) => {
        try {
            const { idCategoria, nome, valor } = req.body;

            const cliente = {
                idCategoria,
                nome,
                valor: Number(valor),
                caminhoImagem,
                dataCad: new Date()
            };

            const result = await clienteRepository.criar(cliente);

            return res.status(201).json({
                message: "Cliente criado com sucesso",
                result
            });

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: "Erro ao criar cliente",
                error: error.message
            });
        }
    },

    atualizar: async (req, res) => {
        try {
            const id = Number(req.params.id);

            const { idCategoria, nome, valor } = req.body;
            const caminhoImagem = req.file ? req.file.filename : null;

            const cliente = {
                id,
                idCategoria,
                nome,
                valor: Number(valor),
                caminhoImagem
            };

            const result = await clienteRepository.editar(cliente);

            return res.status(200).json({
                message: "Cliente atualizado com sucesso",
                result
            });

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: "Erro ao atualizar cliente",
                error: error.message
            });
        }
    },

    deletar: async (req, res) => {
        try {
            const id = Number(req.params.id);

            const result = await clienteRepository.deletar(id);

            return res.status(200).json({
                message: "Cliente deletado com sucesso",
                result
            });

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: "Erro ao deletar cliente",
                error: error.message
            });
        }
    },

    selecionar: async (req, res) => {
        try {
            const result = await clienteRepository.selecionar();

            return res.status(200).json({ result });

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: "Erro ao buscar clientes",
                error: error.message
            });
        }
    }
};

export default clienteController;