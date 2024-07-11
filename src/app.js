import {resolve} from 'path';
import './database';

import express from 'express';
import userRoutes from './routes/user';



class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(express.json());
        this.app.set('views', resolve(__dirname, 'views'));
        this.app.set('view engine', 'ejs');
    }

    routes() {
        this.app.use('/', userRoutes);
    }
}

export default new App().app;