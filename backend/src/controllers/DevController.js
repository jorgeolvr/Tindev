const axios = require('axios');
const Dev = require('../models/Dev');
const mongoose = require('mongoose');

const Users = mongoose.model('Dev');

module.exports = {
  async index(req, res) {
    const { user } = req.headers;
    const loggedUser = await Dev.findById(user);

    const users = await Dev.find({
      $and: [
        { _id: { $ne: user } },
        { _id: { $nin: loggedUser.likes } },
        { _id: { $nin: loggedUser.dislikes } }
      ]
    });

    return res.json(users);
  },

  async allUsers(req, res) {
    const { page = 1 } = req.query;
    const users = await Dev.paginate({}, { page, limit: 10 });

    return res.json(users);
  },

  async show(req, res) {
    const users = await Users.findById(req.params.id);

    return res.json(users);
  },

  async store(req, res) {
    const { username } = req.body;

    const userExists = await Dev.findOne({ user: username });

    if (userExists) {
      return res.json(userExists);
    }

    const response = await axios.get(`https://api.github.com/users/${username}`);

    const { name, bio, avatar_url: avatar } = response.data;

    const dev = await Dev.create({
      name,
      user: username,
      bio,
      avatar
    });

    return res.json(dev);
  },

  async destroy(req, res) {
    await Users.findByIdAndRemove(req.params.id)

    return res.send('Produto deletado com sucesso')
  }
}