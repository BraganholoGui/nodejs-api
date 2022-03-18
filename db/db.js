const Sequelize = require('sequelize');
const sequelize = new Sequelize('gbservice', 'root', 'Guilherme13!#', {
    host: "localhost",
    dialect: "mysql"
})

module.exports = sequelize;