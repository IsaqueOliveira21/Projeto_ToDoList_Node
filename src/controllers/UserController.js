import User from "../models/User";
import jwt from "jsonwebtoken";

class UserController {
    loginForm(req, res) {
        return res.render('index');
    }

    async login(req, res) {
        const {email = '', password = ''} = req.body;
        const user = await User.findOne({where: {email: email}});
    
        if (!user) {
            req.flash('error_msg', 'Nenhum usuario cadastrado com este email.')
            return res.redirect('/');
        }
    
        if (!(await user.passwordValidate(password))) {
            req.flash('error_msg', 'Email ou senha incorretos.');
            return res.redirect('/');
        }

        req.session.userId = user.id;
        req.session.userEmail = user.email;
        
        return res.redirect('tarefas/dashboard');
    }

    async logout(req, res) {
        req.session.userId = null;
        req.session.userEmail = null;

        req.flash('success_msg', 'Deslogado com sucesso');
        return res.redirect('/');
    }


    create(req, res) {
        return res.render('register');
    }

    async store(req, res) {
        try {
            const user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });
            req.flash('success_msg', `Bem vindo ao nosso sistema ${user.email}.`);
            return res.redirect('/');
        } catch(error) {
            req.flash('error_msg', `Error: ${error}`);
            return res.redirect('/');
        }
    }
}

export default new UserController();