import Sequelize, { Model } from "sequelize";
import bcrypt from 'bcryptjs';

export default class User extends Model {
    static init(sequelize) {
        super.init({
            name: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: 'O nome precisa ter entre 3 e 255 caracteres'
                    }
                }
            },
            email: {
                type: Sequelize.STRING,
                defaultValue: '',
                unique: {
                    msg: 'Este email ja esta cadastrado no sistema'
                },
                validate: {
                    isEmail: {
                        msg: 'Email invalido'
                    }
                }
            },
            password_hash: {
                type: Sequelize.STRING,
                defaultValue: ''
            },
            password: {
                type: Sequelize.VIRTUAL,
                defaultValue:'',
                validate: {
                    len: {
                        args: [5, 50],
                        msg: 'A senha precisa ter entre 5 e 50 caracteres'
                    }
                }
            }
        }, {
            sequelize
        });

        this.addHook('beforeSave', async user => {
            if(user.password) {
                user.password_hash = await bcrypt.hash(user.password, 8);
            }
        });

        return this;
    }

    passwordValidate(password) {
        return bcrypt.compare(password, this.password_hash);
    }
}