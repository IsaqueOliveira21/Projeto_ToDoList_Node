import { Router } from "express";
import tarefaController from "../controllers/TarefaController";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

router.get('/create', loginRequired, tarefaController.create);
router.post('/store', loginRequired, tarefaController.store);
router.get('/dashboard', loginRequired, tarefaController.index);
router.get('/editar/:id', loginRequired, tarefaController.edit);
router.post('/update/:id', loginRequired, tarefaController.update);
router.get('/concluir/tarefa/:id', loginRequired, tarefaController.concluirTarefa);
router.get('/delete/:id', loginRequired, tarefaController.delete);

export default router;