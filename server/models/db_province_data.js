'use strict';
module.exports = (sequelize, DataTypes) => {
  const db_province_data = sequelize.define('db_province_data', {
    province_name: DataTypes.STRING,
    province_name_en: DataTypes.STRING,
    province_code: DataTypes.INTEGER
  }, {});
  db_province_data.associate = function(models) {
    // db_province_data.hasMany(models.db_postal_code_data,{
    //   foreignKey:'province_code',
    //   onDelete:'CASCADE'
    // })
  };
  return db_province_data;
};