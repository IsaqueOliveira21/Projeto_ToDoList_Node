import {resolve} from 'path';
import './database';
import express from 'express';
import session from 'express-session';
import flash from 'connect-flash';
import userRoutes from './routes/user';
import tarefaRoutes from './routes/tarefa';
class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(express.json());
        this.app.use(express.static(resolve(__dirname, '..', 'public')));
        
        this.app.set('views', resolve(__dirname, 'views'));
        this.app.set('view engine', 'ejs');

        this.app.use(session({
            secret: '123456790',
            resave: false,
            saveUninitialized: false,
            cookie: {
                maxAge: 24 * 60 * 60 * 1000,
            }
        }));
        this.app.use(flash());

        this.app.use((req, res, next) => {
            res.locals.success_msg = req.flash('success_msg');
            res.locals.error_msg = req.flash('error_msg');
            next();
        });
    }

    routes() {
        this.app.use('/', userRoutes);
        this.app.use('/tarefas', tarefaRoutes);
    }
}

export default new App().app;