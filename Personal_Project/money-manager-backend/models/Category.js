module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING(255),
    }
  }, {
    tableName: 'categories',
    timestamps: false
  });

  model.associate = models => {
    model.belongsTo(models.User, { foreignKey: 'user_id'});
    model.hasMany(models.Transaction, { foreignKey: 'category_id'});
  }

  return model
}