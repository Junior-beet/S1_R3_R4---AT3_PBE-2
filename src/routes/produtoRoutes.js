import { Router } from "express";
import produtoController from "../controller/produtocontroller.js";
import uploadImage from "../middlewares/uploadImagem.middlewares.js";

const produtoRoutes = Router();


produtoRoutes.post('/', uploadImage,produtoController.criar);
produtoRoutes.put('/:id', uploadImage, produtoController.atualizar);
produtoRoutes.delete('/:id', produtoController.deletar);
produtoRoutes.get('/', produtoController.selecionar);

export default produtoRoutes;