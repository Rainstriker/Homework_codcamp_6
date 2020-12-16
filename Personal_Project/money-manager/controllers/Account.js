const db = require('../models');

const getAllAccount = async (req, res) => {
  const allAccount = await db.Account.findAll({where: { user_id: req.user.id } });
  res.status(200).send(allAccount);
}

const addAccount = async (req, res) => {
  const { name, amount } = req.body;
  const newAccount = await db.Account.create({
    name: req.body.name,
    amount: req.body.amount,
    user_id: req.user.id
  });
  res.status(201).send(newAccount);
}

const updateAccount = async (req, res) => {
  const targetId =  Number(req.params.id);
  const { name, amount } = req.body;
  const targetAccount = await db.Account.findOne({ where: { id: targetId, user_id: req.user.id }});
  if (targetAccount) {
    await targetAccount.update({
      name: name,
      amount: amount
    });
    res.status(200).send({message: 'Updating is success.'});
  } else {
    res.status(404).send({message: 'Account not found.'})
  }
}

const removeAccount = async (req, res) => {
  const targetId =  Number(req.params.id);
  const targetAccount = await db.Account.findOne({ where: { id: targetId, user_id: req.user.id }});
  if (targetAccount) {
    await targetAccount.destroy();
    res.status(204).send({message: 'Account deleted.'});
  } else {
    res.status(404).send({message: 'Account not found.'})
  }
}

module.exports = {
  getAllAccount,
  addAccount,
  updateAccount,
  removeAccount
}