const router = require('express').Router();

const orm = require('../models');

// Create User
router.post('/users', async (req, res) => {
  try {
    const newUserBody = {
      name: req.body.name,
      age: req.body.age,
      email: req.body.email,
    };
    const User = orm.User;

    try {
      const user = await User.create(newUserBody);
      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json(error);
    }
  } catch (error) {
    return res.status(400).json(error);
  }
});

// Get all users
router.get('/users', async (req, res) => {
  try {
    const User = orm.User;
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (error) { 
    return res.status(400).json(error);
  }
});

// Get a user
router.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const User = orm.User;
    const user = await User.findByPk(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json(error);
  }
});

// Update a user
router.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  try {
    const userBody = {
      name,
      age,
      email,
    };
    const User = orm.User;

    try {
      const user = await User.update(userBody, { where: { id: id } });
      return res.status(200).json(user);
    } catch (error) {}
  } catch (error) {
    return res.status(400).json(error);
  }
});

// Delet a user
router.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const User = orm.User;
    const user = await User.destroy({ where: { id: id } });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;