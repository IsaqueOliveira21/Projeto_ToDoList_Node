import { Router } from "express";
import rankingController from "../controllers/RankingController";
import loginRequired from "../middlewares/loginRequired";
//import router from "./tarefa";

const router = new Router();

router.get('/mes', loginRequired, rankingController.indexMonth);
router.get('/ano', loginRequired, rankingController.indexYear);
router.get('/global', loginRequired, rankingController.indexGlobal);

export default router;