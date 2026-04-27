    import { connection } from "../configs/Database.js";

    const categoriaRepository = {

    criar: async (cliente, telefone, endereco) => {
        const conn = await connection.getConnection();
        try {
            conn.beginTransaction();

            const sqlCli = 'INSERT INTO clientes(Nome, cpf, email) VALUES (?, ?, ?)';
            const valuesCli = [cliente.nome, cliente.cpf, cliente.email];
            const [rows] = await conn.execute(sqlCli, valuesCli);

            const sqlTel = 'INSERT INTO Telefone(clienteId, NumeroTel) VALUES (?, ?)';
            const valuesTel = [rowsCli.insertId, telefone.numero];
            const [rowsTel] = await conn.execute(sqlTel, valuesTel);

            const sqlEnd = 'INSERT INTO Endereco(clienteId, cep, lougradouro, bairro, complemento, estado, cidade, numero) VALUES (?, ?,?,?,?,?,?,?)';
            const valuesEnd = [rowsCli.insertId, endereco.cep, endereco.lougradouro, endereco.bairro, endereco.complemento, endereco.estado, endereco.cidade, endereco.numero];
            const [rowsEnd] = await conn.execute(sqlEnd, valuesEnd);

            conn.commit();
            return {rowsCli, rowsTel, rowsEnd};
        } catch (error) {
            conn.rolback();
            throw new Error(error);
        }
        finally {
            conn.release();
        }
    },
    editar:async (categoria) =>{
        const sql = 'UPDATE categorias SET Nome=?, Descricao=? WHERE Id=?';
        const values = [categoria.nome, categoria.descricao,categoria.id];
        const [rows] = await connection.execute(sql,values);
         return rows;
    },
    select:async () =>{
        const sql = 'SELECT * FROM categorias';
        const [rows] = await connection.execute(sql);
        return rows;
    },
    deletar:async (id) =>{
        const sql = 'DELETE FROM  categorias WHERE id = ?;';
        const values = [id];
        const [rows] = await connection.execute(sql,values);
         return rows;
    }
};

export default categoriaRepository;