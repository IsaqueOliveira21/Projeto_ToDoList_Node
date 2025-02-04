import { Sequelize } from "sequelize";
import databaseConfig from "../../config/database";
import User from "../models/User";
import Tarefa from "../models/Tarefa";

const models = [User, Tarefa];

const connection = new Sequelize(databaseConfig);

models.forEach(model => model.init(connection));
models.forEach(model => model.associate && model.associate(connection.models));

export { connection as sequelize };
export default connection;