import { Router } from "express";
import clienteController from "../controller/clienteController.js";
import uploadImage from "../middlewares/uploadImagem.middlewares.js";

const clienteRoutes = Router();

clienteRoutes.post('/', uploadImage, clienteController.criar);
clienteRoutes.put('/:id', uploadImage, clienteController.atualizar);
clienteRoutes.delete('/:id', clienteController.deletar);
clienteRoutes.get('/', clienteController.selecionar);

export default clienteRoutes;