const db = require('../models')
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const getAllTransaction = async (req, res) => {
  const allTransactions = await db.Transaction.findAll();
  res.status(200).send(allTransactions);
}

const getTransactionById = async (req, res) => {
  const targetId = req.params.id;
  const targetTransaction = await db.Transaction.findOne({ where: { id: targetId} });
  res.status(200).send(targetTransaction);
}

const addTransaction = async (req, res) => {
  const { name, amount, date } = req.body;
  const targetUser = await db.User.findOne({ where: { username: username }});
  if (targetUser) {
    res.status(400).send({ message: 'Username already taken.'})
  } else {
    const salt = bcryptjs.genSaltSync(12);
    const hashedPassword = bcryptjs.hashSync(password, salt);
    await db.User.create({
      username: username,
      password: hashedPassword,
      firstName: firstName,
      lastName: lastName
    });
    res.status(201).send({ message: 'User created' });
  }  
}

const updateUser = async (req, res) => {
  const targetId = req.params.id;
  const { username, password, firstName, lastName } = req.body;
  await db.User.update({
    username: username,
    password: password,
    firstName: firstName,
    lastName: lastName
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
  
}