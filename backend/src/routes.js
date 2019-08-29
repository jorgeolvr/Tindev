const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

const routes = express.Router();

routes.get('/devs', DevController.index);
routes.get('/devs/all', DevController.allUsers);
routes.get('/devs/:id', DevController.show);
routes.post('/devs', DevController.store);
routes.post('/devs/:id/likes', LikeController.store);
routes.post('/devs/:id/dislikes', DislikeController.store);
routes.delete('/devs/:id', DevController.store);

module.exports = routes;