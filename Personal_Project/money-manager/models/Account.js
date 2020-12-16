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
    tableName: 'accounts',
    timestamps: false
  });

  model.associate = models => {
    model.belongsTo(models.User, { foreignKey: 'user_id'});
    model.hasMany(models.Transaction, { foreignKey: 'account_id'});
  }

  return model
}