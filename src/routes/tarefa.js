import { Router } from "express";
import tarefaController from "../controllers/TarefaController";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

router.get('/create', loginRequired, tarefaController.create);
router.post('/store', loginRequired, tarefaController.store);
router.get('/dashboard', loginRequired, tarefaController.index);
router.get('/editar/:id', loginRequired, tarefaController.edit);

export default router;