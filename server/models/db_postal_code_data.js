'use strict';
module.exports = (sequelize, DataTypes) => {
  const db_postal_code_data = sequelize.define('db_postal_code_data', {
    urban: DataTypes.STRING,
    sub_district: DataTypes.STRING,
    city: DataTypes.STRING,
    province_code: DataTypes.INTEGER,
    postal_code: DataTypes.INTEGER
  }, {});
  db_postal_code_data.associate = function(models) {
    // db_postal_code_data.belongsTo(models.db_province_data,{
    //   foreignKey:'province_code',
    //   as: 'province_code'
    // })
  };
  return db_postal_code_data;
};