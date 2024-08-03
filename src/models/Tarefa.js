import Sequelize, { Model } from 'sequelize';

export default class Tarefa extends Model {
    static init(sequelize) {
        super.init({
            user_id: {
                type: Sequelize.INTEGER,
            },
            titulo: {
                type: Sequelize.STRING,
                defaultValue: '',
            },
            descricao: {
                type: Sequelize.STRING,
                defaultValue: ''
            },
            data_termino: {
                type: Sequelize.DATE,
                defaultValue: ''
            },
            concluida: {
                type: Sequelize.TINYINT,
                defaultValue: 0
            }
        }, {
            sequelize
        });
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    }
}