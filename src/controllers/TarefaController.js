import Tarefa from "../models/Tarefa";
import { DateTime } from "luxon";
import User from "../models/User";
import { Op } from "sequelize";

class TarefaController {

    async index(req, res) {
        const tarefas = await Tarefa.findAll({
            where: {
                user_id: req.session.userId,
            },
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['name', 'email'],
                }
            ]
        });
        res.render('dashboard/index', { tarefas: tarefas, DateTime });
    }

    create(req, res) {
        return res.render('tarefas/dados');
    }

    async store(req, res) {
        let dataConclusao = null;
        if(req.body.prazo == 'on') {
            dataConclusao = DateTime.fromFormat(req.body.data_conclusao, 'yyyy-MM-dd').toFormat('yyyy-MM-dd 23:59:59');
        }
        try {
            const novaTarefa = await Tarefa.create({
                user_id: req.session.userId,
                titulo: req.body.titulo,
                descricao: req.body.descricao,
                data_termino: dataConclusao,
            });
            req.flash('success_msg', `Tarefa criada com sucesso!`);
            return res.redirect('/dashboard');
        } catch(error) {
            req.flash('error_msg', `Error: ${error}`);
            return res.redirect('/dashboard');
        }
    }

    async edit(req, res) {
        const { id } = req.params;
        const tarefa = await Tarefa.findByPk(id);
        return res.render('tarefas/dados', { tarefa, DateTime });
    }
}

export default new TarefaController();