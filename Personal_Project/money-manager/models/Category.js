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
    tableName: 'categories',
    timestamps: false
  });

  model.associate = models => {
    model.belongsToMany(models.Account, { through: 'account_category', foreignKey: 'category_id'});
    model.belongsToMany(models.Transaction, { through: models.Owns, foreignKey: 'category_id'});
  }

  return model
}