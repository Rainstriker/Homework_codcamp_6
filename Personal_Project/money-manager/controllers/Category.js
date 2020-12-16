const db = require('../models')

const getAllCategory = async (req, res) => {
  const allUsers = await db.User.findAll();
  res.status(200).send(allUsers);
}

const getUserById = async (req, res) => {
  const targetId = req.params.id;
  const targetUser = await db.User.findOne({ where: { id: targetId} });
  res.status(200).send(targetUser);
}

const createUser = async (req, res) => {
  const { name } = req.body;
  const newUser = await db.User.create({
    name: name
  });
  res.status(201).send(newUser);
}

const updateUser = async (req, res) => {
  const targetId = req.params.id;
  const { name } = req.body;
  await db.User.update({
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
  createUser,
  updateUser,
  deleteUser
}