"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SOH_Store extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SOH_Store.init(
    {
      sohIsActive: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "SOH_Store",
    }
  );
  return SOH_Store;
};
