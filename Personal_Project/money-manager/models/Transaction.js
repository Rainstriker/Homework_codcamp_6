module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define('Transaction', {
    name: {
      type: DataTypes.STRING(255),
      unique: true
    },
    amount: {
      type: DataTypes.FLOAT
    } 
  }, {
    tableName: 'transactions'
  });

  model.associate = models => {
    model.belongsToMany(models.Category, { through: models.Owns});
  }

  return model
}