import User from "../models/User";

class UserController {
    loginForm(req, res) {
        res.render('index');
    }

    async login(req, res) {
        const {email = '', password = ''} = req.body;
    }
}

export default new UserController();