import { connection } from '../configs/Database.js';

const clienteRepository = {
    criar: async (cliente,telefone,endereco) => {
    const conn = await connection.getConnection()

        try {
            conn.beginTransaction()

        const sqlPedido = 'INSERT INTO pedidos (ClienteId, SubTotal, Status) VALUES (?, ?, ?);' ;
        const valuePedido = [pedido.clenteId, pedido.subTotal, pedido.Status];
        const [rowsPedido] = await conn.execute(sqlPedido, valuesPedido);

        // INSERT item_pedidos
        Array.forEach(async element =>{
         const sqlItemPed = 'INSERT INTO itens_pedido (pedidoId, NumeroItemPed) VALUES (?, ?);' ;
        const valuesItemPed = [rowsPedido.insertId,ItemPedfone.numero];
        const [rowsItemPed] = await conn.execute(sqlItemPed, valuesItemPed);
        });

            conn.commit();
            return{rowsPedido, rowsItemPed};
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