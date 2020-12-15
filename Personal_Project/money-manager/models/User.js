module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define('User', {
    name: {
      type: DataTypes.STRING(255),
      unique: true
    } 
  }, {
    tableName: 'users'
  });

  model.associate = models => {
    model.hasMany(model.Account, { foreignKey: 'user_id '})
  }

  return model
}