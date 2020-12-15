module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING(255),
      unique: true
    },
    amount: {
      type: DataTypes.FLOAT
    } 
  }, {
    tableName: 'categories'
  });

  model.associate = models => {
    model.belongsToMany(models.Account, { through: 'account_category'});
    model.belongsToMany(models.Transaction, { through: models.Owns});
  }

  return model
}