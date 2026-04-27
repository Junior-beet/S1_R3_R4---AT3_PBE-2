import { connection } from '../configs/Database.js';

const clienteRepository = {
    criar: async (cliente,telefone,endereco) => {
    const conn = await connection.getConnection()

        try {
            conn.beginTransaction()

        const sqlCli = 'INSERT INTO clientes (nome, cpf) VALUES (?, ?)' ;
        const valuesCli = [cliente.nome,cliente.cpf];
        const [rowsCli] = await conn.execute(sqlCli, valuesCli);
      
         const sqlTel = 'INSERT INTO telefones (cliente_id,telefone) VALUES (?, ?)' ;
        const valuesTel = [rowsCli.insertId,telefone.telefone];
        const [rowsTel] = await conn.execute(sqlTel, valuesTel);

        const sqlEnd = 'INSERT INTO enderecos(id_cliente,cep,logradouro,numero,complemento,bairro,uf,cidade) VALUES (?, ?, ?, ?, ?, ?, ?, ?)' ;
        const valuesEnd = [rowsCli.insertId,endereco.cep,endereco.logradouro,endereco.numero,endereco.complemento,endereco.bairro,endereco.uf,endereco.cidade];
        const [rowsEnd] = await conn.execute(sqlEnd, valuesEnd);


            conn.commit();
            return{rowsCli,rowsTel, rowsEnd};
        } catch (error) {
            console.error(error)
           conn.rollback();
           throw new Error('error');
            
        }
        finally{
            conn.release();
        }
    },

    editar: async (cliente) => {
        const sql = `
            UPDATE clientes SET  nome = ?, cpf = ? WHERE id = ?
        `;
        const values = [cliente.nome,cliente.cpf,cliente.id];

        const [rows] = await connection.execute(sql, values);
        return rows;
    },

    selecionar: async () => {
        const sql = 'SELECT * FROM clientes';
        const [rows] = await connection.execute(sql);
        return rows;
    },

    deletar: async (id) => {
        const sql = 'DELETE FROM clientes WHERE id = ?';
        const values = [id];

        const [rows] = await connection.execute(sql, values);
        return rows;
    }

};

export default clienteRepository