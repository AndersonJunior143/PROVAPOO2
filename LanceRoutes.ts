import { Router } from "express";
import LanceController from "../Controller/LanceController";

const LanceRouter = Router();

LanceRouter.get('/user', LanceController.listarLances)

LanceRouter.post('/user', LanceController.criarLance);

LanceRouter.put('/user', LanceController.atualizarLance);

LanceRouter.delete('/user', LanceController.deletarLance);

export default LanceRouter;