import { Router } from "express";
import pedidosController from "../controller/pedidosController.js";

const pedidosRoutes = Router();

pedidosRoutes.post('/', uploadImage, pedidosController.criar);
pedidosRoutes.put('/:id', uploadImage, pedidosController.atualizar);
pedidosRoutes.delete('/:id', pedidosController.deletar);
pedidosRoutes.get('/', pedidosController.selecionar);

export default pedidosRoutes;