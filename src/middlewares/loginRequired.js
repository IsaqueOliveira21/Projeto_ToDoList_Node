import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async(req, res, next) => {
    if (!req.session.userId) {
        req.flash('error_msg', 'Faça login para acessar esta página.');
        return res.redirect('/'); // Redireciona para a página de login
    }
    return next();
}
