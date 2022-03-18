const express = require('express');

const MovieController = require('./controller/Movie');

const routes = express.Router();

routes.get('/movies', MovieController.index);
routes.get('/movies/:id', MovieController.getById);
routes.post('/movies', MovieController.store);
routes.put('/movies/:id', MovieController.update);
routes.delete('/movies/:id', MovieController.delete);

module.exports = routes;