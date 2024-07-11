import { Router } from "express";
import userController from "../controllers/UserController";

const router = new Router();

router.get('/', userController.loginForm);
router.post('/login', userController.login);

export default router;