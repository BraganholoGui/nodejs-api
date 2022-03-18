const database = require('../db');
 
const Pessoa = database.define('pessoa', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(150),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(150),
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING(11),
        allowNull: false
    }
}, {
    timestamps: false
})
 
module.exports = Pessoa;