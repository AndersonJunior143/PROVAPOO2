import { Router } from "express";
import LeilaoController from "../Controller/LeilaoController";

const LeilaoRouter = Router();

LeilaoRouter.get('/user', LeilaoController.listarLeiloes)

LeilaoRouter.post('/user', LeilaoController.criarLeilao);

LeilaoRouter.put('/user', LeilaoController.atualizarLeilao);

LeilaoRouter.delete('/user', LeilaoController.deletarLeilao);

export default LeilaoRouter;