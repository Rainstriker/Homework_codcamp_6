const db = require('../models');

const getAllTransaction = async (req, res) => {
  const allTransaction = await db.Transaction.findAll({where: { user_id: req.user.id } });
  res.status(200).send(allTransaction);
}

const addTransaction = async (req, res) => {
  const accountId =  Number(req.params.account);
  const categoryId =  Number(req.params.category);
  const targetAccount = await db.Account.findOne({ where: { id: accountId, user_id: req.user.id }});
  const targetcategory = await db.Category.findOne({ where: { id: categoryId, user_id: req.user.id }});
  const { name, cost, date } = req.body;
  if (targetAccount && targetcategory) {
    const newTransaction = await db.Transaction.create({
      name: req.body.name,
      cost: req.body.cost,
      date: req.body.date,
      account_id: accountId,
      category_id: categoryId,
      user_id: req.user.id
    });
    res.status(201).send(newTransaction);
  } else {
    res.status(404).send({message: 'Account or Category invalid.'})
  }
}

const updateTransaction = async (req, res) => {
  const accountId =  Number(req.params.account);
  const categoryId =  Number(req.params.category);
  const targetId =  Number(req.params.id);
  const targetAccount = await db.Account.findOne({ where: { id: accountId, user_id: req.user.id }});
  const targetCategory = await db.Category.findOne({ where: { id: categoryId, user_id: req.user.id }});
  const targetTransaction = await db.Transaction.findOne({ where: { id: targetId, user_id: req.user.id }});
  const { name, cost, date } = req.body;
  if (targetAccount) {
    if (targetCategory) {
      if (targetTransaction) {
        const editTransaction = await targetTransaction.update({
          name: req.body.name,
          cost: req.body.cost,
          date: req.body.date,
          account_id: accountId,
          category_id: categoryId,
          user_id: req.user.id
        });
        res.status(201).send(editTransaction);
      } else {
        res.status(404).send({message: 'Invalid transaction.'});
      }
    } else {
      res.status(404).send({message: 'Invalid category.'});
    }
  } else {
    res.status(404).send({message: 'Invalid account.'});
  }
}



const removeTransaction = async (req, res) => {
  const targetId =  Number(req.params.id);
  const targetTransaction = await db.Transaction.findOne({ where: { id: targetId, user_id: req.user.id }});
  if (targetTransaction) {
    await targetTransaction.destroy();
    res.status(204).send({message: 'Transaction deleted.'});
  } else {
    res.status(404).send({message: 'Transaction not found.'})
  }
}

module.exports = {
  getAllTransaction,
  addTransaction,
  updateTransaction,
  removeTransaction
}