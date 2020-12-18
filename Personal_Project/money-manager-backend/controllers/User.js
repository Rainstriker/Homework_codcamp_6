require('dotenv').config();
const db = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const getAllUsers = async (req, res) => {
  const allUsers = await db.User.findAll();
  res.status(200).send(allUsers);
}

const getUserById = async (req, res) => {
  const targetId = req.params.id;
  const targetUser = await db.User.findOne({ where: { id: targetId} });
  res.status(200).send(targetUser);
}

const registerUser = async (req, res) => {
  const { username, password, name } = req.body;
  const targetUser = await db.User.findOne({ where: { username: username }});
  if (targetUser) {
    res.status(400).send({ message: 'Username already taken.'})
  } else {
    const salt = bcryptjs.genSaltSync(12);
    const hashedPassword = bcryptjs.hashSync(password, salt);
    await db.User.create({
      username: username,
      password: hashedPassword,
      name: name
    });
    res.status(201).send({ message: 'User created' });
  }  
}

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const targetUser = await db.User.findOne({ where: { username: username } })
  if (!targetUser) {
    res.status(400).send({ message: 'Username or password is wrong.'});
  } else {
    const isCorrectPassword = bcryptjs.compareSync(password, targetUser.password);
    if (isCorrectPassword) {
      const payload = {
        name: targetUser.name,
        id: targetUser.id
      }
      const token = jwt.sign(payload, process.env.SECRET_OR_KEY, { expiresIn: 3600});
      res.status(200).send({
        token: token,
        message: 'Login successful.'
      })
    } else {
      res.status(400).send({ message: 'Username or password is wrong.'})
    }
  }
}

const updateUser = async (req, res) => {
  const targetId = req.params.id;
  const { username, password, name } = req.body;
  await db.User.update({
    username: username,
    password: password,
    name: name
  }, {
    where: { id: targetId }
  });
  res.status(200).send({message: `User ID: ${targetId} has been updated.`})
}

const deleteUser = async (req, res) => {
  const targetId = req.params.id;
  await db.User.destroy({
    where: { id: targetId }
  });
  res.status(204).send();
}


module.exports = {
  getAllUsers,
  getUserById,
  registerUser,
  loginUser,
  updateUser,
  deleteUser
}