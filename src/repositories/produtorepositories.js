import { connection } from '../configs/Database.js'

const produtoRepository = {

    criar: async (produto) => {
        const sql = `
            INSERT INTO produto 
            (idCategoria, nome, valor, caminhoImagem, dataCad)
            VALUES (?, ?, ?, ?)
        `;

        const valores = [
            produto.idCategoria,
            produto.nome,
            produto.valor,
            produto.caminhoImagem
        ];

        const [result] = await db.query(sql, valores);
        return result;
    },

    editar: async (produto) => {
        const sql = `
            UPDATE produto SET
                idCategoria = ?,
                nome = ?,
                valor = ?,
                caminhoImagem = ?
            WHERE id = ?
        `;

        const valores = [
            produto.idCategoria,
            produto.nome,
            produto.valor,
            produto.caminhoImagem,
            produto.id
        ];

        const [result] = await db.query(sql, valores);
        return result;
    },

    deletar: async (id) => {
        const sql = `DELETE FROM produto WHERE id = ?`;

        const [result] = await db.query(sql, [id]);
        return result;
    },

    selecionar: async () => {
        const sql = `
            SELECT 
                id,
                idCategoria,
                nome,
                valor,
                caminhoImagem,
                dataCad
            FROM produto
        `;

        const [rows] = await db.query(sql);
        return rows;
    }

};

export default produtoRepository;