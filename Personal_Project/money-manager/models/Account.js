module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define('Account', {
    name: {
      type: DataTypes.STRING(255),
      unique: true
    },
    amount: {
      type: DataTypes.FLOAT
    } 
  }, {
    tableName: 'accounts'
  });

  model.associate = models => {
    model.belongsTo(models.User, { foreignKey: 'user_id '});
    model.belongsToMany(models.Category, { through: 'account_category'});
  }

  return model
}