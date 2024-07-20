import Tarefa from "../models/Tarefa";
import { DateTime } from "luxon";

class TarefaController {
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
}

export default new TarefaController();