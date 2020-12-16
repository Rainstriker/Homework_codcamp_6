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
    model.belongsToMany(models.Category, { through: models.Owns, foreignKey: 'transaction_id'});
  }

  return model
}