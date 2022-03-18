
const Sequelize = require('sequelize');
const sequelize = require('../db/db.js');

const schema = 'movie';

class Movie extends Sequelize.Model {}
Movie.init({
    title: Sequelize.STRING,
    poster: Sequelize.STRING,
    overview: Sequelize.STRING
}, {sequelize, modelName: 'movie', schema});

sequelize.sync();
module.exports= Movie;