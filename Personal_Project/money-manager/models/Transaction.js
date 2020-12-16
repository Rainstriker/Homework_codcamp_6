module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define('Transaction', {
    name: {
      type: DataTypes.STRING(255),
      unique: true
    },
    amount: {
      type: DataTypes.FLOAT
    },
    date: {
      type: DataTypes.DATE
    } 
  }, {
    tableName: 'transactions',
    timestamps: false
  });

  model.associate = models => {
    model.belongsTo(models.Account,  { foreignKey: 'account_id'});
    model.belongsTo(models.Category, { foreignKey: 'category_id'});
  }

  return model
}