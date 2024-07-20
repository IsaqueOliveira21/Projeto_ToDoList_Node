import { Router } from "express";
import userController from "../controllers/UserController";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

router.get('/', userController.loginForm);
router.post('/login', userController.login);
router.get('/logout', loginRequired, userController.logout);
router.get('/register', userController.create);
router.post('/store', userController.store);
router.get('/dashboard', loginRequired, userController.dashboard);

export default router;