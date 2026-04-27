import { Router } from "express";
const routes = Router();
import categoriaRoutes from "./categoriaRoutes.js";
import produtoRoutes from "./produtoRoutes.js";
import clienteController from "../controller/clienteController.js";
import clienteRoutes from "./clienteRoutes.js";
 


routes.use('/categorias', categoriaRoutes);
routes.use('/produtos', produtoRoutes);
routes.use('/clientes', clenteRoutes)

export default routes;