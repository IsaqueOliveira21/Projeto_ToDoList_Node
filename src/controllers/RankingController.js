import Tarefa from "../models/Tarefa";
import User from "../models/User";
import { DateTime } from "luxon";
import { Op } from "sequelize";
import { sequelize } from '../database/index';

class RankingController {
    async indexMonth(req, res) {
        const inicioMes = DateTime.now().startOf('month').toJSDate();
        const fimMes = DateTime.now().endOf('month').toJSDate();
        const mesAtual = DateTime.now().toFormat('LLLL');
        const tarefasUsuarios = await Tarefa.findAll({
            attributes: [
                'user_id',
                [sequelize.fn('COUNT', sequelize.col('Tarefa.id')), 'tarefasConcluidas']
            ],
            where: {
                created_at: {
                    [Op.between]: [inicioMes, fimMes]
                },
                concluida: 1
            },
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['name']
                }
            ],
            group: ['user_id', 'user.id'],
            order: [[sequelize.fn('COUNT', sequelize.col('Tarefa.id')), 'DESC']]
        });
        return res.render('ranking/indexMonth', { tarefasUsuarios, mesAtual });
    }

    async indexYear(req, res) {
        const anoAtual = DateTime.now().year;
        const inicioAno = DateTime.now().startOf('year').toJSDate();
        const fimAno = DateTime.now().endOf('year').toJSDate();

        const tarefasUsuarios = await Tarefa.findAll({
            attributes: [
                'user_id',
                [sequelize.fn('COUNT', sequelize.col('Tarefa.id')), 'tarefasAno'],
            ],
            where: {
                created_at: {
                    [Op.between]: [inicioAno, fimAno]
                },
                concluida: 1
            },
            include: {
                model: User,
                as: 'user',
                attributes: ['name']
            },
            group: ['user_id', 'user.id'],
            order: [[sequelize.fn('COUNT', sequelize.col('Tarefa.id')), 'DESC']]
        });
        return res.render('ranking/indexYear', {anoAtual, tarefasUsuarios});
    }

    async indexGlobal(req, res) {
        const tarefasUsuarios = await Tarefa.findAll({
            attributes: [
                'user_id',
                [sequelize.fn('COUNT', sequelize.col('Tarefa.id')), 'tarefasGlobais']
            ],
            where: {
                concluida: 1
            },
            include: {
                model: User,
                as: 'user',
                attributes: ['name']
            },
            group: ['user_id', 'user.id'],
            order: [[sequelize.fn('COUNT', sequelize.col('Tarefa.id')), 'DESC']]
        });
        return res.render('ranking/indexGlobal', { tarefasUsuarios });
    }
}

export default new RankingController();