import clienteRepository from "../repositories/clienteRepository.js";
import { Cliente } from "../models/Cliente.js";
import { Telefone } from "../models/Telefone.js";
import { Endereco } from "../models/Endereco.js";
import {limparNumero } from "../utils/limparNumero.js";
import { validarCPF } from "../utils/validarCpf.js";
import axios from "axios";

const clienteController = {

    criar: async (req, res) => {
        try {
           
            let {nome, cpf, cep, telefone, numero} = req.body;

            cpf = limparNumero(cpf);
            cep = limparNumero(cep);
            telefone = limparNumero(telefone);


            const apicep = `https://viacep.com.br/ws/${cep}/json/`

            const consultaApi = await axios.get(apicep)

            const dadosEndereco = {
                cep : cep,
                logradouro : consultaApi.data.logradouro,
                complemento : consultaApi.data.complemento,
                municipio : consultaApi.data.municipio,
                uf: consultaApi.data.uf,
                numero :numero

            }

                const cliente = Cliente.criar({
                    nome,
                    cpf
                })

                const telefoneCliente = Telefone.criar({

                    telefone
                })

                const endereco = Endereco.criar({
                    dadosEndereco

                })

                const resultado = clienteRepository.criar(cliente, telefoneCliente, endereco)

                return res.status(201).json({resultado})

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