require('dotenv').config();
const { resolve } = require('path');

module.exports = {
  dialect: 'sqlite',
  storage: resolve(__dirname, '..', 'database.sqlite'),
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    'createdAt': 'created_at', // colocamos aqui manualmente para ele alterar a tabela pois o underscored tem um pequeno bug que nao reconhece essa coluna e a de baixo com o underscore
    'updatedAt': 'updated_at'
  }
}