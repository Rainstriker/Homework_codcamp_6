const db = require('../models');

const getAllCategory = async (req, res) => {
  const allCategory = await db.Category.findAll({where: { user_id: req.user.id } });
  res.status(200).send(allCategory);
}

const addCategory = async (req, res) => {
  const { name } = req.body;
  const newCategory = await db.Category.create({
    name: req.body.name,
    user_id: req.user.id
  });
  res.status(201).send(newCategory);
}

const updateCategory = async (req, res) => {
  const targetId =  Number(req.params.id);
  const { name } = req.body;
  const targetCategory = await db.Category.findOne({ where: { id: targetId, user_id: req.user.id }});
  if (targetCategory) {
    await targetCategory.update({
      name: name,
    });
    res.status(200).send({message: 'Updating is success.'});
  } else {
    res.status(404).send({message: 'Category not found.'})
  }
}

const removeCategory = async (req, res) => {
  const targetId =  Number(req.params.id);
  const targetCategory = await db.Category.findOne({ where: { id: targetId, user_id: req.user.id }});
  if (targetCategory) {
    await targetCategory.destroy();
    res.status(204).send({message: 'Category deleted.'});
  } else {
    res.status(404).send({message: 'Category not found.'})
  }
}

module.exports = {
  getAllCategory,
  addCategory,
  updateCategory,
  removeCategory
}