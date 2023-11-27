import { Router } from "express";
import UsuarioController from "../Controller/UsuarioController";

const UsuarioRouter = Router();

UsuarioRouter.get('/user', UsuarioController.listarUsuario)

UsuarioRouter.post('/user', UsuarioController.criarUsuario);

UsuarioRouter.put('/user', UsuarioController.atualizarUsuario);

UsuarioRouter.delete('/user', UsuarioController.deletarUsuario);

export default UsuarioRouter;