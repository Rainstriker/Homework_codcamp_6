module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define('Owns', {
    date: {
      type: DataTypes.DATE
    }
  })
  return model
}